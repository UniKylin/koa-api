const { list, create, edit } = require('../service/SectionService')

async function getSectionList(courseId) {
  const result = await list(courseId)
  console.log(`===> controller section list: ${courseId}`)
  return result
}

async function addSection({ title, sourceUrl, remark, type, courseId }) {
  const result = await create({ title, sourceUrl, remark, type, courseId })
  console.log(`===> controller add section: ${result}`)
  return result
}

async function editSection({ id, title, sourceUrl, remark, type, courseId, remove }) {
  const result = await edit({ id, title, sourceUrl, remark, type, courseId, remove  })
  console.log(`===> controller edit section: ${result}`)
  return result
}

module.exports = {
  addSection,
  editSection,
  getSectionList,
}