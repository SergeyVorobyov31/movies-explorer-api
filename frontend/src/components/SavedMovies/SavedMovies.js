import React from "react";
import Header from '../Header/Header';
import logoAccount from '../../images/logo-account.png';
import SavedSearchForm from "./SavedSearchForm/SavedSearchForm";
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
                <SavedSearchForm savedFilterButton={props.savedFilterButton} setSavedFilterButton={props.setSavedFilterButton} savedSearchFormText={props.savedSearchFormText} setIsSavedSearchFormText={props.setIsSavedSearchFormText} setButtonMore={props.setButtonMore}/>
                <SavedMoviesCardList array={props.array} savedIds={props.savedIds} deleteMovie={props.deleteMovie} savedFilterButton={props.savedFilterButton} setSavedFilterButton={props.setSavedFilterButton} savedSearchFormText={props.savedSearchFormText}/>
            </main>
            <Footer/>
            <Popup isOpen={props.isOpen} onClose={props.onClose} navigateToMain={props.navigateToMain} navigateToMovies={props.navigateToMovies} navigateToSavedMovies={props.navigateToSavedMovies} navigateToProfile={props.navigateToProfile} page={"saved-movies"}/>
        </>
    );
}

export default SavedMovies