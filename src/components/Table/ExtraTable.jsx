import React from "react";
import LastRow from "./LastRow";

const ExtraTable = ({state, setState}) => {

    const handler = (e) => {
        setState(e.target.getAttribute('data-cords'))
        // e.target.classList.add('active')
    }

    return (
        <>
            <div className="row">
                <div className="col"></div>
                {
                    [...Array(5)].map((el, index) =>
                        <div key={index}
                             onClick = {handler}
                             // className={state == index+1? "col active" : "col"}
                            className={"col"}
                             data-cords={index + 1}>&nbsp;</div>)
                }
            </div>
            <LastRow />
        </>
    )
}

export default ExtraTable