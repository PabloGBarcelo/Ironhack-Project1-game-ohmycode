window.onload = function() {
  // Start canvas
  var upPressed = false; // Detect if key up is pressed;
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
  var imgExclamationLetter = stage.createImage('images/exclamation.png',39,38);
  var imgFairyChat = stage.createImage('images/chatboxFairy.png',423,162);
  var imgHeartLife = stage.createImage('images/heart.png',14,14);
  // Start player
  var myHero = new Hero(imgHero, 20, 420, 61, 69);
  // Place instructions
  var instructions = new Stage(imgInstructions, 500, 100, 800, 600);
  //place HUD
  var hud = new Stage(imgHUD, 30, 30, 109, 239);
  // place BARS
  var lifeBar = new Stage(imgBarLife, 130, 40, imgBarLife.width, imgBarLife.height);
  var tiredBar = new Stage(imgTiredLife, 130, 110, imgTiredLife.width, imgTiredLife.height);
  var heartHUD = new Stage(imgHeartLife, 43,40, imgHeartLife.width, imgHeartLife.height);
  // paint
  imgBackground.onload = function() {
    requestAnimationFrame(drawAll);
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
      if (codeset[38]) {
        upPressed = true;
      }
    }
  }).on('keyup', function(e) {
    if (e.keyCode in codeset) {
      codeset[e.keyCode] = false;
      console.log("SpeedMax: " + myHero.speedMax + " speedNormal: " + myHero.speedNormal);
      myHero.speedMax = myHero.speedNormal;
    }
    if (myHero.y == 420) myHero.idle();
    upPressed = false;
  });
  // Loop draw and lastTime = now
  var lastTime = 0;
  function drawAll(timestamp) {
    var duration = 1000 / 24;
    // return if the desired time hasn't elapsed
    if ((timestamp - lastTime) < duration) {
      requestAnimationFrame(drawAll);
      return;
    }
    ctx.clearRect(stage.x, stage.y, stage.height, stage.width);
    stage.drawStage(ctx, stage.img, stage.x, stage.y);
    myHero.drawHero(ctx, myHero.img);
    if (myHero.fairy == true){
      // Fairy
    }

    lifeBar.drawImageResized(ctx, imgBarLife, lifeBar.x, lifeBar.y, myHero.life / myHero.life * imgBarLife.width, imgBarLife.height);
    tiredBar.drawImageResized(ctx, imgTiredLife, tiredBar.x, tiredBar.y, myHero.tired / myHero.tiredMax * imgTiredLife.width, imgTiredLife.height);
    hud.drawStage(ctx, hud.img, hud.x, hud.y);
    console.log("LIVES:"+myHero.lives);
    if (myHero.lives == 1){
      heartHUD.drawStage(ctx, imgHeartLife, heartHUD.x,heartHUD.y);
    }
    instructions.drawStage(ctx, instructions.img, 50, 522);
    myHero.animation();
    myHero.recoverTired();
    myHero.isAlive(stage);
    if (stage.gravity(myHero)) {
      console.log('gravedad activada');
      if (myHero.y < 800) {
        myHero.y += 10;
      } else{
        myHero.life = 0;
      }
    }
    if(!upPressed){
      stage.interaction(ctx,imgExclamationLetter,upPressed,myHero);
    } else {
      stage.interaction(ctx,imgFairyChat,upPressed,myHero);
    }
    if (myHero.status == 'knightJumpLeft' || myHero.status == 'knightJumpLeft' && myHero.y == 420) {
      myHero.land();
    } else if (myHero.status == 'knightJumpLeftFinish') {
      myHero.idle();
    }
    lastTime = timestamp;
    window.requestAnimationFrame(drawAll);
  }

};
