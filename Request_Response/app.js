const http = require('http');
const server = http.createServer((req,res)=>{
    const url = req.url;
    // if(url==='/'){
    //     res.write('<html>');
    //     res.write('<head><title>Enter Message</title></head>');
    //     res.write('<body><form action ="/message" method="POST"><input type="text" name ="message" ><button type="submit">Send</button></form></body>')
    //     res.write('</html>');
    //     return res.end();
    // }
    // res.setHeader('Content-Type','text/html');
    // res.write('<html>');
    // res.write('<head><title>My First Page</title></head>');
    // res.write('<body><h1>Hello from my node.js</h1></body>')
    // res.write('</html>');
    // res.end();
    if(url==='/home'){
        res.write('<html>')
        res.write('<head><title>Home page</title></head>')
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('</html>')

    }else if(url==='/node'){
        res.write('<html>')
        res.write('<head><title>Home page</title></head>')
        res.write('<body><h1>Welcome to my node js project</h1></body>')
        res.write('</html>')

    }else if(url==='/about'){
        res.write('<html>')
        res.write('<head><title>Home page</title></head>')
        res.write('<body><h1>Welcome to about us page</h1></body>')
        res.write('</html>')
    }
  
})

server.listen(4000);
