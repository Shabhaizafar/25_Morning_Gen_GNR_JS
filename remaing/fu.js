//  - Default Parameters.

// function addition(n1,n2){
//     console.log(n1+n2);
// }

// addition(12,13);
// addition(12);


// function addition(n1=0,n2=0){ // n1 & n2 = 0 default parameter
//     console.log(n1+n2);
// }

// addition();
// addition(13);
// addition(13,14);


//    ✅ Rest Parameters.
// function addition(n1,n2,...restparameter){
//     console.log(n1+n2);
//     console.log(restparameter);
// }
// addition(12,13,14,34);


//    ✅ Parameter Destructuring.
// function addition(n1,n2){
//     console.log(n1+n2);
// }
// addition(12,13);

// function addition(...arr){
//     var sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i];
//     }
//     console.log(sum);
// }
// addition(12,13);
// addition(12,13,12);
// addition(1,2,3,4,5,6,7,8,9,10);

//    ✅ Functions returning Functions.

// function outer(){
//     console.log("Nothing");
// }



// function main(){
//     return outer;
// }
// var s = main();
// s();






/*

### ✅ **1. Default Parameter – Real-Life Based Question**

**Q1.**
In a hotel booking system, create a function `bookRoom(name, roomType)` that prints a message like:
`"Zfnan has booked a Deluxe room."`
If no roomType is provided, it should default to `"Standard"`.

---

### ✅ **2. Parameter Destructuring – Real-Life Based Question**

**Q2.**
In a shopping cart app, create a function `showProductDetails(product)` that takes an object with `{name, price, quantity}` and prints:
`"Product: Pen, Price: ₹10, Quantity: 3"`

Use **parameter destructuring** in the function.

*/




