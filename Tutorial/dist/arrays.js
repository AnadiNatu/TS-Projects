"use strict";
// Arrays - in TS arrays are typed , ie you can specify the types of values it can hold 
const num = [1, 2, 3, 4, 5, 6];
const names = ["", "", ""];
const name1 = ["", "", "", ""];
// readonly keyword - it can prevent arrays from being changed
const name2 = ["", "", "", ""];
// you can push and pop elements into an array 
num.push(5);
// num.push("3"); // Error - Argument of type 'string' is not assignable to parameter of type 'number'.
num.pop();
num.pop();
num.pop();
num.pop();
num.pop();
console.log(num);
// Multi Dimensional Array -  it contains other arrays as its elements 
const multiDi = [[1, 2], [3, 4], [5, 6]];
console.log(multiDi);
