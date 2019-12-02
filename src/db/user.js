const Sequelize = require('sequelize')
const Conn = require('./conn')

/**
 * 创建 User Model
 */
const User = Conn.define('user', {
  // 用户名，这个是可以在小程序中进行编辑的，区别于微信本身的 nickName 这个属性是微信本身的昵称
  userName: {
    type: Sequelize.STRING,
  },

  // 用户登录密码，可能一般用户是没有密码的，通过微信 openId 登录
  password: {
    type: Sequelize.STRING,
  },

  // 用户必须绑定手机号码
  phone: {
    type: Sequelize.STRING,
  },

  // 微信获取的昵称
  nickName: {
    type: Sequelize.STRING,
  },

  // 用户头像
  avatarUrl: {
    type: Sequelize.STRING,
  },

  // 用户openId 用户的唯一标识也用于小程序登录的标志，可以用于jwt加密字段
  openId: {
    type: Sequelize.STRING,
  },

  /** 
   * 用户类型：主要用于管理后台登录
   *    学校管理员: -2   可以处理学生购买课程操作，因为目前第一期并没有微信支付，所以只能老师手动操作
   *    超级管理员: -1   
   *    一般用户:  0
   *    老师: 1
   */
  userType: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },

  // 描述
  description: {
    type: Sequelize.TEXT,
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

module.exports = User