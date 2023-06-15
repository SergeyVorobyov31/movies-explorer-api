import React from "react";
import { Link } from "react-router-dom";
import Header from '../Header/Header';

function Register(props) {
    return(
        <>
            <Header 
            name={"sign"}
            navigateToMain={props.navigateToMain}
            children={
                <h1 className="header__title">Добро пожаловать!</h1>
            }
            />
            <div className="sign__component">
                <form className="sign__form sign__form_register">
                    <div className="sign__container">
                        <label className="sign__label" for="sign__input_name">Имя</label>
                        <input className="sign__input" id="sign__input_name" type="text" placeholder="Name" required/>
                    </div>
                    <div className="sign__container">
                        <label className="sign__label" for="sign__input_name">E-mail</label>
                        <input className="sign__input" id="sign__input_name" type="email" placeholder="example@yandex.ru" required/>
                    </div>
                    <div className="sign__container">
                        <label className="sign__label" for="sign__input_name">Пароль</label>
                        <input className="sign__input" id="sign__input_name" type="password" placeholder="Password" required/>
                        <span className="sign__error"></span>
                    </div>
                </form>
            </div>
            <footer className="sign__footer">
                <button type="submit" className="sign__button" onClick={props.navigateToLogin}>Зарегистрироваться</button>
                <span className="sign__span">Уже зарегистрированы? <Link className="sign__link" to={'/signin'}>Войти</Link></span>
            </footer>
        </>
    );
}

export default Register;