const router = require('express').Router();
const { errors } = require('celebrate');
const helmet = require('helmet');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const regisration = require('./registration');
const login = require('./login');
const articles = require('./articles');
const users = require('./users');

const { requestLogger, errorLogger } = require('../middlewars/logger');
const { errorHandler } = require('../middlewars/error-handler');
const { apiLimiter } = require('../middlewars/api-limiter');
const { messages } = require('../errors/error-messages');

// Cookie и body парсеры
router.use(cookieParser());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Логирование запросов
router.use(requestLogger);

// Безопасность запросов и лимитирование
router.use(helmet());
router.use(apiLimiter);

// Регистрация и аутентификация
router.use('/signup', regisration);
router.use('/signin', login);

// Запросы с авторизацией
router.use('/articles', articles);
router.use('/users', users);
router.all('*', (req, res) => {
  res.status(404).json({ message: messages.requestError.notFound });
});

// Ошибки
router.use(errorLogger);
router.use(errors());
router.use(errorHandler);

module.exports = router;