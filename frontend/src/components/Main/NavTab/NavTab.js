import React from 'react';

function NavTab(props) {
    return(
        <>
            <nav className="header__container_nav">
                <ul className="header__container_ul">
                    <li className="header__container_nav_item"><button className="header__signup" type="button" onClick={props.navigateToRegister}>Регистрация</button></li>
                    <li className="header__container_nav_item"><button className="header__signin" type="button" onClick={props.navigateToLogin}>Войти</button></li>
                </ul>
            </nav>
        </>
    );
}

export default NavTab;