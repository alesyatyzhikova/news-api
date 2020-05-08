const router = require('express').Router();
const cors = require('cors');

const { login } = require('../controllers/users');
const { validLoginUser } = require('../middlewars/validation');

router.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true,
}));

// Аутентификация пользователя
router.post('/', validLoginUser, login);


module.exports = router;
