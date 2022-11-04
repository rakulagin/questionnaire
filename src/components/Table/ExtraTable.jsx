import React, {useState} from "react";
import LastRow from "./LastRow";
import "../../index.scss"

const ExtraTable = ({actualColor, state, setState}) => {

    const [active, setActive] = useState(false)



     const click = (e) => {
        if (!active) {
            setState(e.target.getAttribute('data-cords'))
            setActive(!active)
        } else {
            setState(null)
            setActive(active)
        }
     }

    console.log(active)

    return (
        <>
            <div className="row">
                <div className="col"></div>
                {
                    [...Array(5)].map((el, index) =>
                        <div key={index}
                             // onClick = {(e) => {
                             //     setState(e.target.getAttribute('data-cords'))
                             // }}
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