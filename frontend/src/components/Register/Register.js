import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from '../Header/Header';
import * as auth from '../../utils/auth';

function Register(props) {

    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = React.useState({
        name: "",
        email: "",
        password: ""
    });
    const [isValid, setIsValid] = React.useState(false);

    const regex = /@[a-z0-9.-]*\./i;

    const navigate = useNavigate();

    const handleChange = (e) => {
        const errGeneral = document.querySelector('.sign__error_general');
        errGeneral.textContent = "";
        const target = e.target;
        const {name, value} = target;
        setFormValue({
            ...formValue,
            [name]: value
        });
        setErrors({...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
        if (target.value.match(regex) === null && target.classList.contains("sign__input_email")) {
            setIsValid(false);
            setErrors({...errors, 'email': "E-mail является не валидным" });
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formValue.name || !formValue.email || !formValue.password) {
            return;
        }
        if(isValid) {
            auth.register(formValue.name, formValue.email, formValue.password)
            .then((res) => {
                auth.authorize(formValue.email, formValue.password)
                .then((res) => {
                    if (res.token) {
                        localStorage.setItem('jwt', res.token);
                        setFormValue({username: '', password: ''});
                        props.handleLogin();
                        navigate('/movies', {replace: true});
                    }
                })
                .catch(err => console.log(err)); 
            })
            .catch((err) => {
                console.log(err);
                setErrors({...errors, 'password': "Что-то пошло не так..." });
            })
        }
    }

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
                <form className="sign__form" onSubmit={handleSubmit}>
                    <div className="sign__container">
                        <label className="sign__label" htmlFor="sign__input_name">Имя</label>
                        <input className="sign__input" id="sign__input_name" type="text" placeholder="Name" name="name" onChange={handleChange} value={formValue.name} required/>
                        <span className={`sign__error ${errors.name ? "sign__error_active" :" sign__error_disable"}`}>{`${errors.name}`}</span>
                    </div>
                    <div className="sign__container">
                        <label className="sign__label" htmlFor="sign__input_email">E-mail</label>
                        <input className="sign__input sign__input_email" id="sign__input_email" type="email" placeholder="example@yandex.ru" name="email" onChange={handleChange} value={formValue.email} required/>
                        <span className={`sign__error ${errors.email ? "sign__error_active" :" sign__error_disable"}`}>{`${errors.email}`}</span>
                    </div>
                    <div className="sign__container">
                        <label className="sign__label" htmlFor="sign__input_password">Пароль</label>
                        <input className="sign__input" id="sign__input_password" type="password" placeholder="Password" name="password" onChange={handleChange} value={formValue.password} required/>
                        <span className={`sign__error sign__error_general ${errors.password ? "sign__error_active" :" sign__error_disable"}`}>{`${errors.password}`}</span>
                    </div>
                    <div className="sign__footer sign__footer_register">
                        <button type="submit" className={`sign__button ${isValid ? "sign__button_active" : "sign__button_disable"}`}>Зарегистрироваться</button>
                        <span className="sign__span">Уже зарегистрированы? <Link className="sign__link" to={'/signin'}>Войти</Link></span>
                    </div>                    
                </form>
            </div>
        </>
    );
}

export default Register;