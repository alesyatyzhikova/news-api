const ServerError = require('../errors/serverError');

module.exports.errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || new ServerError();
  if (res.headerSent) {
    return next(err);
  }
  return res.status(status).send(message);
};
