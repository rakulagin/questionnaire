import React, {useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import BigTable from "./BigTable";
import ExtraTable from "./ExtraTable";
import ProgressBar from "../ProgressBar/ProgressBar";

import DataContext from "../../context";

import './Tables.scss'


const Tables = () => {

    const {userInfo, setUserInfo} = useContext(DataContext)

    const navigate = useNavigate()

    const [firstAnswer, setFirstAnswer] = useState(null)
    const [secondAnswer, setSecondAnswer] = useState(null)
    const [thirdAnswer, setThirdAnswer] = useState(null)
    const [questions, setQuestions] = useState(null)
    const [groups, setGroups] = useState(null)
    const [numberOfQuestion, setNumberOfQuestion] = useState(0)
    const [questionId, setQuestionId] = useState(0)
    const [stage, setStage] = useState({
        id: 1,
        group: "",
        count: 1
    });

    //рабочий сервер
    // useEffect(() => {
    //     axios.get('https://alexb.host/questions')
    //         .then(({ data }) => {
    //             setQuestions(data);
    //         });
    //     axios.get('https://alexb.host/groups')
    //         .then(({ data }) => {
    //             setGroups(data);
    //         });
    //     axios.get('https://alexb.host/groups')
    //         .then(({ data }) => {
    //             setStage(data[0]);
    //         })
    // }, []);

    //тестовый сервер
    useEffect(() => {
        axios.get('https://alexb.host/testquestions')
            .then(({ data }) => {
                setQuestions(data);
            });
        axios.get('https://alexb.host/testgroups')
            .then(({ data }) => {
                setGroups(data);
            });
        axios.get('https://alexb.host/testgroups')
            .then(({ data }) => {
                setStage(data[0]);
            })
    }, []);






    const nextQuestion = () => {
        saveAnswer(firstAnswer, secondAnswer, thirdAnswer)
        setQuestionId(questionId+1)
        setFirstAnswer(null)
        setSecondAnswer(null)
        setThirdAnswer(null)
        if (numberOfQuestion + 1 === stage.count) {
            nextStage()
        } else {
            setNumberOfQuestion(numberOfQuestion+1)
        }
    }

    const prevQuestion = () => {

        if (numberOfQuestion === 0) {
            prevStage()
        } else {
            setNumberOfQuestion(numberOfQuestion-1)
        }
    }

    const nextStage = () => {
        if (stage.id + 1 < 5) {
            setNumberOfQuestion(0)
            setStage({
                id: stage.id + 1,
                group: groups[stage.id].group,
                count: groups[stage.id].count
            });
        } else {
            nextPage()
            console.log(userInfo)
        }
    };

    const prevStage = () => {
        if (stage.id == 1) {
            prevPage()
        } else {
            setNumberOfQuestion(groups[stage.id-2].count-1)
            setStage({
                id: stage.id - 1,
                group: groups[stage.id - 2].group,
                count: groups[stage.id - 2].count
            })
        }
    }

    const nextPage = () => {
        navigate("/final")
    }

    const prevPage = () => {
        navigate("/instruction")
    }




    

    const btnEnabled = (firstAnswer && secondAnswer && thirdAnswer) ? true : false

    const saveAnswer = (firstAnswer, secondAnswer, thirdAnswer) => {
        const newObj = {
            index: questionId,
            question: questions.filter((el) => el.group_id === stage.id)[numberOfQuestion].question,
            firstAnswer: firstAnswer,
            secondAnswer: secondAnswer,
            thirdAnswer: thirdAnswer
        }
        const tempObj = {
            user: userInfo.user,
            answers: [...userInfo.answers, newObj]
        }
        setUserInfo(tempObj)
    }

    console.log("outside", userInfo)
    console.log("outside id: ", questionId)
    console.log("----------")


    return (
        <div className="mockup">
            <div className="mockup__wrapper">

                {/*<p className="theme">{stage.group}</p>*/}
                {/*<div className="theme__bar">*/}
                {/*    <div className={`theme__bar-progress theme__bar-progress-${colors[stage.id-1]}`}*/}
                {/*         style={{width: barWidth}}></div>*/}
                {/*</div>*/}

                <ProgressBar
                    stage={stage}
                    numberOfQuestion={numberOfQuestion}
                />

                <h2 className="theme__question">
                    {questions && questions.filter((el) => el.group_id === stage.id)[numberOfQuestion].question}
                </h2>
                <p className="theme__hint">Выберите значение по шкале от 1 до 5 для каждого утверждения</p>
                    <div className="table-wrapper">
                        <div className="question question--text">
                           {questions && questions.filter((el) => el.group_id === stage.id)[numberOfQuestion].x}
                        </div>
                        <div className="table">
                            <BigTable
                                state={firstAnswer}
                                setState={setFirstAnswer}
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
                            />
                        </div>
                    </div>

                    <div className="extra-table-wrapper">
                        <div className="extra-question">Важность этого вопроса для отношений</div>
                        <div className="table">
                            <ExtraTable
                                state={thirdAnswer}
                                setState={setThirdAnswer}
                            />
                        </div>
                    </div>
                <div className="buttons">
                    <button className="btn btn-table btn-white-blue" onClick={ prevQuestion }>Назад</button>
                    <button
                        // className="btn btn-table btn-blue"
                        disabled={!btnEnabled}
                        className={
                            (btnEnabled) ?
                                (
                                    "btn btn-table btn-blue"
                                ) : (
                                    "btn btn-table btn-disabled"
                                )
                        }
                        onClick={ nextQuestion }
                    >
                        Далее
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Tables