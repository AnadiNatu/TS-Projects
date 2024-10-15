"use strict";
// Type Aliases - allows defining typs with custo name;
const colored = {
    height: 20,
    width: 30,
    color: "Teal"
};
const myCar = {
    brand: "Toyota",
    start: function () {
        console.log("Car go vroom vroom");
    },
    model: "Camery",
    stop: function () {
        console.log("Car Stop");
    }
};
myCar.start();
myCar.stop();
