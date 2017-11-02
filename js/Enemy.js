var allRip = [];
function Enemy(img,x,y,width,height,strength,life, xRelative,status){
  Game.call(this,img,x,y,height,width);
  this.xRelative = xRelative;
  this.strength = strength; //
  this.life = life;
  this.areaEnemyStart = x; // Wherer start the enemy
  this.xMin = 50; // Between this 2.
  this.xMax = 50; // Max place to the right
  this.status = status;
  this.type = 'enemy';
}
Enemy.prototype = Object.create(Game.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.monsterMoveLeft = function(monster){
    if (monster.x - 15 > 400){
      monster.x -= 15;
      monster.areaEnemyStart += 15;
    }
};

Enemy.prototype.monsterMoveRight = function(monster){
      monster.x +=15;
      monster.areaEnemyStart -= 15;
};

Enemy.prototype.aiMonster = function(hero){
  // Move to the enemy or random
  var that = this;
  var a = function(){ that.monsterMoveRight(that); };
  var b = function(){ that.monsterMoveLeft(that); };
  var movements = [];
  if (hero.x - this.x > -100 && hero.x - this.x < 100){
    var c = function(){ that.monsterAttack(that,hero); };
    movements = [a,b,c];
  } else{
    movements = [a,b];
  }
  var random = (Math.floor(Math.random()*movements.length));
  movements[random]();
};

Enemy.prototype.monsterAttack = function(monster, hero){
    console.log("Atacando AL HEROE");// Move to the enemy or random
    if (hero.x - this.x > -100){
      if (hero.x - this.x > 400){
        monster.x -=30;
        monster.areaEnemyStart -= 30;
      }
    } else{
      monster.x +=30;
      monster.areaEnemyStart += 30;
    }
    console.log('monster.x'+monster.x);
};
var cont = 0;
Enemy.prototype.enemyEasyDie = function(){ // jumper
  if (this.life <= 0 && this.status != enemyEasyStompedLeft){
    this.status = enemyEasyStompedLeft;
  }
  else if (this.life > 0 && this.status != enemyEasyIdleLeft){
    this.status = enemyEasyIdleLeft;
  } else if (this.life <= 0){
      if ((cont / 24) == 2){
        this.life = 10;
        cont = 0;
      }
      cont++;
  }
};

Enemy.prototype.monsterDieOrDraw = function(stage){
  if (this.isMonsterDied(this)){
    console.log("MURIO!");
    this.createRIP(stage);
    return 1;
  } else {
    stage.drawResized(this);
    return 0;
  }
};

Enemy.prototype.isMonsterDied = function(monster){
  if (monster.life <= 0){
    return 1;
  }
  else{
    return 0;
  }
};
Enemy.prototype.createRIP = function(stage){

  allRip.push(new Stage (stage.createImage('images/rip.png',33,32),this.x+this.width-33,this.y+this.height-32));

};
