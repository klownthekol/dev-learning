"use strict";
//basic types
let id = 5;
let company = 'Fudfinders';
let isPublished = true;
let x = 'hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, 'hii', true];
//tuple
let person = [1, 'brad', true];
//tuple array
let employee;
employee = [
    [1, 'brad'],
    [2, 'dillon'],
    [3, 'john'],
];
//unions 
let pid;
pid = 22;
//enum 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
const user = {
    id: 1,
    name: 'john',
};
//type assertion
let cid = 1;
//let customerId = <number>cid
let customerId = cid;
//functions
function addNum(a, b) {
    return a + b;
}
console.log(addNum(1, 3));
//void
function Log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'john',
    //age: 20, //age does not need to be defined because of the "?"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//classes 
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const brad = new Person(1, 'brad trites');
console.log(brad);
