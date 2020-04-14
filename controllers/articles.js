const Article = require('../models/article');
const NotFoundError = require('../errors/notFoundError');
const ForbiddenError = require('../errors/forbiddenError');

// Получаем все сохраненные статьи пользователя
module.exports.getArticles = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .orFail(() => new NotFoundError())
    .then((articles) => res.send({ data: articles }))
    .catch(next);
};

// Создаем статью
module.exports.createArticle = (req, res, next) => {
  const {
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  } = req.body;
  const owner = req.user._id;
  Article.create(
    {
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
      owner,
    },
  )
    .then((article) => res.send({
      data: {
        keyword: article.keyword,
        title: article.title,
        text: article.text,
        date: article.date,
        source: article.source,
        link: article.link,
        image: article.image,
      },
    }))
    .catch(next);
};

// Удаляем статью
module.exports.deleteArticle = (req, res, next) => {
  Article.findById(req.params.id).select('+owner')
    .orFail(() => new NotFoundError())
    .then((article) => {
      if (article.owner._id.toString() !== req.user._id) {
        throw new ForbiddenError();
      }
      return Article.findByIdAndDelete(req.params.id)
        .then(() => res.send('Статья удалена успешно'));
    })
    .catch(next);
};
