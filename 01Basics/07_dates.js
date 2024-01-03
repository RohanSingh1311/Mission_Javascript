//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);
console.log();


// /month in Javascript starts from 0
let myCreatedDate = new Date(2024,03, 24)
console.log(myCreatedDate.toDateString());
console.log((new Date(2024,00, 23)).toDateString());
console.log();

let myCreatedDate1 = new Date(2024,03, 24,5,5)
console.log(myCreatedDate1.toLocaleString());
console.log();

let myCreatedDate2 = new Date("2024-01-13") //YYYY-MM-DD -> MM-DD-YYYY
console.log(myCreatedDate2.toLocaleString());
console.log();

let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate3.toLocaleString());
console.log(myCreatedDate3.getTime())  //time in miliseconds since 1 jan 1970
console.log();


//timestamp

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log();

let newD =new Date()
console.log(newD);
console.log(newD.getMonth()+1);
console.log(newD.getDay())


// console.log(newDatex.toLocaleString('default',{
//     weekday:"long"
// }))