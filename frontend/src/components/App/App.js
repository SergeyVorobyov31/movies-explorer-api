import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile'
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import * as auth from '../../utils/auth';
import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';
import CurrentUserContext from '../../context/CurrentUserContext';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [currentUser, setCurentUser] = useState({});
  const [cards, setInitialCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [index, setIndex] = useState(13);
  const [filterButton, setFilterButton] = useState(false);
  const [searchFormText, setIsSearchFormText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const api = new MainApi({
    baseUrl: 'https://api.movies-explorer.net.nomoredomains.rocks',
    headers: {
      authorization: `${localStorage.jwt}`,
      'Content-Type': 'application/json'
    }
  });

  const moviesApi = new MoviesApi({
    baseUrl: ' https://api.nomoreparties.co/beatfilm-movies',
    headers: {
      'Content-Type': 'application/json'
    }
  })


  const savedIds = useMemo(() => {
    const ids = savedCards.map(({movieId}) => movieId);
    return new Set(ids);
  }, [savedCards]);

  useEffect(() => {
    setInitialCountCards();
  }, [index]);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
        auth.checkToken(token)
        .then((res) => {
            if (res){
              setLoggedIn(true);
            }
        })
        .catch(err => console.log(err));
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token && loggedIn) {
      navigate("/movies", {replace: true})
      fetchUserData();
      getDefaultCard();
      getSavedMovies();
    }
  }, [loggedIn]);


  function fetchUserData() {
    api.getUserData()
    .then(data => {
      if(data) {
        localStorage.setItem('name', data.name);
        setCurentUser({name:localStorage.name, email:localStorage.email});
      }
    })
    .catch(err => console.log(err))
  }

  function getDefaultCard() {
    moviesApi.getInitialCards()
    .then(data => {
      setIsLoading(false);
      setInitialCards(data);
    })
    .catch(err => console.log(err))
    .finally(() => {
      setIsLoading(false);
    })
  }

  function getSavedMovies() {
    api.getSavedMovies()
    .then(res => {
      setSavedCards(res);
    })
    .catch(err => console.log(err));
  }

  function setInitialCountCards() {
    if (window.innerWidth < 1230) {
      if (window.innerWidth < 768) {
        setIndex(6);
      } else {
        setIndex(9);
      }
    }
  }

  function saveMovie(movie) {
    if (savedIds.has(movie.id)) {
      return;
    } else {
      api.saveMovie(movie)
      .then(res => {
        setSavedCards([res, ...savedCards]);
      })
      .catch(err => console.log(err));
    }
  }

  function deleteMovie(movie) {
    api.deleteMovie(movie._id)
    .then(res => {
      setSavedCards((movies) => movies.filter(item => item._id !== movie._id) )
    })
    .catch(err => console.log(err));
  }

  function signOut(){
    localStorage.removeItem('jwt');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    setLoggedIn(false);
    navigate("/signin", {replace:true});
  }

  const handleLogin = () => {
    setLoggedIn(true);
  }

  function plusIndex() {
    if (window.innerWidth > 1230) {
      setIndex(index + 3);
    } else {
      setIndex(index + 2);
    }
  }

  function updateUser(name, email) {
    api.updateUser(name, email)
    .then(res => {
      setIsLoading(false);
      return res;
    })
    .catch(err => console.log(err))
    .finally(() => {
      setIsLoading(false);
    })
  }

  function navigateToMain() {
    navigate('/', {replace: true});
    closePopup()
  }

  function navigateToMovies() {
    navigate('/movies', {replace: true});
    setFilterButton(false);
    setIsSearchFormText("");
    closePopup()
  }

  function navigateToSavedMovies() {
    navigate('/saved-movies', {replace: true});
    setFilterButton(false);
    setIsSearchFormText("");
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
        <>
          <Main 
            loggedIn={loggedIn}
            navigateToRegister={navigateToRegister}
            navigateToLogin={navigateToLogin}
            navigateToSavedMovies={navigateToSavedMovies} 
            navigateToMovies={navigateToMovies}
            navigateToProfile={navigateToProfile}
          />
          <Footer/>
        </>}
      />
      <Route element={<ProtectedRouteElement loggedIn={loggedIn}/>}>
          <Route path='/movies' element={
            <Movies
              array={cards}
              navigateToMain={navigateToMain} 
              navigateToSavedMovies={navigateToSavedMovies}
              navigateToProfile={navigateToProfile}
              onPopup={popupOpen}
              isOpen={isPopup}
              onClose={closePopup}
              likeCard={saveMovie}
              savedIds={savedIds}
              index={index}
              plusIndex={plusIndex}
              filterButton={filterButton}
              setFilterButton={setFilterButton}
              setIsSearchFormText={setIsSearchFormText}
              searchFormText={searchFormText}
              isLoading={isLoading}
            />
          }/>
          <Route path='/saved-movies' element={
            <SavedMovies
              array = {savedCards}
              navigateToMain={navigateToMain}
              navigateToMovies={navigateToMovies}
              navigateToProfile={navigateToProfile}
              onPopup={popupOpen}
              isOpen={isPopup}
              onClose={closePopup}
              deleteMovie={deleteMovie}
              savedIds={savedIds}
              filterButton={filterButton}
              setFilterButton={setFilterButton}
              setIsSearchFormText={setIsSearchFormText}
              searchFormText={searchFormText}
            />
          }/>
          <Route path='/profile' element={
            <CurrentUserContext.Provider value={currentUser}>
              <Profile
                signOut={signOut}
                currentUser={currentUser}
                navigateToMain={navigateToMain}
                navigateToMovies={navigateToMovies}
                navigateToSavedMovies={navigateToSavedMovies}
                onPopup={popupOpen}
                isOpen={isPopup}
                onClose={closePopup}
                updateUser={updateUser}
                isLoading={isLoading}
              />
            </CurrentUserContext.Provider>
          }/>
      </Route>
      

      <Route path='/signup' element=
        {<Register 
          navigateToMain={navigateToMain}
          navigateToLogin={navigateToLogin}
        />}
      />
      <Route path='/signin' element={
        <Login
          navigateToMain={navigateToMain}
          navigateToMovies={navigateToMovies}
          handleLogin={handleLogin}
        />}
      />
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  );
}

export default App;