// Generator Function : 

/*
function * functionname(){
}

function* functionname(){
}

function *functionname(){
}

function*functionname(){
}
*/

function * Generator(){
    yield 1,   a
    yield 2,
    yield "Hello",
    yield [11,1,2,3,4,5]
}

var myFu = Generator();

// console.log(myFu.next().value);
// console.log(myFu.next().value);
// console.log(myFu.next().value);
// console.log(myFu.next().value);
// console.log(myFu.next().value);


console.log(myFu.next());
console.log(myFu.next());
console.log(myFu.next());
console.log(myFu.next());
console.log(myFu.next());



/*
// Create a generator that yields the characters of a given string one by one.
// Write a generator function to yield prime numbers up to a given limit.
*/