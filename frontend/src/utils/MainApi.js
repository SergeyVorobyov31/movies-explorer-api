class MainApi {
    constructor(options) {
        this._options = options;
        this._url = options.baseUrl;
        this._id = options.headers.authorization;
    }

    _checkResponse(res) {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }

    getSavedMovies() {
        return fetch(`${this._url}/movies`, {
                headers: this._options.headers
        })
        .then(res => this._checkResponse(res))
        .then((result) => {
            return result;
        })
        .catch(err => console.log(err));
    }

    getUserData() {
        return fetch(`${this._url}/users/me`, {
            headers: this._options.headers
        })
        .then(res => this._checkResponse(res))
        .then((result) => {
            return result
        })
    }

    saveMovie(movie) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: this._options.headers,
            body: JSON.stringify({
                country: `${movie.country}`,
                director: `${movie.director}`,
                duration: `${movie.duration}`,
                year: `${movie.year}`,
                description: `${movie.description}`,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailerLink: `${movie.trailerLink}`,
                nameRU: `${movie.nameRU}`,
                nameEN: `${movie.nameEN}`,
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                movieId: `${movie.id}`
            })
        })
        .then(res => this._checkResponse(res))
        .catch(err => console.log(err));
    }

    updateUser(nameProfile, emailProfile) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._options.headers,
            body: JSON.stringify({
              name: `${nameProfile}`,
              email: `${emailProfile}`
            })
        })
        .then(res => this._checkResponse(res))
    }

    deleteMovie(cardId) {
        return fetch(`${this._url}/movies/${cardId}`, {
            method: 'DELETE',
            headers: this._options.headers
        })
        .then(res => this._checkResponse(res))
    }
}

export default MainApi;