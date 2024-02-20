
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541, // PORT number here,
  });

  conn.on("connect", () => { // code that does something when the connection is first established
    console.log("Successfully connected to server!");
    conn.write("Name: LW");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 100);
  });

  conn.on("data", (data) => { 
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect,
};