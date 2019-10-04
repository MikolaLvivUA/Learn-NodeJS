

const {StudentMaker, dirMaker} = require('./StudentMaker.js');

const {PhotoAdder} = require('./ImgAdder.js');

dirMaker('jscx-1800', 'jscx-2000');

StudentMaker('jscx-1800', 'Mykola_Shydlovsky',
    {name: 'Mykola', surname: 'Shydlovsky', skill: 'JS'});

StudentMaker('jscx-1800', 'Vasyl_Pavliv',
    {name: 'Vasyl', surname: 'Pavliv', skill: 'Angular'});

StudentMaker('jscx-2000', 'Viktoria_Maleshko',
    {name: 'Viktoria', surname: 'Maleshko', skill: 'HTML'});

StudentMaker('jscx-2000', 'Oksana_Hrynovets',
    {name: 'Oksana', surname: 'Hrynovets', skill: 'React'});

