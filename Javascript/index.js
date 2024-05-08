// == ===

// parseInt() 

// alert()

// confirm() yes / n

// const age = confirm("Age 18 or not?")
// console.log(age);

// if(age){
//     const age_input = prompt("Enter the age: ")
//     if(age_input > 18){
//         alert("Eligible for vote");
//     } else {
//         alert("not eligible for vote")
//     }
    
// } else {
//     alert("Sorry u cant vote !")
// }


// prompt()


// break - stop entire for loop

// continue - stop only that single iteration


// ternary operator

// (condition)? console.log(i);: </expression>;

// (i!=5) && console.log(i);


// for(let i=0;i<10;i++){ //0 .. , 5 ,.. 9 - 10 times
//     console.log(i);
//     if(i==5){
//         break;
//     }
// }

// let age = 8;

// if(age >= 18){ 
//     console.log("vote podunga");
// } else {
//     console.log("Vote podathinga");
// }

// (age >= 18)? console.log("vote podunga") : console.log("Vote podathinga");

 



// let num = 0; 

// if(num > 0){
//     console.log("Positive ");
// } else if(num < 0) {
//     console.log("Negative ");
// } else {
//     console.log("Zero ");
// }



// Arithmetic operator

// + - * / % **

// console.log(3*4);
// console.log(12/4);


// a = 3 + 5;  operand(3 , 5) , operator(+ , =) , operation(addition).  , expression or statement


// unary operator - incrementing or decrementing a value, negating a value(-a), ,   ++ --
// i++ , single operand ah vachu oru operation panna athu unery operator.

// let a = -10;
// let b = -a; // -10

// console.log(b);




// \n \t \b 

// armithmetic , relational ,ternary , logical.
// for , while , if , switch.
// parseFloat()
// eval()
// valueOf()
// max()
// min()
// round()
// Date()



//promise API Call -- Asynchronous operations(simultaneous)
// small application
// fetch('https://dummyjson.com/products/1') // success or error
// .then(res => {
//     res.json() // Asynchronous operations
// })
// .then(json => console.log(json))
// .catch((err)=>{
//     console.log(err);
// })



// large appilcation
// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => {
//     console.log('Axios Response:', response.data);
//   })
//   .catch(error => {
//     console.error('Axios Error:', error);
//   });

// let a = 10;
// console.log();


// Async / await 


// async function fetchData(){

//     try{
//         let data = await fetch('https://dummyjson.com/products/1');
//         let jsondata = await res.json();
//     } catch(err){
//         console.log(err);
//     }
   
//     console.log(jsondata);
// }


// let arr = [2,6,46,10,6,6];

// arr.forEach((item , index , wholeArray)=>{
//     console.log(item);
// })


// for(let i = 0; i <arr.length;i++){
//     arr[i] = arr[i] + 2; // arr[0] + 2 = 2 + 2 ,  arr[1] + 2 = 3 + 2
// }

// console.log(arr);

// let new_array = arr.map((item , index , wholeArray)=>{  // item = 2 , 3,  45, 5, 6, 6 
//     console.log("index = " , index + 1);
//     console.log("item = " , item);
//     console.log("wholeArray = " , wholeArray);
//     return item + 2;  // 2 + 2
// }) // [4 , 5 , 47 , 8 , 8 ]
// map - takes input as array , return as array both have same length


// let filterArray = arr.filter( item =>{ // item = 2 , 3 , 45 , 
//     return item%2==0
// }) //[2 , ]

//filter - takes input as array , return as array but length may or may not equal.


// let arr = [2,6,2,3,6,6];
// let sum = 10;
// for(let i =0;i<arr.length;i++){
//     sum = sum + arr[i];  // sum = 0 + 2 = 2 , sum = 2 + 6 = 8 
// }
// console.log(sum);

// let reduceArr = arr.reduce((sum , item)=>{ // 2 
//     return sum + item
// } , 0)

// reduce - takes array it returns value.


// console.log(reduceArr);



// map()
// filter


