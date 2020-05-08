const router = require('express').Router();
const cors = require('cors');

const { createUser } = require('../controllers/users');
const { validRegistrationUser } = require('../middlewars/validation');

router.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true,
}));

// Регистрация пользователя
router.post('/', validRegistrationUser, createUser);


module.exports = router;
