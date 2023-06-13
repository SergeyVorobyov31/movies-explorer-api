import React from "react";
import closeIcon from "../../images/close-icon.png";
import logoAccount from '../../images/logo-account.png';

function Popup(props) {
    return(
        <div className={`popup ${props.isOpen ? "popup_opened": ""}`}>
            <div className="popup__overlay" onClick={props.onClose}></div>
            <div className="popup__form">
                <img className="popup__close-icon" src={closeIcon} alt="Закрыть" onClick={props.onClose}/>
                <nav className="popup__nav">
                    <ul className="popup__ul">
                        <li className={`popup__li popup__li${props.page === "main" ?  "_active": ""}`} onClick={props.navigateToMain}><span className="popup__li_text">Главная</span></li>
                        <li className={`popup__li popup__li${props.page === "movies" ?  "_active": ""}`} onClick={props.navigateToMovies}><span className="popup__li_text">Фильмы</span></li>
                        <li className={`popup__li popup__li${props.page === "saved-movies" ?  "_active": ""}`} onClick={props.navigateToSavedMovies}><span className="popup__li_text">Сохранённые фильмы</span></li>
                    </ul>
                </nav>
                <div className="popup__account" onClick={props.navigateToProfile}>
                    <button className="popup__account_text" type="button">Аккаунт</button>
                    <img className="popup__logo_account" src={logoAccount} alt="Логотип аккаунта"/>
                </div>
            </div>
        </div>
    );
}

export default Popup;