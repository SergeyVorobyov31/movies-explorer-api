import React from "react";
import logo from '../../images/logo.png';
import logoMenu from "../../images/menu.png";

function Header(props) {
    return(
        <header className={`header header_place_${props.name}`}>
            <div className={`header__container header__container-${props.name}`}>
                {/* <div className="header__wrapper"> */}
                    <img className="header__logo" src={logo} alt="Логотип" onClick={props.navigateToMain}/>
                    {/* <div className="header__container">     */}
                    {props.children}
                    {/* </div> */}
                    <img className="header__menu" src={logoMenu} alt="Меню" onClick={props.onPopup}/>
                {/* </div> */}
            </div>
        </header>
    );
}

export default Header;