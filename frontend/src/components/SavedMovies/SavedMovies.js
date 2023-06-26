import React from "react";
import Header from '../Header/Header';
import logoAccount from '../../images/logo-account.png';
import SearchForm from "../Movies/SearchForm/SearchForm";
import SavedMoviesCardList from "./SavedMoviesCardList/SavedMoviesCardList";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";

function SavedMovies(props) {
    return(
        <>
            <Header
                onPopup={props.onPopup} 
                navigateToMain={props.navigateToMain}
                name={'movies'}
                children={
                    <>
                        <div className="header__container-center">
                            <nav className="header__container-nav">
                            <ul className="header__container-ul">
                                <li className="header__container-nav_item"><button className="header__films" onClick={props.navigateToMovies}>Фильмы</button></li>
                                <li className="header__container-nav_item"><button className="header__films header__films_active header__saved-films">Сохранённые фильмы</button></li>
                            </ul>
                            </nav>
                        </div>
                        <div className="header__account" onClick={props.navigateToProfile}>
                            <button type="button" className="header__account-text">Аккаунт</button>
                            <img className="header__logo_account" src={logoAccount} alt="Логотип аккаунта"/>
                        </div>
                    </>
                }
            />
            <main className="savedMovies">
                <SearchForm filterButton={props.filterButton} setFilterButton={props.setFilterButton} setIsSearchFormText={props.setIsSearchFormText}/>
                <SavedMoviesCardList array={props.array} savedIds={props.savedIds} deleteMovie={props.deleteMovie} filterButton={props.filterButton} setFilterButton={props.setFilterButton} searchFormText={props.searchFormText}/>
            </main>
            <Footer/>
            <Popup isOpen={props.isOpen} onClose={props.onClose} navigateToMain={props.navigateToMain} navigateToMovies={props.navigateToMovies} navigateToSavedMovies={props.navigateToSavedMovies} navigateToProfile={props.navigateToProfile} page={"saved-movies"}/>
        </>
    );
}

export default SavedMovies