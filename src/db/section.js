const Sequelize = require('sequelize')
const Conn = require('./conn')

const Section = Conn.define('section', {
  // 章节名称
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  // 课程地址
  sourceUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  // 备注
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

module.exports = Section