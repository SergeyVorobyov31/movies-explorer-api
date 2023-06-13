import React from 'react';

function NavTab(props) {
    return(
        <>
            <nav className="header__container_nav">
                <ul className="header__container_ul">
                    <li className="header__container_nav_item"><a className="header__signup" href='/signup'>Регистрация</a></li>
                    <li className="header__container_nav_item"><a className="header__signin" href='/signin'>Войти</a></li>
                </ul>
            </nav>
        </>
    );
}

export default NavTab;