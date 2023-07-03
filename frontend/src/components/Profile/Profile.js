import React, { useState } from "react";
import Header from "../Header/Header";
import logoAccount from '../../images/logo-account.png';
import Popup from "../Popup/Popup";
import Preloader from "../Preloader/Preloader";

function Profile(props) {

    const [formValue, setFormValue] = useState({
        name: "",
        email: ""
    });
    const [errors, setErrors] = React.useState({
        name: "",
        email: ""
    });
    const [isValid, setIsValid] = React.useState(false);

    const regex = /@[a-z0-9.-]*\./i;

    const handleChange = (e) => {
        props.setSuccessfulMessage("");
        const target = e.target;
        const {name, value} = target;
        setFormValue({
            ...formValue,
            [name]: value
        });
        setErrors({...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
        if(target.value === props.currentUser.name) {
            setIsValid(false);
            setErrors({...errors, 'name': "Указано текущее имя" });
        } else if (target.value === props.currentUser.email) {
            setIsValid(false);
            setErrors({...errors, 'email': "Указан текущий E-mail" });
        } else if (target.value.match(regex) === null && target.classList.contains("profile__input_email")) {
            setIsValid(false);
            setErrors({...errors, 'email': "E-mail является не валидным" });
        }
    }


    function updateProfile(e) {
        e.preventDefault();
        if (isValid) {
            const name = document.getElementById('profile__name');
            const email = document.getElementById('profile__email');
            if (name.value !== props.currentUser.name || email.value !== props.currentUser.email) {
                props.updateUser(name.value, email.value)
                setIsValid(false);
            } 
        } else {
            return;
        }
    }
    

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
                                <li className="header__container-nav_item"><button className="header__films" onClick={props.navigateToMovies}>Фильмы</button></li>
                                <li className="header__container-nav_item"><button className="header__films header__saved-films" onClick={props.navigateToSavedMovies}>Сохранённые фильмы</button></li>
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
                <h1 className="profile__title">Привет, {`${props.currentUser.name}`}!</h1>
                <form className="profile__form" onSubmit={updateProfile}>
                    <div className="profile__inputs">
                        <div className="profile__input-container">
                        <label htmlFor="profile__name" className="profile__label">Имя</label>
                        <input type="text" id="profile__name" className="profile__input" name="name" defaultValue={props.currentUser.name} onChange={handleChange} required/>
                        <span className="profile__input_error">{errors.name}</span>
                        </div>
                        <div className="profile__input-container">
                        <label htmlFor="profile__email" className="profile__label">E-mail</label>
                        <input type="email" id="profile__email" className="profile__input profile__input_email" name="email" defaultValue={props.currentUser.email} onChange={handleChange} required/>
                        <span className="profile__input_error">{errors.email}</span>
                        </div>
                    </div>
                    <span className="profile__successful-message">{props.successfulMessage}</span>
                    <button className={`profile__button ${isValid ? "profile__button_active" : "profile__button_disable"}`} type="submit">Редактировать</button>
                    <button className="profile__button profile__button_signout" type="button" onClick={props.signOut}>Выйти из аккаунта</button>
                </form>
            </div>
            <Preloader isLoading={props.isLoading}/>
            <Popup isOpen={props.isOpen} onClose={props.onClose} navigateToMain={props.navigateToMain} navigateToMovies={props.navigateToMovies} navigateToSavedMovies={props.navigateToSavedMovies} navigateToProfile={props.navigateToProfile}/>
        </>        
    );
}

export default Profile;