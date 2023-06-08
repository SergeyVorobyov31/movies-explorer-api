import React from "react";
import { Link } from "react-router-dom";
import Header from '../Header/Header';

function Login(props) {
    return(
        <>
            <Header 
            name={"sign"}
            navigateToMain={props.navigateToMain}
            children={
                <h1 className="header__title">Рады видеть!</h1>
            }
            />
            <div className="sign__component">
                <form className="sign__form sign__form_login">
                    <div className="sign__container">
                        <label className="sign__label" htmlFor="sign__input_name">E-mail</label>
                        <input className="sign__input" id="sign__input_name" type="email" placeholder="" required/>
                    </div>
                    <div className="sign__container">
                        <label className="sign__label" htmlFor="sign__input_name">Пароль</label>
                        <input className="sign__input" id="sign__input_name" type="password" placeholder="" required/>
                        <span className="sign__error"></span>
                    </div>
                </form>
            </div>
            <footer className="sign__footer">
                <button type="submit" className="sign__button" onClick={props.navigateToMovies}>Войти</button>
                <span className="sign__span">Ещё не зарегистрированы? <Link className="sign__link" to={'/signup'}>Регистрация</Link></span>
            </footer>
        </>
    );
}

export default Login;