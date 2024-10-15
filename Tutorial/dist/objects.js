"use strict";
// structured data type that represents a collection of properties , each with a key and an associated value 
// * The properties of the object can have a type specific type , and the object itself can be annotated with a type ,
// often defined using an interface or a type alias 
// syntax - type varName (annotation/types) = {property : value};
// const person : {firstName : string ; lastName : string ; age : number} = {
//     firstName : "John",
//     lastName : "Doe",
//     age : 20,
// };
// console.log(person);
// console.log(typeof person);
// function printUser() : {firstName : string ; lastName : string ; age : number} {
//     return {
//     firstName : "Anadi",
//     lastName : "Natu",
//     age : 21,
//     }
// }
// console.log(printUser());
// Object as types
// type Users = { 
//     name : string;
//     age : number;
//     location : string;
// }
// const printUserInfo = (user : Users) => {
//     return `Name : ${user.name} , Age : ${user.age}  Location : ${user.location}`;
// }
// const myPerson : Users = {
//     name : "Anadi Natu",
//     age : 30 ,
//     location : "Lucknow"
// }
// console.log(printUserInfo(myPerson));
// // or
// console.log(printUserInfo({name:"Anjali" , age:41,location:"Delhi" }))
// Optional Properties : 
// You can make a certain property optional type by adding a question mark ? after the property name
// type person = { 
//     name : string;
//     age : number;
//    readonly location : string;
//     email? : string; 
// }
// const mine : person = {
//     name : "Anadi Natu",
//     age : 30 ,
//     location : "Lucknow"
// }
// email property omitted no error 
// mine.location = "London"; // error : cant change a readonly property;
// console.log(`Name : ${mine.name} , Age : ${mine.age}  Location : ${mine.location} Email : ${mine.email}`);
