const mongoose = require('mongoose');
const validator = require('validator');

const { messages } = require('../errors/error-messages');

const articleSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isURL(value),
      message: messages.text.textUrl,
    },
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isURL(value),
      message: messages.text.textUrl,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    select: false
  },
},
  {
    versionKey: false,
  },
)

module.exports = mongoose.model('article', articleSchema);