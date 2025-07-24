fetch("https://restcountries.com/v3.1/name/Bharat").then((data)=>{
    data.json().then((data2)=>{
        console.log(data2);
    });
},(err)=>{
    console.log(err);
});