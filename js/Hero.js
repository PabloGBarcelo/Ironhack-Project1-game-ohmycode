var fps = 24;
// IMAGES
var knightIdleRight = ['images/knight/01-Idle_/2D_KNIGHT__Idle_000.png',
               'images/knight/01-Idle_/2D_KNIGHT__Idle_001.png',
               'images/knight/01-Idle_/2D_KNIGHT__Idle_002.png',
               'images/knight/01-Idle_/2D_KNIGHT__Idle_003.png',
               'images/knight/01-Idle_/2D_KNIGHT__Idle_004.png',
               'images/knight/01-Idle_/2D_KNIGHT__Idle_005.png',
               'images/knight/01-Idle_/2D_KNIGHT__Idle_006.png',
               'images/knight/01-Idle_/2D_KNIGHT__Idle_007.png'];
var knightRunRight = ['images/knight/02-Run_/2D_KNIGHT__Run_000.png',
              'images/knight/02-Run_/2D_KNIGHT__Run_001.png',
              'images/knight/02-Run_/2D_KNIGHT__Run_002.png',
              'images/knight/02-Run_/2D_KNIGHT__Run_003.png',
              'images/knight/02-Run_/2D_KNIGHT__Run_004.png',
              'images/knight/02-Run_/2D_KNIGHT__Run_005.png',
              'images/knight/02-Run_/2D_KNIGHT__Run_006.png',
              'images/knight/02-Run_/2D_KNIGHT__Run_007.png'];
var knightAttackRight = ['images/knight/03-Attack_/2D_KNIGHT__Attack_000.png',
              'images/knight/03-Attack_/2D_KNIGHT__Attack_001.png',
              'images/knight/03-Attack_/2D_KNIGHT__Attack_002.png',
              'images/knight/03-Attack_/2D_KNIGHT__Attack_003.png',
              'images/knight/03-Attack_/2D_KNIGHT__Attack_004.png',
              'images/knight/03-Attack_/2D_KNIGHT__Attack_005.png',
              'images/knight/03-Attack_/2D_KNIGHT__Attack_006.png',
              'images/knight/03-Attack_/2D_KNIGHT__Attack_007.png'];
var knightJumpRight = ['images/knight/04-Jump_/2D_KNIGHT__Jump_Up_000.png'];
var knightJumpRightFinish = ['images/knight/04-Jump_/2D_KNIGHT__Fall_Down_000.png'];
var knightHurtRight = ['images/knight/05-Hurt_/2D_KNIGHT__Hurt_000.png',
              'images/knight/05-Hurt_/2D_KNIGHT__Hurt_001.png',
              'images/knight/05-Hurt_/2D_KNIGHT__Hurt_002.png',
              'images/knight/05-Hurt_/2D_KNIGHT__Hurt_003.png',
              'images/knight/05-Hurt_/2D_KNIGHT__Hurt_004.png',
              'images/knight/05-Hurt_2D_KNIGHT__Hurt_005.png',
              'images/knight/05-Hurt_/2D_KNIGHT__Hurt_006.png',
              'images/knight/05-Hurt_/2D_KNIGHT__Hurt_007.png'];
var knightDieRight = ['images/knight/05-Die_/2D_KNIGHT__Die_000.png',
              'images/knight/05-Die_/2D_KNIGHT__Die_001.png',
              'images/knight/05-Die_/2D_KNIGHT__Die_002.png',
              'images/knight/05-Die_/2D_KNIGHT__Die_003.png',
              'images/knight/05-Die_/2D_KNIGHT__Die_004.png',
              'images/knight/05-Die_2D_KNIGHT__Die_005.png',
              'images/knight/05-Die_/2D_KNIGHT__Die_006.png',
              'images/knight/05-Die_/2D_KNIGHT__Die_007.png'];
var knightIdleLeft = ['images/knightLeft/01-Idle_/2D_KNIGHT__Idle_000.png',
             'images/knightLeft/01-Idle_/2D_KNIGHT__Idle_001.png',
             'images/knightLeft/01-Idle_/2D_KNIGHT__Idle_002.png',
             'images/knightLeft/01-Idle_/2D_KNIGHT__Idle_003.png',
             'images/knightLeft/01-Idle_/2D_KNIGHT__Idle_004.png',
             'images/knightLeft/01-Idle_/2D_KNIGHT__Idle_005.png',
             'images/knightLeft/01-Idle_/2D_KNIGHT__Idle_006.png',
             'images/knightLeft/01-Idle_/2D_KNIGHT__Idle_007.png'];
