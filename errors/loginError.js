const error = require('../costants/errors');

class NotAuthError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
    this.message = { error: message || error.LOGIN_ERROR };
  }
}

module.exports = NotAuthError;
