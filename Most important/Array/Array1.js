//=> What is an Array ?
//-> It's a Collection Value which is Same or Different Datatype.

// var arr1 = [11,12,13];
// console.log(arr1);
// var arr2 = ["Zafar","Royal"];
// console.log(arr2);
// var arr3 = [true,false];
// console.log(arr3);

// const arr4 = [11,12,"Zafar",true,null,undefined];
// console.log(arr4);



var arr = [11,12,13,14,15,16,17,400];   
// index   0   1  2  3  4  5  6
console.log(arr);

// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[5]);
// console.log(arr[arr.length - 1]);

// property : 
// length 

// console.log(arr.length);


// Basic Methods : 
// 1. push :  add a new Value at last index
// return a New Length

// single Value 
// var ans1 =  arr.push(100);
// multiple Value 
// arr.push(100,300,600);

// 2. pop :  remove Value at last index
//return deleted/remove value
// var ans1 = arr.pop();


// 3. unshift : add a new Value at 0 index
// return a New Length
// var ans1= arr.unshift(12);
// arr.unshift(12,300);


// 4. shift : remove Value at 0 index
//return deleted/remove value
// var ans1 =arr.shift();

// console.log(arr);



// console.log(ans1);

/*

### ✅ **In-built Functions**
1. **Create a program that asks the user for their age using `prompt()` and alerts whether they are eligible to vote (18+).**

2. **Use `confirm()` to ask the user: "Do you want to delete your account?" If confirmed, show an alert saying "Account deleted", else "Action canceled".**

---

### 🔠 **String Methods**
3. **You received a user's full name as `"  John Doe  "`. Write a program to clean up the whitespace using `trim()` and convert it to uppercase.**

4. **Check if an entered email address ends with `"@gmail.com"` using `endsWith()` to validate domain.**

5. **Display the first character of a product name entered by the user using `charAt(0)`.**

6. **Repeat a `"Loading..."` message 5 times to simulate a loading screen using `repeat()`.**

7. **Check if a user's message contains the word `"urgent"` using `includes()` and alert if it's present.**

---

### 📚 **Array Methods & Usage**
8. **Create a todo list array. Add a new task using `push()`, then remove the first task using `shift()`.**

9. **Write a program to clone a shopping cart array using the spread operator and show both arrays.**

10. **Use `forEach()` to print each item in an order list: `["Pizza", "Burger", "Fries"]`.**

11. **A user’s favorite colors are stored in an array. Use destructuring to extract the first and second colors into variables.**

---
*/