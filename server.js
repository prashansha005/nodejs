// node.js
// node.js is a javascript runtime

// example of a simple node.js server
// const http = require("http");

// // create server

// const server = http.createServer((req, res) => {
//   res.end("Hello from node.js server!");
// });

// // start sever on port 3000
// server.listen(3000, () => {
//   console.log("server is running on http://localhost:3000");
// });

// what will happen if you run this code in node.js?

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("Hello Node");
// });
// console.log("Server running...");

//A) Server starts and responds to requests automatically
// B) Server is created but does not respond to any requests
// C) Code throws an error
// D) “Hello Node!” is printed in the console

// what is express.js?
// a minimal and flexible node.jsnframework used to build web servers and APIs.
// It simplifies tasks like routing, handling requests, sending responses, and managing middleware.

// Why Use Express.js?

// Reduces boilerplate code compared to raw Node.js http module
// Better routing system
// Middleware support (logging, authentication, validation, etc.)
// Large ecosystem of third-party packages
// Easy integration with databases and frontend frameworks

// key points:

// build on top of node.js

// creatinga basic express server

// const express = require("express");
// require("dotenv").config();

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello from express!");
// });

// app.listen(process.env.PORT || 5000, () => {
//   console.log("Server running...");
// });

// Basic Routine in express.js
// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.get("/about", (req, res) => {
//   res.send("about page");
// });
// app.get("/contact", (req, res) => {
//   res.send("about page");
// });
// app.listen(PORT, () => {
//   res.send(`server running on http://localhost:${PORT}`);
// });
// const express = require("express");
// const app = express();

// app.use(express.json()); // Body parser

// // GET
// app.get("/hello", (req, res) => {
//   res.send("This is GET Route");
// });

// // POST
// app.post("/login", (req, res) => {
//   res.send(req.body);
// });

// // Query
// app.get("/search", (req, res) => {
//   res.send(req.query);
// });

// // Params
// app.get("/user/:id", (req, res) => {
//   res.send(req.params);
// });

// // Middleware
// app.use((req, res, next) => {
//   console.log("Middleware working...");
//   next();
// });

// // JSON API
// app.get("/products", (req, res) => {
//   res.json([
//     { id: 1, name: "Laptop" },
//     { id: 2, name: "Keyboard" },
//   ]);
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });
