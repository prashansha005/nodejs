const fs = require("fs");
const path = require("path");

// const fileName="crud.txt";
// const filePath=path.join(__dirname,fileName);
// console.log(filePath);
// fs.writeFile(filePath,"hello","utf-8",
//     (err)=>{
//         if(err) console.error(err);
//         else console.log("File has been saved");
//     }
// )

// const fileName="crud.txt";
// const filePath=path.join(__dirname,fileName);
// console.log(filePath);
// fs.readFile(filePath,"utf-8",
//     (err,data)=>{
//         if(err) console.error(err);
//         else console.log(data);
//     }
// )

// const fileName="crud.txt";
// const filePath=path.join(__dirname,fileName);
// console.log(filePath);
// fs.appendFile(filePath,"whatsupppp","utf-8",
//     (err)=>{
//         if(err) console.error(err);
//         else console.log("saved the file");
//     }
// )

const fileName = "crud.txt";
const filePath = path.join(__dirname, fileName);
console.log(filePath);
fs.unlink(filePath, (err) => {
  if (err) console.error(err);
  else console.log("delete file");
});
