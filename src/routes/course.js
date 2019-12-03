const router = require('koa-router')()
router.prefix('/api/course')

const { getCourseList, addCourse, editCourse } = require('../controller/CourseController')

router.get('/list', async (ctx) => {
  const { schoolId } = ctx.request.query
  console.log(`schoolId => ${schoolId}`)
  try {
    const courseList = await getCourseList(schoolId)
    ctx.body = {
      code: 0,
      data: courseList,
    }
  } catch (error) {
    ctx.body = {
      code: -1,
      message: '获取课程列表出现问题',
    }
  }
})

router.post('/add', async (ctx) => {
  const { name, cover, remark, schoolId } = ctx.request.body
  console.log(`router: ${ctx.request.body}`)
  console.log(`===> route name: ${name} cover: ${cover} remark: ${remark} schoolId: ${schoolId}`)
  try {
    const addResult = await addCourse({ name, cover, remark, schoolId })
    ctx.body = {
      code: 0,
      data: addResult
    }
  } catch (error) {
    console.log(error)
    ctx.body = {
      code: -1,
      message: '创建课程失败',
    }
  }
})

router.put('/edit', async (ctx) => {
  const { id, name, cover, remark, schoolId, remove } = ctx.request.body
  console.log(`===> route id: ${id} name: ${name} cover: ${cover} remark: ${remark} schoolId: ${schoolId}`)
  try {
    const editResult = await editCourse({ id, name, cover, remark, schoolId, remove })
    ctx.body = {
      code: 0,
      data: editResult,
    }
  } catch (error) {
    console.log(error)
    ctx.body = {
      code: -1,
      message: '编辑课程失败',
    }
  }
})

module.exports = router
