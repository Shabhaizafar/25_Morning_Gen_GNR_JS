// Loop : 
// basic For Loop
// While loop
// Do-while Loop


// foreach loop 
// for-in loop 
// for-of loop 

// var arr = [11,12,13,14,15];
// console.log(arr);

// Basic For Loop : 
// console.log("Basic For loop :");
// for (let i = 0; i < arr.length; i++) {
//     console.log(i,arr[i]);
// }

// console.log("While loop :");
// var j=0;
// while (j<arr.length) {
//     console.log(j,arr[j]);
//     j++;
// }

// console.log("Do-While loop :");
// var j=0;
// do{
//     console.log(j,arr[j]);
//     j++;
// }while (j<arr.length);


// console.log("foreach Loop :");
// arr.forEach((element,i) => {
//     console.log(element,i);
// });

// console.log("for-in Loop :");
// for (const key in arr) {
//    console.log(key,arr[key]);
// }
// console.log('for-of loop :');
// for (const element of arr) {
//     console.log(element);
// }


// ------------------------------------------------------ //

// var : 
// re-declare ,re-initialized 

// let :
// re-initialized

// const : 
// -

// ------------------------------ //
// var arr = [11,12,13];
// console.log(arr);
// arr.push(100);
// console.log(arr);



// const arr = [11,12,13];
// console.log(arr);
// arr.push(100);
// console.log(arr);



// primitive , reference datatype :
//Primitive : 
// number,string,boolean
var n1 = 12;
var n2 = n1;
console.log("Value of N1 :",n1);//12
console.log("Value of N2 :",n2);//12
n1++;
console.log("Value of N1 :",n1);//13
console.log("Value of N2 :",n2);//12

// reference : 
// Object

let  arr1 = [11,12,13];
let  arr2 = arr1;
console.log("Array 1 : ",arr1);// [11,12,13]
console.log("Array 2 : ",arr2);// [11,12,13]
arr1.push(100);
arr2.push("Royal");
console.log("Array 1 : ",arr1);// [11,12,13,100]
console.log("Array 2 : ",arr2);// [11,12,13,100]
