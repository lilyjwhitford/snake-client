const handleUserInput = function (data) {
  if (data === "\u0003") { // closes program with ctrl + c
    process.exit();
  }
};
// setup interface to handle user input from stdin

const setupInput = function () {
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