const { list, create, edit } = require('../service/CourseService')

async function getCourseList(schoolId) {
  const result = await list(schoolId)
  return result
}

async function addCourse({ name, cover, remark, schoolId }) {
  const result = await create({ name, cover, remark, schoolId })
  console.log(`===> controller add course: ${result}`)
  return result
}

async function editCourse({ id, name, cover, remark, schoolId, remove }) {
  const result = await edit({ id, name, cover, remark, schoolId, remove })
  console.log(`===> controller edit course: ${result}`)
  return result
}

module.exports = {
  getCourseList,
  addCourse,
  editCourse,
}