/**NodeJS це платформа за */

/*common.js це бібліотека для  зєднання модулів в nodeJS має дві команди export і require*/

/*require('./person');// цією командою ми підключаєм модулі/*/
/*
console.log('Hello from app');

let person = require('./person'); //Ми можемо передавати реквайри в змінні
/!*
console.log(person);

console.log(person.xxx);//Можна окремо викликати якісь дані якщо ми оголосили змінну*!/


person.callMelater(2,3,23,23);*/

/*
let ArrayUtil = require('./person');

let util = new ArrayUtil();

util.print([123,13,123,123,123]);*/

/**Globals*/

// console.log(__dirname); //Виведе шлях до поточної папки в якій лежить наш файл

// console.log(__filename); //Виведе шлях до поточного файлу

// console.log(process); //показує всі процеси

// console.log(module);//описує поточний файл

/*
let buffer = new Buffer('Text');

console.log(buffer.toString());*/ //переводим дані в бафер(шістнадцятковий код)
// console.log(global);//основний обєкт
/*
global.xxx = 'xxx'; //так можна зберігати дані в глобальному контексті але так робити не варто
console.log(xxx);
*/

/**Events*/

let EventEmitter = require('events').EventEmitter; //підключаєм івент емітер

let eventEmitter = new EventEmitter();

/*eventEmitter.on('ping', () => {
    console.log('pong');
});*/
/*
eventEmitter.once('ping', () => {
    console.log('pong');
}); // зпарцює лише раз*/

/*

let listener1  = () => {
    console.log('pong');
};

let listener2 = () => {
    console.log('pong2');
};
// eventEmitter.removeListener()

eventEmitter.on('conection', listener1);
eventEmitter.on('conection', listener2);

eventEmitter.emit('conection');
eventEmitter.removeListener('conection', listener2);
eventEmitter.emit('conection');

*/
