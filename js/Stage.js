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

Stage.prototype.gravity = function(hero){
    // DETECT COLLISION ALGORITHM
    if(this.x > -315 && this.x < -161 && hero.y >= 420){
      return true;
    };
  };
var soundMade = 0;
Stage.prototype.interaction = function(ctx,img,upPressed,hero){
  // Letter near cave
  if (this.x>=-910 && this.x <=-858){
    if (!upPressed){
    ctx.drawImage(img, 445, 370);
  } else {
    // Claudia letter info chatbox
    ctx.drawImage(img, 250, 200);
      // if (hero.fairy == false){
        // Insert fairy
        // hero.fairy = true;
      // }
    }
  }
};
  Stage.prototype.diedWithLives = function(hero){
    this.x = 0;
    this.y = 0;
    hero.x = 20;
    hero.y = 420;
    hero.life = 100;
  };
