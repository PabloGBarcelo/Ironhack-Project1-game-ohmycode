var magicBalls = [];
window.onload = function() {
  var upPressed = false; // Detect if key up is pressed;
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');
  var stage = new Stage(imgBackground, 0, -600, 2400, 1800, ctx);
  var imgBackground = stage.createImage('images/background1line.png', 2400, 1800);
  var audio;
  stage.img = imgBackground;
  stage.img.onload = function() {
    stage.draw(stage);
    audio = new Audio('./music/PeaceSign.m4a');
    audio.play();
    select = new Audio('./music/sfx/select.wav');
  };
  var listener = function(event) {

  };
  document.getElementById('game').addEventListener('click', function(evt) {
    if (evt.clientX > 277 && evt.clientX < 496 &&
      evt.clientY > 96 && evt.clientY < 309) {
      audio.pause();
      select.play();
      startGame();
    } else if (evt.clientX > 273 && evt.clientX < 303 &&
      evt.clientY > 32 && evt.clientY < 63) {
      if (!audio.paused) audio.pause();
      else audio.play();
    }
  }, false);

  function startGame() {

    audio = new Audio('./music/Stage.mp3');
    audio.play();
    document.removeEventListener('click', listener, false);
    // Start Stage (Background)
    stage.y = 0;
    stage.draw(stage);
    // Start images objects
    var monstersChibiEasy = stage.createImage('images/monster_easy/IdleLeft/frame-1.png', 50, 30);
    var imgHero = stage.createImage('images/knight/01-Idle_/2D_KNIGHT__Idle_000.png', 61, 69);
    var imgMonsterEasy = stage.createImage('images/monster_easy/IdleLeft/frame-1.png', 109, 66);
    var imgGreenMonster = stage.createImage('images/monsterGreen/frame-1.png', 55, 44);
    var imgBlackMonster = stage.createImage('images/monsterBlack/frame1.png', 127, 103);
    var imgBossMonster = stage.createImage('images/monsterBoss/frame1.png', 222, 205);
    var imgInstructions = stage.createImage('images/Instructions.png', 18, 99);
    var imgHUD = stage.createImage('images/hud.png', 109, 239);
    var imgBarLife = stage.createImage('images/barHP.png', 124, 13);
    var imgTiredLife = stage.createImage('images/barTired.png', 124, 13);
    var imgMPLife = stage.createImage('images/barMP.png', 135, 13);
    var imgEnemyLife = stage.createImage('images/lifeEnemyBar.png', 123, 13);
    var hudEnemy = stage.createImage('images/lifeBarEnemy.png', 161, 35);
    var imgExclamationLetter = stage.createImage('images/exclamation.png', 60, 38);
    var imgFairyChat = stage.createImage('images/chatboxFairy.png', 423, 162);
    var imgHeartLife = stage.createImage('images/heart.png', 14, 14);
    var imgFairy = stage.createImage('images/fairyLeft/frame0.png', 50, 55);
    var imgEnemyLife = stage.createImage('images/lifeEnemyBar.png', 123, 13);
    var imgBallFire = stage.createImage('images/magicfire.png', 53, 39);
    var hudEnemy = stage.createImage('images/lifeBarEnemy.png', 161, 35);
    // Start player
    var myHero = new Hero(imgHero, 20, stage.floor - 69, 61, 69);
    // Start Fairy
    var myFairy = new Fairy(imgFairy, 0, 0, 50, 55); // x and y not defined
    // Start monsters
    var monster_easy = new Enemy(imgMonsterEasy, 380, 420, imgMonsterEasy.width, imgMonsterEasy.height, 0, 99999999999, 0, enemyEasyIdleLeft);
    var monsterGreen = new Enemy(imgGreenMonster, 1039, 440, imgGreenMonster.width, imgGreenMonster.height, 10, 200, -839, monsterGreenIdle);
    var monsterBlack = new Enemy(imgBlackMonster, 1500, 380, imgBlackMonster.width, imgBlackMonster.height, 20, 1000, -1163, monsterBlackIdle);
    var monsterBoss = new Enemy(imgBossMonster, 2000, 270, imgBossMonster.width, imgBossMonster.height, 30, 4000, -1513, monsterBossIdle);
    // Place instructions
    var instructions = new Stage(imgInstructions, 50, 522, 267, 81);
    // place HUD
    var hud = new Stage(imgHUD, 30, 30, 109, 239);
    // place BARS
    var lifeBar = new Stage(imgBarLife, 130, 40, imgBarLife.width, imgBarLife.height);
    var tiredBar = new Stage(imgTiredLife, 130, 110, imgTiredLife.width, imgTiredLife.height);
    var mpBar = new Stage(imgMPLife, 130, 75, imgMPLife.width, imgMPLife.height);
    var enemyLifeBar = new Stage(imgEnemyLife, 0, 0, imgEnemyLife.width, imgEnemyLife.height);
    var heartHUD = new Stage(imgHeartLife, 42, 39, imgHeartLife.width, imgHeartLife.height);
    // monster_easy is not a monster (not hit and rest life)
    var allMonster = [monster_easy, monsterGreen, monsterBlack, monsterBoss];
    // Music // SFX
    var sfxSword = new Audio('./music/sfx/sword.wav');
    var sfxJump = new Audio('./music/sfx/jump.wav');
    // get all place of enemies and colision
    // Every 1500 seconds monster make something
    setInterval(function() {
      allMonster.forEach(function(monster) {
        if (monster != allMonster[0]) {
          monster.aiMonster(myHero);
        }
      }.bind(this));
    }.bind(this), 1000);
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
          sfxJump.play();
          myHero.jump(myHero.speedMax, stage, monster_easy); //Handicap
        }
        if (codeset[37] && codeset[32]) { // LEFT JUMP
          sfxJump.play();
          myHero.jump(myHero.speedMax, stage, monster_easy); //Handicap
        }
        if (codeset[39]) {
          myHero.moveToRight(stage);
        }
        if (codeset[37]) {
          myHero.moveToLeft(stage);
        }
        if (codeset[32]) {
          sfxJump.play();
          myHero.jump(0, stage, monster_easy);
        }
        if (codeset[16]) {
          myHero.run();
        }
        if (codeset[65]) {
          sfxSword.play();
          myHero.drawSlash(ctx, stage);
          myHero.attack();
          myHero.drawSlash(ctx, stage);
          myHero.isAttacking = true;
        }
        if (codeset[38]) {
          upPressed = true;
        }
        if (codeset[83]) {
          if (myHero.fairy == true) {
            console.log("MAGIC!");
            if (magicBalls.length == 0 && myHero.mp > 0) {
              magicBalls.push(new Magic(imgBallFire,myHero.x+myHero.width,myHero.y,imgBallFire.width,imgBallFire.height,'fire',imgBallFire.src));
              myHero.mp -= 20;
              console.log(magicBalls[0]);
              // if  myHero.useMagic();
            }
          }
        }
      }
    }).on('keyup', function(e) {
      if (e.keyCode in codeset) {
        codeset[e.keyCode] = false;
      }
      if (myHero.y == stage.floor - myHero.height) myHero.idle();
      myHero.speedMax = myHero.speedNormal;
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
      myHero.drawHero(stage,instructions,myFairy);
      drawHUD();
      stage.drawTomb(allRip);
      if (magicBalls.length > 0){
        moveMagic();
        drawMagic(magicBalls[0]);
      }
        // Jumper
      stage.jumpOverObject(monster_easy, myHero);
      myHero.recoverTired();
      monster_easy.enemyEasyDie();
      allMonster.forEach(function(monster) {
        if (magicBalls.length > 0){
          collisionMagic(magicBalls[0],monster,myHero);
        }
        if (monster != monster_easy) {
          monster.monsterDieOrDraw(stage);
        } else {
          if (monster.isInTheScreen(stage)) {
            stage.drawResized(monster);
            monster.drawHUDEnemy(imgEnemyLife, hudEnemy, stage, ctx);
          }
        }
        if (monster.isInTheScreen(stage)) {
          stage.drawResized(monster);
          monster.drawHUDEnemy(imgEnemyLife, hudEnemy, stage, ctx);
        }
        stage.checkAndMoveEnemyInScreen(monster, myHero);
        stage.animation(monster);
      });
      if (stage.x < -1300) {
        monster_easy.loadMusicBoss(audio);
      }
      allMonster = removeDeadMonsters(allMonster);
      stage.collisionHeroAndEnemys(myHero, allMonster);
      myHero.isAlive(stage);
      myHero.gravity(stage);
      if (!upPressed) {
        stage.interaction(ctx, imgExclamationLetter, upPressed, myHero, hud);
      } else {
        stage.interaction(ctx, imgFairyChat, upPressed, myHero, hud);
      }
      if (myHero.status == 'knightJumpLeft' || myHero.status == 'knightJumpLeft' && myHero.y == 420) {
        myHero.land();
      } else if (myHero.status == 'knightJumpLeftFinish') {
        myHero.idle();
      }
      if (myHero.lives >= 0 &&  allMonster.length > 1) {
        console.log("SIGO AQUI");
        lastTime = timestamp;
        window.requestAnimationFrame(drawAll);
      } else if (allMonster.length == 1) {
        stage.youWin(audio);
      }
      if (myHero.lives == 0 && myHero.life <= 0) {
        stage.youLose(audio);
      }
    }

    function drawHUD() {
      lifeBar.width = myHero.life / myHero.lifeMax * imgBarLife.width;
      stage.drawResized(lifeBar);
      tiredBar.width = myHero.tired / myHero.tiredMax * imgTiredLife.width;
      stage.drawResized(tiredBar);
      console.log(myHero.mp / myHero.mpMax * imgMPLife.width);
      mpBar.width = myHero.mp / myHero.mpMax * imgMPLife.width;
      stage.drawResized(mpBar);
      stage.draw(hud);
      if (myHero.lives == 1) {
        stage.draw(heartHUD);
      }
      stage.draw(instructions); //50 522
    }

    function removeDeadMonsters(allMonsters) {
      var liveMonsters = allMonsters.filter(function(obj) {
        return obj.life > 0;
      });
      return liveMonsters;
    };
  }

  function moveMagic() {
    if (magicBalls.length > 0) {
      var a = setInterval(function() {
        magicBalls.forEach(function(ball) {
          ball.x += ball.speed;
        }.bind(this));
        if (magicBalls.length == 0) clearInterval(a);
      }.bind(this), 200);
    };
  };

  function drawMagic(ball){
    ctx.drawImage(ball.img,ball.x,ball.y);
  }

  function collisionMagic(ball,monster,hero){
    console.log(ball.x + ball.width);
    console.log(monster.x);
    if (ball.x + ball.width > monster.x && hero.x < monster.x){
      console.log("HIT!");
      magicBalls.pop();
      console.log(monster);
      monster.life -= ball.strength;
      console.log(monster);
    }
  };
};
