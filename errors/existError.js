const error = require('../costants/errors');

class ExistError extends Error {
  constructor(message) {
    super(message);
    this.status = 409;
    this.message = { error: message || error.EXIST_ERROR };
  }
}

module.exports = ExistError;
