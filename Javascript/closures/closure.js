
// Task: Write a JavaScript function that generates a series of functions to add a specific value to their input. Each generated function should remember the value it's supposed to add.
// This is also closure but this approach involves unnecessary complexity by defining a separate function

/*
function createAdder(valueToAdd) {
    let sum = valueToAdd;
    function addFive(value){
        return sum + value;
    }
    return addFive;
}
*/

// but this is utilizing closures fully.
function createAdder(valueToAdd) {
    return function (value){
        return valueToAdd + value;
    }
}


const addFive = createAdder(5);
console.log(addFive(10)); // Output: 15
console.log(addFive(20)); // Output: 25

const addTen = createAdder(10);
console.log(addTen(10)); // Output: 20
console.log(addTen(20)); // Output: 30

console.log('------------------------------------------------');

// __________________________________________________________________________________________________________________________


// Task: Write a JavaScript function that keeps track of the total count of function calls made to it and returns the count each time it's invoked.

function createCounter() {
    // Your code here
    let counter = 0;
    return function (){
        counter = counter + 1;
        return counter;
    }
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

console.log('------------------------------------------------');

// __________________________________________________________________________________________________________________________


// Task: Write a JavaScript function that takes in a timeout value in milliseconds and returns a function. When the returned function is invoked, it logs a message after the specified timeout has elapsed.


function createDelayedLogger(timeout) {
    // Your code here
    return function (text){
        setTimeout(()=>{ // should not pass text as argument in setTimeout , this search text in lexical scope , not take from parameter
            console.log(text);
        } , timeout)
    }
}

const delayedLogger = createDelayedLogger(2000);
delayedLogger("Hello, world!"); // After 2 seconds, logs: "Hello, world!"

console.log('------------------------------------------------');

// __________________________________________________________________________________________________________________________

// Task: Write a JavaScript function that creates a caching function. The caching function should accept another function as an argument and return a new function. When the returned function is called with the same arguments as a previous call, it should return the cached result instead of recomputing it.

function createCache() {
    return function (argFun){
        let val1;
        let val2;
        let result;
        return function (value1 , value2){
            if(val1 !== value1 || val2 !== value2) {
                val1 = value1;
                val2 = value2;
                result = argFun(value1 , value2)
            }
            return result;
        }
    }
}

const cacheFunction = createCache();

function expensiveOperation(x, y) {
    console.log("Computing...");
    return x + y;
}

const cachedExpensiveOperation = cacheFunction(expensiveOperation);

console.log(cachedExpensiveOperation(2, 3)); // Output: Computing... 5
console.log(cachedExpensiveOperation(2, 3)); // Output: 5 (no "Computing..." log)


console.log('------------------------------------------------');

// __________________________________________________________________________________________________________________________

function fibonacciSequence() {
    // Your code here
    let x = 0;
    let y = 1;
    return function (){
        let z = x + y;
        x = y;
        y = z;
        return x;
    }
}

const nextFibonacci = fibonacciSequence();

console.log(nextFibonacci()); // Output: 1
console.log(nextFibonacci()); // Output: 1
console.log(nextFibonacci()); // Output: 2
console.log(nextFibonacci()); // Output: 3
console.log(nextFibonacci()); // Output: 5



