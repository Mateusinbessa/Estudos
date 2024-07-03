const myName: string = 'Mateus'
let myLastName: string
let myAge: number | string // it can hold a string or a number
let isLoading: boolean
let album: any // any type of data, string, number, boolean. (avoid this)

let userName: 'Dave' | 'John' | 'Amy' // --> Only those values can be assigned to userName!

const sum = (a: number, b:number): number => {
  return a + b
}