//create a web server to accept the requet and respond to the client.Also your web sever should include API's.Using synchrounous node js method to read files.
const fs = require('fs');
const http = require('http');
const url = require('url');
//SERVER

const replaceTemplates = (temp,product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g,product.productName);
    output  = output.replace(/{%IMAGE%}/g,product.image);
    output  = output.replace(/{%PRICE%}/g,product.price);
    output  = output.replace(/{%FROM%}/g,product.from);
    output  = output.replace(/{%NUTRIENTS%}/g,product.nutrients);
    output  = output.replace(/{%QUANTITY%}/g,product.quantity);
    output  = output.replace(/{%DESCRIPTION%}/g,product.description);
    output  = output.replace(/{%ID%}/g,product.id);

    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g,'not-organic');
    return output;
}



const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');
const tempCards = fs.readFileSync(`${__dirname}/templates/template-cards.html`,'utf-8');

const poduct = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const productObj = JSON.parse(poduct);

const server = http.createServer((req,res) => {

    console.log(req.url);
    console.log(url.parse())
    const pathName = req.url;

    //Overview Page
    if(pathName === '/' || pathName === '/overview'){
        res.writeHead(200,{
            'content-type':'text/html'
        });
        const cardHtml = productObj.map(el => replaceTemplates(tempCards , el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}',cardHtml);
        res.end(output);

    //Product Page
    }else if(pathName === '/product'){
        res.end("This is the Product section");


    //Api Page
    }else if(pathName === '/api'){
        res.writeHead(200 , {'Content-type' : 'application/json'});
        res.end(poduct);
    

    //Not Found
    }else{
        res.writeHead(404,{
            'Content-type':'text/html'
        })
        res.end('<h1>Page not Found!</h1>');
    }
});

server.listen(8000,'127.0.0.2',()=>{
    console.log("Listening to the request on port 8000");
});