//  proto : 


// protype : 




function sayHello(){
    console.log("Hello");
}   

sayHello();


// sayHello.firstname = "Raj";
// sayHello();
// console.log(sayHello.firstname);


sayHello.prototype = {
    fname : "Raj"
};
console.log(sayHello.prototype);





// var obj = {
//     fname : "Raj",
//     lname : "Shah"
// };
// obj.gender = "Male";
// console.log(obj);







// Both are Different but same indication :
// both are empty space :  {}   // object

// proto : {}
// prototype : {}

// proto :   actual Work with Object Variable   : obj.__proto__

// prototype : actual Work with Function       : function.prototype

