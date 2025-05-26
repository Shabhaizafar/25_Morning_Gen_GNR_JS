// Object : 
// It's Collection of Properties(key+value pair) and Methods(feature or functionality).


// How to Create an Empty Object : 
// using Object Literal : {}

// var obj = {};
// console.log(obj);
// console.log(typeof obj);


// var user = {
//     // key   value          = property
//     fname : "Raj",
//     lname : "Shah",
//     Age : 12
// };

// How to Access Object : 
// console.log(user);
// console.log(typeof user);


// How to Access Single Property Value : 

// var user = {
//     "first name" : "Raj",
//     lname : "Shah",
//     Age : 12
// };

// 1. Using Dot Notation : 
// console.log(user."first name");
// 2. Using Bracket Notation : 
// console.log(user['first name']);


// How to Modify Property Value  : 
// 1. Using Dot Notation : 
// user.fname = "Ajay";
// 2. Using Bracket Notation : 
// user['Age'] = 30;



// How to Add a New Proprty : 
// 1. Using Dot Notation : 
// user.contact = 1234567890;
// 2. Using Bracket Notation : 
// user["Gender"] = "Male";

// How to remove any single Property : 
// 1. Using Dot Notation : 
// delete user.fname;
// 2. Using Bracket Notation : 
// delete user[`lname`];
// console.log(user);



// How to Access Key's Identity : 
// loop : for-in

// for (const key in user) {
//     // console.log(key);
//     // console.log(key,user.key);
//     console.log(key,user[key]);
// }



/*
Great! Here are **practical JavaScript programming questions** based on the same topics. These require actual code writing or debugging, which is ideal for practice, interviews, or tests.

---

### 🔹 **1. Create an Empty Object**

**Q1:**
Create an empty object called `student`.

```javascript
// Your code here
```

---

### 🔹 **2. Access an Object**

**Q2:**
Given the following object, print the entire object to the console.

```javascript
let book = {
  title: "JavaScript Essentials",
  author: "John Doe"
};

// Your code here
```

---

### 🔹 **3. Access a Single Property Value**

**Q3:**
Access and print the `title` of the book using **dot notation**.

```javascript
let book = {
  title: "JavaScript Essentials",
  author: "John Doe"
};

// Your code here
```

**Q4:**
Access and print the `author` using **bracket notation**.

```javascript
// Your code here
```

---

### 🔹 **4. Modify Property Value**

**Q5:**
Change the `author` of the `book` object to `"Jane Smith"` using dot notation.

```javascript
// Your code here
```

**Q6:**
Update the `title` to `"JS Basics"` using bracket notation.

```javascript
// Your code here
```

---

### 🔹 **5. Remove a Property**

**Q7:**
Remove the `author` property using **dot notation**.

```javascript
// Your code here
```

**Q8:**
Remove the `title` property using **bracket notation**.

```javascript
// Your code here
```

---

### 🔹 **6. Access Keys' Identity (for...in loop)**

**Q9:**
Use a `for...in` loop to print **all property names (keys)** of the following object:

```javascript
let person = {
  name: "Alice",
  age: 28,
  city: "New York"
};

// Your code here
```

**Q10:**
Use a `for...in` loop to print **each key and its value** in the format `key: value`.

Example output:

```
name: Alice
age: 28
city: New York
```

```javascript
// Your code here
```

---

Would you like me to provide **answers/solutions** to these practical questions as well?

*/