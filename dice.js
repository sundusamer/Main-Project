let btn=document.getElementById("btn");
let displayresult=document.getElementById("displayresult");
let d1img;
let x;
let y;
let sum;
let d2img;
btn.addEventListener("click",handleClick);

function handleClick(e){
e.preventDefault();
    d1img=document.getElementById("d1");
    d2img=document.getElementById("d2");
    x=Math.floor(Math.random()*6)+1;
    y=Math.floor(Math.random()*6)+1;
    sum=x+y;

if(sum===7){
    displayresult.innerText="Correct the answer is "+sum;

d1img.setAttribute("src","die"+x+".PNG");
d2img.setAttribute("src","die"+y+".PNG");
}
else{
    btn.disabled=true;
    displayresult.innerText="wrong the answer is "+sum;

    d1img.setAttribute("src","die"+x+".PNG");
    d2img.setAttribute("src","die"+y+".PNG");
}
}
