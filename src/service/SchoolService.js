const SchoolModel = require('../db/school')

async function list() {
  const result = await SchoolModel.findAndCountAll()
  console.log(`===> service: ${JSON.stringify(result)}`)
  return result
}

async function create({ name, avatar, description }) {
  const result = await SchoolModel.create({ name, avatar, description })
  console.log(`===> service create school: ${result}`)
  return result 
}

async function edit({ id, name, avatar, remove, description }) {
  const result = await SchoolModel.update({ 
    name, avatar, description, remove 
  }, {
    where: { id },
  })
  console.log(`===> service edit school: ${result}`)
  return result[0] > -1 ? true : false
}



module.exports = {
  list,
  edit,
  create,
}