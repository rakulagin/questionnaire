import React from "react";

import "./ProgressBar.scss"

import lifestyle from '../../assets/lifestyle.png'
import relations from '../../assets/relations.png'
import person from '../../assets/person.svg'
import sex from '../../assets/sex.png'

const ProgressBar = ({stage, numberOfQuestion}) => {

    const colors = ["green", "red", "blue", "purple"]
    const stageIcons = [lifestyle, relations, person, sex]

    const barWidth = `${(numberOfQuestion+1) / stage.count * 100}%`

    return (
        <>
            <div className="stage">
                <img className="stage__icon" src={stageIcons[stage.id-1]} alt="иконка"/>
                <span className="stage__group">{stage.group}</span>
            </div>

            <div className="bar">
                <div className={`bar-progress ${colors[stage.id-1]}`}
                     style={{width: barWidth}}></div>
            </div>
        </>
    )
}

export default ProgressBar