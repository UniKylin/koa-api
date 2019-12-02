const { list, create } = require('../service/SchoolService')

async function getSchoolList() {
  const result = await list()
  return result
}

async function addSchool({ name, avatar, description }) {
  const result = await create({ name, avatar, description })
  console.log(`===> controller add school: ${result}`)
  return result
}

module.exports = {
  getSchoolList,
  addSchool,
}