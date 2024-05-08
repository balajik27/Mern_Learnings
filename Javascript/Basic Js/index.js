
// Hoisting
// Function statement  - apply hoisting
add();
function add(){
    console.log("this is add function");
}

 // function call or invoke

// Function expression - doesnot apply hoisting
// console.log(sub);

var sub = function(){
    console.log("this is sub function");
}
sub();


// add(){
//     console.log("this is add function");
// }

// sub = function(){
//     console.log("this is sub function");
// }
