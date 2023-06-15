import React from "react";
import Header from '../Header/Header';
import logoAccount from '../../images/logo-account.png';
import SearchForm from "../Movies/SearchForm/SearchForm";
// import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
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
                                <li className="header__container-nav_item"><a className="header__films" href="/movies">Фильмы</a></li>
                                <li className="header__container-nav_item"><a className="header__films header__films_active header__saved-films" href="/saved-movies">Сохранённые фильмы</a></li>
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
                <SearchForm/>
                <SavedMoviesCardList/>
            </main>
            <Footer/>
            <Popup isOpen={props.isOpen} onClose={props.onClose} navigateToMain={props.navigateToMain} navigateToMovies={props.navigateToMovies} navigateToSavedMovies={props.navigateToSavedMovies} navigateToProfile={props.navigateToProfile} page={"saved-movies"}/>
        </>
    );
}

export default SavedMovies