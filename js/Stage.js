Stage.prototype = Object.create(Game.prototype);
Stage.prototype.constructor = Stage;
function Stage(img,x,y,width,height){
  Game.call(this,img,x,y,height,width);
}

Stage.prototype.drawStage = function(ctx,img,x,y){
  ctx.drawImage(img,x,y);
};

Stage.prototype.drawImageResized = function(ctx, img, x, y, widthResized, heightResized){
  ctx.drawImage(img, x, y, widthResized, heightResized);
};

Stage.prototype.createImage = function(path,width,height){
  var newObject = new Image();
  newObject.src = path;
  newObject.width = width;
  newObject.height = height;
  return newObject;
};
