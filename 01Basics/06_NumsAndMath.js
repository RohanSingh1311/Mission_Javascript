const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);

console.log(balance.toString())
console.log(typeof(balance.toString()));
console.log(balance.toString().length)

console.log(balance.toFixed(1)); //100.0

const num1 = 112.8966
console.log(num1.toPrecision(3));
console.log(num1.toPrecision(4));

const num2 = 1123.8966
console.log(num2.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString()); //10,000,000
console.log(hundreds.toLocaleString('en-IN')); //1,00,00,000 Indian System



// +++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.51));
console.log(Math.round(4.49));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.8));

console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random());//va;lue always between 0 and 1
console.log(Math.floor((Math.random())*10)+1);

//IMPORTANT ***
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max -min +1))+min);
