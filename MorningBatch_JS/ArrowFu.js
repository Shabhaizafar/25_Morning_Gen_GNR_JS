// Arrow Function :

//   i. without argument and without return type
var sayHello =  ()=>{
    console.log("Hello Everyone,Welcome to JS World!!😁");
}
// sayHello();

//  ii. with argument and without return type
var subtraction =  (n1,n2)=>{   // n1,n2  Parameters 
    console.log("Subtraction of N1 and N2 : ",n1-n2);
}
// subtraction(100,43);    // 100,43   arguments

// iii. without argument and with return type
let somthing = ()=>{
    return "Nothing 🫡😏";
}
// 1. use directly :
// console.log(somthing());
// 2. store value : 
// var ans = somthing();
// console.log(ans);

//  iv. with argument and with return type

const result =  (marks)=>{
    if(marks>35)
        return "Pass";
    else 
        return "Fail";
}

// console.log(result(5));




// var arrofu = ()=> console.log("Arrow");
// arrofu();

// var arrofu = n1 => console.log("Arrow",n1);
// arrofu(11);


// Error
// 1.
// var arrofu = n1,n2 => console.log("Arrow",n1);
// arrofu(11,12);

// 2.
// var arrofu = ()=> return "Something";
// console.log(arrofu());

// 3.
// var arrofu = =>  console.log("Something");
// arrofu();