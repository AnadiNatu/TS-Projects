// Enums is a way to define a set a named costants . Enums allow you to define a collection
// of related values that can be used intrchangedly in your code



// enum CardinalDirections  {
//     North,
//     South,
//     East ,
//     West 
// }

// let currentDirection = CardinalDirections.East;
// console.log(currentDirection);


// Enum Initialized - set value of first numeric enum and have it auto increment rom that  

// enum CardinalDirections  {
//     North = 1,
//     South,
//     East ,
//     West 
// }

// let currentDirection = CardinalDirections.East;
// console.log(currentDirection);


// Enum Fully Initialized - the values dont increment automatically

// enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accept = 202,
//     BadRequest = 400
// }

// console.log(StatusCodes.Accept);
// console.log(StatusCodes.Success);
// console.log(StatusCodes.BadRequest);


// String Enum

enum CardinalDirections  {
        North = "North",
        South = "South" ,
        East = "East" ,
        West = "West"
    }


    console.log(CardinalDirections.North);
    console.log(CardinalDirections.West);

    console.log(`You have to go ${CardinalDirections.West}`);
