let form=document.getElementById("form");
let display=document.getElementById("display");
let sub=document.getElementById("sub");
let input=document.getElementById("input");
let btn=document.getElementById("btn");
let result
result=parseFloat(result);

form.addEventListener("submit",start)
function start(e){
e.preventDefault();
    input.disabled=false;
btn.disabled=false;

}
btn.addEventListener("click",handleClick);

function handleClick(e){
    e.preventDefault();
     userGuess=parseFloat(input.value);
   //  var conversionType = document.querySelector('input[name="conv"]:checked').value;
     
    if (document.getElementById("FahrenheittoCelsius").checked) {
        result = (userGuess - 32) * 5 / 9;
        display.innerHTML = userGuess + "°F is " + result  //.toFixed(2) + "°C";
    }
    else if (document.getElementById("Kilometerstomiles").checked) {
        result = userGuess * 0.6213712;
        display.innerHTML = userGuess + " km is " + result.toFixed(2)
    }
        else if (document.getElementById("meterstofeet").checked) {
            result = userGuess * 3.28084;
            display.innerHTML = userGuess + " km is " + result.toFixed(2)

}

}
window.addEventListener("load",handleClick);



