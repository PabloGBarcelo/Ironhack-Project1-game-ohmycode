
function Stage(img, x, y, width, height, ctx) {
  Game.call(this, img, x, y, height, width);
  this.ctx = ctx;
  this.floor = 489;
  this.floorInitialValue = 489; // set value floor (change during execution)
  // Include floor - height of hero
}

Stage.prototype = Object.create(Game.prototype);
Stage.prototype.constructor = Stage;

Stage.prototype.createImage = function(path, width, height) {

  var newObject = new Image();
  newObject.src = path;
  newObject.width = width;
  newObject.height = height;
  return newObject;

};
// ACTUAL FUNCTIONS

Stage.prototype.draw = function(object) {

  this.ctx.drawImage(object.img, object.x, object.y);

};

Stage.prototype.drawResized = function(object) {

  this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);

};

Stage.prototype.jumpOverObject = function(object, hero) {

  if (hero.y + hero.height < object.y &&
    hero.x + hero.width >= object.x &&
    hero.x < object.x) {

      this.floor = object.y;

  } else if (hero.y + hero.height == object.y &&
    hero.x + hero.width >= object.x &&
    hero.x <= object.x + object.width) {

      hero.jump(hero.speedMax, this, object);
      object.life -= 10;

  } else if (((hero.x + hero.width < object.x ||
      hero.x > object.x + object.width))) {

        this.floor = this.floorInitialValue; // Initial stage floor

  }
};

Stage.prototype.checkAndMoveEnemyInScreen = function(object, hero) {
  object.x = object.areaEnemyStart + this.x;
};
// Animate our hero
var x = 0;
Stage.prototype.animation = function(character) {
  if (x >= character.status.length) x = 0;
  character.img.src = character.status[x];
  x++;
};
Stage.prototype.gravity = function(hero, enemy) {
  // DETECT GRAVITY IN BRIDGE
  if (this.x > -315 && this.x < -49 && hero.y >= 420) {
    return true;
  };
};
var soundMade = 0;
Stage.prototype.interaction = function(ctx, img, upPressed, hero, hud) {
  // Letter near cave
  if (this.x >= -910 && this.x <= -858) {
    if (!upPressed) {
      ctx.drawImage(img, 445, 370);
    } else {
      // Claudia letter info chatbox
      ctx.drawImage(img, 250, 200);
      if (hero.fairy == false) {
        hero.fairy = true;
        hud.img.src = 'images/hud2.png';
      }
    }
  }
};

Stage.prototype.diedWithLives = function(hero) {
  this.x = 0;
  this.y = 0;
  hero.x = 20;
  hero.y = 420;
  hero.life = hero.lifeMax;
  hero.tired = 10;
  hero.direction = 'Right';
  this.status = knightIdleRight;

};

Stage.prototype.collisionHeroAndEnemys = function(hero, enemys) {
  enemys.forEach(function(oneEnemy) {
    if (oneEnemy.x < hero.x + hero.width &&
      oneEnemy.x + oneEnemy.width > hero.x &&
      oneEnemy.y < hero.y + hero.height &&
      oneEnemy.height + oneEnemy.y > hero.y) {
        console.log("ENTRE");
      if (hero.isAttacking == false) {
        hero.life -= oneEnemy.strength;
        console.log(hero.direction);
        if (hero.direction == 'Left') {
          hero.x += 10;
          this.x -= 10;
        } else if (hero.direction == 'Right') {
          hero.x -= 10;
          if (this.x < -10){
            this.x += 10;
          }
        }
      } else {
        if (oneEnemy != enemys[0]){ // Not for jumpers
        if (hero.direction == 'Left') {
          oneEnemy.areaEnemyStart -= 10;
        } else if (hero.direction == 'Right') {
          oneEnemy.areaEnemyStart += 10;
        }}
        oneEnemy.life -= hero.attackSword;
        hero.isAttacking = false;
        console.log("Enemy life: " + oneEnemy.life);
      }
    }
  }.bind(this));
};
