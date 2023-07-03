import React from "react";

function SavedSearchForm(props) {
    localStorage.setItem('savedFilterButton', props.savedFilterButton);
    localStorage.setItem('savedSearchFormText', props.savedSearchFormText);

    function filterActive() {
        const filter = document.querySelector(".searchForm__filter-label");
        const filterText = document.querySelector(".searchForm__filter-text");
        filter.addEventListener("click", () => {
            filterText.classList.toggle("searchForm__filter-text_active");
            if (filterText.classList.contains("searchForm__filter-text_active")) {
                props.setSavedFilterButton('true');
                localStorage.setItem('savedFilterButton', props.savedFilterButton);
            } else {
                props.setSavedFilterButton('false');
                localStorage.setItem('savedFilterButton', props.savedFilterButton);
            }
        })
    }

    function submitForm(e) {
        e.preventDefault();
        const search = document.querySelector(".searchForm__input");
        props.setIsSavedSearchFormText(search.value);
        localStorage.setItem('savedSearchFormText', search.value);
        if (search.value === "") {
            if (props.array.length === 0) {
                props.setIsNotFoundTextSaved("Ничего не найдено");
            } else {
                props.setIsNotFoundTextSaved("");
            }
        } else {
            const nameRu = props.array.find(card => card.nameRU.toLowerCase().includes(search.value.toLowerCase()));
            const nameEn = props.array.find(card => card.nameEN.toLowerCase().includes(search.value.toLowerCase()));
            if (nameRu || nameEn){
                props.setIsNotFoundTextSaved("");
            } else {
                props.setIsNotFoundTextSaved("Ничего не найдено");
            }
        }

        if (localStorage.savedFilterButton.startsWith("true") && search.value !== "") {
            const nameRu = props.array.find(card => card.nameRU.toLowerCase().includes(search.value.toLowerCase()) && card.duration < 41);
            const nameEn = props.array.find(card => card.nameEN.toLowerCase().includes(search.value.toLowerCase()) && card.duration < 41);
            if (nameRu || nameEn){
                props.setIsNotFoundTextSaved("");
            } else {
                props.setIsNotFoundTextSaved("Ничего не найдено");
            }
        }
    }

    return(
        <section className="searchForm">
            <form className="searchForm_form" onSubmit={submitForm}>
                <div className="searchForm__container">
                    <input className="searchForm__input" type="text" placeholder="Фильм" name="film" id="film" defaultValue={localStorage.savedSearchFormText}/>
                    <button className="searchForm__button" type="submit">Поиск</button>
                </div>
            </form>
            <div className={`searchForm__filter ${localStorage.savedFilterButton.startsWith("true") ? "searchForm__filter-text_active" : ""}`} onClick={filterActive}>
                <label className="searchForm__filter-label">
                    <input className="searchForm__filter-invisible-checkbox" type="checkbox" name="shortFilms" id="shortFilms"/>
                    <span className={`searchForm__filter-visible-checkbox ${localStorage.savedFilterButton.startsWith("true") ? "searchForm__filter-visible-checkbox_active" : ""}`}></span> 
                </label>
                <span className={`searchForm__filter-text ${localStorage.savedFilterButton.startsWith("true") ? "searchForm__filter-text_active" : ""}`}>Короткометражки</span>
            </div>
        </section>
    );
}

export default SavedSearchForm;