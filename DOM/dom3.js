var i = 0;
document.body.onkeypress = function (event){
    i++;
    // console.log(event.key);
    document.querySelector('div').innerHTML += event.key;
    document.querySelector('.tkey').innerHTML = i; 
}