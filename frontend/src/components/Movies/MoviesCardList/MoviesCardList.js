import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList(props) {

    function liked(card) {
        let like = false
        if(props.savedIds.has(card.id)) {
            like = true;
            return like;
        }
    }

    function moreFilms() {
        props.setButtonMore(true);
        props.plusIndex(props.index);
        if (props.array.length <= props.index) {
            props.setButtonMore(false);
        }
    }

    return(
        <section className="moviesCardList">
            <ul className="elements__list">
            {
                props.array.map((item) => {
                    if (props.filterButton === false) {
                        if (props.searchFormText === "") {
                            while((item.id < props.index) && (item.id < 102)) {
                                while(item.id < props.index) {
                                    return(
                                        <MoviesCard
                                            nameClass="movies"
                                            key={item.id}
                                            card={item}
                                            url={item.trailerLink}
                                            image={item.image.url}
                                            name={item.nameRU}
                                            duration={item.duration}
                                            likeCard={props.likeCard}
                                            savedIds={props.savedIds}
                                            like={liked(item)}
                                        />
                                     );
                                }
                                if(props.buttonMore) {
                                    for (let index = props.index; index < props.index + 3; props.index++) {
                                        return(
                                            <MoviesCard
                                            nameClass="movies"
                                            key={index}
                                            card={props.array[props.index-1]}
                                            url={props.array[props.index-1].trailerLink}
                                            image={props.array[props.index-1].image.url}
                                            name={props.array[props.index-1].nameRU}
                                            duration={props.array[props.index-1].duration}
                                            likeCard={props.likeCard}
                                            savedIds={props.savedIds}
                                            like={liked(props.array[props.index-1])}
                                            />
                                        );
                                    }
                                }
                            }
                        } else if ((item.nameRU.toLowerCase().includes(`${props.searchFormText.toLowerCase()}`)) || (item.nameEN.toLowerCase().includes(`${props.searchFormText.toLowerCase()}`))) {
                            return(
                                <MoviesCard
                                    nameClass="movies"
                                    key={item.id}
                                    card={item}
                                    url={item.trailerLink}
                                    image={item.image.url}
                                    name={item.nameRU}
                                    duration={item.duration}
                                    likeCard={props.likeCard}
                                    savedIds={props.savedIds}
                                    like={liked(item)}
                                />
                            )
                        }
                    } else {
                        if (item.duration < 41) {
                            return(
                                <MoviesCard
                                    nameClass="movies"
                                    key={item.id}
                                    card={item}
                                    url={item.trailerLink}
                                    image={item.image.url}
                                    name={item.nameRU}
                                    duration={item.duration}
                                    likeCard={props.likeCard}
                                    savedIds={props.savedIds}
                                    like={liked(item)}
                                />
                            );
                        }
                    }
                })
            } 
            </ul>
            <button className={`moviesCardList__button ${props.buttonMore ? "moviesCardList__button_active" : "moviesCardList__button_disable"}`} type="button" onClick={moreFilms}>Еще</button>
        </section>
    );
}

export default MoviesCardList;