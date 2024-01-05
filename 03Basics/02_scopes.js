//global scope
let a =10
let b=20
let c= 30

console.log(a);
console.log(b);
console.log(c);

//{} defines the scope

if(true){
    //block scope
    let p =10
    const q=20
    var r= 30
}
console.log();
//p,q,r is not defined outside the scope
// console.log(p); 
// console.log(q);
// console.log(r);
let x=10;
if(true){
    let x=20;
    console.log('inner x = ', x);
}
console.log('outer x = ', x);
console.log();
// ********************************************************************************

function one(){
    const username = "Rohan"
    function two() {
        const website = "github"
        console.log(username);
    }
    //console.log(website); //it cannot be executed as it is out of its scope
    two()
}

one()
console.log();

if (true) {
    const username ="RohanSingh131"
    if (username === "RohanSingh131") {
        const website =" Github"
        console.log(username + website);
    }
    // console.log(website); //website is used outside its scope
}
// console.log(username);  //username is used outside its scope
console.log();



//in js if we define and declare a function directly then we can call the function before declaration
console.log(addone(3))
function addone(num) {
    return num+1
}
console.log(addone(4))



//in js variable are two powerfull they can store values, objects, functions too
//in this type of declaration we cannot call the function before declaration

// console.log(addTwo(1))
const addTwo = function(num){
    return num+2
}

console.log(addTwo(4))

//concept of hoisting