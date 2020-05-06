const router = require('express').Router();
const cors = require('cors');

const { createUser } = require('../controllers/users');
const { validRegistrationUser } = require('../middlewars/validation');

router.use(cors());

// Регистрация пользователя
router.post('/', validRegistrationUser, createUser);


module.exports = router;
