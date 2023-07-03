class MoviesApi {
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

    getInitialCards() {
        return fetch(`${this._url}`, {
                headers: this._options.headers
        })
        .then(res => this._checkResponse(res))
        .then((result) => {
            return result;
        })
    }
}

export default MoviesApi;