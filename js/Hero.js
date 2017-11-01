var fps = 24;
// IMAGES
var knightIdleRight = ['images/knight/01-Idle_/2D_KNIGHT__Idle_000.png',
  'images/knight/01-Idle_/2D_KNIGHT__Idle_001.png',
  'images/knight/01-Idle_/2D_KNIGHT__Idle_002.png',
  'images/knight/01-Idle_/2D_KNIGHT__Idle_003.png',
  'images/knight/01-Idle_/2D_KNIGHT__Idle_004.png',
  'images/knight/01-Idle_/2D_KNIGHT__Idle_005.png',
  'images/knight/01-Idle_/2D_KNIGHT__Idle_006.png',
  'images/knight/01-Idle_/2D_KNIGHT__Idle_007.png'
];
var knightRunRight = ['images/knight/02-Run_/2D_KNIGHT__Run_000.png',
  'images/knight/02-Run_/2D_KNIGHT__Run_001.png',
  'images/knight/02-Run_/2D_KNIGHT__Run_002.png',
  'images/knight/02-Run_/2D_KNIGHT__Run_003.png',
  'images/knight/02-Run_/2D_KNIGHT__Run_004.png',
  'images/knight/02-Run_/2D_KNIGHT__Run_005.png',
  'images/knight/02-Run_/2D_KNIGHT__Run_006.png',
  'images/knight/02-Run_/2D_KNIGHT__Run_007.png'
];
var knightAttackRight = ['images/knight/03-Attack_/2D_KNIGHT__Attack_000.png',
  'images/knight/03-Attack_/2D_KNIGHT__Attack_001.png',
  'images/knight/03-Attack_/2D_KNIGHT__Attack_002.png',
  'images/knight/03-Attack_/2D_KNIGHT__Attack_003.png',
  'images/knight/03-Attack_/2D_KNIGHT__Attack_004.png',
  'images/knight/03-Attack_/2D_KNIGHT__Attack_005.png',
  'images/knight/03-Attack_/2D_KNIGHT__Attack_006.png',
  'images/knight/03-Attack_/2D_KNIGHT__Attack_007.png'
];
var knightJumpRight = ['images/knight/04-Jump_/2D_KNIGHT__Jump_Up_000.png'];
var knightJumpRightFinish = ['images/knight/04-Jump_/2D_KNIGHT__Fall_Down_000.png'];
var knightHurtRight = ['images/knight/05-Hurt_/2D_KNIGHT__Hurt_000.png',
  'images/knight/05-Hurt_/2D_KNIGHT__Hurt_001.png',
  'images/knight/05-Hurt_/2D_KNIGHT__Hurt_002.png',
  'images/knight/05-Hurt_/2D_KNIGHT__Hurt_003.png',
  'images/knight/05-Hurt_/2D_KNIGHT__Hurt_004.png',
  'images/knight/05-Hurt_2D_KNIGHT__Hurt_005.png',
  'images/knight/05-Hurt_/2D_KNIGHT__Hurt_006.png',
  'images/knight/05-Hurt_/2D_KNIGHT__Hurt_007.png'
];
var knightDieRight = ['images/knight/05-Die_/2D_KNIGHT__Die_000.png',
  'images/knight/05-Die_/2D_KNIGHT__Die_001.png',
  'images/knight/05-Die_/2D_KNIGHT__Die_002.png',
  'images/knight/05-Die_/2D_KNIGHT__Die_003.png',
  'images/knight/05-Die_/2D_KNIGHT__Die_004.png',
  'images/knight/05-Die_2D_KNIGHT__Die_005.png',
  'images/knight/05-Die_/2D_KNIGHT__Die_006.png',
  'images/knight/05-Die_/2D_KNIGHT__Die_007.png'
];
var knightIdleLeft = ['images/knightLeft/01-Idle_/2D_KNIGHT__Idle_000.png',
  'images/knightLeft/01-Idle_/2D_KNIGHT__Idle_001.png',
  'images/knightLeft/01-Idle_/2D_KNIGHT__Idle_002.png',
  'images/knightLeft/01-Idle_/2D_KNIGHT__Idle_003.png',
  'images/knightLeft/01-Idle_/2D_KNIGHT__Idle_004.png',
  'images/knightLeft/01-Idle_/2D_KNIGHT__Idle_005.png',
  'images/knightLeft/01-Idle_/2D_KNIGHT__Idle_006.png',
  'images/knightLeft/01-Idle_/2D_KNIGHT__Idle_007.png'
];
var knightRunLeft = ['images/knightLeft/02-Run_/2D_KNIGHT__Run_000.png',
  'images/knightLeft/02-Run_/2D_KNIGHT__Run_001.png',
  'images/knightLeft/02-Run_/2D_KNIGHT__Run_002.png',
  'images/knightLeft/02-Run_/2D_KNIGHT__Run_003.png',
  'images/knightLeft/02-Run_/2D_KNIGHT__Run_004.png',
  'images/knightLeft/02-Run_/2D_KNIGHT__Run_005.png',
  'images/knightLeft/02-Run_/2D_KNIGHT__Run_006.png',
  'images/knightLeft/02-Run_/2D_KNIGHT__Run_007.png'
];
var knightAttackLeft = ['images/knightLeft/03-Attack_/2D_KNIGHT__Attack_000.png',
  'images/knightLeft/03-Attack_/2D_KNIGHT__Attack_001.png',
  'images/knightLeft/03-Attack_/2D_KNIGHT__Attack_002.png',
  'images/knightLeft/03-Attack_/2D_KNIGHT__Attack_003.png',
  'images/knightLeft/03-Attack_/2D_KNIGHT__Attack_004.png',
  'images/knightLeft/03-Attack_/2D_KNIGHT__Attack_005.png',
  'images/knightLeft/03-Attack_/2D_KNIGHT__Attack_006.png',
  'images/knightLeft/03-Attack_/2D_KNIGHT__Attack_007.png'
];
var knightJumpLeft = ['images/knightLeft/04-Jump_/2D_KNIGHT__Jump_Up_000.png'];
var knightJumpLeftFinish = ['images/knightLeft/04-Jump_/2D_KNIGHT__Fall_Down_000.png'];
var knightHurtLeft = ['images/knightLeft/05-Hurt_/2D_KNIGHT__Hurt_000.png',
  'images/knightLeft/05-Hurt_/2D_KNIGHT__Hurt_001.png',
  'images/knightLeft/05-Hurt_/2D_KNIGHT__Hurt_002.png',
  'images/knightLeft/05-Hurt_/2D_KNIGHT__Hurt_003.png',
  'images/knightLeft/05-Hurt_/2D_KNIGHT__Hurt_004.png',
  'images/knightLeft/05-Hurt_2D_KNIGHT__Hurt_005.png',
  'images/knightLeft/05-Hurt_/2D_KNIGHT__Hurt_006.png',
  'images/knightLeft/05-Hurt_/2D_KNIGHT__Hurt_007.png'
];
var knightDieLeft = ['images/knightLeft/05-Die_/2D_KNIGHT__Die_000.png',
  'images/knightLeft/05-Die_/2D_KNIGHT__Die_001.png',
  'images/knightLeft/05-Die_/2D_KNIGHT__Die_002.png',
  'images/knightLeft/05-Die_/2D_KNIGHT__Die_003.png',
  'images/knightLeft/05-Die_/2D_KNIGHT__Die_004.png',
  'images/knightLeft/05-Die_2D_KNIGHT__Die_005.png',
  'images/knightLeft/05-Die_/2D_KNIGHT__Die_006.png',
  'images/knightLeft/05-Die_/2D_KNIGHT__Die_007.png'
];
var requestId;
Hero.prototype = Object.create(Game.prototype);
Hero.prototype.constructor = Hero;

