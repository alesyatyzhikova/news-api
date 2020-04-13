const { celebrate, Joi } = require('celebrate');

const { messages } = require('../errors/error-messages');

module.exports.validRegistrationUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30).messages({
      'string.empty': messages.text.textEmpty,
      'any.required': messages.text.textRequired,
      'string.min': messages.text.textMin,
      'string.max': messages.text.textMax,
    }),
    email: Joi.string().required().email().messages({
      'string.empty': messages.email.emailEmpty,
      'any.required': messages.email.emailRequired,
      'string.email': messages.email.emailInvalid,
    }),
    password: Joi.string().required().min(8).pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/).messages({
      'string.empty': messages.password.passwordEmpty,
      'any.required': messages.password.passwordRequired,
      'string.min': messages.password.passwordMin,
      'string.pattern.base': messages.password.passwordPattern,
    }),
  })
});

module.exports.validLoginUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      'string.empty': messages.email.emailEmpty,
      'any.required': messages.email.emailRequired,
      'string.email': messages.email.emailInvalid,
    }),
    password: Joi.string().required().min(8).messages({
      'string.empty': messages.password.passwordEmpty,
      'any.required': messages.password.passwordRequired,
      'string.min': messages.password.passwordMin,
    }),
  })
});

module.exports.validCreateArticle = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required().messages({
      'string.empty': messages.text.textEmpty,
      'any.required': messages.text.textEmpty,
    }),
    title: Joi.string().required().messages({
      'string.empty': messages.text.textEmpty,
      'any.required': messages.text.textEmpty,
    }),
    text: Joi.string().required().messages({
      'string.empty': messages.text.textEmpty,
      'any.required': messages.text.textEmpty,
    }),
    date: Joi.string().required().messages({
      'string.empty': messages.text.textEmpty,
      'any.required': messages.text.textEmpty,
    }),
    source: Joi.string().required().uri().messages({
      'string.empty': messages.text.textEmpty,
      'any.required': messages.text.textEmpty,
      'string.uri': messages.text.textUrl
    }),
    link: Joi.string().required().uri().messages({
      'string.empty': messages.text.textEmpty,
      'any.required': messages.text.textEmpty,
      'string.uri': messages.text.textUrl
    }),
    image: Joi.string().required().uri().messages({
      'string.empty': messages.text.textEmpty,
      'any.required': messages.text.textEmpty,
      'string.uri': messages.text.textUrl
    }),
  })
});

module.exports.validDeleteArticle = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().alphanum().length(24).messages({
      'any.required': messages.text.textRequired,
      'string.length': messages.id.idLength
    }),
  }),
})