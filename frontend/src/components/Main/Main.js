import React from 'react';
import NavTab from './NavTab/NavTab';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio'
import Header from '../Header/Header';

function Main(props) {
    return(
      <>
        <Header 
          name={'main'}
          children={<NavTab 
            changeHeader={props.changeHeader}
              loggedIn={props.loggedIn}
              navigateToRegister={props.navigateToRegister}
              navigateToLogin={props.navigateToLogin}
              navigateToSavedMovies={props.navigateToSavedMovies}
              navigateToMovies={props.navigateToMovies}
              navigateToProfile={props.navigateToProfile}
            />}
        />
        <main className="main"> 
          <Promo/>
          <AboutProject/>
          <Techs/>
          <AboutMe/>
          <Portfolio/>
        </main>
      </>
    );
} 

export default Main;