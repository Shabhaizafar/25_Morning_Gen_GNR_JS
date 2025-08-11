//   => Is Javascript a synchronous or asynchronous programming language ?.
//      js is a synchronous Programming Language.
//      we can change that rule.

//    - SetTimeout().
//    - SetTimeout() with 0 millisecond.
//    - Callback Queue.
//    - SetInterval and create little project with setInterval.




// How We can : 
// Using SetTimeout and SetInterval ; 

// 1. setTimeout : 
// setTimeout(() => {
    
// }, timeout);      // timeout  : milisecond

// setTimeout(() => {
//     console.log("Hello");
// }, 4000);

// for (let i = 0; i < 1000; i++) {
//     console.log("inner");
// }
// setTimeout(() => {
//     console.log("Hello");
// }, 2000);


// console.log("Start");

// setTimeout(() => {
//     console.log("process");
// }, 2000);

// console.log("End");




// console.log("Start");

// setTimeout(() => {
//     console.log("process");
// }, 0);

// console.log("End");





// setTimeout(() => {
//     console.log(a);
// }, 7000);

// var a;

// setTimeout(() => {
//     a = 12;
// }, 5000);





// 2. SetInterval : 


// var i = 0;
// var id = setInterval(() => {
//     i++;
//     console.log(i);
//     if(i==5){
//         clearInterval(id);
//     }
// }, 1000);











