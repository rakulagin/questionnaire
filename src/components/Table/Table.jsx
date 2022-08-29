import React, {useState} from "react";

import MainTable from "./MainTable";
import ExtraTable from "./ExtraTable";
import LastRow from "./LastRow";

import './Table.scss'

const Table = () => {

    const [firstAnswer, setFirstAnswer] = useState(null)
    const [secondAnswer, setSecondAnswer] = useState(null)
    const [thirdAnswer, setThirdAnswer] = useState(null)

    // const onClickFirst = (e) => {
    //     // const actives = document.querySelectorAll('div')
    //     // actives.forEach(el => el.classList.remove('active'))
    //     // e.target.classList.add('active')
    //     setFirstAnswer(e.target.getAttribute("data-cords"));
    // };

    // const onClickSecond = (e) => {
    //     setSecondAnswer(e.target.getAttribute("data-cords"))
    // }
    //
    // const onClickThird = (e) => {
    //     setThirdAnswer(e.target.getAttribute("data-cords"))
    // }

    return (
        <div className="area">
            <div className="table-wrapper">
                <div className="question">Вопрос по вертикали</div>
                <div className="table first"
                     // onClick = {onClickFirst}
                >
                    <MainTable
                        state={firstAnswer}
                        setState={setFirstAnswer}/>

                    {/*<div className="row">*/}
                    {/*    <div className="col">5</div>*/}
                    {/*    <div className="col col-choice" data-cords="1:5">&nbsp;</div>*/}
                    {/*    <div className="col col-choice" data-cords="2:5">&nbsp;</div>*/}
                    {/*    <div className="col col-choice" data-cords="3:5">&nbsp;</div>*/}
                    {/*    <div className="col col-choice" data-cords="4:5">&nbsp;</div>*/}
                    {/*    <div className="col col-choice" data-cords="5:5">&nbsp;</div>*/}
                    {/*</div>*/}
                    {/*<div className="row">*/}
                    {/*    <div className="col">4</div>*/}
                    {/*    <div className="col col-choice" data-cords="1:4">&nbsp;</div>*/}
                    {/*    <div className="col col-choice" data-cords="2:4">&nbsp;</div>*/}
                    {/*    <div className="col col-choice" data-cords="3:4">&nbsp;</div>*/}
                    {/*    <div className="col col-choice" data-cords="4:4">&nbsp;</div>*/}
                    {/*    <div className="col col-choice" data-cords="5:4">&nbsp;</div>*/}
                    {/*</div>*/}
                    {/*<div className="row">*/}
                    {/*    <div className="col">3</div>*/}
                    {/*    <div className="col col-choice" data-cords="1:3">&nbsp;</div>*/}
                    {/*    <div className="col col-choice" data-cords="2:3">&nbsp;</div>*/}
                    {/*    <div className="col col-choice" data-cords="3:3">&nbsp;</div>*/}
                    {/*    <div className="col col-choice" data-cords="4:3">&nbsp;</div>*/}
                    {/*    <div className="col col-choice" data-cords="5:3">&nbsp;</div>*/}
                    {/*</div>*/}
                    {/*<div className="row">*/}
                    {/*    <div className="col">2</div>*/}
                    {/*    <div className="col col-choice" data-cords="1:2">&nbsp;</div>*/}
                    {/*    <div className="col col-choice" data-cords="2:2">&nbsp;</div>*/}
                    {/*    <div className="col col-choice" data-cords="3:2">&nbsp;</div>*/}
                    {/*    <div className="col col-choice" data-cords="4:2">&nbsp;</div>*/}
                    {/*    <div className="col col-choice" data-cords="5:2">&nbsp;</div>*/}
                    {/*</div>*/}
                    {/*<div className="row">*/}
                    {/*    <div className="col">1</div>*/}
                    {/*    <div className="col col-choice" data-cords="1:1">&nbsp;</div>*/}
                    {/*    <div className="col col-choice" data-cords="2:1">&nbsp;</div>*/}
                    {/*    <div className="col col-choice" data-cords="3:1">&nbsp;</div>*/}
                    {/*    <div className="col col-choice" data-cords="4:1">&nbsp;</div>*/}
                    {/*    <div className="col col-choice" data-cords="5:1">&nbsp;</div>*/}
                    {/*</div>*/}
                    {/*<LastRow />*/}
                </div>
            </div>
            <div className="question2">Вопрос по горизонтали</div>



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

        </div>
    )
}

export default Table