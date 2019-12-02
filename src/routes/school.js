const router = require('koa-router')()
router.prefix('/api/school')

const { getSchoolList, addSchool } = require('../controller/SchoolController')

router.get('/list', async (ctx) => {
  try {
    const schoolList = await getSchoolList()
    ctx.body = {
      code: 0,
      data: schoolList,
    }
  } catch (error) {
    ctx.body = {
      code: -1,
      message: '获取学校出现问题',
    }
  }
})

router.post('/add', async (ctx) => {
  const { name, avatar, description } = ctx.request.body
  console.log(ctx.request.body)
  console.log(`===> route name: ${name} avatar: ${avatar} description: ${description}`)
  try {
    const addResult = await addSchool({ name, avatar, description })
    ctx.body = {
      code: 0,
      data: addResult
    }
  } catch (error) {
    console.log(error)
    ctx.body = {
      code: -1,
      message: '创建学校失败',
    }
  }
})


module.exports = router
