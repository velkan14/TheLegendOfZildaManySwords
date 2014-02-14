var UpGround = function(){
	var frames = new Array();
	for (var i = 0; i < 11; i++){
		frames[i] = new PIXI.Texture.fromImage("Textures/Magic/Ground_"+(i+1)+".png");
	}
	var time=50;
	var animation = 0, interval = 0, frame = frames[0];
	var inter = setInterval(function(){
		interval++;
		switch(animation){
			case 0: if(interval == 1) { interval = 0; animation++; frame = frames[0];} break;
			case 1: if(interval == 1) { interval = 0; animation++; frame = frames[1];} break;
			case 2: if(interval == 1) {interval = 0; animation++; frame = frames[2];}  break;
			case 3: if(interval == 1) {interval = 0; animation++; frame = frames[3];} break;
			case 4: if(interval == 1) {interval = 0; animation++; frame = frames[4];} break;
			case 5: if(interval == 1) {interval = 0; animation++; frame = frames[5];} break;
			case 6: if(interval == 1) {interval = 0; animation++; frame = frames[6];} break;
			case 7: if(interval == 1) {interval = 0; animation++; frame = frames[7]; time=200;} break;
			case 8: if(interval == 1) {interval = 0; animation++; frame = frames[8];} break;
			case 9: if(interval == 1) {interval = 0; animation++; frame = frames[9];} break;
			case 10: if(interval == 1) {interval = 0; animation = 0; frame = frames[10]; clearInterval(inter);} break;
		}; }
	, time);
	
	var getFrame = function(){
		return frame;
	};
	return {getFrame : getFrame};
}; 

var Ground = function(positionX, positionY){
	var frame = new UpGround();
	var ground = new PIXI.Sprite(frame.getFrame());
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