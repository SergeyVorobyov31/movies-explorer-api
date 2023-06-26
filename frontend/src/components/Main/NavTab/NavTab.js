import React from 'react';
import logoAccount from '../../../images/logo-account.png';

function NavTab(props) {

    if (props.loggedIn) {
        // const headerMovies = document.querySelector(".header__container-center_disabled");
        // const headerAccount = document.querySelector(".header__account_disabled");
        // console.log(headerAccount);
        // if ((headerAccount !== null) && (headerMovies !== null)) {
        //     console.log(1);
            // headerMovies.classList.remove("header__container-center_disabled");
            // headerMovies.classList.add("header__container-center_active");
            // headerAccount.classList.remove("header__account_disabled");
            // headerAccount.classList.add("header__account_active");
        // }
    }



    return(
        <>
            <div className={`header__container-center header__container-center_${props.loggedIn ? "active": "disabled"}`}>
                <nav className="header__container-nav">
                <ul className="header__container-ul">
                    <li className="header__container-nav_item"><button className={`header__films header__films_${props.loggedIn ? "main": "disabled"}`} onClick={props.navigateToMovies}>Фильмы</button></li>
                    <li className="header__container-nav_item"><button className={`header__films header__saved-films header__films_${props.loggedIn ? "main": "disabled"}`} onClick={props.navigateToSavedMovies}>Сохранённые фильмы</button></li>
                </ul>
                </nav>
            </div>
            <div className={`header__account header__account_${props.loggedIn ? "active": "disabled"}`} onClick={props.navigateToProfile}>
                <button className={`header__account-text header__account-text_${props.loggedIn ? "main": "disabled"}`} type="button">Аккаунт</button>
                <img className="header__logo_account" src={logoAccount} alt="Логотип аккаунта"/>
            </div>
            <nav className={`header__container-nav header__container-nav_${props.loggedIn ? "disabled": "active"}`}>
                <ul className="header__container-ul">
                    <li className="header__container-nav_item"><button className="header__signup" onClick={props.navigateToRegister}>Регистрация</button></li>
                    <li className="header__container-nav_item"><button className="header__signin" onClick={props.navigateToLogin}>Войти</button></li>
                </ul>
            </nav>
        </>
    );
}

export default NavTab;