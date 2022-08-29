import React from "react";
import LastRow from "./LastRow";

const ExtraTable = ({onClick1212, state, setState}) => {


    return (
        <>
            <div className="row"
                 onClick = {e => setState(e.target.getAttribute('data-cords'))}
            >
                <div className="col col-choice"></div>
                {[...Array(5)].map((el, index) => <div key={index} className={state == index+1? "col active" : "col"} data-cords={index + 1}>&nbsp;</div>)}
                {/*<div className="col col-choice" data-cords="1">&nbsp;</div>*/}
                {/*<div className="col col-choice" data-cords="2">&nbsp;</div>*/}
                {/*<div className="col col-choice" data-cords="3">&nbsp;</div>*/}
                {/*<div className="col col-choice" data-cords="4">&nbsp;</div>*/}
                {/*<div className="col col-choice" data-cords="5">&nbsp;</div>*/}
            </div>
            <LastRow />
        </>
    )
}

export default ExtraTable