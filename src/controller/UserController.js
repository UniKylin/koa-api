const { edit, create, queryOpenIdExist } = require('../service/UserService')

async function addUser({ userName, password, phone, nickName, avatarUrl, openId, description }) {
  const result = await create({ userName, password, phone, nickName, avatarUrl, openId, description })
  console.log(`===> controller add user: ${result}`)
  return result
}

async function editUser({ id, userName, password, phone, nickName, avatarUrl, openId, description, remove }) {
  const result = await edit({ id, userName, password, phone, nickName, avatarUrl, openId, description, remove })
  console.log(`===> controller edit user: ${result}`)
  return result
}

async function findUserByOpenId(openId) {
  const result = await queryOpenIdExist(openId)
  console.log(`===> user controller: ${result}`)
  return result
}

module.exports = {
  addUser,
  editUser,
  findUserByOpenId,
}