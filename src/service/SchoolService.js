const SchoolModel = require('../db/school')

async function list() {
  const result = await SchoolModel.findAndCountAll()
  console.log(`===> service: ${JSON.stringify(result)}`)
  return result
}

async function create({
  name,
  avatar,
  description,
}) {
  const result = await SchoolModel.create({ name, avatar, description })
  console.log(`===> service create school: ${result}`)
  return result 
}

module.exports = {
  list,
  create,
}