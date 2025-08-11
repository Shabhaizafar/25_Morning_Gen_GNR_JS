// How To Fetch Data Using Api :

// Step : 1
// fetch("url");    // url : link path 
// fetch("https://jsonplaceholder.typicode.com/users");



//Step: 2
// console.log(fetch("asdfghjk"))  // return  : promise
// console.log(fetch("https://jsonplaceholder.typicode.com/users"));



// Step : 3 
// fetch("asdfghjk").then();        // then succes/reject 


// step :4
// fetch("asdfghjk").then((data)=>{},()=>{});        // response > data : object 
                                // api : properly Working ?

// fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
//     console.log(data,typeof data);
// });

// Step : 5                                
// fetch("asdfghjk").then((data)=>{
//     data.json()
// },()=>{});              // data.json()         // object => promise 

// fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
//     console.log(data.json());
// });




// fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
//     data.json().then((data2)=>{
//         console.log(data2);
//     });
// });





// fetch("mydata.txt").then((data)=>{
//    data.json().then((data2)=>{
//         console.log(data2);
//     });
// });

















