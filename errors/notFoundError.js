const error = require('../costants/errors');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
    this.message = { error: message || error.NOT_FOUND };
  }
}

module.exports = NotFoundError;
