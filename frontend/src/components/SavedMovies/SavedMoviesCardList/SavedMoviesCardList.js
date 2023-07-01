import React from "react";
import MoviesCard from "../../Movies/MoviesCard/MoviesCard";

function SavedMoviesCardList(props) {
    return(
        <section className="moviesCardList">
            <ul className="elements__list">
            {
                props.array.map((item) => {
                    if (localStorage.savedFilterButton.startsWith("false")) {
                        if (props.savedSearchFormText === "") {
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
                                    deleteSavedMovie={props.deleteSavedMovie}
                                    />
                                 );
                            }
                        } else if ((item.nameRU.toLowerCase().includes(`${props.savedSearchFormText.toLowerCase()}`)) || (item.nameEN.toLowerCase().includes(`${props.savedSearchFormText.toLowerCase()}`))) {
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
                                    deleteSavedMovie={props.deleteSavedMovie}
                                />
                             );
                        }
                    } else {
                        if (item.duration < 41) {
                            if (props.savedSearchFormText === "") {
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
                                        deleteSavedMovie={props.deleteSavedMovie}
                                    />
                                );
                            } else if ((item.nameRU.toLowerCase().includes(`${props.savedSearchFormText.toLowerCase()}`)) || (item.nameEN.toLowerCase().includes(`${props.savedSearchFormText.toLowerCase()}`))) {
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
                                        deleteSavedMovie={props.deleteSavedMovie}
                                    />
                                );
                            }  
                        }
                    }    
                })
            }
            </ul>
        </section>
    );
}

export default SavedMoviesCardList;