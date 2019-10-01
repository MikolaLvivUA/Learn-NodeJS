/**FS це вбудований модуль ноди длч роботи з файловою системою*/

const fs = require('fs'); // так ми підключаєм fs.


/**ReadFile*/
/*
fs.readFile('./file.txt', (err, data) => {
    console.log(data.toString());
}); //прочитати щось з файлу першим параметром приймає шлях, другим параметром приймає опції*/



/**writeFile*/
/*
let data = 'Privetiki';
fs.writeFile('./text.txt', data, (err) => {
    if (!err){
        console.log('OK');
    }
}); //Це щоб створювати файлики з чимось

*/


/**AppendFile - юзається для тогшо щоб дописувати в файлики*/

/*fs.appendFile('./text.txt', ` \n ${Date.now()} USER IS CREATED`, (err)=>{
    if (!err) {
        console.log('OK');
    }
});*/


/**stat вертає нам статистику про файл*/

/*
fs.stat('./text.txt', (err, info)=>{
    console.log(info);
});*/


/**truncate- видаляє шось з файла, приймає шляєх і довжину яка означає скільки символів видалити з початку*/
/*

fs.truncate('./text.txt', 10, (err) => {
    if (!err){
        console.log('OK');
    }
});*/



/**unlink видалити весь файл*/
/*
fs.unlink('./text.txt', err => {
    console.log('OK')
});
*/



/**readdir  читає всі файли в папці і виводить їх назви у вигляді масиву*/
/*
fs.readdir('../fsLib', (err, files) =>{
    console.log(files);
});
*/

/** Rename перейменовує файли і папки приймає два шляхи олд і ню*/

/*
fs.rename('../fsLib', '../FSmethods', err => {
    if (!err){
        console.log('OK');
    }
});*/



/**STREAM*/

/**writestream*/
/*let writeStream = fs.createWriteStream('./text.txt');

writeStream.write('HELLO WORLD');*/

/*

/!**readStream*!/

let readStream = fs.createReadStream('./text.txt');

readStream.on('data', data => {
    console.log(data.toString());
});*/





/**Приклад з великим файлом*/

/*
let writeStream = fs.createWriteStream('./text22.txt');


let readStream = fs.createReadStream('./text.txt'); //таким методом ми копіюєм дані файлу з одного в інший

readStream.on('data', data => {
    writeStream.write(data)
});


/!*
for (let i = 0; i < 1000000; i++){
    writeStream.write('HELLO WORLD');
}*!/

console.log('OK');
*/



/*Пайпи*/

/*
fs.createReadStream('./text.txt').pipe(fs.createWriteStream('./NewFile.txt'));

console.log('OK');*/
