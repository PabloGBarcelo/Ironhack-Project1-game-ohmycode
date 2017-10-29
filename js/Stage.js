Stage.prototype = Object.create(Game.prototype);
Stage.prototype.constructor = Stage;
function Stage(img,x,y,width,height){
  Game.call(this,img,x,y,height,width);
}

Stage.prototype.drawStage = function(ctx,img,x){
  ctx.clearRect(0,0,800,600); // Clear full view
  ctx.drawImage(img,x,0);
}
