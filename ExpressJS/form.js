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

const express = require("express");
const app = express();

app.use(express.json());

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});

app.listen(5000, () => {
  console.log("server running on http://localhost:5000");
});

//Middleware in ExpressJS
//middleware =a function that runs between request and response
//used for:logging,authentication,validation,passing,error,etc.

//Types of Middleware
//1.Application Level middleware
//2.custom middleware
//3.Routr-level & App-level Middleware
//4.Error-hamdling middleware
