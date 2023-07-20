const http = require('http');//node.js

const hostname = '127.0.0.1';//localhost'(1-255);
const port = 3000;//(1-65535 Except: 21/23/80/443)

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n Dung Bum');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
