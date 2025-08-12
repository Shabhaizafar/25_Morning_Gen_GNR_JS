//    - XHR requests.
//    - Error handling in XHR requests.
//    - XHR request Chaining.
//    - Promisifying XHR requests and chaining using then method.
//    - Fetch API.


// var xhr = new XMLHttpRequest();

// xhr.open("GET","https://catfact.ninja/fact");



// xhr.onload = function(data){
//     if(data.target.status == 200){
//         console.log(data.target.response);
//     }else{
//         console.log("Error");
//     }
// }


// xhr.send();



var idp = +prompt("Enter Id");
function main(url){
    var xhr = new XMLHttpRequest();

    xhr.open("GET",url);

    xhr.onload = function(data){
        if(data.target.status == 200){
            console.log(JSON.parse(data.target.response));
            var post_id = JSON.parse(data.target.response).id;
            
            fetch(`https://jsonplaceholder.typicode.com/users/${post_id}`).then((a)=>{
                a.json().then((b)=>{
                    console.log(b);
                });
            });

        }else{
            console.log("Error");
        }
    }


    xhr.send();
}

main(`https://jsonplaceholder.typicode.com/posts/${idp}`);

// 