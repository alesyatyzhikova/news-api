const error = require('../costants/errors');

class ExistError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 409;
    this.message = message || error.EXIST_ERROR;
  }
}

module.exports = ExistError;
