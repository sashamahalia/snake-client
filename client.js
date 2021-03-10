const net = require('net');

//establish connection with the game server

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542

  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server" );
    conn.write('Name: SCM');
    // setInterval( function() {
    //   conn.write('Move: up');
    // }, 3000)
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}

module.exports = { connect };