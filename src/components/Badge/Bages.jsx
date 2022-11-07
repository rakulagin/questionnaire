import React from "react";

import styles from "./Badge.module.scss"

import Badge from "./Badge";

const Badges = ({stage, click, questions}) => {

    // const tempArr = [...Array(stage.count)]

    return (
        <div className={styles.badge__wrp}>
            {
                // тут раньше был tempArr.map
                questions?.map((el, index) =>
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