var TombRaider = function (maze, x, y) {
	this.maze  = maze;
	this.dir   = 'top';
	this.cells = [];
	this.coord = {
		x : x,
		y : y
	};
}

TombRaider.prototype = new Unit;

TombRaider.prototype.next = function () {
	var cell = this.searchUnvisited();
	this.getCell().trStone = true;
	if (cell) {
		this.cells.push(this.getCell());
		this.move(cell);
		return true;
	} else if (this.cells.length) {
		cell = this.cells.pop();
		this.move(cell);
	} else {
		return false;
	}
}

TombRaider.prototype.searchUnvisited = function () {
	var cell = this.getCell();
	for (var i = 0; i < 4; i++) {
		var nb = cell.getNeighbour(dirShift(i), true);
		if (nb && !nb.trStone && !nb.diff.isStart) {
			return nb;
		}
	}
	return null;
}

TombRaider.prototype.highlight = function () {
	for (var i = 0; i < this.cells.length; i++ ) {
		this.cells[i].getHtmlElem().css({'background':'#eef'});
	}
}