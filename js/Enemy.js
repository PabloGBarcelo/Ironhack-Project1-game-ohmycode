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

Enemy.prototype = Object.create(Game.prototype);
Enemy.prototype.constructor = Enemy;

function Enemy(img,x,y,width,height,strength,life, xRelative){
  Game.call(this,img,x,y,height,width);
  this.xRelative = xRelative;
  this.stregth = strength; //
  this.life = life;
  this.areaEnemyStart = x; // Wherer start the enemy
  this.xMin = x-15; // Between this 2.
  this.xMax = x+15; // Max place to the right
  this.status = enemyEasyIdleLeft;
  this.type = 'enemy';
}

Enemy.prototype.attack = function(){
  // Move to the right
};

Enemy.prototype.retroAttack = function(){
  // Move to the right
  this.x -= 5;
};

Enemy.prototype.moveLeft = function(){
 // Move to the left
};

Enemy.prototype.moveRight = function(){
 // Move to the right
};

Enemy.prototype.aiMove = function(){
  // Move to the enemy or random
};

Enemy.prototype.aiAttack = function(){

  // Move to the enemy or random

};
var cont = 0;
Enemy.prototype.enemyEasyDie = function(){
  if (this.life <= 0 && this.status != enemyEasyStompedLeft){
    console.log("ESTOY ALLI");
    this.status = enemyEasyStompedLeft;
  }
  else if (this.life > 0 && this.status != enemyEasyIdleLeft){
    console.log("ESTOY AQUI");
    this.status = enemyEasyIdleLeft;
  } else if (this.life <= 0){
      if ((cont / 24) == 2){
        this.life = 10;
        console.log('CARGANDO VIDA!');
        cont = 0;
      }
      cont++;
  }
  console.log(this.life);
  console.log(cont);
};

Enemy.prototype.createChibiMonsters = function(){
  var chibiMonsters = [];
  var monsterCoordinates;
  for (var x = 0 ; x < monsterCoordinates.length ; x++){

  };
  chibiMonsters.push();
};
