
//basic types
let id: number = 5

let company: string = 'Fudfinders'

let isPublished: boolean = true

let x: any = 'hello'

let ids: number[] = [1,2,3,4,5]

let arr: any[] = [1, 'hii', true]

 //tuple
 let person: [number, string, boolean] = [1, 'brad', true]

 //tuple array

 let employee: [number, string][]

 employee = [
    [1, 'brad'],
    [2, 'dillon'],
    [3, 'john'],
 ]

 //unions 

 let pid: string | number

 pid = 22


 //enum 

 enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right,
 }

 enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
 }

 console.log(Direction2.Up)

 //objects 

//messy way

// const user: {
//    id: number,
  //  name: string,
 //} = {

    //id: 1,
    //name: 'john' 
 //}

//cleaner way

type User = {
    id: number,
    name: string,
}

const user: User = {
    id: 1,
    name: 'john',
}

//type assertion

let cid: any = 1

//let customerId = <number>cid
let customerId = cid as number

//functions

function addNum(a: number, b: number): number {
    return a + b
}

console.log(addNum(1, 3))

//void

function Log(message: string | number): void {
    console.log(message)
}

//interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number, //the ? makes the age property optional
}

const user1: UserInterface = {
    id: 1,
    name: 'john',
    //age: 20, //age does not need to be defined because of the "?"
}

//user1.id = 5 this doesnt work because the id property is readonly

//use interfaces with functions 

interface MathFunc { 
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

//classes 

class Person {
    id: number
    name: string

    constructor(id: number, name:string) {
        this.id = id
        this.name = name
    }
}
const brad = new Person(1, 'brad trites')
console.log(brad)


