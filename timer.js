var count_time=0,count_func;
var start_timer=document.getElementById("start");
var end_timer=document.getElementById("end");
//初期設定
end_timer.style.display="none";
function Timer_Start(){
    start_timer.style.display="none";
    end_timer.style.display="block";
    count_func=setInterval('Count_Time()',10);
}
function Count_Time(){
    var MilliSecond=count_time%100;
    var Second=Math.floor((count_time%6000)/100);
    var Minutes=Math.floor(count_time/6000);
    var Hours=Math.floor(count_time/360000);
    if(MilliSecond<10)MilliSecond='0'+MilliSecond;
    if(Second<10)Second='0'+Second;
    if(Hours<10)Hours="0"+Hours;
    if(Minutes<10)Minutes="0"+Minutes;
    document.getElementById("Timer_Retrun").textContent=Hours+'h '+Minutes+'m '+Second+'.'+MilliSecond+'s';
    count_time++;
}
function Timer_End(){
    clearInterval(count_func);
    start_timer.style.display="block";
    end_timer.style.display="none";
}
function Timer_Reset(){
    word="00h 00m 00.00s";
    count_time=0;
    document.getElementById("Timer_Retrun").textContent=word;
}