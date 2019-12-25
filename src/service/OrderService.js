const OrderModel = require('../db/order')

/**
 * 根据用户 openId courseId 判断课程是否已经购买
 *
 * @param {*} courseId
 * @returns 
 *  1: 已经购买
 *  0: 没有购买
 */
async function haveCourse({ openId, courseId }) {
  const result = await OrderModel.findAndCountAll({
    where: { courseId, userId: openId }
  })
  const { count } = result
  console.log(`===> service order list: ${JSON.stringify(result)}`)
  return count
}

/**
 * 创建订单
 *
 * @param {*} { userId, courseId, buyType }
 * @returns
 */
async function create({ openId, courseId, buyType }) {
  const result = await OrderModel.create({ userId: openId, courseId, buyType })
  console.log(`===> service create order: ${result}`)
  return result 
}

module.exports = {
  haveCourse,
  create,
}