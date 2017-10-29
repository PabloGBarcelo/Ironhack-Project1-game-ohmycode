var fps = 24;
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
var knightJumpFinishLeft = ['images/knightLeft/04-Jump_/2D_KNIGHT__Fall_Down_000.png'];

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
}

Hero.prototype.drawHero = function(ctx,img){
  ctx.drawImage(img,this.x,this.y,this.width,this.height);
};

Hero.prototype.moveToLeft = function(stage){
  if (this.status != knightRunLeft) this.status = knightRunLeft;
  if (this.direction != 'Left')   this.direction = 'Left';
  if (this.x >= 0 && this.x <=410 && stage.x == 0 ||
      this.x >= 400 && this.x <=750 && stage.x <= -800 && stage.x >= -1600
      && this.x >= 400 && this.x <780){
    this.x -= 5;
  } else if (this.x > 30){
    stage.x +=5;
    }
  };

Hero.prototype.moveToRight = function(stage){
  if (this.status != knightRunRight) this.status = knightRunRight;
  if (this.direction != 'Right') this.direction = 'Right';
  if (this.x >=400 && stage.x > -1600){ // (1600+800 width) 2400 max size
    stage.x -= 5;
  }else if(this.x < stage.width && this.x < 730){
      this.x += 10;
  }
  console.log('this.x '+this.x+' stage.x '+stage.x+'stage.width: '+stage.width);
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

Hero.prototype.jump = function(){
  if (this.direction == 'Left'){
    if (this.status != knightJumpLeft) this.status = knightJumpLeft;
  } else if (this.direction == 'Right'){
    if (this.status != knightJumpRight) this.status = knightJumpRight;
  }
};

Hero.prototype.land = function(){
  if (this.direction == 'Left'){
    if (this.status != knightJumpLeftFinish) this.status = knightJumpLeftFinish;
  } else if (this.direction == 'Right'){
    if (this.status != knightJumpRightFinish) this.status = knightJumpRightFinish;
  }
};
// Animate our hero
var x = 0;
Hero.prototype.animation = function(){
    if (x >= this.status.length) x = 0;
    this.img.src = this.status[x];
    x++;
};

// Move with Hero
// var x = 0;
// var ab = setInterval(function(e){
// console.log(x);
// ctx.clearRect(0,0,800,600)
// ctx.drawImage(img,x,0);
// x -= 2.5;
// if (x <= -1600){
//   clearInterval(ab);
// }
// },25)
// };
