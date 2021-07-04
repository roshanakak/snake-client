const net = require("net");
const { IP, PORT } = require("./constants");

//establishes a connection with the game server

const connect = function(name) {

  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });
  
  setName(conn, name);
  return conn;
};

const setName = function(conn, name) {
  conn.on('connect', () => {
    conn.write(`Name: ${name}`);
  });
};

module.exports = connect;