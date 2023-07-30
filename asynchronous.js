//reading operation in asynchrounous file

const fs = require('fs');

fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{
    if(err) return console.log("ERROR");
    fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
        if(err) return console.log("ERROR");
        console.log(data2)
        fs.readFile(`./txt/${data2}.txt`,'utf-8',(err,data3)=>{
            if(err) return console.log("ERROR");
            console.log(data3);
            fs.writeFile('./txt/final.txt',`${data1}\n${data2},\n${data3}`,'utf-8', err=>{
                if(err) return console.log("ERROR");
                console.log("Your file is overWritten");
            });
        });
    });
});
console.log("Will execute this line first");