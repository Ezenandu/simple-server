// create a simple server

const http = require('node:http');

const hostname = 'localhost';
const port = 8900;

const server = http.createServer((req , res) => {
res.statusCode = 200;
res.setHeader('content-type', 'text/plain');
res.end('Ifeanyi Ezenandu');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});