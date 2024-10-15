// Unions - Unions are used to declar a variabl that can have multiple types .
// Unions are useful when we want to allow a variable or paramter to accept multiple types


// let myVar : number | string = 90;

// myVar = "Heeloo";


// no error in storing the two specified types 

// myVar = true; // error not specified value type

// type Person = { 
//     name : string;
//     age : number;
//    location : string;
//     email : string; 
// }


// type Employee = {
//     id: number;
//     title:string;
// }


// const people : Person | Employee = {
//     name : "Anadi",
//     age : 34,
//    location : "london",
//     email :  "anadi@gmail.com"
// }

// const people : Person | Employee = {
//         id: 1,
//         title:"Developer"
//     }


// Unions in array 

// const items : (number|string)[] = ["Anadi " ,1 ,2 ,3 ,"Harrapa"];

// console.log(items);


// Union as a function parameter 

function printThis(code : number|string){
    console.log(`${code}`);
}

// you can use string or number class method on this variable . it will throw an error