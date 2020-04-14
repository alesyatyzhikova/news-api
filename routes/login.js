const router = require('express').Router();

const { login } = require('../controllers/users');
const { validLoginUser } = require('../middlewars/validation');


// Аутентификация пользователя
router.post('/', validLoginUser, login);


module.exports = router;
