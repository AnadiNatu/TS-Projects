"use strict";
// An intersection type is a way to combine multiple type into a single type
// that include all the properties and methods of each constituent type . 
//An intersection type is dented by an (&) symbol
// type Person = { 
//     name : string;
//     age : number;
//    location : string;
//     email : string; 
// }
// type Employe = {
//     id: number;
//     title:string;
// }
// intersection type
// type PersonAndEmployee = Person&Employe;
// const alice : PersonAndEmployee = {
//     id:1,
//     name : "Alice",
//     age:23,
//     location:"london",
//     email:"alice@gmail.com",
//     title:"developer"
// }
// console.log(`I.D : ${alice.id} Name : ${alice.name} , Age : ${alice.age}  Location : ${alice.location} Email : ${alice.email} Title : ${alice.title} ` );
