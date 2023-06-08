import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList(props) {
    return(
        <section className="moviesCardList">
            <ul className="elements__list">
            {/* {props.array.map((item) => {
                return( */}
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                {/* );    
            })} */}
            </ul>
            <button className="moviesCardList__button" type="button">Еще</button>
        </section>
    );
}

export default MoviesCardList;