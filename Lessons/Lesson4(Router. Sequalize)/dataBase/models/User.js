//валідації можна робити прямо в моделях

module.exports = (sequelize, DataTypes) => { // створюєм функцію  яка приймає секвалайз і датаТайпс по замовчуванню
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER, //тип
            primaryKey: true, //первинний ключ  тру
            autoIncrement: true // автоікремент тру
        },
        email: {
            type: DataTypes.STRING,
            uniq: true, //Унікальність тру
            allowNull: false, //не дозволяєм null
        },
        name: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'user', //потім вказуєм назву таблиці
        timestamps: false   //вказує щоб не вимагало поля created at, updated at
    });//назва це назва по якій ми будем отримувати модель, дефайн означає що ми створюєм модель назву і обєкт з описом кожного поля

    return User
};