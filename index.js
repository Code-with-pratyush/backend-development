const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt','utf-8');
console.log(textIn);

const texInn = fs.readFileSync('./txt/final.txt','utf-8');
console.log(texInn);

const text =  fs.readFileSync('./txt/read-this.txt','utf-8');
console.log(text);

const TextOut = `This content to tell about avagardo:  \n This content was created on ${Date.now()} :\n ${textIn} `;
fs.writeFileSync('./txt/output.txt',TextOut);
console.log("File Written!!");

const TextOu = `This content is about the specification of the avagardo: \n  This content was created on ${Date.now()}:\n ${TextOut}`;
fs.writeFileSync('./txt/outputm.txt',TextOu);
console.log("File overWritten");


