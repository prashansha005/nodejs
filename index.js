// console.log("Hello World");
// // variables in javascript
// let program = "HELLO";
// console.log(program);

// //constant in javascript
// const pi = 3.14;
// console.log(pi);

// let x = 10;
// if (true) {
// let x = 20;
//   console.log("Inside:", x);
// }
// console.log("outside:", x);

//function in javascript
//a function is a resuable block of code that performs a specific task

// function add(a, b) {
//   return a + b;
// }
// console.log(add(5, 3));

// function doubleNumber(num) {
//   return num * 2;
// }
// console.log(doubleNumber(5));

// function isEven(num) {
//   return num % 2 == 0;
// }
// console.log(isEven(6));
// console.log(isEven(7));

// //scope in javascript
// //scope means where your variable is allowed to live and where it can be used
// //think of it like borders : some variables can travel everywhere, some can only stay inside their own area.

// let X = 10;
// function test() {
//   let y = 5; //local
//   console.log(x); //allowed
//   console.log(y); //allowed
// }

// console.log(x); //allowed
// console.log(y); //error (outside scope)

// let x = 5;
// function test() {
//   let y = 10;
//   console.log(x);
//   console.log(y);
// }
// test();
// console.log(x);
// console.log(y);

// let globalScore = 50;
// function score() {
//   let localScore = 100;
//   console.log("inside function, score=", score);
// }
// updateScore();
// updateScore();
// console.log("outside function, score=", score);

// // let points = 10;
// // function playGame() {
// //   let points = 50;
// //   console.log("inside function, local points=", points);
// //   e.log("inside function, local points=", globalpoints);
// // }
// //

// // synchrous javascript example
// // code runs line by line
// // next line waits for the previous line to finish

// //example

// console.log("start");
// for (let i = 1; i <= 3; i++) {
//   console.log("counting:", i);
// }
// console.log("end");

// asynchrous javascript
// let num = 1;
// setTimeout(() => {
//   num = 5;
// }, 10);
// setTimeout(() => {
//   console.log("A:", num);
// }, 0);
// // console.log("B:", num);

// console.log("step 1");

// setTimeout(() => {
//   console.log("step 2");
// }, 0);
// setTimeout(() => {
//   console.log("step 3");
// }, 500);
// setTimeout(() => {
//   console.log("step 4");
// }, 0);

// console.log("print A");

// setTimeout(() => {
//   console.log("print B");
// }, 0);
// setTimeout(() => {
//   console.log("print C");
// }, 0);
// setTimeout(() => {
//   console.log("print D");
// }, 50);

// callback in javascript
// a callback is a function passed as an argurment to another function and executed inside it to perform a task.
// callback are commonly used in asynchronous operations such as settimeout,
//file  reading or api calls

//with callback
// function great(name, callback) {
//   console.log("Hello," + name);
//   callback(); //executes after greet finishes
// }
// function askQuestion() {
//   console.log("how are you?");
// }
// // using callback
// function greet(name, callback) {
//   console.log("Hello," + name);
// }
// function askQuestion() {
//   console.log("how are you?");
// }
// greet("user", askQuestion);

// promise in javascript
// a promise is an object that represents the eventual completion(or failure)
// of an asynchronous operation and its resulting value
// it helps manage asynchronous task in a cleaner way than callback
// a promise has three states:
// pending - initial state, operation not found
// fulfilled - operation completed sucessfully
// rejected - operation failed

// // Create a simple promise
// let promise = new Promise((resolve, reject) => {
//   let taskDone = true; // change to false to see rejection
//   if (taskDone) {
//     resolve("Task is done!");
//   } else {
//     reject("Task failed!");
//   }
// });

// // // Using the promise
// // promise
// //     .then((message) => {
// //         console.log(message); // runs if resolve() is called
// //     })
// //     .catch((error) => {
// //         console.log(error);   // runs if reject() is called
// //     });

// // Async/Await in JavaScript

// // async makes your function wait-friendly.
// // It means the function can use await, and it automatically returns a Promise.

// // Await

// await tells JavaScript:
// “Stop here until this work is finished.”
// (But only works inside an async function.)

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getWeatherData() {
//   await api();
// }

// function User() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Hello");
//     }, 0);
//   });
// }
// async function greetUser() {
//   await User();
// }
// greetUser();

// What is Error Handling?
// Error handling is how a program deals with mistakes or problems that happen while
//  it’s running. Instead of crashing, the program can catch the error and respond
// safely.

// 1. Try-Catch
// try → code that might cause an error goes here.
// catch → what to do if an error happens.

// 2. Finally
// finally always runs, no matter if there’s an error or not.
// Useful for cleanup (closing files, stopping timers).

// 3. Throwing Errors
// You can create your own error when something is wrong using throw.

// 4. Promise Error Handling
// For asynchronous code:
// .catch() handles promise errors
// With async-await, use try-catch.

// 5. Error Types
// Common JavaScript errors:
// Error → general error
// TypeError → wrong type (like number + string)
// ReferenceError → variable doesn’t exist

// function divide(a, b) {
//   try {
//     if (b == 0) throw "cannot divided by zero!"; //throw error if b is 0
//     let result = a / b;
//     console.log("Result:", result);
//   } catch (error) {
//     console.log("error:,error");
//   } finally {
//     console.log("Division attempt finished.");
//   }
// }
// divide(10, 2); //works fine
// divide(10, 0); //error handled

// TASK

function checkNumber(num) {
  if (num < 0) {
    throw "number must be positive";
  }
  return num;
}

function getData(num) {
  try {
    let result = checkNumber(num);
    console.log("Valid number:", result);
  } catch (error) {
    console.log("error caught:", error);
  } finally {
    console.log("check finished.");
  }
}

getData(5);
getData(-3);
