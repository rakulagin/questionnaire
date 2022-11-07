import React, {useState, useEffect, useContext} from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios'

import BigTable from "./BigTable";
import ExtraTable from "./ExtraTable";
import ProgressBar from "../ProgressBar/ProgressBar";

import DataContext from "../../userInfoContext";

import './Tables.scss'
import Badges from "../Badge/Bages";


const Tables = () => {

    const {userInfo, setUserInfo} = useContext(DataContext)

    const navigate = useNavigate()

    const [firstAnswer, setFirstAnswer] = useState(null)
    const [secondAnswer, setSecondAnswer] = useState(null)
    const [thirdAnswer, setThirdAnswer] = useState(null)

    // const [tempAnswer, setTempAnswer] = useState(["", "", ""])

    const [questions, setQuestions] = useState(null)
    const [groups, setGroups] = useState(null)
    const [numberOfQuestion, setNumberOfQuestion] = useState(0)
    const [questionId, setQuestionId] = useState(0)
    const [stage, setStage] = useState({
        id: 1,
        group: "",
        count: 1
    });

    // экспериментальный стейт
    const [pastStages, addPastStages] = useState(0)
    const [previousStage, setPreviousStage] = useState(null)

    const colors = ["green", "red", "blue", "purple"]
    const actualColor = colors[stage.id - 1]


    // ВОПРОСЫ
    const nextQuestion = () => {
        saveAnswer(firstAnswer, secondAnswer, thirdAnswer)
        setQuestionId(questionId + 1)
        if (numberOfQuestion + 1 === stage.count) {
            nextStage()
        } else {
            setNumberOfQuestion(numberOfQuestion + 1)
        }
    }

    const prevQuestion = () => {
        setQuestionId(questionId - 1)

        // переворачиваем стадию назад или понижаем номер вопроса
        if (numberOfQuestion === 0) {
            prevStage()
        } else {
            setNumberOfQuestion(numberOfQuestion - 1)
        }
    }

    // СТАДИИ
    const nextStage = () => {
        if (stage.id + 1 < 5) {
            setPreviousStage(stage)
            sumBadges()
            setNumberOfQuestion(0)
            setStage({
                id: stage.id + 1,
                group: groups[stage.id].group,
                count: groups[stage.id].count
            });
        } else {
            nextPage()
        }
    };

    const prevStage = () => {
        if (parseInt(stage.id) === 1) {
            prevPage()
        } else {
            setNumberOfQuestion(groups[stage.id - 2].count - 1)
            setStage({
                id: stage.id - 1,
                group: groups[stage.id - 2].group,
                count: groups[stage.id - 2].count
            })
            console.log("stage inside", stage)
            subBadges()
        }
    }

    // СТРАНИЦЫ
    const nextPage = () => {
        navigate("/final")
        console.log(userInfo)
    }

    const prevPage = () => {
        navigate("/introduction")
    }

    // ОСТАЛЬНЫЕ МЕТОДЫ

    const btnEnabled = (firstAnswer && secondAnswer && thirdAnswer) ? true : false

    const saveAnswer = (firstAnswer, secondAnswer, thirdAnswer) => {
        // пакуем ответы во временный объект и либо добавляем в конец массива либо заменяем текущий элемент
        const newObj = {
            index: questionId,
            question: questions.filter((el) => el.group_id === stage.id)[numberOfQuestion].question,
            firstAnswer: firstAnswer,
            secondAnswer: secondAnswer,
            thirdAnswer: thirdAnswer
        }
        if (userInfo.answers.length > questionId) {
            // заменяем текущий
            const tempArr = userInfo.answers
            tempArr[questionId] = newObj

            const tempObj = {
                user: userInfo.user,
                answers: tempArr
            }
            setUserInfo(tempObj)
        } else {
            // делаем новый
            const tempObj = {
                user: userInfo.user,
                answers: [...userInfo.answers, newObj]
            }
            setUserInfo(tempObj)
        }
    }

    // это нужно для высчитывания длины вопроса по вертикали, чтобы изменять размер шрифта
    const lengthQuestion = questions && questions.filter((el) => el.group_id === stage.id)[numberOfQuestion].x.split("")

    const badgeClick = (e) => {
        console.log("index inside", e)
        setNumberOfQuestion(e)
        setQuestionId(e + pastStages)
    }

    const sumBadges = () => {
        const tempObj = stage.count + pastStages
        addPastStages(tempObj)
    }

    const subBadges = () => {
        console.log("inside stage", stage)
        const tempObj = pastStages - previousStage.count
        addPastStages(tempObj)

    }

    //рабочий сервер
    // useEffect(() => {
    //     axios.get('https://alexb.host/questions')
    //         .then(({ data }) => {
    //             setQuestions(data);
    //         });
    //     axios.get('https://alexb.host/groups')
    //         .then(({ data }) => {
    //             setGroups(data);
    //             setStage(data[0]);
    //         });
    // }, []);

    //тестовый сервер
    useEffect(() => {
        axios.get('https://alexb.host/testquestions')
            .then(({data}) => {
                setQuestions(data);
            });
        axios.get('https://alexb.host/testgroups')
            .then(({data}) => {
                setGroups(data);
                setStage(data[0])
            });
    }, []);

    // обращаемся к глобальному Cтейту, подтягиваем из него ответы и заполняем если они были
    useEffect(() => {
            setFirstAnswer(userInfo.answers[questionId]?.firstAnswer)
            setSecondAnswer(userInfo.answers[questionId]?.secondAnswer)
            setThirdAnswer(userInfo.answers[questionId]?.thirdAnswer)
        }, [questionId]
    )

    // useEffect(() => {
    //     subBadges()
    //         console.log("stage useEffect", stage)
    //     }, [stage]
    // )

    // console.log("answers", userInfo.answers.length)
    // console.log("number of question", numberOfQuestion)
    // console.log("questionID now", questionId)
    // console.log("outside stage count1", stage)
    console.log("paststages", pastStages)
    console.log("previousStage:", previousStage)
    console.log("---")


    return (
        <div className="mockup">
            <div className="mockup__wrapper">

                <ProgressBar
                    stage={stage}
                    colors={colors}
                    numberOfQuestion={numberOfQuestion}
                    actualColor={actualColor}
                />

                <Badges
                    stage={stage}
                    click={badgeClick}
                />

                <h2 className="theme__question">
                    {questions && questions.filter((el) => el.group_id === stage.id)[numberOfQuestion].question}
                </h2>
                <p className="theme__hint">Выберите значение по шкале от 1 до 5 для каждого утверждения</p>
                <div className="table-wrapper">
                    {/*<div className="question question--text">*/}
                    <div
                        className={lengthQuestion?.length < 25 ? "question question--text" : "question question--text question--text-mini"}>
                        {questions && questions.filter((el) => el.group_id === stage.id)[numberOfQuestion].x}
                    </div>
                    <div className="table">
                        <BigTable
                            state={firstAnswer}
                            setState={setFirstAnswer}
                            actualColor={actualColor}
                        />
                    </div>
                </div>
                <div className="question2 question--text">
                    {questions && questions.filter((el) => el.group_id === stage.id)[numberOfQuestion].y}
                </div>

                <div className="extra-table-wrapper">
                    <div className="extra-question">На сколько эта ценность и вопрос понятны для вас?</div>
                    <div className="table">
                        <ExtraTable
                            state={secondAnswer}
                            setState={setSecondAnswer}
                            stage={stage}
                            actualColor={actualColor}
                        />
                    </div>
                </div>

                <div className="extra-table-wrapper">
                    <div className="extra-question">Важность этого вопроса для отношений</div>
                    <div className="table">
                        <ExtraTable
                            state={thirdAnswer}
                            setState={setThirdAnswer}
                            stage={stage}
                            actualColor={actualColor}
                        />
                    </div>
                </div>
                <div className="buttons">
                    <button className="btn btn-table btn-white-blue" onClick={prevQuestion}>Назад</button>
                    <button
                        disabled={!btnEnabled}
                        className={btnEnabled ? "btn btn-table btn-blue" : "btn btn-table btn-disabled"}
                        onClick={nextQuestion}
                    >
                        Далее
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Tables