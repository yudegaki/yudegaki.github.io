function view_array(cnt){
    var add_element=document.createElement("div");
    add_element.innerHTML=cnt+"times"+"<p id=p"+cnt+">m9(^o^) pgyaaaaaaawwwwwwwwwwwwwwwwwwwwwwww</p>";
    document.body.appendChild(add_element);
    document.getElementById("p"+cnt).scrollIntoView(false);
    cnt++;
    setTimeout("view_array("+cnt+")",10);
}
function final_alert(){
    if(window.confirm("Are you Ok???")){
        view_array(1);
    }
}
