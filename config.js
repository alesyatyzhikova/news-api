require('dotenv').config();

const { NODE_ENV } = process.env;
const PORT = process.env.PORT || 3000;
const DATABASE = NODE_ENV === 'production' ? process.env.DATABASE : 'mongodb://localhost:27017/newsdb';
const JWT_SECRET = NODE_ENV === 'production' ? process.env.JWT_SECRET : 'dev-secret-key';

module.exports = {
  PORT,
  DATABASE,
  JWT_SECRET,
};
