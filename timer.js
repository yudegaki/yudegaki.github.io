var count_time=0,count_func;
var start_timer=document.getElementById("start");
var end_timer=document.getElementById("end");
//time
var Minutes_count=0,Hours_count=0,Minutes,Hours;
//初期設定
end_timer.style.display="none";
function Timer_Start(){
    start_timer.style.display="none";
    end_timer.style.display="block";
    count_func=setInterval('Count_Time()',10);
}
function Count_Time(){
    var MilliSecond=count_time%100;
    var Second=((count_time-MilliSecond)/100)%60;
    //var Minutes=(((count_time-MilliSecond)/100)-Second)/60;
    if(MilliSecond<10)MilliSecond='0'+MilliSecond;
    if(Second<10)Second='0'+Second;
    if(Hours_count<10)Hours="0"+Hours_count;
    else Hours=Hours_count;
    if(Minutes_count<10)Minutes="0"+Minutes_count;
    else Minutes=Minutes_count;
    document.getElementById("Timer_Retrun").textContent=Hours+'h '+Minutes+'m '+Second+'.'+MilliSecond+'s';
    if(Second==59&&MilliSecond==99&&Minutes_count==59)Hours_count++;
    if(Second==59&&MilliSecond==99)Minutes_count++;
    Minutes_count%=60;
    count_time++;
    count_time%=6000;
}
function Timer_End(){
    clearInterval(count_func);
    start_timer.style.display="block";
    end_timer.style.display="none";
}
function Timer_Reset(){
    word="00h 00m 00.00s";
    count_time=0;
    Hours=0;
    Minutes=0;
    document.getElementById("Timer_Retrun").textContent=word;
}