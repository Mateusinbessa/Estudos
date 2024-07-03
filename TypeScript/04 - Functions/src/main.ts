type stringOrNumber = string | number
type stringOrNumberArray = (string | number)[]

interface Guitarist {
  name: string,
  active: boolean,
  albums: stringOrNumberArray
}
type UserID = stringOrNumber 
//interface PostId = stringOrNumber --> It won't work!

//Functions
const add = (a: number, b: number): number => {
  return a + b
}

//Void Function
const logMsg = (message: string): void => {
  console.log('Void')
}

//Type as parameter of functions
type mathFunction = (a: number, b: number) => number
const multiply: mathFunction = (a, b) => {
  return a * b
}


//Optional parameters --> optional parameters have to be the lasts.
const addAll = (a: number, b:number, c?: number): number => {
  if (c) {
    return a + b + c
  }
  return a + b
}

//Never
const createError = (errMsg: string) => { // --> Functions that throws errors are of NEVER TYPE!
  throw new Error(errMsg)
} // if you see the type never in your function, it it's not throwing an erro, it have something wrong!

const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string'
  if (typeof value === 'number') return 'number'
  return 'Nunca vai entrar aqui'
}