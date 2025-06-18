// DOM : 
// D : Document 
// O : Object 
// M : Model



// How to Access HTML Code using JS : 
// console.log(document);
// console.log(typeof document);


// How to Access HEAD/BODY using JS : 
// console.log(document.head);
// console.log(document['body']);


// How to Access HTML Element Using JS : 


// 1. Using Id : 
// console.log(document.getElementById('id1'));


// 2. Using Class Name : 
// console.log(document.getElementsByClassName('class1'));
// console.log(document.getElementsByClassName('class1')[0]);
// console.log(document.getElementsByClassName('class1')[2]);

// 3. Using Tag Name : 
// console.log(document.getElementsByTagName('h3'));
// console.log(document.getElementsByTagName('h3')[0]);
// console.log(document.getElementsByTagName('h3')[1]);


// 4. using Query Selector : 
console.log(document.querySelector('h2'));
console.log(document.querySelector('#id1'));
console.log(document.querySelector('.class1'));
console.log(document.querySelector('p.class1'));

// 5. using QuerySelectorAll : 
console.log(document.querySelectorAll('h2'));
