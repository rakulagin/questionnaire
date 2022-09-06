import React from "react";

import './Agreement.scss'

const Agreement = () => {
    return (
        <div className="agreement">
            <div className="agreement__wrapper">
                <h1 className="agreement__header">Согласие на участие в психологическом исследовании</h1>
                <p className="agreement__text agreement-border">Цель исследования - определить, как зависит оценка внешности собеседника от степени совпадения жизненных ценностей.
                    Результаты исследования будут использованы для разработки нового умного приложения знакомств на основе совпадения жизненных ценностей.
                </p>
                <h2 className="agreement__header-mini">Два этапа исследования:</h2>
                <ul>
                    <li className="agreement__text">1. Заполнение анкеты и ответы на вопросы по жизненным ценностям.</li>
                    <li className="agreement__text">2. Короткие видеозвонки в удобное время с тремя другими участниками исследования, подобранными по ценностям и заполнение обратной связи.</li>
                </ul>
                <p className="agreement__text agreement__text-padding">Исследование анонимное и не собирает персональных данных.</p>
                <h2 className="agreement__header-mini">Вознаграждение за участие:</h2>
                <p className="agreement__text">Бесплатная консультация профессионального психолога по любому вопросу.</p>
                <div className="agreement__contacts">
                    <h4 className="agreement__contacts-header">Организатор исследования</h4>
                    <p className="agreement__text">Организатор исследования - Владимир Коровин, телеграм @korovinVlad, телефон +79000010203, Санкт-Петербург</p>
                </div>
            </div>
        </div>
    )
}

export default Agreement