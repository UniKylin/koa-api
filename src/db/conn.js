const Sequelize = require('sequelize')

const conf = {
  host: 'localhost',
  dialect: 'mysql',
}

const sequelize = new Sequelize('koa', 'root', 'root', conf)

module.exports = sequelize
