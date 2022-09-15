import React, { useState } from "react";
import { Link} from "react-router-dom"

import instruction from "../../assets/instruction-1.png"
import tooltip1 from "../../assets/tooltip-1.svg"
import tooltip2 from "../../assets/tooltip-2.svg"
import pointer from "../../assets/pointer-1.svg"

import "./Instruction.scss"

const Instruction = () => {

    const [visible1, setVisible1] = useState(true)
    const [visible2, setVisible2] = useState(false)

    const showFirst = () => {
        if(visible1 && !visible2) {
            setVisible2(true)
        } else {
            setVisible1(false)
            setVisible2(false)
        }
    }

    return (
        <div className=" instruction mockup__wrapper" onClick={showFirst}>
            <h1 className="instruction__title">Пример заполнения анкеты</h1>
            <p className="instruction__text">Разберём как заполнять анкету на примере одного из вопросов</p>

            <div className="images">

                {visible1 && (
                    <div className="tooltip tooltip-1">
                        <img className="tooltip__img" src={tooltip1} alt=""/>
                        <p>Сформулируйте ваше мнение, на сколько хорошие отношения являются результатом совместной работы или это больше везение найти подходящего человека?</p>
                    </div>
                )}

                {visible2 && (
                    <div className="tooltip tooltip-2">
                        <img className="tooltip__img" src={tooltip2} alt=""/>
                        <p>Например, если вы считаете, что вклад совместной работы в хорошие отношения на 4 из 5, и одновременно везения найти подходящего партнера на 3 из 5, то поставьте отметку на пересечении 4 по «результат совместной работы» и 3 по «везение найти подходящего человека».</p>
                    </div>
                )}

                <img className="pointer" src={pointer} alt=""/>



                <img src={instruction} alt=""/>
                <img src={instruction} alt=""/>
            </div>

            <Link to="/tables" className="btn btn-white-black" >Понятно</Link>
        </div>
    )
}

export default Instruction