Stage.prototype = Object.create(Game.prototype);
Stage.prototype.constructor = Stage;
function Stage(img,x,y,width,height){
  Game.call(this,img,x,y,height,width);
}

Stage.prototype.drawStage = function(ctx,img){
  ctx.drawImage(img,this.x,0);
};
