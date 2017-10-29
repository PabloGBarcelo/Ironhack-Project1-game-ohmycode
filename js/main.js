window.onload = function() {
  // Start canvas
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');
  // Start images objects
  var imgBackground = new Image();
  var imgHero = new Image();
  // Start background
  imgBackground.src = 'images/background1line.png';
  imgBackground.width = 2400, imgBackground.height = 600;
  var stage = new Stage(imgBackground, 0, 0, 800, 600);
  // Start player
  imgHero.src = 'images/knight/01-Idle_/2D_KNIGHT__Idle_000.png';
  imgHero.width = 47, imgHero.height = 53;
  var myHero = new Hero(imgHero, 20, 420, 61, 69);

  // Paint all
  imgBackground.onload = function() {
    stage.drawStage(ctx, stage.img, 0);
    myHero.drawHero(ctx, myHero.img);
  };
  // Repaint continuously
  setInterval(function() {
    ctx.clearRect(stage.x, stage.y, stage.height, stage.width);
    stage.drawStage(ctx, stage.img, 0);
    myHero.drawHero(ctx, myHero.img);
    myHero.animation();
    if (myHero.status == 'knightJumpLeft' || myHero.status == 'knightJumpLeft' && myHero.y == 420){
      myHero.land();
    }
    else if (myHero.status == 'knightJumpLeftFinish'){
      myHero.idle();
    }
  }, 1000/48);

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        myHero.moveToLeft(stage);
        break;
      case 39:
        myHero.moveToRight(stage);
        break;
      case 38:
      case 32:
        myHero.jump();
        break;
      case 65:
      case 97: // a & A
        myHero.attack();
        break;
    }
  };
  document.onkeyup = function() {
    if (myHero.y == 420) myHero.idle();
  };

  // Paint Player
};
