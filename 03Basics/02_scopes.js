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