window.onload = function() {
  allImagesToPreload.forEach(function(a){
    $.each(a, function(i,source) {
      $.get(source); });
  });

  var upPressed = false; // Detect if key up is pressed;
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');
  startGame();
  function startGame(){
  // Start Stage (Background)
  var stage = new Stage(imgBackground, 0, 0, 2400, 1800, ctx);
  var imgBackground = stage.createImage('images/background1line.png', 2400, 1800);
  stage.img = imgBackground;
  // Start images objects

  var monstersChibiEasy = stage.createImage('images/monster_easy/IdleLeft/frame-1.png',50,30);
  var imgHero = stage.createImage('images/knight/01-Idle_/2D_KNIGHT__Idle_000.png', 61, 69);
  var imgMonsterEasy = stage.createImage('images/monster_easy/IdleLeft/frame-1.png',109,66);
  var imgGreenMonster = stage.createImage('images/monsterGreen/frame-1.png',55,44);
  var imgBlackMonster = stage.createImage('images/monsterBlack/frame1.png',127,103);
  var imgBossMonster = stage.createImage('images/monsterBoss/frame1.png',222,205);
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
  // Start monsters
  var monster_easy = new Enemy(imgMonsterEasy,380,420,imgMonsterEasy.width,imgMonsterEasy.height,0,99999999999,0,enemyEasyIdleLeft);
  var monsterGreen = new Enemy(imgGreenMonster,1039,440,imgGreenMonster.width,imgGreenMonster.height,10,200,-839,monsterGreenIdle);
  var monsterBlack = new Enemy(imgBlackMonster,1600,380,imgBlackMonster.width,imgBlackMonster.height,10,1000,-1163,monsterBlackIdle);
  var monsterBoss = new Enemy(imgBossMonster, 2000, 270, imgBossMonster.width, imgBossMonster.height,10,2000,-1513, monsterBossIdle);
  // Place instructions

  var instructions = new Stage(imgInstructions, 50, 522, 267, 81);
  // place HUD
  var hud = new Stage(imgHUD, 30, 30, 109, 239);
  // place BARS
  var lifeBar = new Stage(imgBarLife, 130, 40, imgBarLife.width, imgBarLife.height);
  var tiredBar = new Stage(imgTiredLife, 130, 110, imgTiredLife.width, imgTiredLife.height);
  var mpBar = new Stage(imgMPLife, 130, 75, imgMPLife.width, imgMPLife.height);
  var heartHUD = new Stage(imgHeartLife, 42,39, imgHeartLife.width, imgHeartLife.height);
  // monster_easy is not a monster (not hit and rest life)
  var allMonster = [monster_easy,monsterGreen,monsterBlack,monsterBoss];
  // get all place of enemies and colision
  // Every 1500 seconds monster make something
  setInterval(function(){
    allMonster.forEach(function(monster){
      if (monster != allMonster[0]){
          monster.aiMonster(myHero);
      }
    }.bind(this));
  }.bind(this),1500);
  // paint
  requestAnimationFrame(drawAll);

  // KEYBOARD INPUT
  var codeset = {
    16: false,
    32: false,
    37: false,
    38: false,
    39: false,
    65: false,
    83: false
  };
  // load action enemy
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
          myHero.useMagic();
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
    drawTomb();
    // Jumper
    stage.jumpOverObject(monster_easy ,myHero);
    myHero.recoverTired();
    monster_easy.enemyEasyDie();
    var cont = 0;
    allMonster.forEach(function(monster){
      if (monster != monster_easy){
        monster.monsterDieOrDraw(stage);
      } else {
       stage.drawResized(monster);
      }
       stage.animation(monster);
      stage.checkAndMoveEnemyInScreen(monster,myHero);
      cont++;
    });
    allMonster = removeDeadMonsters(allMonster);
    console.log(allMonster);
    stage.collisionHeroAndEnemys(myHero,allMonster);
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

    stage.animation(myHero);
    stage.drawResized(myHero);
    if (myHero.fairy == true){
      myFairy.setFairyPosition(myHero);
      stage.animation(myFairy);
      stage.draw(myFairy);
      instructions.img.src='images/instructions2.png';
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
    stage.draw(instructions); //50 522
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
  function drawTomb(){
    if (allRip.length>0){
      allRip.forEach(function(tomb){
        stage.drawResized(tomb);
      });
    }
  }
  function removeDeadMonsters(allMonsters){
    var liveMonsters = allMonsters.filter(function( obj ) {
      return obj.life > 0;
    });
    return liveMonsters;
  };
  }
};
