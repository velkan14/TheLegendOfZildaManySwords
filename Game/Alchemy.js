var Circle = function(){
	var frames = new Array();
	for (var i = 0; i < 3; i++){
		frames[i] = new PIXI.Texture.fromImage("Textures/Magic/circle_"+(i+1)+".png");
	}
	
	var animation = 0, interval = 0, frame = frames[0];
	var inter = setInterval(function(){
		interval++;
		switch(animation){
			case 0: if(interval == 1) { interval = 0; animation++; frame = frames[1];} break;
			case 1: if(interval == 1) { interval = 0; animation++; frame = frames[0];} break;
			case 2: if(interval == 1) {interval = 0; animation++; frame = frames[2];}  break;
			case 3: if(interval == 1) {interval = 0; animation=0; frame = frames[0];} break;
		}; }
	, 100);
	
	var getFrame = function(){
		return frame;
	};
	return {getFrame : getFrame};
}; 

var Alchemy = function(positionX, positionY){
	var frame = new Circle();
	var ground = new PIXI.Sprite(frame.getFrame());
	ground.scale.x = ground.scale.y = 0.5;
	ground.anchor.x = ground.anchor.y = 0.5;
	ground.position.x = positionX;
	ground.position.y = positionY;
	ground.interactive = true;
	ground.mousedown = ground.touchstart= function(){}
	var updateFrame = function(){
		ground.setTexture(frame.getFrame());
	};
	return {ground: ground, updateFrame:updateFrame};
};