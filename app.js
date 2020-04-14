const express = require('express');
const mongoose = require('mongoose');

const { PORT, DATABASE, NODE_ENV } = require('./config');
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
  .catch((err) => console.log(err.message));

// Подключаем роуты
app.use(routes);

app.listen(PORT, () => {
  console.log(NODE_ENV);
});
