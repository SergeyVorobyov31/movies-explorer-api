const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getMovie, createMovie, deleteMovie,
} = require('../controllers/movies');

router.get('/', getMovie);

router.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().min(3).required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().min(4).required(),
    description: Joi.string().required(),
    image: Joi.string().regex(/[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/i).required(),
    trailerLink: Joi.string().regex(/[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/i).required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().regex(/[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/i).required(),
    movieId: Joi.number().required(),
  }),
}), createMovie);

router.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().length(24).hex().required(),
  }),
}), deleteMovie);

module.exports = router;
