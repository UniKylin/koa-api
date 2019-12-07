const SectionModel = require('../db/section')

async function list(courseId) {
  const result = await SectionModel.findAndCountAll({
    where: { courseId }
  })
  console.log(`===> service section list: ${JSON.stringify(result)}`)
  return result
}

async function create({ title, sourceUrl, remark, type, courseId }) {
  const result = await SectionModel.create({ title, sourceUrl, remark, type, courseId })
  console.log(`===> service create section: ${result}`)
  return result 
}

async function edit({ id, title, sourceUrl, remark, type, courseId, remove }) {
  const result = await SectionModel.update({ 
    id, title, sourceUrl, remark, type, courseId, remove
  }, {
    where: { id },
  })
  console.log(`===> service edit section: ${result}`)
  return result[0] > -1 ? true : false
}

module.exports = {
  list,
  edit,
  create,
}