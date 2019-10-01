const fs = require('fs');

//Creat dir maker function
 exports.dirMaker = function(dir1, dir2,) {

    fs.mkdir(`./${dir1}`, err => {
        !err ? console.log('firstDirectoryMade OK') : console.error('Directory already done');
    });

    fs.mkdir(`./${dir2}`, err => {
        !err ? console.log('firstDirectoryMade OK') : console.error('Directory already done');
    });

};
//Create student profile function

function StudentProfMaker (group, name) {


    fs.mkdir(`./${group}/${name}`, err => {
        !err ? console.log(`${name} profile directory added`) : console.error('Student Profile already done');
    });


}
// Create student data function
function StudentDatafMaker (group, name, data = {}) {
    let jsonedData = JSON.stringify(data);

    fs.writeFile(`./${group}/${name}/StudentData.txt`, jsonedData, err => {
        !err ? console.log(`${name} profile data added`) : console.error('Error');
    })
}
//create async function



exports.StudentMaker = async function (group, name, data = {}){

    await StudentProfMaker(group, name);

     StudentDatafMaker(group, name, data)
};




