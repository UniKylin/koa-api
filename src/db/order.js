const Sequelize = require('sequelize')
const Conn = require('./conn')

/**
 * 创建 Order Model
 */
const Order = Conn.define('order', {
  
  // 用户 id，其实就是用户 openId
  userId: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  // 课程 id
  courseId: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  /**
   * 单独购买: 0 默认
   * 拼单购买: 1
   */
  buyType: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 0,
  },

  /**
   * 所有数据不能物理删除 !!!
   * 0: 正常  -1: 删除
   */ 
  remove: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  }
  
})

module.exports = Order
