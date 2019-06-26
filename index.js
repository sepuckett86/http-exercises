const { createServer } = require('http');

const server = createServer((req, res) => {
  console.log(req.method);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Animals</title>
    <style>
      h1 {
        color: green;
      }
      ul {
        color: blue;
      }
      body {
        background: lightblue;
      }
    </style>
  </head>
  <body>
    <h1>Animals</h1>
    <ul>
      <li>Sloth</li>
      <li>Manatee</li>
      <li>Horse</li>
    </ul>
  </body>
  </html>`);
});

server.listen(7890, () => {
  console.log('Listening on port 7890');
})