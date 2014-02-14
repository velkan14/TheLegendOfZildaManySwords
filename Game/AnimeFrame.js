var AnimeFrame = function(direction){
	var frames = [new PIXI.Texture.fromImage("Textures/Pinky_"+ direction +".png"),new PIXI.Texture.fromImage("Textures/Pinky_"+direction+"_CloseEye.png"),new PIXI.Texture.fromImage("Textures/Pinky_"+direction+"_SemiCloseEye.png")];
	var animation = 1, interval =0, frame = frames[0];
	setInterval(function(){
		interval++;
		switch(animation){
			case 1: if(interval == 30) { interval = 0; animation++; frame = frames[2];} break;
			case 2: if(interval == 1) {interval = 0; animation++; frame = frames[1];}  break;
			case 3: if(interval == 1) {interval = 0; animation++; frame = frames[2];} break;
			case 4: if(interval == 1) {interval = 0; animation = 1; frame = frames[0];} break;
		}; }
	, 50);
	var getFrame = function(){
		return frame;
	};
	return {getFrame : getFrame};
};