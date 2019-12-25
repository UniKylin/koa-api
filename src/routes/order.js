const router = require('koa-router')()
router.prefix('/api/order')

const { isOwnCourse, addOrder } = require('../controller/OrderController')

/**
 * 1: 已经购买 
 * 0: 没有购买
 */
router.post('/own_course', async (ctx) => {
  const { openId, courseId } = ctx.request.body
  console.log(`order router: ${JSON.stringify(ctx.request.body)}`)
  try {
    const result = await isOwnCourse({ openId, courseId })
    console.log(`----------> ${JSON.stringify(result)}`)
    ctx.body = {
      code: 0,
      data: result,
    }
  } catch (error) {
    console.log(error)
    ctx.body = {
      code: -1,
      message: '获取购买课程失败',
    }
  }
})

/**
 * 下订单
 * buyType
 *  0: 单独购买
 *  1: 拼单购买
 */
router.post('/add_order', async (ctx) => {
  const { openId, courseId, buyType } = ctx.request.body
  console.log(`add_order router: ${JSON.stringify(ctx.request.body)}`)
  try {
    const result = await addOrder({ openId, courseId, buyType })
    ctx.body = {
      code: 0,
      data: result,
    }
  } catch (error) {
    console.log(error)
    ctx.body = {
      code: -1,
      message: '创建课程订单失败',
    }
  }
})

module.exports = router
