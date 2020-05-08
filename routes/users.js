const router = require('express').Router();
const cors = require('cors');

const { getUser } = require('../controllers/users');
const auth = require('../middlewars/auth');

router.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: 'include',
}));
router.use(auth);

// Получаем объект пользователя
router.get('/me', getUser);

module.exports = router;
