var enemyEasyIdleLeft = ['images/monster_easy/IdleLeft/frame-1.png',
                         'images/monster_easy/IdleLeft/frame-2.png',
                         'images/monster_easy/IdleLeft/frame-3.png',
                         'images/monster_easy/IdleLeft/frame-4.png',
                         'images/monster_easy/IdleLeft/frame-5.png',
                         'images/monster_easy/IdleLeft/frame-6.png',
                         'images/monster_easy/IdleLeft/frame-7.png',
                         'images/monster_easy/IdleLeft/frame-8.png',
                         'images/monster_easy/IdleLeft/frame-9.png',
                         'images/monster_easy/IdleLeft/frame-10.png'];
var enemyEasyStompedLeft = ['images/monster_easy/stompedLeft/frame-1.png',
                         'images/monster_easy/stompedLeft/frame-2.png',
                         'images/monster_easy/stompedLeft/frame-3.png',
                         'images/monster_easy/stompedLeft/frame-4.png',
                         'images/monster_easy/stompedLeft/frame-5.png',
                         'images/monster_easy/stompedLeft/frame-6.png'];
var enemyEasyIdleRight = ['images/monster_easy/IdleRight/frame-1.png',
                         'images/monster_easy/IdleRight/frame-2.png',
                         'images/monster_easy/IdleRight/frame-3.png',
                         'images/monster_easy/IdleRight/frame-4.png',
                         'images/monster_easy/IdleRight/frame-5.png',
                         'images/monster_easy/IdleRight/frame-6.png',
                         'images/monster_easy/IdleRight/frame-7.png',
                         'images/monster_easy/IdleRight/frame-8.png',
                         'images/monster_easy/IdleRight/frame-9.png',
                         'images/monster_easy/IdleRight/frame-10.png'];
var enemyEasyStompedRight = ['images/monster_easy/stompedRight/frame-1.png',
                             'images/monster_easy/stompedRight/frame-2.png',
                             'images/monster_easy/stompedRight/frame-3.png',
                             'images/monster_easy/stompedRight/frame-4.png',
                             'images/monster_easy/stompedRight/frame-5.png',
                             'images/monster_easy/stompedRight/frame-6.png'];
var monsterGreenIdle = ['images/monsterGreen/frame-1.png',
                        'images/monsterGreen/frame-2.png',
                        'images/monsterGreen/frame-3.png',
                        'images/monsterGreen/frame-4.png',
                        'images/monsterGreen/frame-5.png'];
var monsterGreenHitted = ['images/monsterGreen/hit1.png',
                          'images/monsterGreen/hit2.png',
                          'images/monsterGreen/hit3.png',
                          'images/monsterGreen/hit4.png',
                          'images/monsterGreen/hit5.png'];
var monsterBlackIdle = ['images/monsterBlack/frame1.png',
                        'images/monsterBlack/frame2.png'];

Enemy.prototype = Object.create(Game.prototype);
Enemy.prototype.constructor = Enemy;

function Enemy(img,x,y,width,height,strength,life, xRelative,status){
  Game.call(this,img,x,y,height,width);
  this.xRelative = xRelative;
  this.stregth = strength; //
  this.life = life;
  this.areaEnemyStart = x; // Wherer start the enemy
  this.xMin = 50; // Between this 2.
  this.xMax = 50; // Max place to the right
  this.status = status;
  this.type = 'enemy';
  this.commands = [];
}

Enemy.prototype.monsterMoveLeft = function(monster){
  console.log('monstruo a la izquierda!!');
    if (monster.x - 15 > 400){
      monster.x -= 15;
      monster.areaEnemyStart += 15;
    }
};

Enemy.prototype.monsterMoveRight = function(monster){
  console.log('monstruo a la derecha!!');
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
Enemy.prototype.enemyEasyDie = function(){
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

Enemy.prototype.createMonsters = function(){
  var chibiMonsters = [];
  var monsterCoordinates;
  for (var x = 0 ; x < monsterCoordinates.length ; x++){

  };
  chibiMonsters.push();
};
