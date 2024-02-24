const { IP, PORT, PLAYER_NAME } = require("./constants"); // import IP address and PORT number
const net = require("net");

const connect = function () { // establishes connection with the server
  const conn = net.createConnection({
    host: IP, // IP address here
    port: PORT, // PORT number here
  });
  
  conn.setEncoding("utf8");// interpret incoming data as text

  conn.on("connect", () => { // handles actions when the connection is first established
    console.log("Successfully connected to server!");
    conn.write(`Name: ${PLAYER_NAME}`); // displays users name on connection
  });

  conn.on("data", (data) => { // logs idle message from server
    console.log(data);

    if (data === "you ded cuz you idled\n") { // if idle message is sent by server, program terminates
      process.exit();
    }
  });

  return conn;
};

module.exports = {
connect,
};