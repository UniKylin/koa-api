const Sequelize = require('sequelize')
const Conn = require('./conn')

// 创建 school 模型 , 数据表的名字 schools
const School = Conn.define('school', {
  // id 自动设置为主键，并且自增
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  avatar: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },

  /**
   * 所有数据不能物理删除 !!!
   * 0: 正常  1: 删除
   */ 
  remove: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  }
  // 自动创建 createdAt 和 updatedAt
})

module.exports = School