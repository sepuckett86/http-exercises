const { createConnection } = require('net');

const client = createConnection(7890, 'localhost', () => {
  console.log('connected');
  // Upon connection, send Hello!
  client.write('Hello!');

  // Send data to server every second
  setInterval(() => {
    client.write(new Date().toISOString());
  }, 1000)

  // console.log data from server
  client.on('data', data => {
    console.log('from server', data.toString());
  })
});  


