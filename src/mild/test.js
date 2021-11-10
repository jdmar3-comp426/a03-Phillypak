import { removeKeys } from "./mild_2.js";
let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
 };
 obj = removeKeys(obj, ['password', 'age']);
 console.log(obj);

 import { removeKey } from "./mild_2.js";
 obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
 };
 removeKey(obj, 'password');
 console.log(obj);

 import { removeKeyNonDestructive } from "./mild_2.js";
 obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
 };
 obj = removeKeyNonDestructive(obj, 'password');
 console.log(obj);