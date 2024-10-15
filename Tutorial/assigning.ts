// Annotations are used to specify the data ypes of variables parameter , function return value
// and other types of values . 
// Annotatins help devs catch errors early in devlopment by allowing 
// them to specify what types of values can be assigned to a given variable 
//or passed as an argument to a functions

// syntax - let variable_Name : annotation(type) = value;

// There are two ways in TS to assign a tyype
// 1.) Explicit 2.)Implicit 


// Explicit 

let firstName : string = "Dylan";


// Implicit 
// This is also known as type inference is a feature of TS that allows the compiler to automatically detrmine the type of a variable based on its value


// let firstName1 = "Anadi Natu" ;

// console.log(typeof firstName1);


// Error 

// let fname : string = "AAAAA";
// fname=33;


// any type keyword - is a type that disables type checking and effectively allows all types to be used .

// **WARNING**
// any type should be used sparingly , as overuse of any can lead to untyped code and make it harder to catch type-related bugs during development


// let v : any = true;
// v="string"; // no error in any type 


// unknow type keyword - is best used when you don't know the type of data being typed

// let w : unknown = 1;
// w = "string";



// undefined & null - are types refer to the JS primitive undefined and null respectively

let x : undefined = undefined;
let y : null = null;




// 

// type Person = {
//     name :string;
// };

// const person : Person= {
//     name : "John",
// }


// console.log(person.name);


// Function Parameter Annotation 

// Reg Function 
function functPara(num : number){
    return num+1;
}

// Arrow Function 

const double = (x : number , y : number) => {
    x*y;
}

const res = double(2,10);

// const res1 = double(2,10,6);


console.log(res);

// TS will also give you a worning if you provid more or less arguments then you specified in your parameters area



// Default Argument(Parameter) Value 



function greeting(greet : string = "Hello"){
    return `Anadi ${greet}`;
}


// const result = greeting();
const result = greeting("Welcome");

console.log(result);


// Function Return Annotation

function d(num1 : number , num2:number) : number {

    return num1*num2;
}


const d2 = (num1 : number , num2:number): number => num1+num2;

console.log(d(45,30));
console.log(d2(50,100));



// void type keyword - It is a type that represents the absence of any value . It is often used as the return type for the functions that do 
// not return values

function printIt(message : string):void{
    console.log(`This is my ${message}`);
}

console.log(printIt('Hello Bitches'));


