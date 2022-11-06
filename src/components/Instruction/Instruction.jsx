import React, { useState } from "react";
import { Link} from "react-router-dom"

import Tooltip from "./Tooltip"

import instruction from "../../assets/instruction-1.png"
import tooltip1 from "../../assets/tooltip-1.svg"
import tooltip2 from "../../assets/tooltip-2.svg"
import pointer from "../../assets/pointer-1.svg"

import "./Instruction.scss"

const Instruction = () => {

    const [visible1, setVisible1] = useState(true)
    const [visible2, setVisible2] = useState(false)
    const [flag, setFlag] = useState(false)

    const clickFirst = () => {
        if (flag) { visible2 ? setVisible2(false) : setVisible1(true) }
    }

    const clickSecond = () => {
        if (flag) { visible1 ? setVisible1(false) : setVisible2(true) }
    }

    const clickSomewhere = () => {
        if (!flag) {
            if (!visible2) {
                setVisible1(false)
                setVisible2(true)
            } else {
                setVisible2(false)
                setFlag(true)
            }
        } else {
            if (visible1) { setVisible1(false) }
            if (visible2) { setVisible2(false) }
        }
    }

    return (
        <div className=" instruction mockup__wrapper" onClick={clickSomewhere}>
            <h1 className="instruction__title">Пример заполнения анкеты</h1>
            <p className="instruction__text">Разберём как заполнять анкету на примере одного из вопросов</p>

            <div className="images">

                {visible1 &&
                    <Tooltip
                        subclass = {"tooltip-1"}
                        src = {tooltip1}
                        alt = {"подсказка 1}"}
                    >
                            Сформулируйте ваше мнение, на сколько хорошие отношения являются результатом совместной работы или это больше везение найти подходящего человека?
                    </Tooltip>
                }

                {visible2 &&
                    <Tooltip
                        subclass={"tooltip-2"}
                        src = {tooltip2}
                        alt = {"подсказка 2"}
                    >
                        Например, если вы считаете, что вклад совместной работы в хорошие отношения на 4 из 5, и одновременно везения найти подходящего партнера на 3 из 5, то поставьте отметку на пересечении 4 по «результат совместной работы» и 3 по «везение найти подходящего человека».
                    </Tooltip>
                }

                <img className="pointer" src={pointer} alt="клик сюда"/>



                <img src={instruction} alt="" onClick={clickFirst}/>
                <img src={instruction} alt="" onClick={clickSecond}/>
            </div>

            <Link to="/tables" className="btn btn-white-black" >Понятно</Link>
        </div>
    )
}

export default Instruction