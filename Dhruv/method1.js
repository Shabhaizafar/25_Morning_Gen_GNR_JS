var arr = [23,43,12,13,56];
console.log("Array is : ",arr);

// //    - Foreach method.
// console.log("Foreach :");
// arr.forEach(( element , index ,a)=>{
//     console.log(element,index,a);
// });

// //    - Map method.
// console.log("Map :");
// arr.map(( element , index ,a)=>{
//     console.log(element,index,a);
// });

// //    - Filter.
// console.log("Filter :");
// arr.filter(( element , index ,a)=>{
//     console.log(element,index,a);
// });






//    - Foreach method.      
//  no return
console.log("Foreach :");
var ans1 = arr.forEach((element)=>{
    if(element>20)
        return element;
});
console.log(ans1);

//    - Map method.
// return if condition true else undefined 
console.log("Map :"); 
var ans2 = arr.map((element)=>{
    if(element>20)
        return element;
});
console.log(ans2);

//    - Filter.
// return if condition true 
console.log("Filter :");
var ans3 = arr.filter((element)=>{
    if(element>20)
        return element;
});
console.log(ans3);














