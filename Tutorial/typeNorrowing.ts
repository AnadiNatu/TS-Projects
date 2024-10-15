// Type narrowing is the process of refining a variable's type within a conditional block of code
// this allows yo to write more precise and type-safe code 


// typeof

type MyType = string | number ;

function exampleFunction (value :  MyType ) : void {
    // console.log(value.toUpperCase()); // here this code is giving an rror because the datatype of value isn't sure 

    if(typeof value  === 'string'){
        console.log(value.toUpperCase());
    } else {

        console.log(value.toFixed(3));
    }

}


exampleFunction("dpidfid");

exampleFunction(33322);


// instanceOf

class Dog {
    bark() : void{
        console.log("Bark");
    }
}


class Cat {
    meow():void{
        console.log("Meow");
    }
}


function animalSound(animal : Dog | Cat) : void{

    if(animal instanceof Dog){
        animal.bark();
    }else{
        animal.meow();
    }

}



const dog = new Dog();
const cat = new Cat();

animalSound(dog);
animalSound(cat);
