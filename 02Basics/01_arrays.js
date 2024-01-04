const myArr1 = [0,1,2,3,4,true,"jhgfdk"]
const myArr = [0,1,2,3,4,5]
const animals = ["dog", "cat", "hen"]
const myarr2 = new Array(1,2,3,4)
//while doing a copy operation in js..array makes a shallow copy i.e making copy via reference

console.log(myArr1);
console.log(myArr[2]);
console.log(myArr);
console.log(animals);
console.log(myarr2);

// push value in array
myArr.push(6)
console.log(myArr);
myArr.push(7)
console.log(myArr);

//pop value
myArr.pop()
console.log(myArr);

//unshift ...add value to start of array
myArr.unshift(50)
console.log(myArr);

//shift ...remove value from start
myArr.shift()
console.log(myArr);

//includes()..check if value exists in array
console.log(myArr.includes(5));

//indexOf .. returns the index of given elemet if exists ...returns -1 if value does not exist in array
console.log(myArr.indexOf(4));
console.log(myArr.indexOf(855));


//join()
const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);
//this BINDS myArr to newArr and CONVERTS TO STRING
console.log();

//slice .. it extracts the part of array including strat and excluding end AND it does not affect the original array
const myArr12=[1,2,3,4,5]
console.log("A ", myArr12);
const myNewArr = myArr12.slice(1,3)

console.log(myNewArr)
console.log("B",myArr12)
console.log();


//splice  ... it extracts and removes the part from array including start and end both and it affects the original array too!!
console.log("A ", myArr12);
const myNewArr12 = myArr12.splice(1,3)

console.log(myNewArr12)
console.log("B",myArr12)
console.log();