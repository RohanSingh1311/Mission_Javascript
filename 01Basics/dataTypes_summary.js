// #primitive

// 7 types: Striing, NUmber, Boolean, null. undefined, Symbol


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
