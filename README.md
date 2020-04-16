# news-api
Бэкенд для проекта поиска новостей
==============

### Дипломная работа с созданием сервера и базой данных MongoDB express.js ###


###### Для работы использовала: ######

* HTML
* CSS
* JavaScript (ES6, modules)
* Node.js
* Express.js
* MongoDB


###### Для установки и запуска проекта локально необходимо: ######

* Установить Node.js (если не установлено)
* Клонировать репозиторий: git clone https://github.com/alesyatyzhikova/news-api.git
* Установить зависимости: npm init => npm install
* Запустить сервер командой npm run start
* Для автоматической перезагрузки сервера использовать команду npm run dev
* Для автоматического запуска приложения после падения использовать команду pm2 start app.js --watch


###### Запросы для сервера: ######
 - Для локальной разработки можно использовать запросы вида http://localhost:3000/ и https://api.news-praktikum.tk/

* POST http://localhost:3000/signup - создание пользователя 
 - в тело запроса передаем поля name, email, password

* POST http://localhost:3000/signin - авторизация пользователя (возвращает токен JWT)
 - в тело запроса передаем поля email, password

###### Запросы для сервера, для которых нужна авторизация: ######
* GET http://localhost:3000/articles - для получения всех статей, сохраненных пользователем

* POST http://localhost:3000/articles - для создания статьи
 - в тело запроса передаем поля keyword, title, text, date, source, link, image

* DELETE http://localhost:3000/articles/:id - для удаления статьи по _id

* GET http://localhost:3000/users/me - для получения информации о пользователе (email, name)

* http://localhost:3000/что_угодно - вернет ошибку со статусом 404 - Не найдено

* http://api.news-praktikum.tk - обратиться к серверу
* https://api.news-praktikum.tk - обратиться к серверу
* 130.193.44.153 - обратиться к серверу по IP адресу
