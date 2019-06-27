const { createServer } = require('net');

const server = createServer(sock => {
  console.log('client connected');

  // When client connects, send message to client
  sock.write('I will echo!');

  // When data comes from client, console.log it and send it back
  sock.on('data', data => {
    console.log('from client', data.toString());
    sock.write(data.toString());
  })
});

server.listen(7890, () => {
  console.log('server is listening on port 7890')
});