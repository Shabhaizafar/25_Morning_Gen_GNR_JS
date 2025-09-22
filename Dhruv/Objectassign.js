// var obj1 = {
//     key1 : "value1",
//     key2  : "value3"
// };

// var obj2  = {
//     key3 : "value3"
// };

// console.log(obj1);
// console.log(obj1.key1);
// console.log(obj2);
// console.log(obj2.key1);


// Object.assign : 
// var obj1 = {
//     key1 : "value1",
//     key2  : "value3"
// };

// // var obj2 = Object.assign(obj1);
// // console.log(obj1);
// // console.log(obj2);

// var obj2 = Object.assign({},obj1,{key3 : "value3"});
//                     // target,reference values 
// console.log(obj1);
// console.log(obj2);



var obj1 = {
    key1 : "value1",
    key2  : "value3"
};

// var obj2 = Object.assign(obj1);
// console.log(obj1);
// console.log(obj2);

var obj2 = Object.create(obj1);

// proto : 
                    

console.log(obj1);
console.log(obj2.key1);
