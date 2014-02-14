var Player = function(){
	var positionX = (screenX / scale) / 2,
	positionY = (screenY / scale) / 2,
	frameBack = new StaticFrame("Textures/Pinky_B.png"),
	frameFront = new AnimeFrame("F"),
	frameLeft = new AnimeFrame("L"),
	frameRight = new AnimeFrame("R"),
	frameFrontWalk = new AnimeWalk("F"),
	frameBackWalk = new AnimeWalk("B"),
	frameLeftWalk = new AnimeWalk("L"),
	frameRightWalk = new AnimeWalk("R"),
	currentFrame = frameFront, 
	xCenter=0, 
	yCenter=0;

	// create a texture from an image path
	var player = new PIXI.Sprite(currentFrame.getFrame());
    // center the sprites anchor point
    player.anchor.x = 0.5;
    player.anchor.y = 0.5;
    // move the sprite t the center of the screen
    player.position.x = positionX;
    player.position.y = positionY;
	
	var updateAction = function(c){
		switch(c){
			case "left": currentFrame = frameLeftWalk; break;
			case "right": currentFrame = frameRightWalk;   break;
			case "down": currentFrame = frameFrontWalk; break;
			case "up": currentFrame = frameBackWalk; break;
		}
	};
	var stop = function(){
		switch(currentFrame){
			case frameLeftWalk: currentFrame = frameLeft; break;
			case frameRightWalk: currentFrame = frameRight;   break;
			case frameFrontWalk: currentFrame = frameFront; break;
			case frameBackWalk: currentFrame = frameBack; break;
		}
	};
	
	var relativePositionX = function(){
		var position; 
		switch(currentFrame){
			case frameLeft: position = player.position.x - 28; break;
			case frameRight: position = player.position.x +28;   break;
			case frameFront: position = player.position.x; break;
			case frameBack: position = player.position.x; break;
		}
		return position;
	};
	var relativePositionY = function(){
		var position; 
		switch(currentFrame){
			case frameLeft: position = player.position.y; break;
			case frameRight: position = player.position.y;   break;
			case frameFront: position = player.position.y + 28; break;
			case frameBack: position = player.position.y - 28; break;
		}
		return position;
	};
	var updateFrame = function(){
		player.setTexture(currentFrame.getFrame());
	};
	var walkX = function(value, limit){
		if(value < 0 && player.position.x < limit - player.width/2){
			updateAction("right");
			player.position.x -= value;
			xCenter -=value;
			left = true;
		}
		else if (value > 0 && player.position.x > player.width/2){
			updateAction("left");
			player.position.x -= value;
			xCenter -=value;
			right = true;
		}
		else stop();
	}
	var walkY = function(value, limit){ 
		if(value < 0 && player.position.y < limit - player.height/2){
			updateAction("down");
			player.position.y -= value;
			yCenter -=value;
			back = true;
		}
		else if (value > 0 && player.position.y > player.height/2){
			updateAction("up");
			player.position.y -= value;
			yCenter -=value;
			front = true;
		}
		else stop();
	}
	
	var isOnCenterX = function(){
		if(xCenter==0) return true;
		else return false;
	}
	var isOnCenterY = function(){
		if(yCenter==0) return true;
		else return false;
	}
	return {
		player: player,
		updateFrame: updateFrame,
		walkX:walkX, walkY:walkY,
		updateAction : updateAction,
		stop : stop,
		isOnCenterX:isOnCenterX,
		isOnCenterY:isOnCenterY,
		relativePositionY:relativePositionY,
		relativePositionX:relativePositionX
	};
};