const { connect } = require("./client"); // import connect function from client.js
const { setupInput } = require("./input"); // import setupInput function from input.js


console.log("Connecting ...");

const conn = connect(); // store connection object returned by connect in variable
setupInput(conn); // pass connection object into setupInput function