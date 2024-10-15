// Type Aliases - allows defining typs with custo name;

// type carYear = number;
// type carType = string;
// type carModel = string;

// type Car = {
//     year : carYear;
//     type : carType;
//     model : carModel;
// }

// const CarYear: carYear = 2001
// const CarType: carType = "Toyota"
// const CarModel: carModel = "Corolla"

// const car: Car = {
//     year : CarYear,
//     type : CarType,
//     model : CarModel
// };



// Interface - Interface is a way to define a contract for the shape of an object .
// It specifies the properties and their types that an object must have .
// Interface is a powerful tool for enforcing a certain structure in your code 


// Examples 

// interface Rectangle {
//     height: number,
//     width : number,
// }


// const rectangle : Rectangle = {
//     height : 30,
//     width : 50,
// };


// interface Person {
//     fname : string,
//     lname : string,
//     age : number
// }

// const examplePerson : Person = {
//     fname: "John",
//     lname: "Smith",
//     age: 33
// };

// console.log(`${examplePerson.age} ${examplePerson.fname} ${examplePerson.lname}`);


 
// Interfaces can extend other interfaces

interface Rectangle {
    readonly height : number ,
    width : number
}

interface ColoredRectangle extends Rectangle {
    color ?: string
}


const colored : ColoredRectangle = {
    height : 20,
    width : 30 ,
    color : "Teal"
}

// we can also make the interface properties readnly and optional(?)




// Interface for functions

// interface MathOperation {
//     (x : number , y : number):number;
// }


// const add : MathOperation = (a,b) => a+b;
// const multiply  : MathOperation = (a,b) => a*b;

// console.log(add(4,5));
// console.log(multiply(4,5));

// interface Greeting {
//     fname : string,
//     lname : string,
//     greting(fname : string ,  lname : string):string
// }


// const person : Greeting = {
//     fname: "Anadi ",
//     lname: "Natu ",
//     greting: (fname: string, lname: string): string => {

//          return `Hello There ${fname} ${lname}`;
//     }
// }


// console.log(person.greting("",""));




// Interfaces for class -  The class that implements the interface has to implement all the method declared in the interface , provide them with definitions 

// interface Vehicle {
//     start():void;
//     stop():void;
// }

// class Car implements Vehicle{
   
   
//     start(): void {
//         console.log("Car Start");    
//     }
//     stop(): void {
//         console.log("Car stop");
//     }

// }


// const myCar =  new Car();
// myCar.start();
// myCar.stop();



//Declaration Merging  - Once a interface is declard it cant be modified . However , TS allows what is informally reffered to as " declaration merging" or "interface merging"
// which is often misconstructed as re-opening
// Declaration merging in TS refers to the ability to extend or argument an existing 
// declaation , including interfaces . This can be useful to an existing interface without 
//modifynig the original declaration


// Original Interface 

interface Car {
    brand : string;
    start():void;
}

// Declaration merging(interface extension)
interface Car{
    model : string;
    stop():void;
}

const myCar : Car = {
    brand: "Toyota",
    start: function (): void {
        console.log("Car go vroom vroom");
    },
    model: "Camery",
    stop: function (): void {
        console.log("Car Stop")
    }
}

myCar.start();
myCar.stop();