var i = 0;
document.querySelector('button').onclick = function(){
    i++;
    var countryname = document.querySelector('input').value;
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var img = document.createElement('img');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    fetch(`https://restcountries.com/v3.1/name/${countryname}`).then(function(data){
        data.json().then(function(data2){
            console.log(data2[0]);
            td1.innerHTML = i;
            td2.innerHTML = data2[0].name.common;
            img.src = data2[0].flags.svg;
            td3.appendChild(img);
            for (const key in data2[0].languages) {
                if(!td4.innerHTML)
                    td4.innerHTML = td4.innerHTML+key;    
                else 
                    td4.innerHTML = td4.innerHTML +','+key;
            }
        },function(){
        console.log("Error");
        });
    },function(){
        console.log("Error");
    });
    img.style.width = "200px";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.align = "center";
    document.querySelector('table').appendChild(tr);
}


// Capital ,curr,loc


// document.querySelector('button').onclick = function(){
//     var countryname = document.querySelector('input').value;
//     var h2 = document.createElement('h2');
//     var img = document.createElement('img');
//     var p = document.createElement('p');
//     fetch(`https://restcountries.com/v3.1/name/${countryname}`).then(function(data){
//         data.json().then(function(data2){
//             h2.innerHTML = data2[0].name.common;
//             img.src = data2[0].flags.svg;
//             for (const key in data2[0].languages) {
//                 if(!p.innerHTML)
//                     p.innerHTML = p.innerHTML+key;    
//                 else 
//                     p.innerHTML = p.innerHTML +','+key;
//             }
//         },function(){
//         console.log("Error");
//         });
//     },function(){
//         console.log("Error");
//     });
//     img.style.width = "200px";
//     document.body.appendChild(h2);
//     document.body.appendChild(img);
//     document.body.appendChild(p);
// }