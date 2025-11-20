console.log("Hello World");
// variables in javascript
let program = "HELLO";
console.log(program);

//constant in javascript
const pi = 3.14;
console.log(pi);

let x = 10;
if (true) {
  let x = 20;
  console.log("Inside:", x);
}
console.log("outside:", x);

//function in javascript
//a function is a resuable block of code that performs a specific task

function add(a, b) {
  return a + b;
}
console.log(add(5, 3));

function doubleNumber(num) {
  return num * 2;
}
console.log(doubleNumber(5));

function isEven(num) {
  return num % 2 == 0;
}
console.log(isEven(6));
console.log(isEven(7));

//scope in javascript
//scope means where your variable is allowed to live and where it can be used
//think of it like borders : some variables can travel everywhere, some can only stay inside their own area.

let x = 10;
function test() {
  let y = 5; //local
  console.log(x); //allowed
  console.log(y); //allowed
}

console.log(x); //allowed
console.log(y); //error (outside scope)
