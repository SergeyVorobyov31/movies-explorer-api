import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <div className="errorPage">
            <div className="errorPage__container">
                <h1 className="error__code">404</h1>
                <h2 className="error__text">Страница не найдена</h2>
                <Link className="back" to={'/'}>Назад</Link>
            </div>
        </div>
    );
}

export default PageNotFound;