const { createServer } = require('http');

const server = createServer((req, res) => {
  console.log(req.method);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, there mateys');
});

server.listen(7890, () => {
  console.log('Listening on port 7890');
})