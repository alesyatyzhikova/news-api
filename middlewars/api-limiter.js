const RateLimit = require('express-rate-limit');

const apiLimiter = new RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 150,
});

module.exports = {
  apiLimiter,
};
