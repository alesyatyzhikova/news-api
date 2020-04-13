const RateLimit = require('express-rate-limit');

const apiLimiter = new RateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes
  max: 10,
});

module.exports = {
  apiLimiter
}