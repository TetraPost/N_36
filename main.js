/*imgs*/
const fileOld = './files/card.jpg'; 
const fileNew = './files/card1.jpg'; 
/*json*/
const fileOne = './files/fileOne.json'; 
const fileTwo = './files/fileTwo.json'; 

const file = require('./node_modules/copyFile');

file.f1(fileOld, fileNew);
file.f2(fileOne, fileTwo);


