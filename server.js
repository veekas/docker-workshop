const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('I am here at Galvanize in Phoenix on 4-8-2017 at a Docker workshop taught by @rob_rich \n');
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
