import React from "react";
import LastRow from "./LastRow";

const BigTable = ({actualColor, state, setState}) => {

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
            {
                [...Array(5)].map((elem, i) =>
                    <div className="row"
                    key={i}>
                        <div className="col">{5-i}</div>
                        {
                            [...Array(5)].map((el, index) =>
                                <div key={index}
                                     onClick = {click}
                                     className={state === `${index + 1}:${5-i}`? `col is-${actualColor}` : "col"}
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