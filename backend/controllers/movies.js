const Movie = require('../models/movie');
const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const ServerError = require('../errors/ServerError');
const ForbiddenError = require('../errors/ForbiddenError');

module.exports.getMovie = (req, res, next) => {
  const owner = req.user.id;
  Movie.find({})
    .then((movies) => {
      const arr = movies.map((movie) => {
        if (movie.owner.toString() === owner) {
          return movie;
        }
        return movies;
      });
      res.send(arr);
    })
    .catch(() => {
      next(new ServerError('Ошибка на сервере'));
    });
};

module.exports.createMovie = (req, res, next) => {
  const owner = req.user.id;
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    owner,
    movieId,
  })
    .then((newMovie) => {
      res.send(newMovie);
    })
    .catch((e) => {
      if (e.name === 'ValidationError') {
        next(new BadRequestError('Введены некоректные данные.'));
      } else {
        next(new ServerError('Ошибка на сервере.'));
      }
    });
};

module.exports.deleteMovie = (req, res, next) => {
  const { movieId } = req.params;
  const owner = req.user.id;
  Movie.findById(movieId)
    .then((movie) => {
      if (!movie) {
        next(new NotFoundError('Фильм не найден.'));
        return;
      }
      const cardOwner = movie.owner.toString();
      if (owner !== cardOwner) {
        next(new ForbiddenError('Фильм не принадлежит данному пользователю.'));
      } else {
        Movie.findByIdAndRemove(movieId)
          .then(() => {
            res.send({ message: 'Фильм успешно удален' });
          })
          .catch(() => {
            next(new ServerError('Ошибка на сервере.'));
          });
      }
    })
    .catch((e) => {
      res.send(e);
      if (e.name === 'CastError') {
        next(new BadRequestError('Передан некорректный id.'));
      } else {
        next(new ServerError('Ошибка на сервере.'));
      }
    });
};
