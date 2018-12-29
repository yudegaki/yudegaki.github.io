onload = function() {
    draw();
  };
  function draw() {
    /* canvas要素のノードオブジェクト */
    var canvas = document.getElementById('hoge');
    /* 2Dコンテキスト */
    var ctx = canvas.getContext('2d');
    /* 四角を描く */
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(1000,0);
    ctx.lineTo(1000,750);
    ctx.lineTo(0,750);
    ctx.closePath();
    ctx.stroke();
    
    for(var i=1;i<=4;i++){
        canvas = document.getElementById('choice-'+i);
        ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(200,0);
        ctx.lineTo(200,200);
        ctx.lineTo(0,200);
        ctx.closePath();
        ctx.stroke();
    }
  }

