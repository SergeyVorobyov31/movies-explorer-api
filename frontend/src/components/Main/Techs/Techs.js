import React from "react";

function Techs() {
    return(
        <section className="techs">
            <div className="techs__container">
                <div className="techs__header">
                    <h2 className="component__title">Технологии</h2>
                </div>
                <div className="techs__body">
                    <h2 className="techs__body-title">7 технологий</h2>
                    <p className="techs__body-subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                </div>
                <div className="techs__footer">
                    <ul className="techs__footer-ul">
                        <li className="techs__footer-item"><a className="techs__footer-link" href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics" target="_blank" rel="noreferrer">HTML</a></li>
                        <li className="techs__footer-item"><a className="techs__footer-link" href="https://developer.mozilla.org/ru/docs/Web/CSS" target="_blank" rel="noreferrer">CSS</a></li>
                        <li className="techs__footer-item"><a className="techs__footer-link" href="https://developer.mozilla.org/ru/docs/Web/JavaScript" target="_blank" rel="noreferrer">JS</a></li>
                        <li className="techs__footer-item"><a className="techs__footer-link" href="https://react.dev/" target="_blank" rel="noreferrer">React</a></li>
                        <li className="techs__footer-item"><a className="techs__footer-link" href="https://git-scm.com/" target="_blank" rel="noreferrer">Git</a></li>
                        <li className="techs__footer-item"><a className="techs__footer-link" href="https://expressjs.com/ru/" target="_blank" rel="noreferrer">Express.js</a></li>
                        <li className="techs__footer-item"><a className="techs__footer-link" href="https://www.mongodb.com/" target="_blank" rel="noreferrer">mongoDB</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Techs;