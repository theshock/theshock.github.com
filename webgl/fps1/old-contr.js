

var currentlyPressedKeys = {};

function handleKeyDown(event) {
	currentlyPressedKeys[event.keyCode] = true;
}


function handleKeyUp(event) {
	currentlyPressedKeys[event.keyCode] = false;
}


var pitch = -6.1;
var pitchRate = 0;

var yaw = -62.1;
var yawRate = 0;

var xPos = 6.5;
var yPos = 0.4;
var zPos = 7.2;

var speed = 0;

function handleKeys() {
	if (currentlyPressedKeys[33]) {
		// Page Up
		pitchRate = 0.1;
	} else if (currentlyPressedKeys[34]) {
		// Page Down
		pitchRate = -0.1;
	} else {
		pitchRate = 0;
	}

	if (currentlyPressedKeys[37] || currentlyPressedKeys[65]) {
		// Left cursor key or A
		yawRate = 0.1;
	} else if (currentlyPressedKeys[39] || currentlyPressedKeys[68]) {
		// Right cursor key or D
		yawRate = -0.1;
	} else {
		yawRate = 0;
	}

	if (currentlyPressedKeys[38] || currentlyPressedKeys[87]) {
		// Up cursor key or W
		speed = 0.003;
	} else if (currentlyPressedKeys[40] || currentlyPressedKeys[83]) {
		// Down cursor key
		speed = -0.003;
	} else {
		speed = 0;
	}

}


var lastTime = 0;
// Used to make us "jog" up and down as we move forward.
var joggingAngle = 0;

function animate() {
	var timeNow = new Date().getTime();
	if (lastTime != 0) {
		var elapsed = timeNow - lastTime;

		if (speed != 0) {
			xPos -= Math.sin(yaw.degree()) * speed * elapsed;
			zPos -= Math.cos(yaw.degree()) * speed * elapsed;

			joggingAngle += elapsed * 0.6; // 0.6 "fiddle factor" - makes it feel more realistic :-)
			yPos = Math.sin(joggingAngle.degree()) / 20 + 0.4
		}

		yaw += yawRate * elapsed;
		pitch += pitchRate * elapsed;

	}
	lastTime = timeNow;
}