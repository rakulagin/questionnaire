import React from "react";




import "./Final.scss"

const Final = () => {

    return (
        <div className="final">
            <main className="final__wrapper">
                <h1 className="final__title">Благодарим вас за ваши ответы! </h1>
                <p className="final__text">Скоро вам будут отправлены имена Телеграм трех участников исследования для последующего видеозвонка</p>
            </main>
            <footer>
                <p className="final__footer">
                    По всем интересующим вопросам вы можете написать нам в Телеграм &nbsp;
                    <a className="contact-link" href="https://t.me/ramzimamzi">@korovinVlad</a>
                </p>
            </footer>
        </div>
    )
}

export default Final