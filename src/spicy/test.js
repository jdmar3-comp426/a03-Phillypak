import { repeat } from "./spicy_9.js";
console.log(repeat(printHelloWorld, 3));

function printHelloWorld() {
   let str = "Hello, world!"
   return str;
}

import { multiplyBy } from "./spicy_9.js";
console.log(multiplyBy(15)(135));

import { tenTimes } from "./spicy_9.js";
console.log(tenTimes(40));

import { tenTimesFifty } from "./spicy_9.js";
console.log(tenTimesFifty());

import { everyEven } from "./spicy_9.js";
console.log(everyEven([1, 5, 1, 0, 1], x => x === 1)); // return true
console.log(everyEven([1, 1, 0, 1, 1], x => x === 1)); // return false

import { filter } from "./spicy_9.js";
console.log(filter(['yes', 'nope', 'maybe', 'yellow'], x => x[0] === 'y'));
console.log(filter([1, 90, 5, 31], x => x % 2 === 1));

import { hasExactly } from "./spicy_9.js";
console.log(hasExactly([1, 90, 5, 31], x => x % 2 === 1, 2));