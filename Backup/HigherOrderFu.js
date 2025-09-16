function main(){
    var choice = prompt("1. type 'num' for Number\n2 type 'str' for String \n\nEnter Your Choice :");

    switch (choice) {
        case 'num': sayNumber();
            break;
        case 'str' : sayString();
            break;
        default:    console.log("enter Valid Choice !!");
            break;
    }

}
main();


function sayNumber(){
    var n1 = +prompt("Enter value n1 : ");
    var n2 = +prompt("Enter value n2 : ");
    var choice = prompt("1. type '+' for Addition\n2 type '-' for Subtraction \n\nEnter Your Choice :");
    switch (choice) {
        case '+': Addition(n1,n2);
            break;
        case '-' : Subtraction(n1,n2);
            break;
            
        default:    console.log("enter Valid Choice !!");
            break;
    }
}

function Addition(a,b){
    console.log("Addition is : ",a+b);
}

function Subtraction(a,b){
    console.log("Subtraction is : ",a-b);
}

function sayString(){
    console.log("String");
}