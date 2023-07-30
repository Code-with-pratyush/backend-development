//create a web server to accept the requet and respond to the client.Also your web sever should include API's.Using Asynchrounous node js method to read files.
const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req,res) => {
    const pathName = req.url;
    if(pathName === '/' || pathName === '/overview'){
        res.end("This is the overview section");
    }else if(pathName === '/product'){
        res.end("This is the Product section");

    }else if(pathName === '/api'){
        fs.readFile(`${__dirname}/dev-data/data.json`,"utf-8",(err,data)=>{
            const productData  = JSON.parse(data);
            res.writeHead(200,{
                'Content-type':'application/json'
            });
            res.end(data);
        });
    }else{
        res.writeHead(404,{
            'Content-type':'text/html'
        });
        res.end('<h1>Page not Found!</h1>');
    }
});

server.listen(8000,'127.0.0.1',()=>{
    console.log("Listening to the request on port 8000");
});