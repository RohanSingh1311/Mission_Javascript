const tinderUser = new Object() //singelton object
console.log(tinderUser)

tinderUser.id = "123aqbc"
tinderUser.name = "Rahul"
tinderUser.isLoggedIn = false

console.log(tinderUser);
console.log();

const regularUser = {
    email : "jhgd@jahan.com",
    fullname : {
        userFullName: {
            firstName: "Rohan",
            secondName: "Singh"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userFullName);
console.log(regularUser.fullname.userFullName.firstName);

console.log();
console.log();

const obj1 ={1:'a', 2:'b', 3:'c'}
const obj2 ={4:'d', 5:'e', 6:'f'}

const obj3={obj1, obj2}; //this will create object inside object
console.log(obj3);
console.log();

//Object.assign() this helps in mergings the object data and returns a new object
const obj4 = Object.assign(obj1, obj2); //target is obj1 and data is merged in it
console.log(obj4);
const obj5 = Object.assign({},obj1, obj2); //this is the prefered way of writing, {} is the traget all the daya is merged in it
console.log(obj5);

//using spread to merege object

const obj = {...obj1, ...obj2}
console.log(obj);
console.log();

//we get data from database in form of array of object...so now trying to fetch data in such case

const users = [
    {
        id: 1,
        email: "abc@pqr.com"
    },
    {
        id: 2,
        email: "abc@xyz.com"
    }
]

console.log(users[1]);
console.log(users[1].email);

console.log(tinderUser);
//get all keys of object

console.log(Object.keys(tinderUser)); //returns array of keys
console.log(Object.values(tinderUser)); //returns array of values
console.log(Object.entries(tinderUser)); //returns array of [array of key value pair]

//checck if key exists
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log();
console.log();

// +++++++++++++++ OBJECT PART 3++++++++++++++++

//object destructure
const course ={
    courseName : "JS with DTI",
    price : "300",
    courseInstructor : "Deadlock" 
}

const{courseInstructor: instructor} = course
//instead of calling course.courseInstructor we can now directly call instructor
console.log(instructor);



//this is how json file is you can check at random user me api and to understand data you can use json formatter
// {
//     "name" : "Rohan",
//     "courseName" : "JS Master",
//     "price" : "Free"
// }


