import React, {useState, useEffect } from "react";
import axios from 'axios'

import BigTable from "./BigTable";
import ExtraTable from "./ExtraTable";

import './Tables.scss'

const Tables = () => {

    const [firstAnswer, setFirstAnswer] = useState(null)
    const [secondAnswer, setSecondAnswer] = useState(null)
    const [thirdAnswer, setThirdAnswer] = useState(null)
    const [questions, setQuestions] = useState(null)
    const [groups, setGroups] = useState(null)
    const [numberOfQuestion, setNumberOfQuestion] = useState(0)
    const [stage, setStage] = useState({
        id: 1,
        group: "",
        count: 1
    });


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

    const nextQuestion = (numberOfQuestion) => {
        if (numberOfQuestion + 1 === stage.count) {
            nextStage()
            setNumberOfQuestion(0)
        } else {
            setNumberOfQuestion(numberOfQuestion+1)
        }
    }

    const prevQuestion = () => {
        if (numberOfQuestion === 0) {
            prevStage()
            setNumberOfQuestion(groups[stage.id-2].count-1)
        } else {
            setNumberOfQuestion(numberOfQuestion-1)
        }
    }

    const nextStage = () => {
        if (stage.id + 1 < 5) {
            setStage({
                id: stage.id + 1,
                group: groups[stage.id].group,
                count: groups[stage.id].count
            });
        } else {
            setStage({ id: 5, group: "Тестирование окончено", count: 0 });
        }
    };

    const prevStage = () => {
        console.log("prev")
        console.log("stage id:", stage.id)
        // console.log("group ins: ", groups[stage.id].group)
        // console.log("count ins: ", groups[stage.id].count)
        console.log("number of Q ins", numberOfQuestion)
        setStage({
            id: stage.id - 1,
            group: groups[stage.id - 2].group,
            count: groups[stage.id - 2].count
        })
    }

    console.log("---------")
    console.log("stage:", stage)
    console.log("stage.group:", stage.group)
    console.log("number of Q:", numberOfQuestion)
    console.log("---------")
    


    return (
        <div className="mockup">
            <div className="mockup__wrapper">
                <p className="theme">{stage.group}</p>
                <div className="theme__bar">
                    <div className="theme__bar-progress"></div>
                </div>
                <h2 className="theme__question">
                    {/*{questions && questions.filter((el) => el.group_id === stage.id)[numberOfQuestion].question}*/}
                </h2>
                <p className="theme__hint">Выберите значение по шкале от 1 до 5 для каждого утверждения</p>
                    <div className="table-wrapper">
                        {/*<div className="question question--text">*/}
                        {/*    {questions && questions.filter((el) => el.group_id === stage.id)[numberOfQuestion].x}*/}
                        {/*</div>*/}
                        <div className="table">
                            <BigTable
                                state={firstAnswer}
                                setState={setFirstAnswer}
                            />
                        </div>
                    </div>
                    <div className="question2 question--text">
                        {/*{questions && questions.filter((el) => el.group_id === stage.id)[numberOfQuestion].y}*/}
                    </div>

                    <p>{stage.id}</p>
                    <p>{stage.group}</p>
                    <p>{stage.count}</p>
                <p>{numberOfQuestion}</p>
                <hr/>
                {/* {groups && <p>{groups[stage.id - 1].group}</p>}
                {groups && <p>{groups[stage.id - 1].count}</p>} */}


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
                    <button className="button button-prev" onClick={ prevQuestion }>Назад</button>
                    <button className="button button-next" onClick={ () =>  nextQuestion(numberOfQuestion) }>Далее</button>
                </div>
            </div>
        </div>
    )
}

export default Tables