const { MOVE_KEYS, MSG_KEYS } = require("./constants");

let connection; // stores the active TCP connection object


const handleUserInput = function (data) {
  if (data === "\u0003") { // terminates program with ctrl + c
    process.exit();
  }
  if (MSG_KEYS[data]) { // if data consists of message key, send message
    connection.write(`Say: ${MSG_KEYS[data]}`); // sends message to server with j or k keys
  }
  if (MOVE_KEYS[data]) { // if data consists of move key, send movement
    connection.write(`Move: ${MOVE_KEYS[data]}`);
  }
};


// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  
  return stdin;
};

module.exports = { setupInput };