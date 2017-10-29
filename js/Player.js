var knightIdle = ['images/knight/01-Idle_/2D_KNIGHT__Idle_000.png',
               'images/knight/01-Idle_/2D_KNIGHT__Idle_001.png',
               'images/knight/01-Idle_/2D_KNIGHT__Idle_002.png',
               'images/knight/01-Idle_/2D_KNIGHT__Idle_003.png',
               'images/knight/01-Idle_/2D_KNIGHT__Idle_004.png',
               'images/knight/01-Idle_/2D_KNIGHT__Idle_005.png',
               'images/knight/01-Idle_/2D_KNIGHT__Idle_006.png',
               'images/knight/01-Idle_/2D_KNIGHT__Idle_007.png']

var knightRun = ['images/knight/02-Run_/2D_KNIGHT__Run_000.png',
              'images/knight/02-Run_/2D_KNIGHT__Run_001.png',
              'images/knight/02-Run_/2D_KNIGHT__Run_002.png',
              'images/knight/02-Run_/2D_KNIGHT__Run_003.png',
              'images/knight/02-Run_/2D_KNIGHT__Run_004.png',
              'images/knight/02-Run_/2D_KNIGHT__Run_005.png',
              'images/knight/02-Run_/2D_KNIGHT__Run_006.png',
              'images/knight/02-Run_/2D_KNIGHT__Run_007.png']

var knightAttack = ['images/knight/03-Attack_/2D_KNIGHT__Attack_000.png',
              'images/knight/03-Attack_/2D_KNIGHT__Attack_001.png',
              'images/knight/03-Attack_/2D_KNIGHT__Attack_002.png',
              'images/knight/03-Attack_/2D_KNIGHT__Attack_003.png',
              'images/knight/03-Attack_/2D_KNIGHT__Attack_004.png',
              'images/knight/03-Attack_/2D_KNIGHT__Attack_005.png',
              'images/knight/03-Attack_/2D_KNIGHT__Attack_006.png',
              'images/knight/03-Attack_/2D_KNIGHT__Attack_007.png']

var knightJump = ['images/knight/04-Jump_/2D_KNIGHT__Jump_Up_000.png',
              'images/knight/04-Jump_/2D_KNIGHT__Fall_Down_000.png'];

var knightHurt = ['images/knight/05-Hurt_/2D_KNIGHT__Hurt_000.png',
              'images/knight/05-Hurt_/2D_KNIGHT__Hurt_001.png',
              'images/knight/05-Hurt_/2D_KNIGHT__Hurt_002.png',
              'images/knight/05-Hurt_/2D_KNIGHT__Hurt_003.png',
              'images/knight/05-Hurt_/2D_KNIGHT__Hurt_004.png',
              'images/knight/05-Hurt_2D_KNIGHT__Hurt_005.png',
              'images/knight/05-Hurt_/2D_KNIGHT__Hurt_006.png',
              'images/knight/05-Hurt_/2D_KNIGHT__Hurt_007.png']

var knightDie = ['images/knight/05-Die_/2D_KNIGHT__Die_000.png',
              'images/knight/05-Die_/2D_KNIGHT__Die_001.png',
              'images/knight/05-Die_/2D_KNIGHT__Die_002.png',
              'images/knight/05-Die_/2D_KNIGHT__Die_003.png',
              'images/knight/05-Die_/2D_KNIGHT__Die_004.png',
              'images/knight/05-Die_2D_KNIGHT__Die_005.png',
              'images/knight/05-Die_/2D_KNIGHT__Die_006.png',
              'images/knight/05-Die_/2D_KNIGHT__Die_007.png']

var requestId;
Player.prototype = Object.create(Game.prototype);
Player.prototype.constructor = Player;
function Player(img,x,y,width,height){
  // Initial place of Player
  Stage.call(this,img,x,y,width,height);
}

Player.prototype.drawPlayer = function(ctx,img){
  console.log(this);
  ctx.drawImage(img,this.x,this.y,this.width,this.height);
}

Player.prototype.moveToLeft(){

}

Player.prototype.moveToRight(){

}

Player.prototype.idle(){
  this.img.src = knightIdle;
}
Player.prototype.animation = function(){
  RequestAnimationFrame(function(){
      requestId = window.RequestAnimationFrame();//.. do something here ..
  });
}

// Move with player
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
};
