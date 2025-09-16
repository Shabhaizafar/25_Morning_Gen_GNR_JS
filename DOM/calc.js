var arr = ["+", '-','/','*'];

function calculate(temp,n1,n2) {
    switch (temp) {
        case "+": return +n1 + +n2;
        case "-": return +n1 - +n2;
        case "*": return +n1 * +n2;
    }
}
document.querySelector('.buttons').onclick = function (event) {
    if (event.target.tagName == "BUTTON") {
        var data = document.querySelector('.display').innerText;
        if(event.target.classList.contains("clear")){
            document.querySelector('.final').innerHTML = "";
            document.querySelector('.display').innerText = 0;
            return;
        }


        if (event.target.classList.contains("equal")) {
            if(arr.includes(data[data.length-1])){
                document.querySelector('.display').innerText = data.slice(0,data.length-1)
            }

            var str = document.querySelector('.display').innerText;
            var j = 0;
            var ans = 0;
            var temp = "+";
            for (let i = 0; i < str.length; i++) {
                if (i == str.length - 1) {
                    ans = calculate(temp,ans,str.slice(j));
                }
                if (arr.includes(str[i])) {
                    ans = calculate(temp,ans,str.slice(j, i));
                    temp = str[i];
                    j = i + 1;
                }
            }
            document.querySelector('.final').innerHTML = str + "=";
            document.querySelector('.display').innerText = ans;
            return;
        }
        if(event.target.classList.contains('operator')){
            if(arr.includes(data[data.length-1])){
                document.querySelector('.display').innerText = data.slice(0,data.length-1) + event.target.innerText;
                return;
            }
        }

        if(event.target.innerText=='.'){
            if(data.split('')[data.split('').length-1] == '.'){
                return;
            }
        }

        if (document.querySelector('.display').innerText == "0") {
            if(event.target.innerText=='.'){
                document.querySelector('.display').innerText += event.target.innerText;
            }else{
                document.querySelector('.display').innerText = event.target.innerText;
            }
        } else {
            document.querySelector('.display').innerText += event.target.innerText;
        }
    }
}
