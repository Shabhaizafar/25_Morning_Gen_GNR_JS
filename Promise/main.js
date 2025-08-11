// var id ;
// document.querySelector('.btn-1').onclick = function (){
//     id = setInterval(() => {
//         document.querySelector('span').innerText =  (+document.querySelector('span').innerText)+1;
//     }, 1000);
// };

// document.querySelector('.btn-2').onclick = function (){
//     clearInterval(id);
// };




var myworker;


document.querySelector('.btn-1').onclick = function () {
    if (typeof myworker == 'undefined') {
        myworker = new Worker('worker.js');
    }
    myworker.onmessage = function (event) {
        document.querySelector('span').innerText = event.data;
    }
};

document.querySelector('.btn-2').onclick = function () {
    myworker.terminate();
};