var day=new Date();
var check=day.getHours;
var greet=document.getElementById("greeting");
console.log(document.getElementById("greeting").textContent);
if(check>=4&&check<=11)greet.textContent='おはようございます';
else if(check>=12&&check<=17)greet.textContent='こんにちは';
else greet.textContent='こんばんは';
