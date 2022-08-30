import React from "react";
import LastRow from "./LastRow";

const ExtraTable = ({state, setState}) => {

    return (
        <>
            <div className="row">
                <div className="col"></div>
                {
                    [...Array(5)].map((el, index) =>
                        <div key={index}
                             onClick = {e => setState(e.target.getAttribute('data-cords'))}
                             className={state == index+1? "col active" : "col"}
                             data-cords={index + 1}>&nbsp;</div>)
                }
            </div>
            <LastRow />
        </>
    )
}

export default ExtraTable