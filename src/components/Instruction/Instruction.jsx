import React from "react";
import { Link} from "react-router-dom"

import instruction from "../../assets/instruction-1.png"

import "./Instruction.scss"

const Instruction = () => {

    return (
        <div className=" instruction mockup__wrapper">
            <h1 className="instruction__title">Пример заполнения анкеты</h1>
            <p className="instruction__text">Разберём как заполнять анкету на примере одного из вопросов</p>

            <div className="images">
                <img src={instruction} alt=""/>

                <img src={instruction} alt=""/>
            </div>


            <Link to="/tables">next</Link>
        </div>
    )
}

export default Instruction