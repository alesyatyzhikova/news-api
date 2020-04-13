const { messages } = require('../errors/error-messages');

module.exports.errorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).send({ message: err.statusCode === 500 ? messages.requestError.serverError : err.message });
};