const Sequelize = require('sequelize')

const conf = {
  host: 'localhost',
  dialect: 'mysql',
}

const sequelize = new Sequelize('koa', 'root', 'root', conf)

module.exports = sequelize


sequelize.authenticate()
  .then(res => console.log(`Connection successfully...`))
  .catch(err => console.log(`Connection failure...`))