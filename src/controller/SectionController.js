const { list, create, edit } = require('../service/SectionService')
const { haveCourse } = require('../service/OrderService')

/**
 * 根据课程id查询章节 
 */
async function getSectionList({ openId, courseId }) {
  const sectionList = await list(courseId)
  const isBuyCourse = await haveCourse({ openId, courseId })
  console.log(`--------------> isBuyCourse: ${isBuyCourse}`)
  // 用户购买了，则返回所有的 sourceUrl
  if (isBuyCourse) {
    // console.log(
    //   'sectionListCount => ', 
    //   sectionList.count,
    //   sectionList.rows.map(section => section.dataValues)
    // )
    // const { count } = sectionList
    return {
      data: sectionList.rows.map(section => section.dataValues)
    }
  } else {
    // 用户没有购买，返回预览 sourceUrl
    const data = sectionList.rows.map(section => {
      const { id, title, sourceUrl, preview } = section.dataValues
      // console.log(`---> id: ${id} --> title: ${title} --> sourceUrl: ${sourceUrl} --> preview: ${preview}`)
      if (preview === '1') {
        return { id, title, sourceUrl, preview, }
      } else {
        return { id, title, sourceUrl: '', preview, }
      }
    })
    console.log(`-----------------------------------`)
    console.log(data)
    return data
  }
}

async function addSection({ title, sourceUrl, remark, type, courseId, preview }) {
  const result = await create({ title, sourceUrl, remark, type, courseId, preview })
  console.log(`===> controller add section: ${result}`)
  return result
}

async function editSection({ id, title, sourceUrl, remark, type, courseId, remove, preview }) {
  const result = await edit({ id, title, sourceUrl, remark, type, courseId, remove, preview  })
  console.log(`===> controller edit section: ${result}`)
  return result
}

module.exports = {
  addSection,
  editSection,
  getSectionList,
}