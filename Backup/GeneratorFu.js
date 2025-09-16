// Generator Func : 

/*
    Syntax : 
        1. function * functionname(){
            //code;
        }

        2. function* functionname(){
            //code;
        }
        3. function *functionname(){
            //code;
        }
        4. function*functionname(){
            //code;
        }
*/
var n ;
function*GeneratorFu(){
    yield  n=12
    // yield 2,
    // yield 3,
    // yield 4
}

var outer = GeneratorFu();
// console.log(outer.next().value);
// console.log(outer.next().value);
// console.log(outer.next().value);
// console.log(outer.next().value);
// console.log(outer.next().value);
outer.next().value;

console.log(n);