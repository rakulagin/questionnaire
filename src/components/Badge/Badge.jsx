import React from "react";

import styles from "./Badge.module.scss"

const Badge = ({click, index}) => {

    return (
        <i className={styles.badge}
           onClick={() => click(index)}
        ></i>
    )
}

export default Badge