const error = require('../costants/errors');

class NotAuthError extends Error {
  constructor(message) {
    super(message);
    this.status = 401;
    this.message = { error: message || error.NOT_AUTH };
  }
}

module.exports = NotAuthError;
