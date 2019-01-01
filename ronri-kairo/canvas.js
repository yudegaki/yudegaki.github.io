onload = function() {
  draw();
};
function draw() {
  /* canvas要素のノードオブジェクト */
  var canvas = document.getElementById('hoge');
  canvas.getContext('2d').strokeRect(0,0,1000,750);

  //四角を描写
  canvas.getContext('2d').strokeRect(200,200,100,100);
  canvas.getContext('2d').strokeRect(200,500,100,100);
  canvas.getContext('2d').strokeRect(500,350,100,100);

  for(var i=1;i<=4;i++){
    canvas = document.getElementById('choice-'+i);
    canvas.getContext('2d').strokeRect(0,0,200,200);
  }
}
