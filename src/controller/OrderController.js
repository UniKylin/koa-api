const { haveCourse, create } = require('../service/OrderService')

async function isOwnCourse({ openId, courseId }) {
  const result = await haveCourse({ openId, courseId })
  console.log(`------------> order controller: ${JSON.stringify(result)}`)
  return result
}

async function addOrder({ openId, courseId, buyType }) {
  const result = await create({ openId, courseId, buyType })
  console.log(`===> controller add order: ${result}`)
  return result
}

module.exports = {
  isOwnCourse,
  addOrder,
}