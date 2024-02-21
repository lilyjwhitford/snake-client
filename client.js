const { IP, PORT } = require("./constants");
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  conn.on("connect", () => { // code that does something when the connection is first established
    console.log("Successfully connected to server!");
    conn.write("Name: LW"); // displays users name on connection
  });

  conn.on("data", (data) => { // logs idle message to server
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect,
};