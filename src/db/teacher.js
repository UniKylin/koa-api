const Sequelize = require('sequelize')
const Conn = require('./conn')

const Teacher = Conn.define('teacher', {
  // 老师名字
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  // 老师介绍
  remark: {
    type: Sequelize.STRING,
  },

  // 课程 id
  courseId: {
    type: Sequelize.STRING,
    allowNull: false,
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

module.exports = Teacher