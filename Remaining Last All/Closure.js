var counter = 0;
function Main(){
    function inner(){
        counter++;
    }
    return inner();
}
Main();
console.log(counter);


Main();
console.log(counter);


Main();
console.log(counter);