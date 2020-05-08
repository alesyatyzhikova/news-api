const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');
const NotAuthError = require('../errors/notAuthError');

module.exports = (req, res, next) => {
  const { authorization } = req.header;

  if (!authorization) throw new NotAuthError();

  let payload;
  const token = authorization.split(' ')[1];

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    const error = new NotAuthError();
    next(error);
  }

  req.user = payload;

  next();
};
