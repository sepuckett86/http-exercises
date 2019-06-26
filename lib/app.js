const { createServer } = require('http');
const { parse } = require('url');

const app = createServer((req, res) => {
  const url = parse(req.url).pathname;
  if(url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>welcome</h1>');
  } else if(url === '/red') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1 style="color: red">red</h1>');
  } else if(url === '/blue') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1 style="color: blue">blue</h1>');
  } else if(url === '/green') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1 style="color: green">green</h1>');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>404: content not found</h1>');
  }
});

module.exports = app;

