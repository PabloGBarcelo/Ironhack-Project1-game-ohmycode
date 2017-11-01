window.onload = function() {
  // Start canvas
  var upPressed = false; // Detect if key up is pressed;
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');
  // Start Stage (Background)
  var stage = new Stage(imgBackground, 0, 0, 2400, 1800, ctx);
  var imgBackground = stage.createImage('images/background1line.png', 2400, 1800);
  stage.img = imgBackground;
  // Start images objects
  var monstersChibiEasy = stage.createImage('images/monster_easy/IdleLeft/frame-1.png',50,30);
  var imgHero = stage.createImage('images/knight/01-Idle_/2D_KNIGHT__Idle_000.png', 61, 69);
  var imgMonsterEasy = stage.createImage('images/monster_easy/IdleLeft/frame-1.png',109,66);
  var imgInstructions = stage.createImage('images/Instructions.png', 18, 99);
  var imgHUD = stage.createImage('images/hud.png', 109, 239);
  var imgBarLife = stage.createImage('images/barHP.png', 124, 13);
  var imgTiredLife = stage.createImage('images/barTired.png', 124, 13);
  var imgMPLife = stage.createImage('images/barMP.png', 135, 13);
  var imgExclamationLetter = stage.createImage('images/exclamation.png',39,38);
  var imgFairyChat = stage.createImage('images/chatboxFairy.png',423,162);
  var imgHeartLife = stage.createImage('images/heart.png',14,14);
  var imgFairy = stage.createImage('images/fairyLeft/frame0.png',50,55);
  // Start player
  var myHero = new Hero(imgHero, 20, stage.floor-69, 61, 69);
  // Start Fairy
  var myFairy = new Fairy(imgFairy, 0,0,50,55); // x and y not defined
  // Start monster_easy
  var monster_easy = [];
  var monsterChibiEasy = [];
  // img,x,y,width,height,strength,life, xRelative
  monster_easy.push(new Enemy(imgMonsterEasy,380,420,imgMonsterEasy.width,imgMonsterEasy.height,10,10,0));
  // Place instructions
  var instructions = new Stage(imgInstructions, 50, 522, 267, 81);
  //place HUD
  var hud = new Stage(imgHUD, 30, 30, 109, 239);
  // place BARS
  var lifeBar = new Stage(imgBarLife, 130, 40, imgBarLife.width, imgBarLife.height);
  var tiredBar = new Stage(imgTiredLife, 130, 110, imgTiredLife.width, imgTiredLife.height);
  var mpBar = new Stage(imgMPLife, 130, 75, imgMPLife.width, imgMPLife.height);
  var heartHUD = new Stage(imgHeartLife, 42,39, imgHeartLife.width, imgHeartLife.height);
  // get all place of enemies and colision

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
    65: false,
    83: false
  };

  //Tracking the Key down & Key up events
  $(document).on('keydown', function(e) {
    if (e.keyCode in codeset) {
      codeset[e.keyCode] = true;
      if (codeset[39] && codeset[32]) { // RIGHT JUMP
        myHero.jump(myHero.speedMax, stage, monster_easy); //Handicap
      }
      if (codeset[37] && codeset[32]) { // LEFT JUMP
        myHero.jump(myHero.speedMax, stage, monster_easy); //Handicap
      }
      if (codeset[39]) {
        myHero.moveToRight(stage);
      }
      if (codeset[37]) {
        myHero.moveToLeft(stage);
      }
      if (codeset[32]) {
        myHero.jump(0, stage, monster_easy);
      }
      if (codeset[16]) {
        myHero.run();
      }
      if (codeset[65]) {
        myHero.attack();
        myHero.isAttacking = true;
      }
      if (codeset[38]) {
        upPressed = true;
      }
      if (codeset[83]) {
        if (myHero.fairy == true){
          console.log("MAGIC!");
        }

      }
    }
  }).on('keyup', function(e) {
    if (e.keyCode in codeset) {
      codeset[e.keyCode] = false;
      //console.log("SpeedMax: " + myHero.speedMax + " speedNormal: " + myHero.speedNormal);
      myHero.speedMax = myHero.speedNormal;
    }
    if (myHero.y == stage.floor - myHero.height) myHero.idle();
    upPressed = false;
    myHero.isAttacking = false;
  });
  // Loop draw and lastTime = now
  var lastTime = 0;
  var halfTime = 0;
  // DRAW ALL
  function drawAll(timestamp) {

    var duration = 1000 / 24;
    // return if the desired time hasn't elapsed
    if ((timestamp - lastTime) < duration) {
      requestAnimationFrame(drawAll);
      return;
    }
    ctx.clearRect(stage.x, stage.y, stage.height, stage.width);
    stage.draw(stage);
    drawHero();
    drawHUD();
    monster_easy[0].enemyEasyDie();
    stage.jumpOverObject(monster_easy[0],myHero);
    stage.drawResized(monster_easy[0]);
    stage.checkAndMoveEnemyInScreen(monster_easy[0],myHero);
    if (myHero.fairy == true){
      instructions.img.src='images/instructions2.png';
    }
    stage.draw(instructions); //50 522
    stage.animation(myHero);
    if (halfTime == 2){
      stage.animation(monster_easy[0]);
      stage.animation(myFairy);
      halfTime = 0;
    } else {
      halfTime++;
    }
    myHero.isAlive(stage);
    gravity();
    if(!upPressed){
      stage.interaction(ctx,imgExclamationLetter,upPressed,myHero,hud);
    } else {
      stage.interaction(ctx,imgFairyChat,upPressed,myHero,hud);
    }
    if (myHero.status == 'knightJumpLeft' || myHero.status == 'knightJumpLeft' && myHero.y == 420) {
      myHero.land();
    } else if (myHero.status == 'knightJumpLeftFinish') {
      myHero.idle();
    }
    lastTime = timestamp;
    window.requestAnimationFrame(drawAll);
  }

  function drawHero(){
    stage.drawResized(myHero);
    if (myHero.fairy == true){
      myFairy.setFairyPosition(myHero);
      stage.draw(myFairy);
    }
  }

  function drawHUD(){
    lifeBar.width = myHero.life / myHero.lifeMax * imgBarLife.width;
    stage.drawResized(lifeBar);
    tiredBar.width = myHero.tired / myHero.tiredMax * imgTiredLife.width;
    stage.drawResized(tiredBar);
    stage.drawResized(mpBar);
    stage.draw(hud);
    if (myHero.lives == 1){
      stage.draw(heartHUD);
    }
    myHero.recoverTired();
  }

  function gravity(){ // gravity when exit from frame
    if (stage.gravity(myHero)) {
      console.log('gravedad activada');
      if (myHero.y < 800) {
        myHero.y += 10;
      } else{
        myHero.life = 0;
      }
    }
  }
};