function Hero(img, x, y, width, height) {
  // Initial place of Hero
  Stage.call(this, img, x, y, width, height);
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
  this.mp = 100;
  this.isAttacking = false;
  this.fixImageDown = 20;
  this.attackSword = 5;
  this.attackMagic = 20;
}

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

Hero.prototype.setFairyPosition = function() {

};
Hero.prototype.moveToLeft = function(stage) {
  if (this.y == stage.floor - this.height) {
    if (this.direction != 'Left') this.direction = 'Left';
    if (this.status != knightRunLeft) this.status = knightRunLeft;
    this.checkAndMoveScreen(stage, this, this.speedMax);
  };
  //console.log("stage x: "+stage.x+" hero.x: "+this.x);
};

Hero.prototype.moveToRight = function(stage) {
  if (this.y == stage.floor - this.height) {
    if (this.status != knightRunRight) this.status = knightRunRight;
    if (this.direction != 'Right') this.direction = 'Right';
    this.checkAndMoveScreen(stage, this, this.speedMax);
  };
  //console.log("stage x: "+stage.x+" hero.x: "+this.x+"stage y "+stage.y+" hero.y "+this.y);
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
      var speed = speedJump - 2;
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
        // console.log('start land');
        that.land(speed, stage, objectCollision);
        clearInterval(requestId);
      }
    }, 50);
  }
};

Hero.prototype.land = function(speed, stage, objectCollision) {
  this.comparePosition(knightJumpLeftFinish, knightJumpRightFinish);
  // console.log("entre con valor de speed: " + speed);
  var moveInY = 0; // Like gravity
  var that = this;
  var requestId = setInterval(function() {
    that.checkAndMoveScreen(stage, that, speed);
    stage.jumpOverObject(objectCollision, that);
    // console.log('stage.floor vale aqui: ' + stage.floor);
    if (that.y + that.height < stage.floor) {
      // console.log("start to add");
      that.y += moveInY++;
    } else if (that.y + that.height >= stage.floor) {
      // console.log("Asociando el valor " + stage.floor);
      that.y = stage.floor - that.height;
      // console.log("Sali");
      clearInterval(requestId);
    }
  }, 1000 / 24);
  this.tired -= 1;
  this.idle();
};
// Animate our hero
var x = 0;

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
    stage.diedWithLives(this);
  } else {
    // .. do something ..
  }
};

Hero.prototype.comparePosition = function(stateLeft, stateRight) {
  if (this.direction == 'Left') {
    if (this.status != stateLeft) this.status = stateLeft;
  } else if (this.direction == 'Right') {
    if (this.status != stateLeft) this.status = stateRight;
  }
};
