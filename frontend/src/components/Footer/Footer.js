import React from "react";

function Footer() {
    return(
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__container">
                <p className="footer__copyright">© 2023</p>
                <div className="footer__nav">
                    <ul className="footer__ul">
                        <li className="footer_li"><a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
                        <li className="footer_li"><a className="footer__link" href="https://github.com/SergeyVorobyov31" target="_blank" rel="noreferrer">Github</a></li>
                    </ul>
                </div>
            </div>    
        </footer>
    );
}

export default Footer;