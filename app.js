// How to import code
// import { apiKey } from './util.js';

// Multiple export
// import { apiKey, abc } from './util.js';

// Multiple export but as an object
import * as util from './util.js';

// Using the default:
// import apiKey from './util.js';

// console.log(util.abc); // output would be the value stored in apiKey in util.js

// const userMessage = 'Hello World!!!';
// console.log(userMessage);
// console.log(1 + 2);

// function greet(userName, message = 'Hello') {
//   //   console.log('Hello!');
//   return 'Hi, I am' + userName + '.' + message;
// }

// function createGreeting(userName, message = 'Hello') {
//   //   console.log('Hello!');
//   return 'Hi, I am' + userName + '.' + message;
// }

// greet('Max');
// greet('Max', 'Hello max');
// const greeting1 = createGreeting('max');
// console.log(greeting1)

//Function assignment
function combine(a, b, c) {
  const newValue = (a * b) / c;
  return newValue;
}

const result = combine(10, 5, 2);
console.log(result);
