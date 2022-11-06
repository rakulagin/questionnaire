import React from "react";

import styles from "./Badge.module.scss"

import Badge from "./Badge";

const Badges = ({stage, click, index}) => {

    const tempArr = [...Array(stage.count)]

    return (
        <div className={styles.badge__wrp}>
            {
                tempArr.map((el, index) =>
                    <Badge
                        click = {click}
                        key={index}
                        index={index}
                    />
                )
            }
        </div>
    )
}

export default Badges