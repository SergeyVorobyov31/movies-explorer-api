import React from "react";
import Header from "../Header/Header";
import logoAccount from '../../images/logo-account.png';
import Popup from "../Popup/Popup";

function Profile(props) {
    return(
        <>
            <Header
                onPopup={props.onPopup}
                navigateToMain={props.navigateToMain}
                name={'movies'}
                children={
                    <>
                        <div className="header__container-center">
                            <nav className="header__container-nav">
                            <ul className="header__container-ul">
                                <li className="header__container-nav_item"><a className="header__films" href="/movies">Фильмы</a></li>
                                <li className="header__container-nav_item"><a className="header__films header__saved-films" href="/saved-movies">Сохранённые фильмы</a></li>
                            </ul>
                            </nav>
                        </div>
                        <div className="header__account">
                            <button className="header__account-text" type="button">Аккаунт</button>
                            <img className="header__logo_account" src={logoAccount} alt="Логотип аккаунта"/>
                        </div>
                    </>
                }
            />
            <div className="profile">
                <h1 className="profile__title">Привет, Сергей!</h1>
                <form className="profile__form">
                    <div className="profile__inputs">
                        <div className="profile__input-container">
                        <label htmlFor="profile__name" className="profile__label">Имя</label>
                        <input type="text" id="profile__name" className="profile__input" name="name" defaultValue="Сергей" required/>
                        <span className="profile__input_error"></span>
                        </div>
                        <div className="profile__input-container">
                        <label htmlFor="profile__email" className="profile__label">E-mail</label>
                        <input type="email" id="profile__email" className="profile__input" name="email" defaultValue="pochta@yandex.ru" required/>
                        <span className="profile__input_error"></span>
                        </div>
                    </div>
                    <button className="profile__button" type="submit">Редактировать</button>
                    <button className="profile__button profile__button_signout" type="button" onClick={props.navigateToMain}>Выйти из аккаунта</button>
                </form>
            </div>
            <Popup isOpen={props.isOpen} onClose={props.onClose} navigateToMain={props.navigateToMain} navigateToMovies={props.navigateToMovies} navigateToSavedMovies={props.navigateToSavedMovies} navigateToProfile={props.navigateToProfile}/>
        </>        
    );
}

export default Profile;