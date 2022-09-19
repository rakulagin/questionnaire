import React from "react";


const Tooltip = ({subclass, src, alt, children}) => {

    return (
        <div className={`tooltip ${subclass}`}>
            <img className="tooltip__img" src={src} alt={alt}/>
            <p>{children}</p>
        </div>
    )
}

export default Tooltip