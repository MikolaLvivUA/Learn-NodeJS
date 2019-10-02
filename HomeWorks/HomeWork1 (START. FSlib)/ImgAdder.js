let fs = require('fs');


exports.PhotoAdder = function (photo, putPhoto) {

    fs.createReadStream(photo).pipe(fs.createWriteStream(putPhoto));

    console.log('Photo is added');


};




