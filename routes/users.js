const router = require('express').Router();

const { getUser } = require('../controllers/users');
const auth = require('../middlewars/auth');

router.use(auth);

// Получаем объект пользователя
router.get('/me', getUser);

module.exports = router;
