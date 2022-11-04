import React from "react";
import { Link } from "react-router-dom"

import styles from './main.module.scss'

import Logo from '../../assets/TG-Logo.svg'

const Main = () => {
    return (
        <div className={styles.main}>
            <p className={styles.theme}>Психологическое исследование</p>
            <h1 className={styles.header}>Совместимость жизненных ценностей</h1>
            <div className={styles.buttons}>
                 <Link to="/register" className="btn btn-white-black">
                     Войти через Telegram
                     <img className={styles.tgLogo} src={Logo} alt="tg logo"/>
                 </Link>

                <Link to="/register" className="btn btn-white-black" >Продолжить тестирование</Link>

            </div>
            <p className={styles.license}>Продолжая, вы соглашаетесь с&nbsp;
                <Link to="/agreement">условиями участия в психологическом исследовании</Link>
            </p>
        </div>
    )
}

export default Main