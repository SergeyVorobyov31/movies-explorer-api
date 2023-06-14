import React from "react";
import myPhoto from '../../../images/myPhoto.jpg'

function AboutMe() {
    return(
        <section className="aboutMe">
            <div className="aboutMe__header">
                <h2 className="component__title">Студент</h2>
            </div>
            <div className="aboutMe__body">
                <div className="aboutMe__body-container">
                    <h2 className="aboutMe__body-title">Сергей</h2>
                    <h3 className="aboutMe__body-subtitle">Фронтенд-разработчик, 23 года</h3>
                    <p className="aboutMe__body-discription">Я родился и живу в Белгороде, учусь на факультете информационных систем и технолоний в БГТУ им. В. Г. Шухова. Я люблю слушать музыку, а ещё увлекаюсь автомобилями. Недавно начал кодить.</p>
                    <a className="aboutMe__body-url" href="https://github.com/SergeyVorobyov31" target="_blank" rel="noreferrer">Github</a>
                </div>
                <img className="aboutMe__body-image" src={myPhoto} alt="Фото студента"/>
            </div>
        </section>
    );
}

export default AboutMe;