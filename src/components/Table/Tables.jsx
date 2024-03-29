import React, {useState, useEffect, useContext} from "react";
import {useNavigate} from "react-router-dom";

import jsonQuestions from '../../assets/DB/questions.json'
import jsonQuestionGroups from '../../assets/DB/question_groups.json'

import BigTable from "./BigTable";
import ExtraTable from "./ExtraTable";
import ProgressBar from "../ProgressBar/ProgressBar";

import DataContext from "../../userInfoContext";

import './Tables.scss'


const Tables = () => {

  const {userInfo, setUserInfo} = useContext(DataContext)

  const navigate = useNavigate()

  // ответы на первый, второй, третий вопрос
  const [firstAnswer, setFirstAnswer] = useState(null)
  const [secondAnswer, setSecondAnswer] = useState(null)
  const [thirdAnswer, setThirdAnswer] = useState(null)

  // весь список вопросов, массив объектов
  const [questions, setQuestions] = useState(null)
  // список групп вопросов, массив объектов
  const [groups, setGroups] = useState(null)
  //номер вопроса в текущей группе
  const [numberOfQuestion, setNumberOfQuestion] = useState(0)
  // ID вопроса
  const [questionId, setQuestionId] = useState(0)
  // текущая стадия
  const [stage, setStage] = useState({
    id: 1,
    group: "",
    count: 1
  });

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

  const total = () => {
    let temp = 0
    for (let i = 1; i < stage.id; i++) {
      console.log("stage id", stage.id)
      console.log("stage count:", stage.count)
      console.log("---")
      temp = temp + groups[i].count

    }
    return temp
  }

  useEffect(() => {
    setQuestions(jsonQuestions);
    setGroups(jsonQuestionGroups);
    setStage(jsonQuestionGroups[0])
  }, []);

  useEffect(() => {
          setFirstAnswer(userInfo.answers[questionId]?.firstAnswer)
          setSecondAnswer(userInfo.answers[questionId]?.secondAnswer)
          setThirdAnswer(userInfo.answers[questionId]?.thirdAnswer)
      }, [questionId]
  )

  console.log(questions)

  return (
    <div className="mockup">
      <div className="mockup__wrapper">

        <ProgressBar
          stage={stage}
          colors={colors}
          numberOfQuestion={numberOfQuestion}
          actualColor={actualColor}
        />

        <h2 className="theme__question">
          {questions && questions.filter((el) => el.group_id === stage.id)[numberOfQuestion].question}
        </h2>
        <p className="theme__hint">Выберите значение по шкале от 1 до 5 для каждого утверждения</p>
        <div className="table-wrapper">
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