import React from "react";
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import logoAccount from '../../images/logo-account.png';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList'
import Popup from "../Popup/Popup";
import Preloader from "../Preloader/Preloader";

function Movies(props) {

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
                                <li className="header__container-nav_item"><button className="header__films header__films_active">Фильмы</button></li>
                                <li className="header__container-nav_item"><button className="header__films header__saved-films" onClick={props.navigateToSavedMovies}>Сохранённые фильмы</button></li>
                            </ul>
                            </nav>
                        </div>
                        <div className="header__account" onClick={props.navigateToProfile}>
                            <button className="header__account-text" type="button">Аккаунт</button>
                            <img className="header__logo_account" src={logoAccount} alt="Логотип аккаунта"/>
                        </div>
                    </>
                }
            />
            <main className="movies">
                <SearchForm filterButton={props.filterButton} setFilterButton={props.setFilterButton} searchFormText={props.searchFormText} setIsSearchFormText={props.setIsSearchFormText} setButtonMore={props.setButtonMore}/>
                <MoviesCardList array={props.array} deleteMovie={props.deleteMovie} savedIds={props.savedIds} likeCard={props.likeCard} plusIndex={props.plusIndex} index={props.index} filterButton={props.filterButton} searchFormText={props.searchFormText} setButtonMore={props.setButtonMore} buttonMore={props.buttonMore}/>
            </main>
            <Preloader isLoading={props.isLoading}/>
            <Footer/>
            <Popup isOpen={props.isOpen} onClose={props.onClose} navigateToMain={props.navigateToMain} navigateToMovies={props.navigateToMovies} navigateToSavedMovies={props.navigateToSavedMovies} navigateToProfile={props.navigateToProfile} page={"movies"}/>
        </>
    );
}

export default Movies;