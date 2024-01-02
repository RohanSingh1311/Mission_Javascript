let score = 33
let age ="40"
let x="142abc"
let nullVal=null
let udVal=undefined
let bool = true

console.log(typeof score);
console.log(typeof(score));

console.log(typeof(age));
console.log(typeof(x));
console.log(typeof(nullVal));
console.log(typeof(udVal));
console.log(typeof(bool));

console.log();

let valueInNumber = Number(age)
console.log(typeof(valueInNumber));

let xUpdate = Number(x)
console.log(typeof xUpdate);
console.log(xUpdate); //this gives output as "NaN" that is "not a number" as it was in mixed format
console.log();

let nullInNumber = Number(nullVal)
console.log(typeof(nullInNumber));
console.log(nullInNumber); //returns 0
console.log();

let udInNumber = Number(udVal)
console.log(typeof(udInNumber));
console.log(udInNumber); //returns Nan
console.log();

let boolInNumber = Number(bool)
console.log(typeof(boolInNumber));
console.log(boolInNumber); //return 1 or 0
console.log();

//"33" -> 33
//"33abc" -> Nan
//true -> 1; false -> 0

let isLoggedIn  = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log();

//-> true; 0-> false
// "" -> false
//"Rohan" ->true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));