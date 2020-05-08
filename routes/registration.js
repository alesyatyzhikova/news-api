const router = require('express').Router();

const { createUser } = require('../controllers/users');
const { validRegistrationUser } = require('../middlewars/validation');

// Регистрация пользователя
router.post('/', validRegistrationUser, createUser);


module.exports = router;
