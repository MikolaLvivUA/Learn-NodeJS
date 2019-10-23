const dataBase = require('../../dataBase').getInstance();
const fs = require('fs-extra');
const path = require('path');
const uuid = require('uuid').v1();// підключаєм лібу для генерення рандомних назв для файлів

module.exports = async (req, res) => {
    const UserToCreate = req.body;//передаєм деструктуризацією дані якімають бути внесені при створені юзера
    const UserModel = dataBase.getModel('User');

    const file = req.files.myFile;// в req.files приходить наш файл

    console.log(file);


    /*await file.mv(appRoot + `/${file.name}`); // mv це функція яка створить нам наш файл, передаєм назву з .mv(шлях до нашого файлу).
    //Якщо файли мають однакове імя тоді вони перезапишуться(так робитине можна!!!!);*/
    const createdUser = await UserModel.create(UserToCreate);//таким чином ми створюєм нашого юзера

    const createdUserId = createdUser && createdUser.dataValues && createdUser.dataValues.id;// виводим id user в окрему змінну.

    if (!createdUserId) {
        throw new Error('bla bla')
    }

    const PathToUserAvatar = path.resolve(global.appRoot, `static`, `files`, `user`, `${createdUserId}`);// вказуєм шлях до папки з файлом

    fs.mkdirpSync(PathToUserAvatar);// створюєм директорію по тому шляху.

    const fileExtension =  file.name.split('.').pop; // сплітаєм імя нашого файлу по крапці і берем останній елемент.(розшиення)

    await file.mv(PathToUserAvatar + `/${uuid}${file.name}`);// заливаєм наш файл по шляху. // одинз варіантів присвоєння рандомної назви
    // await file.mv(PathToUserAvatar + `/${uuid}.${fileExtension}`);// другий варіант сприсвоєння радомної назви
    console.log(PathToUserAvatar);

    res.json('CREATED')
}; //створюєм функцію створення юзерів