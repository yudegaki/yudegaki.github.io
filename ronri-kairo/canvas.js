onload = function() {
  draw();
};
function draw() {
  /* canvas要素のノードオブジェクト */
  var canvas = document.getElementById('kairo-1');
  //use_canvas(canvas.getContext('2d'),100,150);
  for(var i=1;i<=4;i++){
    canvas = document.getElementById('choice-'+i);
    canvas.getContext('2d').strokeRect(0,0,1000,750);
  }
}

