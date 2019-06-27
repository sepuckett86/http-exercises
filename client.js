const { createConnection } = require('net');

const client = createConnection(7890, 'localhost', () => {
  console.log('connected');
  client.write('hello');
});


client.on('data', data => {
  console.log(data.toString());
});

