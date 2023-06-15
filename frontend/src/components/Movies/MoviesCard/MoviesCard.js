import React from "react";

function MoviesCard(props) {
    return(
        <li className={`moviesCard moviesCard_${props.nameClass}`}>
            <img className="moviesCard__image" src={props.image} alt="Карточка" />
            <div className="moviesCard__container">
                <div className="moviesCard__info">
                    <h2 className="moviesCard__name">Имя карточки</h2>
                    <p className="moviesCard__duration">1ч 30м</p>
                </div>
                <button className="moviesCard__like" type="button"></button>
                <button className="moviesCard__delete" type="button"></button>
            </div>
        </li>
    );
}

export default MoviesCard;