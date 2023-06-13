import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard'
import card1 from "../../../images/pic__COLOR_pic.png";
import card2 from "../../../images/pic__COLOR_pic1.png";
import card3 from "../../../images/pic__COLOR_pic2.png";
import card4 from "../../../images/pic__COLOR_pic3.png";
import card5 from "../../../images/pic__COLOR_pic4.png";
import card6 from "../../../images/pic__COLOR_pic5.png";
import card7 from "../../../images/pic__COLOR_pic6.png";
import card8 from "../../../images/pic__COLOR_pic7.png";
import card9 from "../../../images/pic__COLOR_pic8.png";
import card10 from "../../../images/pic__COLOR_pic9.png";
import card11 from "../../../images/pic__COLOR_pic10.png";
import card12 from "../../../images/pic__COLOR_pic11.png";

function MoviesCardList(props) {
    return(
        <section className="moviesCardList">
            <ul className="elements__list">
            {/* {props.array.map((item) => {
                return( */}
                    <MoviesCard nameClass="movies" image={card1}/>
                    <MoviesCard nameClass="movies" image={card2}/>
                    <MoviesCard nameClass="movies" image={card3}/>
                    <MoviesCard nameClass="movies" image={card4}/>
                    <MoviesCard nameClass="movies" image={card5}/>
                    <MoviesCard nameClass="movies" image={card6}/>
                    <MoviesCard nameClass="movies" image={card7}/>
                    <MoviesCard nameClass="movies" image={card8}/>
                    <MoviesCard nameClass="movies" image={card9}/>
                    <MoviesCard nameClass="movies" image={card10}/>
                    <MoviesCard nameClass="movies" image={card11}/>
                    <MoviesCard nameClass="movies" image={card12}/>
                {/* );    
            })} */}
            </ul>
            <button className="moviesCardList__button" type="button">Еще</button>
        </section>
    );
}

export default MoviesCardList;