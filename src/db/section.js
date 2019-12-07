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

  // 试看标志 0: 不可以试看  1: 可以试看
  preview: {
    type: Sequelize.STRING,
    defaultValue: 0,
  },

  // 备注
  remark: {
    type: Sequelize.STRING,
  },

  // 0:视频课 1:音频课
  type: {
    type: Sequelize.STRING,
    defaultValue: 0,
  },

  // 课程 id
  courseId: {
    type: Sequelize.STRING,
    allowNull: false,
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

module.exports = Section