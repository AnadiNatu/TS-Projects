// class Person {
//     name : string;
//     age : number;


//     constructor ( name : string , age : number){
//         this.name = name;
//         this.age = age;
//     }
// }


// const person = new Person("John ", 20);
// console.log(person);


// Access Modifiers - we ue them to control the visibility of class members(properties and methods). access modifiers
// determine the ways in which class memebers can be accessed from within and outside the class 
// Public(members can be accessed from anywhere, both inside and ouside) , Private(can only access the memebers from the inside of a class ) , Protected(members can be accessed frm anywhere in the class and any subclasses that extend this class)

// class Animal { 
//     public name : string;
//     private age : number;
//     protected species : string;

//     constructor ( name : string , age : number ,species : string){
//         this.name = name;
//         this.age = age;
//         this.species = species;
//     }

//     public getName(){
//         return this.name;
//     }


//     private getAge() : number
//     {
//         return this.age;
//     }

//     protected getSpecies(){
//         return this.species;
//     }


// }


// class Dog extends Animal{

//     constructor( name : string , age : number){
//         super(name , age , "Canines");
//     }


//     public getInfo():string{
//         return `${this.getName()} ${this.getSpecies()} ${this.getAge()}`
//     }
// }


// 


// Getter & Setter - Allows to access and modify class properties , Getter and Setter allow you to 
// define a property in a class but internally has additional logic for getting and setting the value

// class MyClass {
//     private _myPrivate : number = 0;

//     get myPrivate():number {

//         return this._myPrivate;

//     }


//     set myPrivate(value : number){
//         this._myPrivate = value;
//     }
// }

// const myIncs = new MyClass();

// console.log(`${myIncs.myPrivate}`); //  getting a value of a private property

// myIncs.myPrivate =1000;

// console.log(`${myIncs.myPrivate}`); //  seeting the value of a private property
 