var knightRunLeft = ['images/knightLeft/02-Run_/2D_KNIGHT__Run_000.png',
            'images/knightLeft/02-Run_/2D_KNIGHT__Run_001.png',
            'images/knightLeft/02-Run_/2D_KNIGHT__Run_002.png',
            'images/knightLeft/02-Run_/2D_KNIGHT__Run_003.png',
            'images/knightLeft/02-Run_/2D_KNIGHT__Run_004.png',
            'images/knightLeft/02-Run_/2D_KNIGHT__Run_005.png',
            'images/knightLeft/02-Run_/2D_KNIGHT__Run_006.png',
            'images/knightLeft/02-Run_/2D_KNIGHT__Run_007.png'];
var knightAttackLeft = ['images/knightLeft/03-Attack_/2D_KNIGHT__Attack_000.png',
            'images/knightLeft/03-Attack_/2D_KNIGHT__Attack_001.png',
            'images/knightLeft/03-Attack_/2D_KNIGHT__Attack_002.png',
            'images/knightLeft/03-Attack_/2D_KNIGHT__Attack_003.png',
            'images/knightLeft/03-Attack_/2D_KNIGHT__Attack_004.png',
            'images/knightLeft/03-Attack_/2D_KNIGHT__Attack_005.png',
            'images/knightLeft/03-Attack_/2D_KNIGHT__Attack_006.png',
            'images/knightLeft/03-Attack_/2D_KNIGHT__Attack_007.png'];
var knightJumpLeft = ['images/knightLeft/04-Jump_/2D_KNIGHT__Jump_Up_000.png'];
var knightJumpLeftFinish = ['images/knightLeft/04-Jump_/2D_KNIGHT__Fall_Down_000.png'];
var knightHurtLeft = ['images/knightLeft/05-Hurt_/2D_KNIGHT__Hurt_000.png',
            'images/knightLeft/05-Hurt_/2D_KNIGHT__Hurt_001.png',
            'images/knightLeft/05-Hurt_/2D_KNIGHT__Hurt_002.png',
            'images/knightLeft/05-Hurt_/2D_KNIGHT__Hurt_003.png',
            'images/knightLeft/05-Hurt_/2D_KNIGHT__Hurt_004.png',
            'images/knightLeft/05-Hurt_2D_KNIGHT__Hurt_005.png',
            'images/knightLeft/05-Hurt_/2D_KNIGHT__Hurt_006.png',
            'images/knightLeft/05-Hurt_/2D_KNIGHT__Hurt_007.png'];
var knightDieLeft = ['images/knightLeft/05-Die_/2D_KNIGHT__Die_000.png',
            'images/knightLeft/05-Die_/2D_KNIGHT__Die_001.png',
            'images/knightLeft/05-Die_/2D_KNIGHT__Die_002.png',
            'images/knightLeft/05-Die_/2D_KNIGHT__Die_003.png',
            'images/knightLeft/05-Die_/2D_KNIGHT__Die_004.png',
            'images/knightLeft/05-Die_2D_KNIGHT__Die_005.png',
            'images/knightLeft/05-Die_/2D_KNIGHT__Die_006.png',
            'images/knightLeft/05-Die_/2D_KNIGHT__Die_007.png'];

var requestId;
Hero.prototype = Object.create(Game.prototype);
Hero.prototype.constructor = Hero;
function Hero(img,x,y,width,height){
  // Initial place of Hero
  Stage.call(this,img,x,y,width,height);
  this.status = knightIdleRight;
  this.direction = 'Right';
  this.speedMax = 7; // SPEED MAX
  this.maxSpeedAllowed = 10;
  this.longJump = 9; // JUMP
  this.speedNormal = 7; // SPEED NORMAL
  this.life = 100; // ACTUAL LIFE
  this.lifeMax = 100; // 100% LIFE
  this.lives = 1; // NUMBER OF LIVES (1/0)
  this.tired = 10; // ACTUAL TIRED
  this.tiredMax = 10; // MAX TIRED
  this.recoveringTime = 0.025;
  this.fairy = false; // Fairy company
}

Hero.prototype.drawHero = function(ctx,img){
  ctx.drawImage(img,this.x,this.y,this.width,this.height);
};

Hero.prototype.checkAndMoveScreen = function(stage,hero,speed){
  hero = this;
  if (hero.direction == 'Left' || this.status == 'knightJumpLeft'){
    if (hero.x >= 0 && hero.x <=410 && stage.x == 0 ||
        hero.x >= 400 && hero.x <=750 && stage.x <= -800 && stage.x >= -1600
        && this.x >= 400 && hero.x <780){
      hero.x -= speed;
    } else if (hero.x > 30){
      stage.x +=speed;
      }
    } else if (hero.direction == 'Right' || this.status == 'knightJumpRight'){

      if (hero.x >=400 && stage.x > -1600){ // (1600+800 width) 2400 max size
        stage.x -= speed;
      }else if(hero.x < stage.width && hero.x < 730){
          hero.x += speed;
      }
    }
};

