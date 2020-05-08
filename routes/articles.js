const router = require('express').Router();
const cors = require('cors');

const { getArticles, createArticle, deleteArticle } = require('../controllers/articles');
const { validCreateArticle, validDeleteArticle } = require('../middlewars/validation');
const auth = require('../middlewars/auth');

router.use(cors({
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200,
  credentials: 'include',
}));
router.use(auth);

// Получаем все сохраненные статьи пользователя
router.get('/', getArticles);

// Создаем статью
router.post('/', validCreateArticle, createArticle);

// Удаляем статью
router.delete('/:id', validDeleteArticle, deleteArticle);

module.exports = router;
