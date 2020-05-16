const error = require('../costants/errors');

class ServerError extends Error {
  constructor(message) {
    super(message);
    this.status = 500;
    this.message = { error: message || error.SERVER_ERROR };
  }
}

module.exports = ServerError;
