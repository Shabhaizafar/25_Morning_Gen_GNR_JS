//    - Intro to Ajax, HTTP Request.

//  Asyncronouns javascript and XML.


//    - XHR requests.
//    - Error handling in XHR requests.
//    - XHR request Chaining.
//    - Promisifying XHR requests and chaining using then method.
//    - Fetch API.


// fetch("url").then((data)=>{
//     data.json().then();
// })


// Rule : 
// variable name/Functioname : lowercase 
// Class : First letter Capital 
// method : camelCase
// const :   UPPERCASE 



// Step : 1
// var xhr = new XMLHttpRequest();


// Step : 2     xhr.open("GET/POST","url path");   // api 
// xhr.open("GET","https://jsonplaceholder.typicode.com/todos");

// Steps : 3
// xhr.onload = function (){
//     console.log("Onload");
// }   
// xhr.onloadstart = function(){
//         console.log("Onload Start");
// }

// xhr.onloadend = function(){
//         console.log("Onload End");
// }
// xhr.onprogress = function(){
//         console.log("On Progress");
// }


// xhr.onload = function (data){
    // console.log(data);
    // console.log(data.target);
    // console.log(data.target.response);
// }   


// Final Step :
// xhr.send();