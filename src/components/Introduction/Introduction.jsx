import React from "react";
import { Link} from "react-router-dom"

import lifestyle from '../../assets/lifestyle.png'
import relations from '../../assets/relations.png'
import person from '../../assets/person.svg'
import sex from '../../assets/sex.png'

import './Introduction.scss'

const Introduction = () => {

    const items = [
        {
            img: lifestyle,
            title: "Образ жизни",
            text: "23 вопроса"
        },
        {
            img: relations,
            title: "Отношения",
            text: "30 вопросов"
        },
        {
            img: person,
            title: "Личность",
            text: "39 вопросов"
        },
        {
            img: sex,
            title: "Секс",
            text: "14 вопросов"
        }
    ]

    return (
        <div className="mockup mockup__wrapper swipe">
            <h1 className="intro__title">Жизненные ценности</h1>
            <div className="intro__items">
                {
                    items.map((item, index) =>
                        <div key={index}
                             className="intro__item">
                            <img className="intro__item__image" src={item.img} alt="12"/>
                            <h3 className="intro__item__title">{item.title}</h3>
                            <p className="intro__item__text">{item.text}</p>
                        </div>
                    )
                }
            </div>
            <p className="intro__text">Ваши ответы не увидят другие участники исследования. Пожалуйста, выбирайте честные, а не «правильные» ответы</p>
            <div className="intro__item">
            </div>
            <Link to="/instruction">next</Link>
        </div>
    )
}

export default Introduction