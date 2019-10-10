module.exports = (sequelize, DataTypes) => { // створюєм функцію  яка приймає секвалайз і датаТайпс по замовчуванню
    const House = sequelize.define('House', {
        id: {
            type: DataTypes.INTEGER, //тип
            primaryKey: true, //первинний ключ  тру
            autoIncrement: true // автоікремент тру
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        square: {
            type: DataTypes.DOUBLE,
            allowNull: false,

        },
        city: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },

    }, {
        tableName: 'house', //потім вказуєм назву таблиці
        timestamps: false   //вказує щоб не вимагало поля created at, updated at
    });//назва це назва по якій ми будем отримувати модель, дефайн означає що ми створюєм модель назву і обєкт з описом кожного поля
    const User = sequelize.import('./User.js'); //таким чиномми звязуєм таблиці
    House.belongsTo(User,{foreignKey: 'user_id'});
    return House
};