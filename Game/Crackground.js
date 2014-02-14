var Crackground = function(mapSize){
	var positionX = 0,
	positionY = 0,
	i, j,
	spriteSize = 100,
	totalSize = mapSize*spriteSize;
	
	var map = new PIXI.DisplayObjectContainer();
	map.scale.x = map.scale.y = scale;
	
	//Loading Textures
	var grass = new Array(6);
	for (i=0; i<6; i++){
		grass[i] = new PIXI.Texture.fromImage("Textures/Grass_"+ (i+1) +".png")
	}
	
	var interactionLayer = new PIXI.DisplayObject();
	interactionLayer.interactive = true;
	interactionLayer.hitArea = new PIXI.Rectangle(0, 0, totalSize, totalSize);
	interactionLayer.mousedown = interactionLayer.touchstart = function(mouseData)
	{
		var parentCoordsPosition = mouseData.getLocalPosition(interactionLayer.parent);	
		var xPosition = parentCoordsPosition.x;
		var yPosition = parentCoordsPosition.y;
		grounds[increaser] = new Ground(xPosition, yPosition);
		map.addChild(grounds[increaser].ground);
		map.addChild(grounds[increaser].ground);
		increaser++;
		var tmp = increaser_circle;
		circles[tmp] = new Alchemy(player.relativePositionX(), player.relativePositionY());
		map.addChild(circles[tmp].ground);
		increaser_circle++;
		setTimeout(function(){map.removeChild(circles[tmp].ground);},1000);
	}
	
	var matrix = new Array(mapSize);
	for(i=0; i < mapSize; i++) {
		matrix[i] = new Array(mapSize);
		for(j = 0; j < mapSize; j++){
			matrix[i][j]= new PIXI.Sprite(grass[Math.floor((Math.random()*6)+1)-1]);//new PIXI.Texture.fromImage("Textures/Grass_"+ Math.floor((Math.random()*6)+1) +".png"));
			matrix[i][j].position.x = positionX;
			matrix[i][j].position.y = positionY;
			positionY += spriteSize;
			map.addChild(matrix[i][j]);
		}
		
		positionX += spriteSize;
		positionY = 0;
	}
	map.addChild(interactionLayer);
	map.addChild(player.player);
	
	
	var changePositionX = function(value){
		if (value > 0 && map.position.x < 0 && player.isOnCenterX()){
			player.updateAction("left");
			map.position.x += value*scale ;
			player.player.position.x -= value;
		}
		else if (value < 0 && map.position.x+totalSize*scale > screenX+1 && player.isOnCenterX()){
			player.updateAction("right");
			map.position.x += value*scale;
			player.player.position.x -= value;
		}
		else player.walkX(value, totalSize);
	}
	var changePositionY = function(value){
		if (value > 0 && map.position.y < 0 && player.isOnCenterY()){
			player.updateAction("up");
			map.position.y += value*scale;
			player.player.position.y -= value;
		}
		else if (value < 0 && map.position.y+totalSize*scale > screenY+2 && player.isOnCenterY()){
			player.updateAction("down");
			map.position.y += value*scale;
			player.player.position.y -= value;
		}
		else player.walkY(value, totalSize);
	}
	
	

	var updateGround = function(){	
		for(var k = 0; k < increaser; k++){grounds[k].updateFrame();}
		for(var k = 0; k < increaser_circle; k++){circles[k].updateFrame();}
	};
	
	var collision = function()
	{
	
		var pickups = grounds;
		var steve = player.player; 
		
		for (var i = 0; i < pickups.length; i++) 
		{
			var pickup = pickups[i].ground;

			var xdist = pickup.position.x - steve.position.x;

			if(xdist > -pickup.width/2 && xdist < pickup.width/2)
			{
				var ydist = pickup.position.y - steve.position.y;
			
				if(ydist > -pickup.height/2 && ydist < pickup.height/2)
				{
					//player.stopDirectionWalk();   
				}
			}
		}
	}
	return {map : map, changePositionY:changePositionY, changePositionX:changePositionX, updateGround:updateGround, collision:collision};
};
