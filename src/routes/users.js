const router = require('koa-router')()
router.prefix('/api/users')
const { addUser, editUser, findUserByOpenId } = require('../controller/UserController')

router.post('/add', async (ctx) => {
  const { userName, password, phone, nickName, avatarUrl, openId, description } = ctx.request.body
  console.log(`section router: ${JSON.stringify(ctx.request.body)}`)
  try {
    const addResult = await addUser({ userName, password, phone, nickName, avatarUrl, openId, description })
    ctx.body = {
      code: 0,
      data: addResult
    }
  } catch (error) {
    console.log(error)
    ctx.body = {
      code: -1,
      message: '创建用户失败',
    }
  }
})

/**
 *  根据 openId 查找用户是否存在 
 */
router.get('/find_user', async (ctx) => {
  const { openId } = ctx.request.query
  console.log(ctx.request.query)
  console.log(`===> openId: ${openId}`)
  try {
    let result = await findUserByOpenId(openId)
    ctx.body = {
      code: 0,
      data: result,
    }
  } catch (error) {
    ctx.body = {
      code: -1,
      message: '使用openId查询用户出现问题',
    }
  }
})

module.exports = router
