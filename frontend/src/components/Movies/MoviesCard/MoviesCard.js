import React, {useState} from "react";

function MoviesCard(props) {

    const [isLiked, setIsLiked] = useState(props.like);

    function handleLike() {
        if (isLiked === false) {
        props.likeCard(props.card);
        setIsLiked(true);
        } else {
            props.deleteMovie(props.card);
            setIsLiked(false);
            console.log(props.like);
        }
    }

    function handleDelete() {
        props.deleteSavedMovie(props.card);
    }

    const hours = Math.floor(props.duration / 60);
    const minutes = props.duration % 60;
    
    return(
        <li className={`moviesCard moviesCard_${props.nameClass}`}>
            <a className="moviesCard__link" href={props.url} target="_blank" rel="noreferrer">
                <img className="moviesCard__image" src={`${props.nameClass === 'movies' ? `https://api.nomoreparties.co${props.image}` : `${props.image}`}`} alt="Карточка" />
            </a>
            <div className="moviesCard__container">
                <div className="moviesCard__info">
                    <h2 className="moviesCard__name">{props.name}</h2>
                    <p className="moviesCard__duration">{`${hours}ч ${minutes}м`}</p>
                </div>
                <button className={`moviesCard__like ${isLiked && 'moviesCard__like_active'}`} type="button" onClick={handleLike}></button>
                <button className="moviesCard__delete" type="button" onClick={handleDelete}></button>
            </div>
        </li>
    );
}

export default MoviesCard;