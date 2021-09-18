const amount = 9;

if (amount < 10) {
  console.log("small number");
} else {
  console.log("large number");
}

console.log(`hey it's my first node app!!!`);

console.log(__dirname);
console.log(__filename);

setInterval(() => {
  console.log("hello world");
}, 1000);

// Modules
// const john = "john";
// const peter = "peter";

const names = require("./4-name");
const sayHi = require("./5-utils");

console.log(names);
console.log(sayHi);

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
