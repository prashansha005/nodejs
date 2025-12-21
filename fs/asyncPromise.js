//fs.promises.writeFile().catch() //create/write

const fs = require("fs");
const path = require("path");

// const fileName = "promise.txt";
// const filePath = path.join(__dirname, fileName);

// fs.promises
//   .writeFile(filePath, "hellooooo", "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fs.promises
//   .readFile(filePath, "utf-8")
//   .then((data) => {
//     {
//       console.log(data);
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fs.promises
//   .appendFile(filePath, "how are you?", "utf-8")
//   .then((data) => {
//     {
//       console.log(data);
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fs.promises
//   .unlink(filePath, "utf-8")
//   .then((data) => {
//     {
//       console.log(data);
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const path1 = __dirname;

fs.readdir(path1)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
