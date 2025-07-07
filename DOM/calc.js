document.querySelector('.buttons').onclick = function (event){
    if(event.target.tagName == "BUTTON"){
        if(event.target.classList.contains("equal")){
            console.log(document.querySelector('.display').innerText);
            return;
        }
        // if(event.target.classList.contains('operator')){
        //     // 
        // }
        if(document.querySelector('.display').innerText=="0"){
            document.querySelector('.display').innerText = event.target.innerText;
        }else{
            document.querySelector('.display').innerText += event.target.innerText;
        }
    }
}


// 5+6
// 56+7
// 5+6+7