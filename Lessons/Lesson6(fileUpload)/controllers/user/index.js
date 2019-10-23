const createUser = require('./createUser');//реквайрим нашу функцію по створпенню юзерів
const findAll = require('./findAll');
const getById = require('./getById');
const getUserWithHouseByid = require('./getUserWithHouseByid');
const updateUser = require('./updateUser');

module.exports = {
    createUser,
    findAll,
    getById,
    getUserWithHouseByid,
    updateUser
}; //експортуєм наші функцію на зовні