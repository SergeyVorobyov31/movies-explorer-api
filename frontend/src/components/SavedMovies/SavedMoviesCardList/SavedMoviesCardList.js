import React from "react";
import MoviesCard from "../../Movies/MoviesCard/MoviesCard";
import card1 from "../../../images/pic__COLOR_pic.png";
import card2 from "../../../images/pic__COLOR_pic1.png";
import card3 from "../../../images/pic__COLOR_pic2.png";

function SavedMoviesCardList() {
    return(
        <section className="moviesCardList">
            <ul className="elements__list">
            {/* {props.array.map((item) => {
                return( */}
                    <MoviesCard nameClass="savedMovies" image={card1}/>
                    <MoviesCard nameClass="savedMovies" image={card2}/>
                    <MoviesCard nameClass="savedMovies" image={card3}/>
                {/* );    
            })} */}
            </ul>
            {/* <button className="moviesCardList__button" type="button">Еще</button> */}
        </section>
    );
}

export default SavedMoviesCardList;