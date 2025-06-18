// console.log(document.body);
// console.log(document['head']);



// How to Access HTML Element Content using JS : 
// // 1. using innerHTML
// console.log(document.querySelector('h1').innerHTML);
// console.log(document.querySelector('div').innerHTML);

// // 2. using innerText
// console.log(document.querySelector('h1').innerText);
// console.log(document.querySelector('div').innerText);

// // 3. using textContent
// console.log(document.querySelector('h1').textContent);
// console.log(document.querySelector('div').textContent);



// How to Modify/add HTML Element Content : 
// document.querySelector('h1').innerHTML = "New H1 Value";

// document.querySelector('h2').innerText = "New H2 Value";

// document.querySelector('h3').textContent = "New H3 Value";

// document.querySelector('p').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iusto consectetur. Eos voluptatum exercitationem esse labore doloribus, odit, vitae nulla quasi atque sit rem. Asperiores saepe facilis libero perferendis deserunt.";



// How to Apply styles using JS :
// document.body.style.backgroundColor = "teal";
// document.querySelector('h1').style.color = "blue";



// document.querySelector('button').onclick = function (){
//     document.body.style.backgroundColor = "teal";
//     document.querySelector('h1').style.color = "blue";
//     document.querySelector('h3').textContent = "New H3 Value";
// }


// function applyCSS(){
//     document.body.style.backgroundColor = "teal";
//     document.querySelector('h1').style.color = "blue";
// }






// -----------------------------------
// console.log(parseInt(Math.random()*255));

// console.log(`rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`);



document.querySelector('button').onclick = function (){
    document.body.style.backgroundColor = `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`;
}












