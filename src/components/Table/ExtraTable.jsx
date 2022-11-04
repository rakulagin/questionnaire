import React from "react";
import LastRow from "./LastRow";
import "../../index.scss"

const ExtraTable = ({state, setState, stage}) => {

    const colors = ["green", "red", "blue", "purple"]

    console.log("colors:", colors)
    console.log("stage:", stage)
    console.log("stage.id-1:", stage?.id-1)
    console.log("----")

    return (
        <>
            <div className="row">
                <div className="col"></div>
                {
                    [...Array(5)].map((el, index) =>
                        <div key={index}
                             onClick = {e => setState(e.target.getAttribute('data-cords'))}
                             // className={state == index+1? "col active" : "col"}
                             className={state == index+1? `col is-${colors[stage.id-1]}` : "col"}
                             data-cords={index + 1}>&nbsp;</div>)
                }
            </div>
            <LastRow />
        </>
    )
}

export default ExtraTable