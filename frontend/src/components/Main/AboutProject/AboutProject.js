import React from "react";

function AboutProject() {
    return(
        <section className="aboutProject" id="aboutProject">
            <div className="aboutProject__header">
                <h2 className="component__title">О проекте</h2>
            </div>
            <div className="aboutProject__body">
                <h3 className="aboutProject__body_title">Дипломный проект включал 5 этапов</h3>
                <h3 className="aboutProject__body_title">На выполнение диплома ушло 5 недель</h3>
                <p className="aboutProject__body_subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className="aboutProject__body_subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className="aboutProject__footer">
                <h3 className="aboutProject__footer_title">1 Неделя</h3>
                <h3 className="aboutProject__footer_title">4 Недели</h3>
                <p className="aboutProject__footer_subtitle">Back-end</p>
                <p className="aboutProject__footer_subtitle">Frontend</p>
            </div>
        </section>
    );
}

export default AboutProject;