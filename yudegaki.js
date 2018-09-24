var check_time=new Date();
var check=check_time.getHours;
var greet=document.getElementById("greeting");
console.log(document.getElementById("greeting").textContent);
/*時刻に応じて挨拶の変更をする*/
function greeting_func(){
    if(check>=4&&check<=11)greet.textContent='おはようございます';
    else if(check>=12&&check<=17)greet.textContent='こんにちは';
    else greet.textContent='こんばんは';
}
greeting_func();
/*現在時刻を表示するよ*/
function Now_Clock() {
    now_time=new Date();
    var target_time = document.getElementById("DateTimeDisp");
    var Year = now_time.getFullYear();
    var Month = now_time.getMonth()+1;
    var Dates = now_time.getDate();
    var Hour = now_time.getHours();
    var Min = now_time.getMinutes();
    var Sec = now_time.getSeconds();
    if(Hour>=0&&Hour<=9)Hour='0'+Hour;
    if(Min>=0&&Min<=9)Min='0'+Min;
    if(Sec>=0&&Sec<=9)Sec='0'+Sec;
    target_time.innerHTML = "現在の時刻は"+Year + "年" + Month + "月" + Dates + "日" + Hour + ":" + Min + ":" + Sec;
}
Now_Clock();
setInterval('Now_Clock()',1000,);

