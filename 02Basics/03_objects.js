// singelton  object...which is of its on unique kind
// object made from constructor is singelton 
//object.create

//if object id declared via literals it is not singelton

//object literals

const mySym1 = Symbol("key1")
const JsUser ={
    "full name": "Rohan Singh",
    [mySym1] : "myKey1", //this ishow we declare a symbol dataType as a key in object
    name: "Rohan",
    age: 22,
    location: "Surat",
    email: "xyz@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["monday", "Tuesday","Wednesday"]
}


//access object

console.log(JsUser.name);
console.log(JsUser["email"]);
//we cannot access a key name having space in it via teh dot method so we can use [],
//but the key is by default stored as string so we need to specify as objectName["KeyName"]
console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym1]);
console.log();

JsUser.email = "pqr@dfd.com";
console.log(JsUser);

//freeze object so that data cannot be altered
// Object.freeze(JsUser)
// JsUser.location = "Delhi"
// console.log(JsUser);

console.log();
console.log();

//creating function

JsUser.greeting = function(){
    console.log("hello Js User");
}

JsUser.greeting2 = function(){
    console.log(`hello Js User ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greeting2());


