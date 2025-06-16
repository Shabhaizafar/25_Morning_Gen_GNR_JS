function Main(){
    var choice = prompt("1. type 'num' for number \n2. type 'str' for string \n\n");
    switch (choice) {
        case 'num': NumberFormat();
            break;
        case 'str' : StringFormat();
            break;
        default:
            break;
    }
}
Main();



function NumberFormat(){
    var n1 = +prompt("Enter the Value of N1 : ");
    var n2 = +prompt("Enter the Value of N2 : ");
    var choice = prompt("1. '+' for addition\n2. '-' for subtraction.\n\n");
    switch (choice) {
        case '+': add(n1,n2);
            break;
        case '-' : sub(n1,n2);
            break;
        // *,/,%
        default:
            break;

    }
}

function add(a,b) {
    console.log("addition : ",a+b);
}
function sub(a,b) {
    console.log("Subtraction : ",a-b);
}


function StringFormat(){
    console.log("str");
    //user input 2 string :

    // 1. concation    2. lower    3 upper   4. concation + length

}









