var fairyLeft = ['images/fairyLeft/frame0.png',
                 'images/fairyLeft/frame1.png',
                 'images/fairyLeft/frame2.png',
                 'images/fairyLeft/frame3.png',
                 'images/fairyLeft/frame4.png',
                 'images/fairyLeft/frame5.png'];
var fairyRight = ['images/fairyRight/frame0.png',
                'images/fairyRight/frame1.png',
                'images/fairyRight/frame2.png',
                'images/fairyRight/frame3.png',
                'images/fairyRight/frame4.png',
                'images/fairyRight/frame5.png'];

Fairy.prototype = Object.create(Game.prototype);
Fairy.prototype.constructor = Fairy;

function Fairy(img,x,y,width,height,speed,strength, life){
  Game.call(this,img,x,y,height,width);
  this.status = knightIdleRight;
}

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
