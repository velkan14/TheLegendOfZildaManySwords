var keys, 
	screenX = 1300,
	screenY = 600,
	scale = 2,
	keyUp = false,
	speedwalk = 2,
	grounds = new Array(),
	increaser = 0,
	circles = new Array(),
	increaser_circle = 0,
	player;


function init(){
	PIXI.BaseTexture.SCALE_MODE.DEFAULT = PIXI.BaseTexture.SCALE_MODE.NEAREST;
	// create an new instance of a pixi stage
	var stage = new PIXI.Stage(0xFFFFFF);
	// create a renderer instance.
	var renderer = PIXI.autoDetectRenderer(screenX, screenY);
   	// add the renderer view element to the DOM
	document.body.appendChild(renderer.view);
	requestAnimFrame( animate );
	
	player = new Player();
	var background = new Crackground(10);
	stage.addChild(background.map);
	
	keys = new Keys();
	setEventHandlers();

function animate() {
		checkKeys(background);
		background.collision(player);
		background.updateGround();
		player.updateFrame();
	    requestAnimFrame( animate );
		
	    // render the stage   
	    renderer.render(stage);
}
};
		
	/**************************************************
	** GAME EVENT HANDLERS
	**************************************************/
	var setEventHandlers = function() {
		// Keyboard
		window.addEventListener("keydown", onKeydown, false);
		window.addEventListener("keyup", onKeyup, false);
		};

	// Keyboard key down
	function onKeydown(e) {
		keys.onKeyDown(e);
	};
	// Keyboard key up
	function onKeyup(e) {
		keys.onKeyUp(e);
		keyUp = true;
	};
	
	
	function checkKeys(map){
		if(keys.left){
			map.changePositionX(speedwalk);
		}
		if(keys.right){
			map.changePositionX(-speedwalk);
		}
		if(keys.down){
			map.changePositionY(-speedwalk);
		}
		if(keys.up){
			map.changePositionY(speedwalk);
		}
		if(keys.up && keys.down){
			player.stop();
		}
		if(keys.left && keys.right){
			player.stop();
		}
		if(keyUp){
			player.stop();
			keyUp=false;
		}
	}
