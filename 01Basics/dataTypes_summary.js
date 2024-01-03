// #primitive

// 7 types: Striing, Number, Boolean, null. undefined, Symbol


const score =100
const scorValue = 100.3

const isLoggesdIn= true
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId)

const bigNUmber = 12462165413164125n //writing n at the end converts it automatically intoi bigInt

//Reference typr or non primitive 

//Array, objects, Functions

const animals = ["dog", "cad", "horse"];

let myObj ={
    name: "Rohan",
    age: "22",
}

const myFunction = function(){
    console.log("Hello Public");
}

//typeof  non primitive returns object
console.log(typeof bigNUmber);
console.log(typeof outsideTemp);
console.log(typeof animals);


//*************************************************************************

//stack(used in primitive) -> stack workson the basiosof copy
//Heap used in non primitive ->heap uses reference

let name1="Rohan"
let name2 = name1

name2= "deadlock"

console.log();
console.log(name1);
console.log(name2);
console.log();

console.log("Before Update");
let userOne ={
    email: ":xyz@gmail.com",
    contactNO: 94298122
}

let userTwo = userOne
//this will store in Heap and both user 1 and user two points to same data 
//so if value of userTwo changes it will affect userOne too

console.log(userOne)
console.log(userTwo);
console.log();

userTwo.email="pqr@gmsil.com"

console.log("After Update");
console.log(userOne)
console.log(userTwo);
console.log();