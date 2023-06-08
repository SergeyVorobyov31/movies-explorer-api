import React from "react";
import logo from '../../images/logo.png';
import logoMenu from "../../images/menu.png";

function Header(props) {
    return(
        <header className={`header header_${props.name}`}>
            <img className="header__logo" src={logo} alt="Логотип" onClick={props.navigateToMain}/>
            {/* <div className="header__container">     */}
            {props.children}
            {/* </div> */}
            <img className="header__menu" src={logoMenu} alt="Меню" onClick={props.onPopup}/>
        </header>
    );
}

export default Header;