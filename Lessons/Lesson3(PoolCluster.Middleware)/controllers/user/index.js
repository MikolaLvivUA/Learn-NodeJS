const createUser = require('./createUser');//реквайрим нашу функцію по створпенню юзерів
const findAll = require('./findAll');
const getById = require('./getById');

module.exports = {
    createUser,
    findAll,
    getById
}; //експортуєм наші функцію на зовні