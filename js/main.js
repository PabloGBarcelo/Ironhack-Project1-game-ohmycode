

window.onload = function() {
  // Start canvas
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');
  // Start images objects
  var imgBackground = new Image();
  var imgPlayer = new Image();
  // Start background
  imgBackground.src = 'images/background1line.png';
  imgBackground.width = 2400 ,imgBackground.height = 600;
  var stage = new Stage(imgBackground,0,0,800,600);
  // Start player
  imgPlayer.src = knightIdle[0];
  imgPlayer.width = 47, imgPlayer.height = 53;
  var newPlayer = new Player(imgPlayer,20,430,47,53);

  // Paint all
  imgBackground.onload = function() {
    stage.drawStage(ctx,stage.img,0);
    newPlayer.drawPlayer(ctx,newPlayer.img);
  }

  document.onkeydown = function(e){
    switch (e.keyCode) {
      case 37:
        newPlayer.moveToLeft();
        break;
      case 39:
        newPlayer.moveToRight();
        break;
      case 38:
        newPlayer.jump();
        break;
    }

  document.onkeyup = function(e){
    if (knightIdle)
      newPlayer
  }
  }

  // Paint Player
}
