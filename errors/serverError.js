const error = require('../costants/errors');

class ServerError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 500;
    this.message = message || error.SERVER_ERROR;
  }
}

module.exports = ServerError;
