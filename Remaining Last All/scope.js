// Global Scope : 
// var a = 12;                // Global Variable
// console.log(a);
// {
//     var a = 30;
// }
// console.log(a);

// Local Scope :    // Function code execution

// function myFu(){
//     var a = 100;            // Local Variable
        //
// }
// myFu();
// console.log(a);

var a = 1;
// Lexical 
function myFu(){
    var a = 100;            // Lexical Scope 
    function Inner(){
        console.log(a); 
    }
    Inner();
}
myFu();