Hero.prototype.moveToLeft = function(stage){
  if (this.y == 420){
    if (this.status != knightRunLeft) this.status = knightRunLeft;
    if (this.direction != 'Left')   this.direction = 'Left';
    this.checkAndMoveScreen(stage,this,this.speedMax);
    };
      console.log("stage x: "+stage.x+" hero.x: "+this.x);
  };

Hero.prototype.moveToRight = function(stage){
  if (this.y == 420){
    if (this.status != knightRunRight) this.status = knightRunRight;
    if (this.direction != 'Right' ) this.direction = 'Right';
    this.checkAndMoveScreen(stage,this,this.speedMax);
  };
  console.log("stage x: "+stage.x+" hero.x: "+this.x+"stage y "+stage.y+" hero.y "+this.y);
  //console.log('this.x '+this.x+' stage.x '+stage.x+'stage.width: '+stage.width);
};

Hero.prototype.idle = function(){
  if (this.direction == 'Left'){
    if (this.status != knightIdleLeft) this.status = knightIdleLeft;
  } else if (this.direction == 'Right'){
    if (this.status != knightIdleRight) this.status = knightIdleRight;
  }
};

Hero.prototype.attack = function(stage){
  if (this.direction == 'Left'){
    if (this.status != knightAttackLeft) this.status = knightAttackLeft;
  } else if (this.direction == 'Right'){
    if (this.status != knightAttackRight) this.status = knightAttackRight;
  }
  console.log('attacking!!!');
};

Hero.prototype.jump = function(speedJump,stage){
  // Use speedJump to check if is stopped or not
  var that = this;
  if (that.y == 420 && that.tired >= 2){
    var x = this.longJump;
    if (speedJump !=0)
      var y = speedJump-2;
    else {
      var y = 0;
    } // handicap
    var that = this;
    if (this.direction == 'Left'){
      if (this.status != knightJumpLeft) this.status = knightJumpLeft;
    } else if (this.direction == 'Right'){
      if (this.status != knightJumpRight) this.status = knightJumpRight;
    }
      var requestId = setInterval(function (){
        if (y != 0)
          that.checkAndMoveScreen(stage,that,y);
        that.y -= x;
        x--;
        if (x == -1){
          that.land(y,stage);
          clearInterval(requestId);
        }
      },50);
     }
  };

Hero.prototype.run = function(){
  if (this.speedMax < this.maxSpeedAllowed && this.tired > 0)
    this.speedMax += 3;
  else if (this.tired > 0){
    console.log("Max. Speed taken");
    this.tired -= 0.10;
  } else{
    this.speedMax = this.speedNormal;
    console.log("IM TIRED!!!!!");
  }
};
Hero.prototype.land = function(y,stage){
  if (this.direction == 'Left'){
    if (this.status != knightJumpLeftFinish) this.status = knightJumpLeftFinish;
  } else if (this.direction == 'Right'){
    if (this.status != knightJumpRightFinish) this.status = knightJumpRightFinish;
  }
  var x = 0;
  var that = this;
    var requestId = setInterval(function (){
      console.log(stage);
      that.checkAndMoveScreen(stage,that,y);
      if ((that.y += x) >=420){
        that.y = 420;
      };
      x++;
      if (x == that.longJump+1){
        this.y = 420; // FIX
        clearInterval(requestId);
      }

    },50);
    this.tired -= 3;
    this.idle();
};
// Animate our hero
var x = 0;
Hero.prototype.animation = function(time){
    if (x >= this.status.length) x = 0;
    this.img.src = this.status[x];
    x++;
};

Hero.prototype.recoverTired = function(){
  if((this.speedMax == this.speedNormal
    && (this.status == knightRunLeft || this.status == knightRunRight))
  && this.tired < this.tiredMax){
    this.tired += this.recoveringTime;
  } else if((this.speedMax == this.speedNormal
    && (this.status == knightIdleLeft || this.status == knightIdleRight))
  && this.tired < this.tiredMax){
    this.tired += this.recoveringTime*2;

  }
};

Hero.prototype.isAlive = function(stage){
  if (this.life <= 0){
    console.log('HA MUERTO');
    this.lives -= 1;
  }
};
