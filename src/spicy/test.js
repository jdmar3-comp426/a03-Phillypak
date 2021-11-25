import { multiplyBy } from "./spicy_9.js";
console.log(multiplyBy(15)(135));

import { tenTimes } from "./spicy_9.js";
console.log(tenTimes(40));

import { tenTimesFifty } from "./spicy_9.js";
console.log(tenTimesFifty());

import { everyEven } from "./spicy_9.js";
console.log(everyEven([1, 5, 1, 0, 1], x => x === 1)); // return true
console.log(everyEven([1, 1, 0, 1, 1], x => x === 1)); // return false
