Unit.prototype.rcRenderRays = function (rays) {
	var cfg = this.maze.cfg;
	var engine = cfg.engine == 'Html' ? 'Html' : 'Canvas';
	var type   = cfg.texture ? 'Texture' : 'Plain';
	var method = 'rc' + engine + 'Rays' + type;
	this[method](rays);
	return this;
};

Unit.prototype.rcHtmlRaysTexture = function (rays) {
	var cfg    = this.maze.cfg;
	var width  = cfg.width;
	var height = cfg.height;
	var strips = this.rcGetImageStrips(rays);
	var stripWidth = getStripWidth(this.maze, rays);
	var ifChanged = function (elem, name, value) {
		if (elem.style[name] != value) {
			elem.style[name] = value;
		}
	};
	for (var i = 0; i < rays.length; i++) {
		if (!strips[i]) {
			break;
		}
		var last = rays[i].last;
		var x = rays[i].dist;
		var L = rays[i].length;
		var stripHeight = height / L;
		var stripTop    = (height - stripHeight) / 2;
		var sw = stripHeight * stripWidth;
		var texX = (x*sw).round()-3;
		if (texX.abs() > stripHeight * stripWidth) {
			texX += stripHeight * stripWidth;
		}
		if (texX > 0) {
			texX -= (stripHeight-1) * stripWidth;
		}

		var texture = last.diff.isStart  ? 'startWall' :
		              last.diff.isFinish ? 'finishWall' :
		                              'mainWall';

		if (last.coord.x == 13 && last.coord.y == 13 && rays[i].wall == 'left') {
			texture = 'hellWall';
		}
		if (last.coord.x == 2 && last.coord.y == 2 && !$_GET['Lab'] && rays[i].wall == 'bottom') {
			texture = 'q1Wall';
		}

		var img = strips[i].img;

		ifChanged(img,    'top', stripTop.round() + 'px');
		ifChanged(img, 'height', stripHeight.round() + 'px');
		ifChanged(img,  'width', (stripHeight * stripWidth).round() + 'px');
		ifChanged(img,   'left', texX.round() + 'px');

		var imageSrc = this.rcGetTextureSrc(texture);
		if (img.src != imageSrc) {
			img.src  = imageSrc;
		}
		
		if (!$.browser.msie && cfg.light) {
			var opacity = L < 0.5 ? 200 : 200/(L+0.5);
			opacity += dirShift(this.dir, rays[i].wall) % 2 ? 0 : 30;
			opacity /= 200;
			ifChanged(img, 'opacity', opacity.round(2));
		}
	}
	return this;
}

Unit.prototype.rcGetTextureSrc = function (name) {
	if (!this.rcTexture) {
		this.rcTexture = {};
		var data = {
			'hellWall'   : 'img/wall-hell.png',
			'q1Wall'     : 'img/wall-q1.png',
			'mainWall'   : 'img/wall.png',
			'startWall'  : 'img/wall-green.png',
			'finishWall' : 'img/wall-red.png'
		};
		for (var i in data) {
			this.rcTexture[i] = new Image;
			this.rcTexture[i].src = data[i];
		}
	}
	return this.rcTexture[name].src;
}

Unit.prototype.rcGetScreen = function () {
	var cfg = this.maze.cfg;
	if (!this.rcScreen) {
		this.rcScreen = $('<div class="rayCast">')
			.prependTo('body')
			.css({
				'background' : 'black',
				'height'   : cfg.height,
				'width'    : cfg.width,
				'margin'   : 2,
				'overflow' : 'hidden',
				'position' : 'relative'
			});
	}
	return this.rcScreen;
}

Unit.prototype.rcGetImageStrips = function (rays) {
	if (!this.rcImageStrips) {
		this.rcImageStrips = [];

		var cfg    = this.maze.cfg;
		var width  = cfg.width;
		var stripWidth = getStripWidth(this.maze, rays);

		var screen = this.rcGetScreen();
		for (var i=0; i < width; i+=stripWidth) {
			var strip = document.createElement("div");
			strip.style.position = "absolute";
			strip.style.left     = i.round() + "px";
			strip.style.width    = stripWidth.ceil()+"px";
			strip.style.height   = cfg.height.round()+"px";
			strip.style.overflow = "hidden";
			//strip.style.background = "black";

			var img = new Image();
			img.src = this.rcGetTextureSrc('mainWall');
			img.style.position = "absolute";
			img.style.left     = "0px";

			strip.appendChild(img);
			strip.img = img;
			
			this.rcImageStrips.push(strip);
			screen.append(strip);
		}
	}
	return this.rcImageStrips;
}

Unit.prototype.rcHtmlRaysPlain = function (rays) {
	var cfg    = this.maze.cfg;
	var width  = cfg.width;
	var height = cfg.height;

	if (!$('body > .rayCast')[0]) {
		$('<div class="rayCast">').prependTo('body').css({
			'background-color' : 'black',
			'height'   : height,
			'width'    : width,
			'margin'   : 2,
			'overflow' : 'hidden'
		});
	}
	var div = $('<div>');
	var rayWidth = Math.floor(width / rays.length * 75) / 75;
	for (var i = 0; i < rays.length; i++) {
		var last = rays[i].last;
		var L    = rays[i].length;
		var rayHeight = height / L;
		var rayMarg   = (height - rayHeight) / 2;
		var color = 200;
		if (cfg.light) {
			color = L < 0.5 ? color : color/(L+0.5);
			color += dirShift(this.dir, rays[i].wall) % 2 ? 0 : 30;
		}
		color  = last.diff.isStart  ? (color/2).toColor('green') :
		         last.diff.isFinish ? color.toColor('red') :
		                              color.toColor();
		div.append($('<div>').css({
			'background' : color,
			'float'  : 'left',
			'margin' : rayMarg + "px 0",
			'height' : rayHeight,
			'width'  : rayWidth
		}));
	}
	$('body .rayCast').empty().append(div);
	return this;
}