const error = require('../costants/errors');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    this.message = message || error.NOT_FOUND;
  }
}

module.exports = NotFoundError;
