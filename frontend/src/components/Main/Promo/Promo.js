import React from "react";
import promoLogo from '../../../images/promo-logo.png';

function Promo() {
    return(
        <section className="promo">
            <div className="promo__banner">
                <div className="promo__info-container">
                    <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                    <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                </div>
                <img className="promo__logo" src={promoLogo} alt="Логотип баннера" />
            </div>
            <a className="promo__link" href='#aboutProject'> <button className="promo__button" type="button">Узнать больше</button></a>
        </section>
    );
}

export default Promo;