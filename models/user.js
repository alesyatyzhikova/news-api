const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const { messages } = require('../errors/error-messages');
const LoginError = require('../errors/loginError');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: messages.email.emailInvalid,
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
},
{
  versionKey: false,
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new LoginError();
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new LoginError();
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
