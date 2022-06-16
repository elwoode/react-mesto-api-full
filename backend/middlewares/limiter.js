const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
})

const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 1, // Limit each IP to 5 create account requests per `window` (here, per hour)
  message:
    'Слишком много учетных записей, созданных с этого IP- адреса, пожалуйста, повторите попытку через час',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

module.exports = {
  limiter,
  createAccountLimiter,
};
