const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');
require('dotenv').config();

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    next(new UnauthorizedError('Необходима авторизация'));
    return;
  }
  const token = req.headers.authorization;
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (e) {
    next(new UnauthorizedError('Необходима авторизация'));
    return;
  }

  req.user = payload;
  next();
};
