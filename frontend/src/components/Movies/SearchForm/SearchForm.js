import React from "react";

function SearchForm(props) {
    localStorage.setItem('filterButton', props.filterButton);
    localStorage.setItem('searchFormText', props.searchFormText);

    function filterActive() {
        const filter = document.querySelector(".searchForm__filter");
        const filterText = document.querySelector(".searchForm__filter-text");
        filter.addEventListener("click", () => {
            filterText.classList.toggle("searchForm__filter-text_active");
            if (filterText.classList.contains("searchForm__filter-text_active")) {
                props.setFilterButton(true);
                localStorage.setItem('filterButton', props.filterButton);
            } else {
                props.setFilterButton(false);
                localStorage.setItem('filterButton', props.filterButton);
            }
        })
    }

    function submitForm(e) {
        e.preventDefault();
        const search = document.querySelector(".searchForm__input");
        props.setIsSearchFormText(search.value);
        localStorage.setItem('searchFormText', search.value);
        if (search.value === "") {
            props.setButtonMore(true);
        } else {
            props.setButtonMore(false);
        }
    }

    return(
        <section className="searchForm">
            <form className="searchForm_form" onSubmit={submitForm}>
                <div className="searchForm__container">
                    <input className="searchForm__input" type="text" placeholder="Фильм" name="film" id="film" defaultValue={localStorage.searchFormText}/>
                    <button className="searchForm__button" type="submit">Поиск</button>
                </div>
            </form>
            <div className={`searchForm__filter ${localStorage.filterButton.startsWith("true") ? "searchForm__filter-text_active" : ""}`} onClick={filterActive}>
                <label className="searchForm__filter-label">
                    <input className="searchForm__filter-invisible-checkbox" type="checkbox" name="shortFilms" id="shortFilms" />
                    <span className={`searchForm__filter-visible-checkbox ${localStorage.filterButton.startsWith("true") ? "searchForm__filter-visible-checkbox_active" : ""}`}></span> 
                </label>
                <span className={`searchForm__filter-text ${localStorage.filterButton.startsWith("true") ? "searchForm__filter-text_active" : ""}`}>Короткометражки</span>
            </div>
        </section>
    );
}

export default SearchForm;