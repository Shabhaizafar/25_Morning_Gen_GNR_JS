// function newone(){
//     console.log("newOne Call");
// }

// function Main(){
//     console.log("Hello");
//     newone();
// }

// Main();


function newone(){
    console.log("newOne Call");
}

function Main(callback){
    console.log("Hello");
    callback();
}

Main(newone);

newone();