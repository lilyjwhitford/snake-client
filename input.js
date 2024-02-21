let connection; // stores the active TCP connection object
const messages = {
  "z": "Say: woohoo!",
  "x": "Say: womp womp",
};

const handleUserInput = function (data) {
  if (data === "\u0003") { // terminates program with ctrl + c
    process.exit();
  }
  if (messages[data]) {
    connection.write(messages[data]);
  }
  if (data === "w" ) { // if w key is pressed, snake will move up
    connection.write("Move: up");
  } else if (data === "a") {
    connection.write("Move: left");
  } else if (data === "s") {
    connection.write("Move: down");
  } else if (data === "d") {
    connection.write("Move: right");
  }
  
  // connection.write("Say: womp womp");
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

module.exports = {
  setupInput,
};