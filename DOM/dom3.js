var i = 0;
document.body.onkeypress = function (event){
    i++;
    document.querySelector('div').innerHTML += event.key;
    document.querySelector('.tkey').innerHTML = i; 
}