const error = require('../costants/errors');

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.status = 403;
    this.message = { error: message || error.FORBIDDEN };
  }
}

module.exports = ForbiddenError;
