onload = function() {
  draw();
};
function draw() {
  /* canvas要素のノードオブジェクト */
  var canvas = document.getElementById('hoge');
  var ctx=canvas.getContext('2d');
  ctx.strokeRect(0,0,1000,750);

  //四角を描写
  //その１
  ctx.strokeRect(200,200,100,100);
  //front
  write_line(ctx,300,250,350,250);
  //back*2
  write_line(ctx,150,233,200,233);
  write_line(ctx,150,266,200,266);

  //その２
  ctx.strokeRect(200,500,100,100);
  //front
  write_line(ctx,300,550,350,550);
  //back*2
  write_line(ctx,150,533,200,533);
  write_line(ctx,150,566,200,566);

  //その３
  ctx.strokeRect(500,350,100,100);
  //front
  write_line(ctx,600,400,650,400);
  //back*2
  write_line(ctx,450,383,500,383);
  write_line(ctx,450,416,500,416);
  
  //線を結ぶ
  write_line(ctx,350,250,450,383);
  write_line(ctx,350,550,450,416);

  //LED用のスペース
  ctx.beginPath();
  ctx.arc(700, 400, 50, 0, Math.PI*2, true);//trueで反時計周り、falseで時計回りに描写
  ctx.stroke();

  for(var i=1;i<=4;i++){
    canvas = document.getElementById('choice-'+i);
    canvas.getContext('2d').strokeRect(0,0,200,200);
  }
}

function write_line(ctx,sx,sy,gx,gy){
  ctx.beginPath();
  ctx.moveTo(sx, sy);
  ctx.lineTo(gx, gy);
  ctx.stroke();
}

