 import { removeKeyNonDestructive } from "./mild_2.js";
 let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
 };
 obj = removeKeyNonDestructive(obj, 'password');
 console.log(obj);