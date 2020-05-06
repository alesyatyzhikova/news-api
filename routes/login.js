const router = require('express').Router();
const cors = require('cors');

const { login } = require('../controllers/users');
const { validLoginUser } = require('../middlewars/validation');

router.use(cors);

// Аутентификация пользователя
router.post('/', validLoginUser, login);


module.exports = router;
