const express = require('express');
const mongoose = require('mongoose');

const { PORT, DATABASE } = require('./config');
const routes = require('./routes');

const app = express();

// Подключаем бд
mongoose.connect(DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
  .then(() => console.log('Подключение к базе успешно'))
  .catch((err) => err.message);

// Подключаем роуты
app.use(routes);

app.listen(PORT);
