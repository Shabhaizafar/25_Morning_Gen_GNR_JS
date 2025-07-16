// 1. Object Literal : {}.
var obj = {
    // fname : "Raj",
    // lname : "Shah"
};

console.log(obj,typeof obj);


// 2. Using Object : 
var obj2 = new Object();
console.log(obj2,typeof obj2);

// 3. Using Object.create() Method :
var obj3 = Object.create({});
console.log(obj3,typeof obj3);

// 4. Using Object.assign() Method : 
var obj4 = Object.assign({});
console.log(obj4,typeof obj4);

// 5. Using Function : 
function user(){
    var u = {};
    return u;
}

var obj5 = user();

console.log(obj5,typeof obj5);