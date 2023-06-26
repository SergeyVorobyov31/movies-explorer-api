import React from "react";
import MoviesCard from "../../Movies/MoviesCard/MoviesCard";

function SavedMoviesCardList(props) {
    return(
        <section className="moviesCardList">
            <ul className="elements__list">
            {
                props.array.map((item) => {
                    if (props.filterButton === false) {
                        if (props.searchFormText === "") {
                            while(item.movieId < 102) {
                                return( 
                                    <MoviesCard
                                    nameClass="savedMovies"
                                    key={item._id}
                                    card={item}
                                    url={item.trailerLink}
                                    image={item.image}
                                    name={item.nameRU}
                                    duration={item.duration}
                                    likeCard={props.likeCard}
                                    savedIds={props.savedIds}
                                    deleteMovie={props.deleteMovie}
                                    />
                                 );
                            }
                        } else if ((item.nameRU.toLowerCase().includes(`${props.searchFormText.toLowerCase()}`)) || (item.nameEN.toLowerCase().includes(`${props.searchFormText.toLowerCase()}`))) {
                            return( 
                                <MoviesCard
                                    nameClass="savedMovies"
                                    key={item._id}
                                    card={item}
                                    url={item.trailerLink}
                                    image={item.image}
                                    name={item.nameRU}
                                    duration={item.duration}
                                    likeCard={props.likeCard}
                                    savedIds={props.savedIds}
                                    deleteMovie={props.deleteMovie}
                                />
                             );
                        }
                    } else {
                        if (item.duration < 41) {
                            return( 
                                <MoviesCard
                                    nameClass="savedMovies"
                                    key={item._id}
                                    card={item}
                                    url={item.trailerLink}
                                    image={item.image}
                                    name={item.nameRU}
                                    duration={item.duration}
                                    likeCard={props.likeCard}
                                    savedIds={props.savedIds}
                                    deleteMovie={props.deleteMovie}
                                />
                            );
                        }
                    }    
                })
            }
            </ul>
        </section>
    );
}

export default SavedMoviesCardList;