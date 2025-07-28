document.querySelector('button').onclick = function () {
    var countryname = document.querySelector('input').value;
    var img = document.createElement('img');
    fetch(`https://restcountries.com/v3.1/name/${countryname}`).then((data) => {
        data.json().then((data2) => {
            img.src = data2[0].flags.svg;
            document.body.appendChild(img);
        });
    });
}