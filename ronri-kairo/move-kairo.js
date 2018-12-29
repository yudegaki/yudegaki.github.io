var choice_num=0;

let img=new Image();//画像読み込みのための準備


function Exchange_img(num){
    if(choice_num!=num){
        if(choice_num!=0){
            let access="#choice-"+choice_num;
            $(function() {
                $(access).css({
                    "background-color": "violet"
                });
            });
        }
        $(function() {
            $("#choice-"+num).css({
                "background-color": "red"
            });
        });
        choice_num=num;
        //ここで画像をロードする
        img.src="images/"+choice_num+".jpg";
    }
    else{
        choice_num=0;
        $(function() {
            $("#choice-"+num).css({
                "background-color": "violet"
            });
        });
    }

}

let target = document.getElementById('hoge');

target.addEventListener('click', function(e){
    if(choice_num!=0){
        let x = e.offsetX; // =>要素左上からのx座標
        let y = e.offsetY; // =>要素左上からのy座標

        let canvas = document.getElementById('hoge');
        /* 2Dコンテキスト */
        let ctx = canvas.getContext('2d');
        //画像を描写
        ctx.drawImage(img,x,y);
    }
});