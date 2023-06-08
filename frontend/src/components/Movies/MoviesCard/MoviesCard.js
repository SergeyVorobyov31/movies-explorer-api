import React from "react";

function MoviesCard(props) {
    return(
        <li className="moviesCard">
            <img className="moviesCard__image" src="" alt="Карточка" />
            <div className="moviesCard__container">
                <div className="moviesCard__info">
                    <h2 className="moviesCard__name">Имя карточки</h2>
                    <p className="moviesCard__duration">1ч 30м</p>
                </div>
                <button className="moviesCard__like"></button>
            </div>
        </li>
    );
}

export default MoviesCard;