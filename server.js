// node.js
// node.js is a javascript runtime

// example of a simple node.js server
const http = require("http");

// create server

const server = http.createServer((req, res) => {
  res.end("Hello from node.js server!");
});

// start sever on port 3000
server.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
