const name="Rohan"
const age =22

// console.log(name + age + " value");
//instead of this use `` (NOTE: it is different from '')
//THIS IS CALLED Interpolated string or string Interpolation

console.log(`Hello my name is ${name} and my age is ${age}`);

//one more method to declare a string
const gameName = new String("Deadlock_701")
console.log(gameName);
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('c'));


const gName = gameName.substring(0,4)
console.log(gName)

const newStr = gameName.slice(-11,4)
console.log(newStr);
console.log();

const newStr1 = "   rohan   "
console.log(newStr1);
console.log(newStr1.trim());
console.log();

const url ="https://rohan.com/rohan%20singh"
console.log(url);
console.log(url.replace('%20','-'))
console.log();

console.log(url.includes('deadlock'))
console.log(url.includes('rohan'))
console.log();

console.log(gameName.split('_'));