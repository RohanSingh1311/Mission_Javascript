const marvel_heros = ["thor", "ironman", "hulk"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //this adds complete dc_hero array in marvel_heros array
// // making array inside an array... uses original array
// console.log(marvel_heros);

//concat() it merges and returns a new array just my merging the values of array
const heros= marvel_heros.concat(dc_heros);
console.log(heros);


//one more method to concat array
const all_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros);

//flat(depth)  ... it flattens a n-Dimensional array and depth decides how deep me need to flatten

const imagArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const flatArr = imagArray.flat(Infinity) //infinity so that complete barray can be flat irrespective of the number of subarrays
console.log(flatArr);

//Array.isArray()  ... check if given data is array or not
console.log(Array.isArray("Rohan"));
console.log(Array.isArray([1,2,3,4,5]));

//Array.from()  ...make array from given data
console.log(Array.from("Rohan"));

console.log(Array.from({name: "Rohan"}));  //here we need to define that the data is to be made from key or value

//Array.of()  ... makes array from the fgiven varaibles value
let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3));