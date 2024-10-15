// tuples is a type that represents an array with a fixed number of elements,
// where each element can have a different type . The order of the types in 
// the tuples definition corresponds to the order of the values in the atual array 
// Tuple are similar to array , but they have a specific structure and can be used to model finite sequnces with known length




// Defining a tuples

// let tupleExample : [number , boolean , string] ;

// tupleExample = [5 , true , "String"]; // initialized correctly 
// tupleExample = ["String" , 5 , true]; // initialized incorrectly 


// Values an be till pushed and poped from the tuple so a good practice is to make tuple readonly

// let tupleExample2 : readonly [number , boolean , string];

// tupleExample2 = [7,false,"wdff"];
// console.log(tupleExample2[0]);
// console.log(tupleExample2[1]);
// console.log(tupleExample2[2]);


// Named tuples  

// const graph : [x:number , y:number] = [55.3 , 41.2];


// Destructuring 

// let myTuple : [string , number ] = ["hello " , 42];
// let [first , second] = myTuple;
// console.log(first);
// console.log(second);