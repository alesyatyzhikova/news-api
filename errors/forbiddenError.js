const error = require('../costants/errors');

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 403;
    this.message = message || error.FORBIDDEN;
  }
}

module.exports = ForbiddenError;
