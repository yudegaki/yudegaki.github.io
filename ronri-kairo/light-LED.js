let ans;
function light(){
    //ここで、選択ボックスの中の値を取得
    let num_1up=document.kairo.up1.selectedIndex,
    num_1down=document.kairo.down1.selectedIndex,
    num_2up=document.kairo.up2.selectedIndex,
    num_2down=document.kairo.down2.selectedIndex;

    //1-and,2-or,3-nand,4-nor,0-NULL(1と同じ動作をさせます)
    let one=calculate(num_1,num_1up,num_1down);
    let two=calculate(num_2,num_2up,num_2down);
    ans=calculate(num_3,one,two);
    console.log(ans);
    //円を書くための準備
    var canvas = document.getElementById('hoge');
    var ctx=canvas.getContext('2d');
    if(ans==0){
        ctx.fillStyle='rgb(0, 0, 0)';
    }
    else if(ans==1){
        ctx.fillStyle='rgb(255, 255, 0)';
    }
    ctx.arc(700, 400, 50, 0, Math.PI*2, true);//trueで反時計周り、falseで時計回りに描写
    ctx.fill();
}

function calculate(number,up,down){
    if(number==0){
        return up*down;
    }
    else if(number==1){
        return up*down;
    }
    else if(number==2){
        return (up+down>0)?1:0;
    }
    else if(number==3){
        return (up*down==0)?1:0;
    }
    else if(number==4){
        return (up+down>0)?0:1;
    }
}