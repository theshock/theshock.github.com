window.onload = function () {
var m = Math,
	floor = parseInt,
	pi = m.PI,
	ceil = m.ceil,
	abs = m.abs,
	cos = m.cos,
	sin = m.sin,
	tan = m.tan,
	round = m.round,
	pow = m.pow,
	degree = pi/180,
	d90  =  90*degree,
	d180 = 180*degree,
	d270 = 270*degree,
	d360 = 360*degree,
	id = function (id) { return document.getElementById(id); },
	cr = function (tag) { return document.createElement(tag); };

var map = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,3,0,3,0,0,1,1,1,2,1,1,1,1,1,2,1,1,1,2,1,0,0,0,0,0,0,0,0,1],
	[1,0,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,1,1,1,1],
	[1,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
	[1,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,3,3,3,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
	[1,0,0,0,0,0,0,0,0,3,3,3,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,3,3,3,0,0,3,3,3,0,0,0,0,0,0,0,0,0,3,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,3,3,3,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,4,0,0,4,2,0,2,2,2,2,2,2,2,2,0,2,4,4,0,0,4,0,0,0,0,0,0,0,1],
	[1,0,0,4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,4,0,0,0,0,0,0,0,1],
	[1,0,0,4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,4,0,0,0,0,0,0,0,1],
	[1,0,0,4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,4,0,0,0,0,0,0,0,1],
	[1,0,0,4,3,3,4,2,2,2,0,0,2,2,0,0,2,2,2,2,4,3,3,4,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
map.width  = map[0].length;
map.height = map.length;

var cfg = {
	mapScale    : 8,
	screenWidth : 480,
	screenHeight: 300,
	stripWidth  : 2,
	fov         : 60*degree,
	texWidth    : 64,
	texHeight   : 64,
	wallHeight  : 1
};
cfg.numRays = m.ceil(cfg.screenWidth / cfg.stripWidth);
cfg.fov     = 60*degree;
cfg.fovHalf = cfg.fov / 2;
cfg.viewDist = (cfg.screenWidth/2) / m.tan(cfg.fov / 2);

var player = {
	x  : 16,
	y  : 8.5, // http://libcanvas-test.lh/3d/
	rot: 0, // the current angle
	vShift: 0,
	shiftDir: 0,
	dir  : 0, // right   = 1 | left      = -1
	speed: 0, // forward = 1 | backwards = -1
	strafing: 0, // right = 1 | left = -1
	moveSpeed: 0.2,
	rotSpeed : 6*degree,
	shiftSpeed: 0.1,
	height: 0.4,
	jumping: 0,
	jumpFrames: [
		0.4, 0.5, 0.6, 0.7, 0.8, 0.85, 0.8, 0.7, 0.6, 0.5
	],
	crouching: 0,
	move: function () {
		var moveStep = this.speed * this.moveSpeed;	// player will move this far along the current direction vector
		var strfStep = this.moveSpeed * this.strafing;

		this.rot += this.dir * this.rotSpeed; // add rotation if player is rotating (player.dir != 0)

		this.vShift += this.shiftDir * this.shiftSpeed;
		if (this.vShift < -1) this.vShift = -1;
		if (this.vShift >  1) this.vShift =  1;

		if (this.jumping) {
			this.height = this.jumpFrames[this.jumping++];
			if (this.jumping == this.jumpFrames.length) this.jumping = 0;
		} else if (this.crouching) {
			this.height = 0.25;
		} else {
			this.height = 0.4;
		}

		// make sure the angle is between 0 and 360 degrees
		while (this.rot <     0) this.rot += d360;
		while (this.rot >= d360) this.rot -= d360;

		var newX = player.x + m.cos(this.rot) * moveStep;	// calculate new player position with simple trigonometry
		var newY = player.y + m.sin(this.rot) * moveStep;

		newX = newX + m.cos(this.rot + d90) * strfStep;	// calculate new player position with simple trigonometry
		newY = newY + m.sin(this.rot + d90) * strfStep;
		
		if (this.isBlocked(newX, newY)) return;

		this.x = newX; // set new position
		this.y = newY;
	},
	jump: function () {
		if (!this.jumping) this.jumping++;
	},
	isBlocked: function (x, y) {
		return y < 0 || y >= map.height || x < 0 || x >= map.width || map[floor(y)][floor(x)];
	}
};

var elems = {
	map: id('minimap'),
	pl : id('minimapobjects'),
	eye: id('eye')
};
for (var i in elems) elems[i].ctx = elems[i].getContext('2d');
elems.tex   = id('walls');

// pixelate grass
var imageToPixels = function (canvas) {
	canvas = canvas.toCanvas();
	var ctx = canvas.getContext('2d-libcanvas');
	var data = ctx.getImageData().data;
	var pixels = [];
	var colorsList = {};  
	for (var x = 0; x < canvas.width; x++) for (var y = 0; y < canvas.height; y++) {
		if (! (y in pixels) ) pixels[y] = new Array(canvas.width);
		var shift  = (x + y*canvas.width)*4;
		var colors = [data[shift], data[shift+1], data[shift+2]];
		var color  = pixels[y][x] = 'rgb(' + colors.join(',') + ')';
		color in colorsList ? colorsList[color]++ : (colorsList[color] = 1);   
	}
	pixels.max = Object.max(colorsList);
	return pixels;
};
var floorPixels = imageToPixels(id('floorCeil').sprite(0, 0,128,64));
var  ceilPixels = imageToPixels(id('floorCeil').sprite(0,64,128,64));

elems.eye.width  = cfg.screenWidth;
elems.eye.height = cfg.screenHeight;

var castRays = function () {
	var vShift = m.round(player.vShift * cfg.screenHeight);

	var ctx = elems.eye.ctx;
	ctx.clearRect(0,0,elems.eye.width, elems.eye.height);
	var numRays = cfg.numRays, stripWidth = cfg.stripWidth, viewDist = cfg.viewDist,
		texWidth = cfg.texWidth, texHeight = cfg.texHeight;

	// reeed!
	ctx.fillStyle = 'rgb(99,0,0)';
	ctx.fillRect(0, 0, 720, 450);

	ctx.fillStyle = floorPixels.max;
	ctx.fillRect(0, cfg.screenHeight * .5 + vShift, 720, cfg.screenHeight * .5 - vShift );

	ctx.fillStyle = ceilPixels.max;
	ctx.fillRect(0, 0, 720, cfg.screenHeight * 0.5 + vShift);
	
	for (var i = numRays; i--;) {
		var rayScreenPos = (-numRays/2 + i) * stripWidth;
		var rayViewDist  = m.sqrt(rayScreenPos*rayScreenPos + viewDist*viewDist);
		var rayAngle     = player.rot + m.asin(rayScreenPos / rayViewDist);
		{ // casting ray
			// between 0 and 360;
			rayAngle %= d360;
			if (rayAngle < 0) rayAngle += d360;

			// moving direction;
			var right = rayAngle > d270 || rayAngle < d90;
			var up    = rayAngle > d180 || rayAngle < 0;

			var angleSin = m.sin(rayAngle);
			var angleCos = m.cos(rayAngle);

			var dist = 0; // the distance to the block we hit
			var xHit = 0; // the x and y coord of where the ray hit the block
			var yHit = 0;
			
			var textureX, textureY;	// the x-coord on the texture of the block, ie. what part of the texture are we going to render
			var wallX, wallY;	// the (x,y) map coords of the block

			var slope, dX, dY, x ,y, distX, distY;

			var wallType, wallIsHorizontal = false;

			// first check against the vertical map/wall lines
			// we do this by moving to the right or left edge of the block we're standing in
			// and then moving in 1 map unit steps horizontally. The amount we have to move vertically
			// is determined by the slope of the ray, which is simply defined as sin(angle) / cos(angle).

			slope = angleSin / angleCos; 	// the slope of the straight line made by the ray
			dX = right ? 1 : -1; 	// we move either 1 map unit to the left or right
			dY = dX * slope; 		// how much to move up or down

			x = right ? m.ceil(player.x) : floor(player.x);	// starting horizontal position, at one of the edges of the current map block
			y = player.y + (x - player.x) * slope;			// starting vertical position. We add the small horizontal step we just made, multiplied by the slope.

			while (x >= 0 && x < map.width && y >= 0 && y < map.height) {
				wallX = floor(x + (right ? 0 : -1));
				wallY = floor(y);

				// is this point inside a wall block?
				if (map[wallY][wallX]) {

					distX = x - player.x;
					distY = y - player.y;
					dist = distX*distX + distY*distY;	// the distance from the player to this point, squared.

					textureX = y % 1;	// where exactly are we on the wall? textureX is the x coordinate on the texture that we'll use when texturing the wall.
					if (!right) textureX = 1 - textureX; // if we're looking to the left side of the map, the texture should be reversed

					xHit = x;	// save the coordinates of the hit. We only really use these to draw the rays on minimap.
					yHit = y;

					wallType = map[wallY][wallX];

					break;
				}
				x += dX;
				y += dY;
			}



			// now check against horizontal lines. It's basically the same, just "turned around".
			// the only difference here is that once we hit a map block,
			// we check if there we also found one in the earlier, vertical run. We'll know that if dist != 0.
			// If so, we only register this hit if this distance is smaller.

			slope = angleCos / angleSin;
			dY = up ? -1 : 1;
			dX = dY * slope;
			y = up ? floor(player.y) : m.ceil(player.y);
			x = player.x + (y - player.y) * slope;

			while (x >= 0 && x < map.width && y >= 0 && y < map.height) {
				wallY = floor(y + (up ? -1 : 0));
				wallX = floor(x);
				if (map[wallY][wallX]) {
					distX = x - player.x;
					distY = y - player.y;
					var blockDist = distX*distX + distY*distY;
					if (!dist || blockDist < dist) {
						dist = blockDist;
						xHit = x;
						yHit = y;
						textureX = x % 1;
						if (up) textureX = 1 - textureX;
						wallType = map[wallY][wallX];
						wallIsHorizontal = true;
					}
					break;
				}
				x += dX;
				y += dY;
			}


			if (dist) {
				drawRay(xHit, yHit);

				var playerHeight = player.height, style;
				
				var fixCos = m.cos(player.rot - rayAngle);

				dist = m.sqrt(dist) * fixCos;

				var screenHHalf = cfg.screenHeight / 2;
				var height = m.round (cfg.wallHeight * viewDist / dist);

				var top    = m.round(screenHHalf - height * ( 1 - playerHeight )) + vShift;
				var bottom = top + height;

				textureX = m.round(textureX * texWidth);
				if (textureX == texWidth) textureX--;
				var imgArgs = [elems.tex,
					textureX + (texWidth * (wallIsHorizontal ? 1 : 0)), texHeight * (wallType-1), 1, texHeight,
					i * stripWidth, top, stripWidth, height];


				var rayScreenY, ceilDist, projDegreeTan, projDegreeCoTan, floorDist;
				for (var ceilRay = 0; ceilRay < top; ceilRay += stripWidth) {
					// отдалённость от центра
					rayScreenY    = screenHHalf - ceilRay + vShift;
					// котангенс угла, по отношению к потолку
					projDegreeCoTan = viewDist / rayScreenY;
					// расстояние по потолку , но не напрямик
					ceilDist = (cfg.wallHeight - player.height) * projDegreeCoTan / fixCos;


					var ceilX = player.x + angleCos * ceilDist;
					var ceilY = player.y + angleSin * ceilDist;
					var fCeilX = floor(ceilX);
					var fCeilY = floor(ceilY);
					textureX = m.round((ceilX - fCeilX) * texWidth);
					textureY = m.round((ceilY - fCeilY) * texHeight);
					if (textureX < 0) textureX = texWidth - textureX;
					if (textureY < 0) textureY = texHeight - textureY;
					if (textureX + stripWidth > texWidth ) textureX = texWidth  - stripWidth;
					if (textureY + stripWidth > texHeight) textureY = texHeight - stripWidth;
					if (fCeilX % 3 && floor(ceilY) % 3) textureX += 64;

					x = i * stripWidth;
					y = ceilRay;
					style = ceilPixels[textureY][textureX];
					if (style != ceilPixels.max) {
						ctx.fillStyle = style;
						ctx.fillRect(x, y, stripWidth, stripWidth);
					}
				}

				for (var floorRay = bottom; floorRay < cfg.screenHeight; floorRay += stripWidth) {
					if (floorRay + stripWidth < 0) continue;
					// отдалённость от центра
					rayScreenY    = floorRay - screenHHalf - vShift;
					// котангенс угла, по отношению к полу
					projDegreeTan = rayScreenY / viewDist;
					// расстояние по полу , но не напрямик
					floorDist = player.height / projDegreeTan / fixCos;

					var floorX = player.x + angleCos * floorDist;
					var floorY = player.y + angleSin * floorDist;
					textureX = m.round((floorX - floor(floorX)) * texWidth);
					textureY = m.round((floorY - floor(floorY)) * texHeight);
					if (textureX + stripWidth > texWidth ) textureX = texWidth  - stripWidth;
					if (textureY + stripWidth > texHeight) textureY = texHeight - stripWidth;
					if (floor(floorX) % 3 && floor(floorY) % 3) textureX += 64;
					if (textureX < 0) textureX = 0;
					if (textureY < 0) textureY = 0;

					x = i * stripWidth;
					y = floorRay;
					style = floorPixels[textureY][textureX];
					if (style != floorPixels.max) {
						ctx.fillStyle = style;
						ctx.fillRect(x, y, stripWidth, stripWidth);
					}
				}

				/**/
				ctx.drawImage.apply(ctx, imgArgs);
			}

		} // casting ray
	}
};

var bindKeys = function (){
	var keys = {
		space: 32,
		ctrl: 17,
		w: 87,
		s: 83,
		a: 65,
		d: 68,
		up: 38,
		down: 40,
		left: 37,
		right: 39
	};
	document.onkeydown = function(e) {
		switch (e.keyCode) { // which key was pressed?
			case keys.w:
				player.speed = 1;
				break;
			case keys.s:
				player.speed = -1;
				break;
			case keys.d:
				player.strafing = 1;
				break;
			case keys.a:
				player.strafing = -1;
				break;
			case keys.left:
				player.dir = -1;
				break;
			case keys.right:
				player.dir = 1;
				break;
			case keys.up:
				player.shiftDir = 1;
				break;
			case keys.down:
				player.shiftDir = -1;
				break;
			case keys.space:
				player.jump();
				break;
			case keys.ctrl:
				player.crouching = 1;
				break;
		}
	};
	document.onkeyup = function(e) {
		switch (e.keyCode) {
			case keys.w:
			case keys.s:
				player.speed = 0;	// stop the player movement when up/down key is released
				break;
			case keys.a:
			case keys.d:
				player.strafing = 0;
				break;
			case keys.left:
			case keys.right:
				player.dir = 0;
				break;
			case keys.up:
			case keys.down:
				player.shiftDir = 0;
				break;
			case keys.ctrl:
				player.crouching = 0;
				break;
		}
	};
};
	
var drawMap = function () {
	var colors = ['#ccc', '#36f', '#000', '#999', '#963'];
	var scale  = cfg.mapScale;
	var ctx    = elems.map.ctx;
	elems.pl.width  = elems.map.width  = map.width  * scale;
	elems.pl.height = elems.map.height = map.height * scale;
	ctx.save();
	for (var x = map.width; x--;) for (var y = map.height; y--;) {
		ctx.fillStyle = colors[map[y][x]];
		ctx.fillRect(x*scale, y*scale, scale, scale);
	}
	ctx.restore();
};

var drawPlayer = function () {
	var ctx = elems.pl.ctx;
	ctx.clearRect(0,0,elems.pl.width, elems.pl.height);
	ctx.save();

	var scale = cfg.mapScale,
		curX = player.x * scale,
		curY = player.y * scale,
		farX = curX + m.cos(player.rot) * cfg.mapScale * 2,	// calculate new player position with simple trigonometry
		farY = curY + m.sin(player.rot) * cfg.mapScale * 2;

	ctx.fillStyle = ctx.strokeStyle = '#900';
	ctx.fillRect(curX - 2, curY - 2, 4, 4);
	ctx.beginPath();
	ctx.moveTo(curX, curY);
	ctx.lineTo(farX, farY);
	ctx.stroke();

	ctx.restore();
};

var drawRay = function (x, y) {
	var scale = cfg.mapScale;
	var ctx = elems.pl.ctx;
	ctx.save();
	ctx.strokeStyle = '#090';
	ctx.beginPath();
	ctx.moveTo(player.x * scale, player.y * scale);
	ctx.lineTo(x * scale, y * scale);
	ctx.stroke();
	ctx.restore();
};

bindKeys();
drawMap();

//setTimeout(function () {
setInterval(function () {
	var prev = {
		x: player.x,
		y: player.y,
		rot: player.rot,
		vs: player.vShift,
		st: player.strafing
	};
	player.move();
	if ( prev.x == player.x
	  && prev.y == player.y
	  && prev.rot == player.rot
	  && player.vs == player.vShift
	  && player.st == player.strafing
	) return;
	drawPlayer();
	castRays();
}, 40);

};
