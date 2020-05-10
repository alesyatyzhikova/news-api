const router = require('express').Router();

const { login } = require('../controllers/users');

// Аутентификация пользователя
router.post('/', login);


module.exports = router;
