const { list, create, edit } = require('../service/SchoolService')

async function getSchoolList() {
  const result = await list()
  return result
}

async function addSchool({ name, avatar, description }) {
  const result = await create({ name, avatar, description })
  console.log(`===> controller add school: ${result}`)
  return result
}

async function editSchool({ id, name, avatar, description, remove }) {
  const result = await edit({ id, name, avatar, description, remove })
  console.log(`===> controller edit school: ${result}`)
  return result
}

module.exports = {
  getSchoolList,
  addSchool,
  editSchool,
}