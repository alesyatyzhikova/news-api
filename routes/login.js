const router = require('express').Router();
const cors = require('cors');

const { login } = require('../controllers/users');
const { validLoginUser } = require('../middlewars/validation');

router.use(cors({
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200,
  credentials: 'include',
}));

// Аутентификация пользователя
router.post('/', validLoginUser, login);


module.exports = router;
