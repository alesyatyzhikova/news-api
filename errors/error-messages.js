const messages = {
  email: {
    emailEmpty: 'Поле email не должно быть пустым',
    emailInvalid: 'Введите верный формат для email',
    emailRequired: 'Поле email обязательно',
    emailUnique: 'Такой email уже существует',
  },
  password: {
    passwordEmpty: 'Поле пароль не должно быть пустым',
    passwordRequired: 'Поле пароль обязательно',
    passwordMin: 'Пароль должен содержать минимум 8 знаков',
    passwordPattern: 'Пароль должен содержать латинские буквы и символы, как минимум одну строчную и одну заглавную букву и одну цифру',
  },
  text: {
    textEmpty: 'Поле пароль не должно быть пустым',
    textRequired: 'Поле обязательно',
    textMin: 'Поле должно содержать минимум 2 знака',
    textMax: 'Поле должно содержать максимум 30 знаков',
    textUrl: 'Здесь должна быть ссылка',
  },
  id: {
    idLength: 'id должно содержать 24 знака',
  },
  user: {
    notAuth: 'Нужна авторизация',
    errorAuth: 'Неправильные почта или пароль',
    notExist: 'Пользователя не существует',
  },
  article: {
    notExist: 'Такой статьи не существует',
    forbidden: 'Нет прав на удаление статьи',
    successDelete: 'Статья удалена успешно',
  },
};

module.exports = {
  messages,
};
