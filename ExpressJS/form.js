// const express = require("express");
// const app = express();
// const port = 5000;

// // to read form data

// app.use(express.urlencoded({ extended: true }));

// // post route
// app.post("/contact", (req, res) => {
//   const { name, email } = req.body;
//   res.send(`Received: Name = ${name}, Email = ${email}`);
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// GET Request with Query Params and URL Params
// const express = require("express");
// const app = express();
// const port = 5000;

// // Simple GET
// app.get("/info", (req, res) => {
//   res.send("Server is running.");
// });

// // GET with Query Params
// app.get("/user", (req, res) => {
//   const { name, age } = req.query;

//   res.send(`Query Received\nName: ${name}\nAge: ${age}`);
// });

// // GET with URL Params
// app.get("/product/:id", (req, res) => {
//   const productId = req.params.id;

//   res.send(`Product ID Received: ${productId}`);
// });

// Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// const express = require("express");
// const app = express();

// app.use(express.json());

// app.get("/users/:id", (req, res) => {
//   const userId = req.params.id;
//   res.send(`User ID is: ${userId}`);
// });

// app.listen(5000, () => {
//   console.log("server running on http://localhost:5000");
// });

//Middleware in ExpressJS
//middleware =a function that runs between request and response
//used for:logging,authentication,validation,passing,error,etc.

//Types of Middleware
//1.Application Level middleware
//2.custom middleware
//3.Routr-level & App-level Middleware
//4.Error-hamdling middleware

// const express = require("express");
// const app = express();

// app.use((req, res, next) => {
//   console.log("Middleware works!");
//   next();
// });
// app.get("/", (req, res) => {
//   res.send("Hello from express!");
// });
// app.listen(5000, () => {
//   console.log("server started at https://localhost:5000");
// });

// const express = require("express");
// const app = express();

// function myMiddleware(req, res, next) {
//   console.log("this is my custom middleware");
//   next();
// }
// app.use(myMiddleware);
// app.get("/", (req, res) => {
//   res.send("Home page");
// });
// app.listen(5000, () => {
//   console.log("server started at http://localhost:5000");
// });

// example of error handeling middleware

// const express = require("express");
// const app = express();

// app.get("/", (req, res, next) => {
//   // const error = new Error("something went wrong");
//   next("something went wrong");
// });

// app.use((err, req, res, next) => {
//   console.log("Error:", err.message);
//   res.send("Error occured");
// });

// app.listen(3000, () => {
//   console.log("server started at http://localhost:3000");
// });

// Async/Await Middleware

// Async/Await middleware is used to wait for a task to finish before moving to the next step.

// Examples of Async/Await middleware

const express = require("express");
const app = express();

app.use(async (req, res, next) => {
  console.log("middleware started");

  await console.log("waiting task done");
  next();
});
app.get("/", (req, res) => {
  res.send("hello bca student");
});
app.listen(5000, () => {
  console.log("middleware started");
});
