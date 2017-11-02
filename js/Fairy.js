function Fairy(img,x,y,width,height,speed,strength, life){
  Game.call(this,img,x,y,height,width);
  this.status = knightIdleRight;
}

Fairy.prototype = Object.create(Game.prototype);
Fairy.prototype.constructor = Fairy;

Fairy.prototype.setFairyPosition = function(hero){
  if (hero.direction.toUpperCase() == 'LEFT'){
    this.status = fairyLeft;
    this.x = hero.x +35;
    this.y = hero.y -35;
  } else if (hero.direction.toUpperCase() == 'RIGHT'){
    this.status = fairyRight;
    this.x = hero.x -35;
    this.y = hero.y -35;
  }
};
