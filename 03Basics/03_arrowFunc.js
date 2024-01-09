//let's learn about 'this' 
//this is used to refer to current context
const user={
    username : "Rohan",
    price : 450,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to DTI`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username="Ro" //here the context is changed
user.welcomeMessage()

console.log(this);
console.log();
console.log();
// arrow function
function test() {
    let username = "deadlock"
    console.log(this);
    console.log(this.username); //undefined
}
test()
console.log();

const t1 = function(){
    let username = "deadlock"
    console.log(this);
    console.log(this.username); //undefined
}
t1()
console.log();

//creating an arrow function
const t12 = ()=>{
    let username = "deadlock"
    console.log(this); //empty paranthesis
    console.log(this.username); //undefined
}
t12()
console.log();


const adder=(num1,num2) => {
    return num1+ num2;
}
console.log(adder(5,6));

//arrow function with implicit return type... here we need not to use {} and return ...AND ALL THE WORK IS sumed up in a single line
const subtratcter=(num1,num2) => num1- num2;

console.log(subtratcter(5,6));
console.log();


//to return object in arrow function we need to use ()
const objectReturner = () => ({username:"Rohan",
message: "Hii"})
console.log(objectReturner());