var StaticFrame = function(image){
	var frame = new PIXI.Texture.fromImage(image);
	var getFrame = function(){
		return frame;
	};
	return {getFrame : getFrame};
};