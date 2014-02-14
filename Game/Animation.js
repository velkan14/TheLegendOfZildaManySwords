var Animation = function(positionX, positionY, frames, scale, anchor, interactive, func){
	var frame = frames;
	var animation = new PIXI.Sprite(frame.getFrame());
	animation.scale.x = animation.scale.y = scale;
	animation.anchor.x = animation.anchor.y = anchor;
	animation.position.x = positionX;
	animation.position.y = positionY;
	animation.interactive = interactive;
	animation.mousedown = animation.touchstart= function(){};
	
	var updateFrame = function(){
		animation.setTexture(frame.getFrame());
	};

	
	return {animation: animation, updateFrame:updateFrame};
};