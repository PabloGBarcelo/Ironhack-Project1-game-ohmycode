function Magic(img,x,y,width,height,type,status){
  Game.call(this,img,x,y,height,width,status);
  this.type = 'fire';
  this.status = './images/magicfire.png';
  this.speed = 15; //speed of balls
  this.strength = 400;
}
Magic.prototype = Object.create(Game.prototype);
Magic.prototype.constructor = Magic;
