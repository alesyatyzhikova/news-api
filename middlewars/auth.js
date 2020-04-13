const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');
const NotAuthError = require('../errors/notAuthError');
const { messages } = require('../errors/error-messages');

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) throw new NotAuthError(messages.user.notAuth);

  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    const error = new NotAuthError(messages.user.notAuth);
    next(error);
  }

  req.user = payload;

  next();
};