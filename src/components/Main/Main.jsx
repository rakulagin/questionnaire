import React from "react";
import { Link} from "react-router-dom"

import './Main.scss'

import Logo from '../../assets/TG-Logo.svg'

const Main = () => {
    return (
        <div className="main">
            <p className="main__theme">Психологическое исследование</p>
            <h1 className="main__header">Совместимость жизненных ценностей</h1>
            <div className="main__buttons">
                <button className="main__button">
                    Войти через Telegram
                    <img className="main__button-tgLogo" src={Logo} alt="tg logo"/>
                </button>
                {/* <button className="main__button">
                <Link to="/register">Продолжить тестирование</Link>
                </button> */}

                <Link to="/register" className="main__button" >
                    <button  className="main__button">Продолжить тестирование</button>
                </Link>

            </div>
            <p className="main__license">Продолжая, вы соглашаетесь с
                <a href="#"> условиями участия в психологическом исследовании</a>
            </p>
        </div>
    )
}

export default Main