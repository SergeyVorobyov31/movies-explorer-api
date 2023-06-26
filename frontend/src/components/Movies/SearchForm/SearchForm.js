import React from "react";

function SearchForm(props) {

    function filterActive() {
        const filter = document.querySelector(".searchForm__filter");
        const filterText = document.querySelector(".searchForm__filter-text");
        filter.addEventListener("click", () => {
            filterText.classList.toggle("searchForm__filter-text_active");
            if (filterText.classList.contains("searchForm__filter-text_active")) {
                props.setFilterButton(true);
            } else {
                props.setFilterButton(false);
            }
        })
    }

    function submitForm(e) {
        e.preventDefault();
        const search = document.querySelector(".searchForm__input");
        props.setIsSearchFormText(search.value);
    }

    return(
        <section className="searchForm">
            <form className="searchForm_form" onSubmit={submitForm}>
                <div className="searchForm__container">
                    <input className="searchForm__input" type="text" placeholder="Фильм" name="film" id="film"/>
                    <button className="searchForm__button" type="submit">Поиск</button>
                </div>
            </form>
            <div className={`searchForm__filter ${props.filterButton ? "searchForm__filter-text_active" : ""}`} onClick={filterActive}>
                <label className="searchForm__filter-label">
                    <input className="searchForm__filter-invisible-checkbox" type="checkbox" name="shortFilms" id="shortFilms" />
                    <span className="searchForm__filter-visible-checkbox"></span>
                </label>
                <span className="searchForm__filter-text">Короткометражки</span>
            </div>
        </section>
    );
}

export default SearchForm;