import React from "react";

function SearchForm() {
    return(
        <section className="searchForm">
            <form className="searchForm_form">
                <div className="searchForm__container">
                    <input className="searchForm__input" type="text" placeholder="Фильм" name="film" id="film" required/>
                    <button className="searchForm__button" type="submit">Поиск</button>
                </div>
            </form>
            <div className="searchForm__filter">
                <label className="searchForm__filter_label">
                    <input className="searchForm__filter_invisible-checkbox" type="checkbox" name="shortFilms" id="shortFilms" />
                    <span className="searchForm__filter_visible-checkbox"></span>
                </label>
                <span className="searchForm__filter_text">Короткометражки</span>
            </div>
        </section>
    );
}

export default SearchForm;