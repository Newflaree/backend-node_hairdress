const createUser = require("./createUser.controller");
const deleteUserById = require("./deleteUserById.controller");
const getUsers = require("./getUsers.controller");
const getUserById = require("./getUserById.controller");
const updateUserById = require("./updateUserById.controller");

module.exports = {
  createUser,
  deleteUserById,
  getUsers,
  getUserById,
  updateUserById
}

