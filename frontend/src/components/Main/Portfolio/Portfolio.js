import React from "react";
import arrow from '../../../images/arrow.png';

function Portfolio() {
    return(
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__links">
                <ul className="portfolio__list">
                    <li className="portfolio__li"><a className="portfolio__link" href="https://sergeyvorobyov31.github.io/how-to-learn/" target="_blank" rel="noreferrer"><span className="portfolio__link_text">Статичный сайт</span> <img className="portfolio__link_arrow" src={arrow} alt="Стрелка"/></a></li>
                    <li className="portfolio__li"><a className="portfolio__link" href="https://sergeyvorobyov31.github.io/russian-travel/" target="_blank" rel="noreferrer"><span className="portfolio__link_text">Адаптивный сайт</span><img className="portfolio__link_arrow" src={arrow} alt="Стрелка"/></a></li>
                    <li className="portfolio__li"><a className="portfolio__link" href="https://mesto.net.nomoredomains.monster/" target="_blank" rel="noreferrer"><span className="portfolio__link_text">Одностраничное приложение</span><img className="portfolio__link_arrow" src={arrow} alt="Стрелка"/></a></li>
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;