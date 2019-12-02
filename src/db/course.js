const Sequelize = require('sequelize')
const Conn = require('./conn')

const Course = Conn.define('course', {
  // 课程名称
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  // 课程封面
  cover: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  // 0:视频课 1:音频课
  type: {
    type: Sequelize.STRING,
    defaultValue: 0,
  },

  // 备注
  remark: {
    type: Sequelize.STRING,
  },

  // 学校 id
  schoolId: {
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

module.exports = Course