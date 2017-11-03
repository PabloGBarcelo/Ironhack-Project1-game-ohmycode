var fps = 24;
// IMAGES
var requestId;
function Hero(img, x, y, width, height) {
  // Initial place of Hero
  Stage.call(this, img, x, y, width, height);
  this.status = knightIdleRight;
  this.direction = 'Right';
  this.speedMax = 7; // SPEED MAX
  this.maxSpeedAllowed = 10;
  this.longJump = 9; // JUMP
  this.speedNormal = 7; // SPEED NORMAL
  this.life = 200; // ACTUAL LIFE
  this.lifeMax = 200; // 100% LIFE
  this.lives = 1; // NUMBER OF LIVES (1/0)
  this.tired = 20; // ACTUAL TIRED
  this.tiredMax = 20; // MAX TIRED
  this.recoveringTime = 0.025;
  this.fairy = false; // Fairy company
  this.mp = 100;
  this.mpMax = 100;
  this.isAttacking = false;
  this.fixImageDown = 20;
  this.attackSword = 50;
  this.attackMagic = 20;
  this.areaSlash = 50;
}

Hero.prototype = Object.create(Game.prototype);
Hero.prototype.constructor = Hero;


Hero.prototype.checkAndMoveScreen = function(stage, hero, speed) {
  hero = this;
  if (hero.direction == 'Left' || this.status == 'knightJumpLeft') {
    if (hero.x >= 0 && hero.x <= 410 && stage.x == 0 ||
      hero.x >= 400 && hero.x <= 750 && stage.x <= -800 && stage.x >= -1600 &&
      this.x >= 400 && hero.x < 780) {
      hero.x -= speed;
    } else if (hero.x > 30) {
      stage.x += speed;
    }
  } else if (hero.direction == 'Right' || this.status == 'knightJumpRight') {

    if (hero.x >= 400 && stage.x > -1600) { // (1600+800 width) 2400 max size
      stage.x -= speed;
    } else if (hero.x < stage.width && hero.x < 730) {
      hero.x += speed;
    }
  }
};

Hero.prototype.moveToLeft = function(stage) {
  if (this.y == stage.floor - this.height) {
    if (this.direction != 'Left') this.direction = 'Left';
    if (this.status != knightRunLeft) this.status = knightRunLeft;
    this.checkAndMoveScreen(stage, this, this.speedMax);
  };
};

Hero.prototype.moveToRight = function(stage) {
  if (this.y == stage.floor - this.height) {
    if (this.status != knightRunRight) this.status = knightRunRight;
    if (this.direction != 'Right') this.direction = 'Right';
    this.checkAndMoveScreen(stage, this, this.speedMax);
  };
};

Hero.prototype.idle = function() {
  this.comparePosition(knightIdleLeft, knightIdleRight);
};

Hero.prototype.attack = function(stage) {
  this.comparePosition(knightAttackLeft, knightAttackRight);
  console.log('attacking!!!');
};

Hero.prototype.run = function() {
  if (this.speedMax < this.maxSpeedAllowed && this.tired > 0)
    this.speedMax += 3;
  else if (this.tired > 0) {
    this.tired -= 0.10;
  } else {
    this.speedMax = this.speedNormal;
    console.log("IM TIRED!!!!!");
  }
};
Hero.prototype.jump = function(speedJump, stage, objectCollision) {
  // Use speedJump to check if is stopped or not
  this.comparePosition(knightJumpLeft, knightJumpRight);
  var that = this;
  // If tired,
  if (that.y == stage.floor - that.height && that.tired >= 2) {
    var jumpUp = this.longJump;
    if (speedJump != 0)
      // if speed is 0, is not walking and jumping
      var speed = speedJump - 3; // Handicap
    else
      var speed = 0; // not move x
    var requestId = setInterval(function() {
      if (speed != 0) {
        that.checkAndMoveScreen(stage, that, speed);
      }
      that.y -= jumpUp;
      jumpUp--; // less speed
      // end of jump and start land
      if (jumpUp == -1) {
        that.land(speed, stage, objectCollision);
        clearInterval(requestId);
      }
    }, 50);
  }
};

Hero.prototype.land = function(speed, stage, objectCollision) {
  this.comparePosition(knightJumpLeftFinish, knightJumpRightFinish);
  var moveInY = 0; // Like gravity
  var that = this;
  var requestId = setInterval(function() {
    that.checkAndMoveScreen(stage, that, speed);
    stage.jumpOverObject(objectCollision, that);
    if (that.y + that.height < stage.floor) {
      that.y += moveInY++;
    } else if (that.y + that.height >= stage.floor) {
      that.y = stage.floor - that.height;
      clearInterval(requestId);
    }
  }, 1000 / 48);
  this.tired -= 1;
  this.idle();
};

// Recovery *2 when stop
Hero.prototype.recoverTired = function() {
  if ((this.speedMax == this.speedNormal &&
      (this.status == knightRunLeft || this.status == knightRunRight)) &&
    this.tired < this.tiredMax) {
    this.tired += this.recoveringTime;
  } else if ((this.speedMax == this.speedNormal &&
      (this.status == knightIdleLeft || this.status == knightIdleRight)) &&
    this.tired < this.tiredMax) {

    this.tired += this.recoveringTime * 2;
  }
};

Hero.prototype.isAlive = function(stage) {
  if (this.life <= 0 && this.lives > 0) {
    this.lives -= 1;
    this.idle();
    stage.diedWithLives(this);
  }
};

Hero.prototype.comparePosition = function(stateLeft, stateRight) {
  if (this.direction == 'Left') {
    if (this.status != stateLeft) this.status = stateLeft;
  } else if (this.direction == 'Right') {
    if (this.status != stateLeft) this.status = stateRight;
  }
};

Hero.prototype.useMagic = function(ctx, stage,enemy){
  ctx.drawImage
  this.mp -= 20;
};

Hero.prototype.drawSlash = function(ctx,stage){
  if (this.direction == 'Left'){
    var imgSlash = stage.createImage('images/slashLeft.png',67,63);
    ctx.drawImage(imgSlash, this.x-40, this.y);
  } else if (this.direction == 'Right'){
    var imgSlash = stage.createImage('images/slash.png',67,63);
    ctx.drawImage(imgSlash, this.x+this.width-20, this.y);
  }
};
