var anime_data=[],year,season;
function make_anime_json_url(){
    //url作成
    year=document.getElementById("year").value;
    season=document.getElementById("season").value;
    var anime_json_url="http://api.moemoe.tokyo/anime/v1/master/"+year+"/"+season;
    //GETをするよ
    var xhr = new XMLHttpRequest;
    xhr.open("GET", anime_json_url, true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            anime_data= JSON.parse(xhr.responseText);
            //初期化
            var clear_obj=document.getElementById('show_elements');
            clear_obj.innerHTML="";
            view_array();
        }
    }
    xhr.send(null);

};


function view_array(){
    var add_element=document.createElement("div");
    var parent_obj=document.getElementById("show_elements");
    add_element.innerHTML='<p id="sum_of_anime">'+year+'年'+season+'クール目のアニメは計'+anime_data.length+'件ありました</p>';
    parent_obj.appendChild(add_element);

    for(var i=0 ;i<anime_data.length;i++){
        
        var table_contents='<h3 class="anime_title">'+ anime_data[i].title+'</h3>';
        var show_url='公式サイト：<a href='+anime_data[i].public_url+' target="_blank">'+anime_data[i].public_url+'</a>';
        var input_twitter='<a width="400px" height="300px"class="twitter-timeline" href="https://twitter.com/'+anime_data[i].twitter_account+'">Tweets by '+anime_data[i].twitter_account+'</a> ';
        
        add_element=document.createElement("div");
        add_element.innerHTML=table_contents +show_url+'<br>公式Twitterはこちら<br>'+input_twitter;
        parent_obj=document.getElementById("show_elements");
        parent_obj.appendChild(add_element);
        
        console.log(input_twitter);
    }
    var script_twitter=document.createElement("script");
    script_twitter.src="https://platform.twitter.com/widgets.js";//ここで埋め込んだtwitterアカウントのプレビューを表示させる
    document.body.appendChild(script_twitter);
}