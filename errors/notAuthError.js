const error = require('../costants/errors');

class NotAuthError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 401;
    this.message = message || error.NOT_AUTH;
  }
}

module.exports = NotAuthError;
