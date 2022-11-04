import React from "react";
import { Link } from "react-router-dom"

import lifestyle from '../../assets/lifestyle.png'
import relations from '../../assets/relations.png'
import person from '../../assets/person.svg'
import sex from '../../assets/sex.png'

import styles from './Introduction.module.scss'

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
            <h1 className={styles.title}>Жизненные ценности</h1>
            <div className={styles.items}>
                {
                    items.map((item, index) =>
                        <div key={index}
                             className={styles.item}>
                            <img className={styles.itemImage} src={item.img} alt="icon"/>
                            <h3 className={styles.itemTitle}>{item.title}</h3>
                            <p className={styles.itemText}>{item.text}</p>
                        </div>
                    )
                }
            </div>
            <p className={styles.text}>Ваши ответы не увидят другие участники исследования. Пожалуйста, выбирайте честные, а не «правильные» ответы</p>

            <Link to="/instruction" className="btn btn-blue" >Приступить</Link>
        </div>
    )
}

export default Introduction