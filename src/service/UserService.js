const UserModel = require('../db/user')

async function create({ userName, password, phone, nickName, avatarUrl, openId, description }) {
  const result = await UserModel.create({ userName, password, phone, nickName, avatarUrl, openId, description })
  console.log(`===> controller add user: ${result}`)
  return result
}

async function edit({ id, userName, password, phone, nickName, avatarUrl, openId, description, remove }) {
  const result = await UserModel.update({ 
    userName, password, phone, nickName, avatarUrl, openId, description, remove,
  }, {
    where: { id },
  })
  console.log(`===> service edit course: ${result}`)
  return result[0] > -1 ? true : false
}


async function queryOpenIdExist(openId) {
  const result = await UserModel.findOne({
    where: { openId },
  })
  console.log(`===> service find one user is exist: ${JSON.stringify(result)}`)
  if (result) {
    return true
  } else {
    return false
  }
}

module.exports = {
  edit,
  create,
  queryOpenIdExist,
}