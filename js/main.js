window.onload = function() {
  // Start canvas
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');
  // Start Stage (Background)
  var stage = new Stage(imgBackground, 0, 0, 2400, 1800);
  var imgBackground = stage.createImage('images/background1line.png', 2400, 1800);
  stage.img = imgBackground;
  // Start images objects
  var imgHero = stage.createImage('images/knight/01-Idle_/2D_KNIGHT__Idle_000.png', 61, 69);
  var imgInstructions = stage.createImage('images/Instructions.png', 18, 99);
  var imgHUD = stage.createImage('images/hud.png', 109, 239);
  var imgBarLife = stage.createImage('images/barHP.png', 124, 13);
  var imgTiredLife = stage.createImage('images/barTired.png', 124, 13);
  // Start player
  var myHero = new Hero(imgHero, 20, 420, 61, 69);
  // Place instructions
  var instructions = new Stage(imgInstructions, 500, 100, 800, 600);
  //place HUD
  var hud = new Stage(imgHUD, 30, 30, 109, 239);
  // place BARS
  var lifeBar = new Stage(imgTiredLife,130,40,imgBarLife.width,imgBarLife.height);
  var tiredBar = new Stage(imgBarLife,130,110,imgTiredLife.width,imgTiredLife.height);
  // paint
  imgBackground.onload = function() {
    setInterval(function() {
      ctx.clearRect(stage.x, stage.y, stage.height, stage.width);
      stage.drawStage(ctx, stage.img, stage.x, stage.y);
      myHero.drawHero(ctx, myHero.img);
      lifeBar.drawImageResized(ctx,imgBarLife, lifeBar.x, lifeBar.y, myHero.life / myHero.life * imgBarLife.width, imgBarLife.height);
      tiredBar.drawImageResized(ctx,imgTiredLife, tiredBar.x, tiredBar.y, myHero.tired / myHero.tiredMax * imgTiredLife.width, imgTiredLife.height);
      hud.drawStage(ctx, hud.img, hud.x, hud.y);
      instructions.drawStage(ctx, instructions.img, 50, 522);
      myHero.animation();
      if (myHero.status == 'knightJumpLeft' || myHero.status == 'knightJumpLeft' && myHero.y == 420) {
        myHero.land();
      } else if (myHero.status == 'knightJumpLeftFinish') {
        myHero.idle();
      }
    }, 1000 / 48);
  };
  var codeset = {
    16: false,
    32: false,
    37: false,
    38: false,
    39: false,
    65: false
  };

  //Tracking the Key down & Key up events
  $(document).on('keydown', function(e) {
    if (e.keyCode in codeset) {
      codeset[e.keyCode] = true;
      if (codeset[39] && codeset[32]) { // RIGHT JUMP
        myHero.jump(myHero.speedMax, stage); //Handicap
      }
      if (codeset[37] && codeset[32]) { // LEFT JUMP
        myHero.jump(myHero.speedMax, stage); //Handicap
      }
      if (codeset[39]) {
        myHero.moveToRight(stage);
      }
      if (codeset[37]) {
        myHero.moveToLeft(stage);
      }
      if (codeset[32]) {
        myHero.jump(0, stage);
      }
      if (codeset[16]) {
        myHero.run();
      }
      if (codeset[65]) {
        myHero.attack();
      }
    }
  }).on('keyup', function(e) {
    if (e.keyCode in codeset) {
      codeset[e.keyCode] = false;
      console.log("SpeedMax: " + myHero.speedMax + " speedNormal: " + myHero.speedNormal);
      myHero.speedMax = myHero.speedNormal;
    }
    if (myHero.y == 420) myHero.idle();
  });
};
