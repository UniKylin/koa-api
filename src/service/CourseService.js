const CourseModel = require('../db/course')

async function list(schoolId) {
  const result = await CourseModel.findAndCountAll({
    where: { schoolId }
  })
  console.log(`===> service: ${JSON.stringify(result)}`)
  return result
}

async function create({ name, cover, remark, schoolId }) {
  const result = await CourseModel.create({ name, cover, remark, schoolId })
  console.log(`===> service create course: ${result}`)
  return result 
}

async function edit({ id, name, cover, remark, schoolId, remove }) {
  const result = await CourseModel.update({ 
    name, cover, remark, schoolId, remove
  }, {
    where: { id },
  })
  console.log(`===> service edit course: ${result}`)
  return result[0] > -1 ? true : false
}

module.exports = {
  list,
  edit,
  create,
}