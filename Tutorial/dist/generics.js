"use strict";
// In TS , generics allow you to create reusable components that can work with a variety of types .
// Generics makes it posible for you to define functions , classes and inteerfaces that can work with different
// data types without having to duplicate code  
// Rglr Function
const printString = (x) => console.log(x);
const printNumber = (x) => console.log(x);
const printBoolean = (x) => console.log(x);
printString("hello");
printNumber(45);
printBoolean(false);
// Generic Function 
// T - T is a type parameter . This specifies which kind of type we will be sending to the function 
function printInfo(x) {
    return x;
}
const str = printInfo("String");
const num1 = printInfo(5345);
const bool = printInfo(true);
console.log(`${str}  ${num1}  ${bool}`);
// Other Example 
function uniqueDataTypesFunction(item, defValue) {
    return [item, defValue];
}
// const n = uniqueDataTypesFunction<number>(234,332);
// const s = uniqueDataTypesFunction<string>("AAA","BBB");
// const b = uniqueDataTypesFunction<boolean>(true,true);
// console.log(`String Array ${s} Number Array ${n}  Boolean Array ${b}`);
// Interface unsing generics
// interface Dog {
//     name:string;
//     breed:string;
// }
// const dog1 = uniqueDataTypesFunction<Dog>(
//     {name:"Bruno" , breed:"Labrador"},
//     {name:"Buddy" , breed:"Husky"}
// );
// console.log(dog1);
//  Getting random key value pair of an object  using generic function
function getRandomValuePair(obj) {
    // we are basically making an object using generic function where the  key(property will be in string) and (the value will be any type that that property requires)
    const keys = Object.keys(obj);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randomKey, value: obj[randomKey] };
}
const stringObject = { a: 'apple', b: 'banana', c: 'cherry' };
const res1 = getRandomValuePair(stringObject);
console.log(res1);
const numberObject = { one: 1, two: 2, three: 3 };
const resNum = getRandomValuePair(numberObject);
console.log(resNum);
// Generic Function that filters array based on given condition
function filterArray(array, condition) {
    // Here we have a generic type function , which is taking first parameter as an generic type array , and second para is a condition which is 
    // an anonymous function which take in a generic type argument and returning boolean type and 
    // the function is returning an generic type array 
    return array.filter((item) => condition(item));
}
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray(numberArray, (num) => num % 2 === 0);
console.log(evenNumbers);
const stringArr = ["apple", "banana", "cherry", "date"];
const shortWords = filterArray(stringArr, (words) => words.length < 6);
console.log(shortWords);
const fruitArray = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Cherry", color: "Red" },
    { name: "Blueberry", color: "Purple" }
];
const giveFruitColor = filterArray(fruitArray, (fruit) => fruit.color === "Red");
console.log(giveFruitColor);
// Generic Function which takes multiple files 
// Function that reverses the order of two numbers
function reversePair(value1, value2) {
    return [value2, value1];
}
const reversing = reversePair("hello", 20);
console.log(reversing);
// Generic class  
class Box {
    constructor(initialContent) {
        this.content = initialContent;
    }
    getContent() {
        return this.content;
    }
    setContent(newContent) {
        this.content = newContent;
    }
}
// const stringBox = new Box<string>("Hello , World");
// console.log(stringBox.getContent());
// stringBox.setContent("spdifnpidfnwpnwini");
// console.log(stringBox.getContent());
// For Number
const numberBox = new Box(2222);
console.log(numberBox.getContent());
numberBox.setContent(34114);
console.log(numberBox.getContent());
