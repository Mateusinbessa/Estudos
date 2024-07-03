//Arrays
let bands: string[] = ['Teste', 'Teste2'] // --> Strings only
let guitars: (string|number)[] = ['Teste', 2, 'Teste2', 3] // Strings and numbers only

//Tuple
let myTuple: [string, number, boolean] = ['Mateus', 12, true]

//Objects
let myObj: object

const exampleObj = {
  prop1: 'Mateus',
  prop2: 20
}

// exampleObj.prop1 = 20 --> error, prop 1 only can be a string

//Types
type stringOrNumberArray = (string | number)[]

type Guitarist = {
  name?: string,
  active: boolean,
  albums: stringOrNumberArray
}

let evh: Guitarist = {
  name: 'Nilson',
  active: true,
  albums: ['Teste', 2]
}

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name?.toUpperCase()}!`
  //property name is possible undefined, so i need to use the chain operator!
  //TS launchs an error if i do not use this.
}
console.log(greetGuitarist(evh))

//Enums
enum Grade {
  A = 1,
  B,
  C,
  D,
  E
}
console.log(Grade.B)