const http = require('http');

const app = require('./app')

const port = process.env.port || 3000;

const server = http.createServer(app)((req, res) => {
    res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<h1>Hello World</h1>');
});;

server.listen(port);