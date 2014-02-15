var PlayerControl = function(){
	var currentFrame;
	
	var creat = function(){
		player = game.add.sprite(game.world.centerX, game.world.centerY, 'zilda');
		player.animations.add('blinkDown', ['Pinky_F_0000.png','Pinky_F_0000.png','Pinky_F_0000.png','Pinky_F_0000.png','Pinky_F_0000.png','Pinky_F_0000.png','Pinky_F_0000.png','Pinky_F_0000.png','Pinky_F_0000.png','Pinky_F_0000.png','Pinky_F_0000.png','Pinky_F_0000.png','Pinky_F_0000.png','Pinky_F_0000.png','Pinky_F_0000.png','Pinky_F_0000.png','Pinky_F_0000.png','Pinky_F_0000.png','Pinky_F_0002.png','Pinky_F_0001.png','Pinky_F_0002.png','Pinky_F_0000.png','Pinky_F_0000.png','Pinky_F_0000.png']/*Phaser.Animation.generateFrameNames('Pinky_F_', 0, 2, '.png', 4)*/, 15, true);
		player.animations.add('blinkUp', ['Pinky_B.png'], 15, true);
		player.animations.add('blinkLeft', ['Pinky_L_0000.png','Pinky_L_0000.png','Pinky_L_0000.png','Pinky_L_0000.png','Pinky_L_0000.png','Pinky_L_0000.png','Pinky_L_0000.png','Pinky_L_0000.png','Pinky_L_0000.png','Pinky_L_0000.png','Pinky_L_0000.png','Pinky_L_0000.png','Pinky_L_0000.png','Pinky_L_0000.png','Pinky_L_0000.png','Pinky_L_0000.png','Pinky_L_0000.png','Pinky_L_0000.png','Pinky_L_0002.png','Pinky_L_0001.png','Pinky_L_0002.png','Pinky_L_0000.png','Pinky_L_0000.png','Pinky_L_0000.png']/*Phaser.Animation.generateFrameNames('Pinky_L_', 0, 2, '.png', 4)*/, 15, true);
		player.animations.add('blinkRight', ['Pinky_R_0000.png','Pinky_R_0000.png','Pinky_R_0000.png','Pinky_R_0000.png','Pinky_R_0000.png','Pinky_R_0000.png','Pinky_R_0000.png','Pinky_R_0000.png','Pinky_R_0000.png','Pinky_R_0000.png','Pinky_R_0000.png','Pinky_R_0000.png','Pinky_R_0000.png','Pinky_R_0000.png','Pinky_R_0000.png','Pinky_R_0000.png','Pinky_R_0000.png','Pinky_R_0000.png','Pinky_R_0002.png','Pinky_R_0001.png','Pinky_R_0002.png','Pinky_R_0000.png','Pinky_R_0000.png','Pinky_R_0000.png']/*Phaser.Animation.generateFrameNames('Pinky_R_', 0, 2, '.png', 4)*/, 15, true);
		player.animations.add('walkUp', Phaser.Animation.generateFrameNames('Pinky_B_Walk_', 1, 11, '.png', 4), 15, true);
		player.animations.add('walkDown', Phaser.Animation.generateFrameNames('Pinky_F_Walk_', 1, 11, '.png', 4), 15, true);
		player.animations.add('walkLeft', Phaser.Animation.generateFrameNames('Pinky_L_Walk_', 1, 11, '.png', 4), 15, true);
		player.animations.add('walkRight', Phaser.Animation.generateFrameNames('Pinky_R_Walk_', 1, 11, '.png', 4), 15, true);			
	}
	
	var updateAction = function(c){
		currentFrame = c;
		switch(c){
			case "left": player.animations.play('walkLeft'); break;
			case "right": player.animations.play('walkRight'); break;
			case "down": player.animations.play('walkDown'); break;
			case "up": player.animations.play('walkUp'); break;
		}
	};
	
	var stop = function(){
		switch(currentFrame){
			case "left": player.animations.play('blinkLeft'); break;
			case "right": player.animations.play('blinkRight'); break;
			case "down": player.animations.play('blinkDown'); break;
			case "up": player.animations.play('blinkUp'); break;
		}
	};
	
	return {
		creat:creat,
		updateAction : updateAction,
		stop : stop
	};
};