function dragParagraph(event){
    event.dataTransfer.setData("abc",event.target.id);
}


function dragOverParagraph(event){
    event.preventDefault();
}

function dropParagraph(event){
    event.preventDefault();
    event.target.appendChild(document.getElementById(event.dataTransfer.getData("abc")));
}