Maze.prototype.fromStringV1 = function (str) {
	var parseData = function (maze, str) {
		var data = str.split('.');
		maze.size = {
			width  : data[0],
			height : data[1]
		};
		maze.diff.startCoord = {
			x : data[2],
			y : data[3]
		};
		maze.diff.finishCoord = {
			x : data[4],
			y : data[5]
		};
	};
	var re = /^(\d{1,2}\.){5}\d{1,2}( [a-f0-9]+)+$/;
	if (!str.match(re)) {
		throw 'WrongCode';
	}

	var data = str.split(' ');
	parseData(this, data.shift());
	for (var i = 0; i < data.length; i++) {
		this.newLine();
		var binLine = data[i].hexToBin();
		var cellStr = binLine.match(/.{2}/g);
		if (this.size.width % 2) {
			cellStr.shift();
		}
		for (var k = 0; k < cellStr.length; k++) {
			var cell = this.addCell();
			cell.fromString(cellStr[k]);
		}
	}
	this.complete();
	return this;
};

Maze.prototype.fromString = function (str) {
	var version = str.substr(0, 2).hexToDec();
	if (!isNaN(version) && this.codeParser['v' + version]) {
		return this.codeParser['v' + version](this, str);
	} else {
		throw 'UnknownMapCodeVersion';
	}
};

Maze.prototype.codeParser =  {
	v2 : function (maze, str) {
		var parseData = function (data) {
			maze.size = {
				width  : data[0],
				height : data[1]
			};
			maze.diff.startCoord = {
				x : data[2],
				y : data[3]
			};
			maze.diff.finishCoord = {
				x : data[4],
				y : data[5]
			};
		};
		var re = /^([a-f0-9]{2})([a-f0-9]{12})([a-f0-9]+)$/i;
		var parts = str.match(re);
		if (!parts) {
			throw 'WrongMapCode';
		}

		parseData(parts[2].match(/([a-f0-9]{2})/ig).map(function (value) {
			return value.hexToDec();
		}));
		var symbC = (maze.size.width / 2).ceil();
		for (var i = 0; i < parts[3].length/symbC; i++) {
			maze.newLine();
			var binLine = parts[3].substr(i*symbC, symbC).hexToBin();
			var cellStr = binLine.match(/.{2}/g);
			if (maze.size.width % 2) {
				cellStr.shift();
			}
			for (var k = 0; k < cellStr.length; k++) {
				var cell = maze.addCell();
				cell.fromString(cellStr[k]);
			}
		}
		maze.complete();
		return maze;
	}
};



Cell.prototype.fromString = function (str) {
	var nTop  = this.getNeighbour('top');
	var nLeft = this.getNeighbour('left');
	this.setWall('top'   ,  nTop ?  nTop.walls.bottom : true);
	this.setWall('left'  , nLeft ? nLeft.walls.right  : true);
	this.setWall('right' , str.charAt(0) == '1');
	this.setWall('bottom', str.charAt(1) == '1');
};