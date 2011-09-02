Maze.prototype.mapEditor = function (width, height) {
	if (width > 60) {
		throw 'LineTooLong';
	}
	if (height > 40) {
		throw 'MazeTooLong';
	}
	var dirs = ['top', 'right', 'bottom', 'left'];
	this.size.width  = width;
	this.size.height = height;
	for (var h = height; h--;) {
		this.newLine();
		for(var w = width; w--;) {
			var cell = this.addCell();
			for (var i = dirs.length; i--;) {
				cell.setWall(dirs[i], false);
			}
		}
	}
	this.complete();
	return this;
}

Cell.prototype.setActive = function () {
	if(this.maze.diff.active) {
		this.maze.diff.active.getHtmlElem().removeClass('active');
		this.maze.diff.active = null;
	}
	this.getHtmlElem().addClass('active');
	this.maze.diff.active = this;
}

Cell.prototype.changeWall = function (dir) {
	var classNames = {'top':'t','right':'r','bottom':'b','left':'l'};
	var newValue = !this.walls[dir];
	var opDir    = dirShift(dir, 2);
	var nb       = this.getNeighbour(dir);
	if (nb) {
		this.setWall(dir  , newValue);
		  nb.setWall(opDir, newValue);
		var fn = (newValue) ? 'addClass' : 'removeClass';
		this.getHtmlElem()[fn](classNames[dir]);
		  nb.getHtmlElem()[fn](classNames[opDir]);
		if ($.browser.opera) {
			// Opera sux? 
			$('table.map').appendTo('body');
		}
	}
}

Cell.prototype.setDiff = function (type) {
	var diff = (type == 'finish') ? 'finish' : 'start';
	var active = this.maze.diff.active;
	var curStart  = this.maze.diff[diff];
	if (curStart) {
		curStart.getHtmlElem().removeClass(diff);
		curStart.diff[diff == 'start' ? 'isStart' : 'isFinish'] = false;
	}
	this.maze.diff[diff]           = active;
	this.maze.diff[diff + 'Coord'] = active.coord;
	active.getHtmlElem().addClass(diff);
}

Maze.prototype.getCode = function () {
	if (!this.diff.startCoord.x) {
		throw 'EmptyStart';
	}
	if (!this.diff.finishCoord.x) {
		throw 'EmptyFinish';
	}
	if (coordsEquals (this.diff.startCoord, this.diff.finishCoord)) {
		throw 'StartFinishEquals';
	}
	var code = [  2,
		this.size.width, this.size.height,
		this.diff.startCoord.x , this.diff.startCoord.y,
		this.diff.finishCoord.x, this.diff.finishCoord.y
	].map(function (value) {
		var hex = value.decToHex();
		return (hex.length < 2) ?
			'0' + hex : hex;
	}).join('');
	var c = this.container;
	for (var i = 0; i < c.length; i++) {
		var line = '';
		for (var k = 0; k < c[i].length; k++) {
			var w = c[i][k].walls;
			line += (w.right ? '1' : '0') + (w.bottom ? '1' : '0');
		}
		code += line.binToHex();
	}
	return code;
};