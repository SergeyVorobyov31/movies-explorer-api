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
  const [index, setIndex] = useState();
  const [filterButton, setFilterButton] = useState(localStorage.filterButton);
  const [savedFilterButton, setSavedFilterButton] = useState(false);
  const [searchFormText, setIsSearchFormText] = useState(localStorage.searchFormText);
  const [savedSearchFormText, setIsSavedSearchFormText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [buttonMore, setButtonMore] = useState(true);
  const [successfulMessage, setSuccessfulMessage] = useState('');
  
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
  }, []);

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
    }
  }, [currentUser]);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token && loggedIn) {
      fetchUserData();
      getDefaultCard();
      getSavedMovies();
      setFilterButton(localStorage.filterButton);
      setSavedFilterButton(localStorage.savedFilterButton);
      setIsSearchFormText(localStorage.searchFormText);
      setIsSavedSearchFormText(localStorage.savedSearchFormText);
      if (localStorage.searchFormText !== "") {
        setButtonMore(false);
      }
      if (localStorage.searchFormText === "" && localStorage.filterButton.startsWith("true")) {
        setButtonMore(false);
      }
    }
  }, [loggedIn]);


  function fetchUserData() {
    api.getUserData()
    .then(data => {
      if(data) {
        localStorage.setItem('name', data.name);
        localStorage.setItem('email', data.email);
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
    } else {
      setIndex(13);
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
    const card = savedCards.find((card => movie.id === card.movieId));;
    api.deleteMovie(card._id)
    .then(res => {
      console.log(res);
      setSavedCards((movies) => movies.filter(item => item._id !== card._id) )
    })
    .catch(err => console.log(err));
  }

  function deleteSavedMovie(movie) {
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
    localStorage.removeItem('filterButton');
    localStorage.removeItem('savedFilterButton');
    localStorage.removeItem('searchFormText');
    localStorage.removeItem('savedSearchFormText');
    setSavedFilterButton(false)
    setIsSavedSearchFormText("");
    setLoggedIn(false);
    navigate("/", {replace:true});
  }

  const handleLogin = () => {
    setLoggedIn(true);
    setSavedFilterButton(false)
    setFilterButton(false);
    setIsSearchFormText("");
    localStorage.setItem('savedFilterButton', savedFilterButton);
    localStorage.setItem('savedSearchFormText', savedSearchFormText);
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
      setCurentUser({
        name: res.name,
        email: res.email
      })
      setSuccessfulMessage('Профиль успешно редактирован!');
      setTimeout(setSuccessfulMessage, 3000, "");
    })
    .catch(err => {
      console.log(err);
      setSuccessfulMessage(err);
      setTimeout(setSuccessfulMessage, 3000, "");
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  function navigateToMain() {
    navigate('/', {replace: true});
    closePopup()
  }

  function navigateToMovies() {
    navigate('/movies', {replace: false});
    if (searchFormText === "") {
      setButtonMore(true);
    } else {
      setButtonMore(false);
    }
    closePopup()
  }

  function navigateToSavedMovies() {
    navigate('/saved-movies', {replace: true});
    closePopup()
  }

  function navigateToProfile() {
    setSuccessfulMessage("");
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

              deleteMovie={deleteMovie}

              savedIds={savedIds}
              index={index}
              plusIndex={plusIndex}
              filterButton={filterButton}
              setFilterButton={setFilterButton}
              setIsSearchFormText={setIsSearchFormText}
              searchFormText={searchFormText}
              isLoading={isLoading}
              buttonMore={buttonMore}
              setButtonMore={setButtonMore}
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
              // deleteMovie={deleteMovie}

              deleteSavedMovie={deleteSavedMovie}

              savedIds={savedIds}
              savedFilterButton={savedFilterButton}
              setSavedFilterButton={setSavedFilterButton}
              setIsSavedSearchFormText={setIsSavedSearchFormText}
              savedSearchFormText={savedSearchFormText}
              setButtonMore={setButtonMore}
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

                successfulMessage={successfulMessage}
                setSuccessfulMessage={setSuccessfulMessage}
              />
            </CurrentUserContext.Provider>
          }/>
      </Route>
      

      <Route path='/signup' element=
        {<Register 
          navigateToMain={navigateToMain}
          navigateToLogin={navigateToLogin}
          handleLogin={handleLogin}
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