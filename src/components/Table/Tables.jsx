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
        id: 0,
        name: "default",
        count: 1
    });


    useEffect(() => {
        axios.get('https://alexb.host/questions')
            .then(({ data }) => {
                setQuestions(data);
            });
        axios.get('https://alexb.host/groups')
            .then(({ data }) => {
                setGroups(data);
            });
    }, []);

    const nextQuestion = () => {
        if (numberOfQuestion < 97) {
            setNumberOfQuestion(numberOfQuestion+1)
            nextStage()
        }
    }

    const prevQuestion = () => {
        if (numberOfQuestion > 0) {
            setNumberOfQuestion(numberOfQuestion-1)
        }
    }

    const nextStage = () => {
        if (stage.id + 1 < 5) {
            setStage({
                id: stage.id + 1,
                name: groups[stage.id].group,
                count: groups[stage.id].count
            });
        } else {
            setStage({ id: 5, name: "Тестирование окончено", count: 0 });
        }
    };

    const currentStage = () => {

    }

    return (
        <div className="mockup">
            <div className="mockup__wrapper">
                <p className="theme">личность</p>
                <div className="theme__bar">
                    <div className="theme__bar-progress"></div>
                </div>
                {<h2 className="theme__question">{questions && questions[`${numberOfQuestion}`].question}</h2>}
                <p className="theme__hint">Выберите значение по шкале от 1 до 5 для каждого утверждения</p>
                {/*<div className="area">*/}
                    <div className="table-wrapper">
                        <div className="question question--text">{questions && questions[`${numberOfQuestion}`].x}</div>
                        <div className="table">
                            <BigTable
                                state={firstAnswer}
                                setState={setFirstAnswer}
                            />
                        </div>
                    </div>
                    <div className="question2 question--text">{questions && questions[`${numberOfQuestion}`].y}</div>

                    <p>{stage.id}</p>
                    <p>{stage.name}</p>
                    <p>{stage.count}</p>
                {questions && questions[`${numberOfQuestion}`].x}

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
                {/*</div>*/}
                <div className="buttons">
                    <button className="button button-prev" onClick={ prevQuestion }>Назад</button>
                    <button className="button button-next" onClick={ nextQuestion }>Далее</button>
                </div>
            </div>
        </div>
    )
}

export default Tables