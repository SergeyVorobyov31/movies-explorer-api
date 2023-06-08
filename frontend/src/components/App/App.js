import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile'
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
// import Popup from '../Popup/Popup';

function App() {
  const navigate = useNavigate();
  const [isPopup, setIsPopup] = useState(false);

  function navigateToMain() {
    navigate('/', {replace: true});
    closePopup()
  }

  function navigateToMovies() {
      navigate('/movies', {replace: true});
      closePopup()
  }

  function navigateToSavedMovies() {
    navigate('/saved-movies', {replace: true});
    closePopup()
  }

  function navigateToProfile() {
    navigate('/profile', {replace: true});
    closePopup()
  }
  
  function navigateToRegister() {
    navigate('/signup', {replace:true});
  }

  function navigateToLogin() {
    navigate('/signin', {replace:true});
  }

  function popupOpen() {
    document.addEventListener("keydown", handleEscClose);
    setIsPopup(true);
}

  function closePopup() {
    setIsPopup(false);
    document.removeEventListener("keydown", handleEscClose);
}

  function handleEscClose(evt) {
    if (evt) {
        if(evt.key === "Escape") {
            closePopup();
        }
    }
}

  return (
    <Routes>
      <Route path='/' element={
        <div className='page'>
          <Main navigateToRegister={navigateToRegister} navigateToLogin={navigateToLogin}/>
          <Footer/>
        </div>}
      />
      <Route path='/movies' element={
        <Movies navigateToMain={navigateToMain} navigateToSavedMovies={navigateToSavedMovies} navigateToProfile={navigateToProfile} onPopup={popupOpen} isOpen={isPopup} onClose={closePopup}/>
      }/>
      <Route path='/saved-movies' element={
        <SavedMovies navigateToMain={navigateToMain} navigateToMovies={navigateToMovies} navigateToProfile={navigateToProfile} onPopup={popupOpen} isOpen={isPopup} onClose={closePopup}/>
      }/>
      <Route path='/profile' element={
        <Profile navigateToMain={navigateToMain} navigateToMovies={navigateToMovies} navigateToSavedMovies={navigateToSavedMovies} onPopup={popupOpen} isOpen={isPopup} onClose={closePopup}/>
      }/>
      <Route path='/signup' element=
        {<Register navigateToMain={navigateToMain} navigateToLogin={navigateToLogin}/>
      }/>
      <Route path='/signin' element={
        <Login navigateToMain={navigateToMain} navigateToMovies={navigateToMovies}/>
      }/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  );
}

export default App;
