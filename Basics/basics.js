const http = require('http');

let name = 'Asif'

const server = http.createServer((req,res)=>{
    console.log(name);
})

server.listen(4000);
