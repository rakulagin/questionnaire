import React from "react";
import {Link} from 'react-router-dom'

const Registrarion = () => {
    return (
        <div className="mockup">
            <div className="mockup__wrapper">322</div>
            <h2>как вас зовут</h2>
            <p>input</p>
            <h2>Ваш пол</h2>
            <p>input</p>
            <h2>В каком году вы родились</h2>
            <p>input</p>
            <h2>Находитесь ли вы в отношениях</h2>
            <p>input</p>
            <h2>В каком городе вы живете?</h2>
            <p>input</p>
            <h2>Ваш рост</h2>
            <p>input</p>
            <h2>Ваш вес</h2>
            <p>input</p>
            <h2>Какое у вас образование</h2>
            <p>input</p>

            
            <Link to="/tables"><button>Продолжить</button></Link>
        </div>
    )
}

export default Registrarion