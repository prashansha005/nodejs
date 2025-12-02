const express = require("express");
const app = express();
const port = 5000;

// to read form data

app.use(express.urlencoded({ extended: true }));

// post route
app.post("/contact", (req, res) => {
  const { name, email } = req.body;
  res.send(`Received: Name = ${name}, Email = ${email}`);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
