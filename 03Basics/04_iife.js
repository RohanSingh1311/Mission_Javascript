//Immediately Invoked Function Expressions (IIFE)

(function connector() {
    //this is a named iife as it has a name
    console.log('DB Connected');
})();
//wrap a function in () and add () at the end to make it a iife example: 
//(function defination and declaration)()
//to let the compiler know that our iife has ended we need to add a ; 
//so now the synatx is:
// (function defination and declaration)();

( () => {
    //unnamed iife
    console.log("DB connected again");
})();

//passing argument to  iife
( (name) => {
    console.log(`hello ${name}, DB is connected`);
})('Rohan');