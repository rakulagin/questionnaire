import React from "react";
import LastRow from "./LastRow";

const BigTable = ({state, setState}) => {

    return (
        <>
            {
                [...Array(5)].map((elem, i) =>
                    <div className="row"
                    key={i}>
                        <div className="col">{5-i}</div>
                        {
                            [...Array(5)].map((el, index) =>
                                <div key={index}
                                     onClick = {e => setState(e.target.getAttribute('data-cords'))}
                                     className={state === `${index + 1}:${5-i}`? "col active" : "col"}
                                     data-cords={`${index + 1}:${5-i}`}
                                >&nbsp;
                                </div>)
                        }
                    </div>)
            }


            <LastRow />
        </>
    )
}

export default BigTable