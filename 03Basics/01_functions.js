//declaring and defining a function
function myName(){
    console.log("r");
    console.log("o");
    console.log("h");
    console.log("a");
    console.log("n");
}

// calling a function
// myName -> this is function reference
myName()
console.log();

//function to add 2 numbers
function addTwoNum(number1 , number2){  //here number1 and number 2 are parameters
    console.log(number1+ number2);
}

addTwoNum(2,4) //here 2, 4 are agruments
addTwoNum(2,"4")
addTwoNum(2,"a")
addTwoNum(2,null)
addTwoNum(2,undefined)

const result = addTwoNum(3,5)
console.log("result : ", result); //here function doses not return any value so..we get output as undefined
console.log();

function adder(num1, num2) {
    //let result = num1+num2
    // console.log("this will get printed");
    // return result
    // console.log("This will not get printed");
    return num1+num2;
}

const result0 = adder(2,8)
console.log("result: ", result0);
console.log();

function userLoginMessage(username) {
    // if (username === undefined) {
    //     console.log("please enter a username");
    //     return
    // }
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in!!`
}

console.log(userLoginMessage("Rohan"));
console.log(userLoginMessage()); //output will be undefined just logged in!! as we did not pass any value
console.log();

//set value of parameter by default
function msg101(name ="deadlock") {
    return `${name}, Hii how are you??`
}
console.log(msg101())  //takes default value as we did not pass any argument
console.log(msg101("Rohan"))  //takes value as Rohan as we passed argument
console.log();

function calculateCartPrice(...num1){  //here ... is called as rest operator  it can take multiple parameters
    return num1
}

console.log(calculateCartPrice(200, 400, 500));


function calculateCartPrice1(val1, val2, ...num1){  //first 2 arguments will be added to val1 and val2 and remaining to num1
    return num1
}

console.log(calculateCartPrice1(200, 400, 500, 6000));
console.log();


//object as an argument
const userDetails ={
    username : "Rohan",
    bill : 250
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and the bill amount in ${anyObject.bill}`)
}

handleObject(userDetails)
handleObject({
    username: "Rahul",
    bill: 400
})

console.log();
//array as an argument

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArr) {
    return getArr[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([40,50,185,25]));