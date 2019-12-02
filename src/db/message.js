const Sequelize = require('sequelize')
const Conn = require('./conn')

/**
 * 创建 Course Model
 */
const Message = Conn.define('message', {
  // 评论标题
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  
  // 评论内容
  content: {
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

})

module.exports = Message
