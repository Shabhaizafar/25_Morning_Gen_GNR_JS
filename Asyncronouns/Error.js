// Error Handling in Fetch API.

// var a = 12;

// try {
//     console.log(a);
// } catch (error) {
//     console.log(error);
// }





// var b = 13;
// console.log(b);





// Consume Promises with async and Await : 
async function getUsers() {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data =  await response.json();
        console.log(data);
}

getUsers();



// https://official-joke-api.appspot.com/jokes/random

