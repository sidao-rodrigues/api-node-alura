const Sequelize = require('sequelize');
const config = require('config');

const instance = new Sequelize(
  config.get('postgre.data-base'),
  config.get('postgre.user'),
  config.get('postgre.password'),
  {
    host: config.get('postgre.host'),
    dialect: 'postgres'
  }
);

module.exports = instance