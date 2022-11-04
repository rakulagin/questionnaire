import React, {useState} from "react";
import LastRow from "./LastRow";
import "../../index.scss"

const ExtraTable = ({actualColor, state, setState}) => {

     const click = (e) => {
        if (!state) {
            setState(e.target.getAttribute('data-cords'))
        } else if (state === e.target.getAttribute('data-cords')) {
            setState(null)
        } else {
            setState(e.target.getAttribute('data-cords'))
        }
     }

    return (
        <>
            <div className="row">
                <div className="col"></div>
                {
                    [...Array(5)].map((el, index) =>
                        <div key={index}
                             onClick={click}
                             className={parseInt(state) === index+1? `col is-${actualColor}` : "col"}
                             data-cords={index + 1}>&nbsp;</div>)
                }
            </div>
            <LastRow />
        </>
    )
}

export default ExtraTable