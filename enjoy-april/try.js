function showBottom(elID) {
    var el = document.getElementById(elID);
    el.scrollIntoView(false);
}
function view_array(cnt){
    var add_element=document.createElement("div");
    add_element.innerHTML=cnt+"times"+"<p id=p"+cnt+">m9(^o^) pgyaaaaaaawwwwwwwwwwwwwwwwwwwwwwww</p>";
    document.body.appendChild(add_element);
    showBottom("p"+cnt);
    cnt++;
    setTimeout("view_array("+cnt+")",10);
}
function final_alert(){
    if(window.confirm("この先は危険です。本当に進みますか？")){
        view_array(1);
    }
}
