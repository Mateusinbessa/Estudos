"use strict";
//Arrays
let bands = ['Teste', 'Teste2']; // --> Strings only
let guitars = ['Teste', 2, 'Teste2', 3]; // Strings and numbers only
//Tuple
let myTuple = ['Mateus', 12, true];
//Objects
let myObj;
const exampleObj = {
    prop1: 'Mateus',
    prop2: 20
};
let evh = {
    name: 'Nilson',
    active: true,
    albums: ['Teste', 2]
};
const greetGuitarist = (guitarist) => {
    var _a;
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    //property name is possible undefined, so i need to use the chain operator!
    //TS launchs an error if i do not use this.
};
console.log(greetGuitarist(evh));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 1] = "A";
    Grade[Grade["B"] = 2] = "B";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["D"] = 4] = "D";
    Grade[Grade["E"] = 5] = "E";
})(Grade || (Grade = {}));
console.log(Grade.B);
