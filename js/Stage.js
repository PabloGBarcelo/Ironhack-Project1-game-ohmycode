Stage.prototype = Object.create(Game.prototype);
Stage.prototype.constructor = Stage;
function Stage(img,x,y,width,height,ctx){
  Game.call(this,img,x,y,height,width);
  this.ctx = ctx;
}

Stage.prototype.createImage = function(path,width,height){
  var newObject = new Image();
  newObject.src = path;
  newObject.width = width;
  newObject.height = height;
  return newObject;
};
// ACTUAL FUNCTIONS

Stage.prototype.draw = function (object){
  this.ctx.drawImage(object.img,object.x,object.y);
};

Stage.prototype.drawResized = function (object){
  this.ctx.drawImage(object.img,object.x,object.y,object.width,object.height);
};

Stage.prototype.checkAndMoveEnemyInScreen = function (enemy,hero){
  // DETECT COLLISION ALGORITHM POSITION RELATIVE
  // this.x + stage.x (negative) + this.width (positive)
  // console.log("this.areaEnemyStart"+enemy.areaEnemyStart+" stage.x "+this.x);
  enemy.x = enemy.areaEnemyStart + this.x;
  //   if(enemy.x < hero.x + this.x + hero.width - 18 + this.x &&
  //     enemy.x + enemy.width + this.x > hero.x + this.x &&
  //     enemy.y < hero.y + hero.height &&
  //     enemy.height + enemy.y > hero.y){
  //       // if(hero.isAttacking = false){
  //       //   hero.life -= 1;
  //       //   if (hero.direction = 'Left'){
  //       //       hero.x -= 10;
  //       //   } else if (hero.direction = 'Right'){
  //       //       hero.x += 10;
  //       //   }
  //       // } else {
  //       //   enemy.life -= 1;
  //       //   hero.isAttacking = false;
  //       //   console.log("Enemy life: "+enemy.life);
  //       // }
  //       hero.y = enemy.y+hero.height;
  //       return 1;
  //     };
  return 1 ;
  };
  // Little Fix -12 right, 18 left of PNG white
    // if (hero.y + hero.height >= enemy.y &&
    //     hero.x + hero.width - 12 >= enemy.x + this.x &&
    //     hero.x + this.x + 18 <= enemy.x + this.x + enemy.width){
    //       console.log ('por arriba');
    //     }

     // stage.x always be negative

// };

Stage.prototype.animation = function(character){
    if (x >= character.status.length) x = 0;
    character.img.src = character.status[x];
    x++;
};
Stage.prototype.gravity = function(hero,enemy){
    // DETECT GRAVITY IN BRIDGE
    if(this.x > -315 && this.x < -161 && hero.y >= 420){
      return true;
    };
  };
var soundMade = 0;
Stage.prototype.interaction = function(ctx,img,upPressed,hero,hud){
  // Letter near cave
  if (this.x>=-910 && this.x <=-858){
    if (!upPressed){
    ctx.drawImage(img, 445, 370);
  } else {
    // Claudia letter info chatbox
    ctx.drawImage(img, 250, 200);
      if (hero.fairy == false){
        hero.fairy = true;
        hud.img.src = 'images/hud2.png';
      }
    }
  }
};
  Stage.prototype.diedWithLives = function(hero){
    this.x = 0;
    this.y = 0;
    hero.x = 20;
    hero.y = 420;
    hero.life = 100;
    hero.tired = 10;
    hero.direction = 'Right';
    this.status = knightIdleRight;

  };
