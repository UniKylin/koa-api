const router = require('koa-router')()
router.prefix('/api/section')

const { getSectionList, addSection, editSection } = require('../controller/SectionController')

router.post('/add', async (ctx) => {
  const { title, sourceUrl, remark, type, courseId, preview } = ctx.request.body
  console.log(`section router: ${JSON.stringify(ctx.request.body)}`)
  try {
    const addResult = await addSection({ title, sourceUrl, remark, type, courseId, preview })
    ctx.body = {
      code: 0,
      data: addResult
    }
  } catch (error) {
    console.log(error)
    ctx.body = {
      code: -1,
      message: '创建章节失败',
    }
  }
})

/**
 * 1. 可以编辑普通课程
 * 2. 可以修改 `preview` 字段设置为可以预览课程
 */
router.put('/edit', async (ctx) => {
  const { id, title, sourceUrl, remark, type, courseId, remove, preview } = ctx.request.body
  console.log(`===> section edit route: ${JSON.stringify(ctx.request.body)}`)
  try {
    const editResult = await editSection({ id, title, sourceUrl, remark, type, courseId, remove, preview })
    ctx.body = {
      code: 0,
      data: editResult,
    }
  } catch (error) {
    console.log(error)
    ctx.body = {
      code: -1,
      message: '编辑章节失败',
    }
  }
})

/**
 *  已经购买了返回观看课程地址的列表(字段 sourceUrl) 
 */
router.get('/all_list', async (ctx) => {
  const { courseId, openId } = ctx.request.query
  console.log(`courseId => ${courseId}`)
  try {
    let sectionList = await getSectionList({ openId, courseId })
    console.log(`---------> section router: ${JSON.stringify(sectionList)}`)
    ctx.body = {
      code: 0,
      data: sectionList,
    }
  } catch (error) {
    ctx.body = {
      code: -1,
      message: '获取章节列表出现问题',
    }
  }
})

router.get('/preview_list', async (ctx) => {
  const { courseId } = ctx.request.query
  console.log(`courseId => ${courseId}`)
  try {
    const sectionList = await getSectionList(courseId)
    
    ctx.body = {
      code: 0,
      data: sectionList,
    }
  } catch (error) {
    ctx.body = {
      code: -1,
      message: '获取章节列表出现问题',
    }
  }
})

module.exports = router
