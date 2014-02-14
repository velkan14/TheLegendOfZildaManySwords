var AnimeWalk = function(direction){
	var frames = new Array();
	for (var i = 0; i < 11; i++){
		frames[i] = new PIXI.Texture.fromImage("Textures/Pinky_" + direction + "_Walk_"+(i+1)+".png");
	}
	var animation = 0, interval =0, frame = frames[0];
	setInterval(function(){
		interval++;
		switch(animation){
			case 0: if(interval == 1) { interval = 0; animation++; frame = frames[0];} break;
			case 1: if(interval == 1) { interval = 0; animation++; frame = frames[1];} break;
			case 2: if(interval == 1) {interval = 0; animation++; frame = frames[2];}  break;
			case 3: if(interval == 1) {interval = 0; animation++; frame = frames[3];} break;
			case 4: if(interval == 1) {interval = 0; animation++; frame = frames[4];} break;
			case 5: if(interval == 1) {interval = 0; animation++; frame = frames[5];} break;
			case 6: if(interval == 1) {interval = 0; animation++; frame = frames[6];} break;
			case 7: if(interval == 1) {interval = 0; animation++; frame = frames[7];} break;
			case 8: if(interval == 1) {interval = 0; animation++; frame = frames[8];} break;
			case 9: if(interval == 1) {interval = 0; animation++; frame = frames[9];} break;
			case 10: if(interval == 1) {interval = 0; animation= 0; frame = frames[10];} break;
		}; }
	, 70);
	var getFrame = function(){
		return frame;
	};
	return {getFrame : getFrame};
}; 