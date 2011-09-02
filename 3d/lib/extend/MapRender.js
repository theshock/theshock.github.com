Maze.prototype.mapRender = function () {
	var c = this.container;
	var html = '<table class="map">';
	for (var y = 0; y < c.length; y++) {
		html += '<tr>';
		for (var x = 0; x < c[y].length; x++) {
			html += c[y][x].mapRender();
		}
		html += '</tr>';
	}
	html += '</table>';
	return html;
};

Cell.prototype.getHtmlElem = function () {
	if (!this.htmlElem) {
		this.htmlElem = $('#' + this.getId());
	}
	return this.htmlElem;
};

Cell.prototype.getId = function () {
	return 'c-' + this.coord.x + '-' + this.coord.y;
};

Cell.prototype.mapRender = function () {
	var className = [];
	if (this.walls.top)     className.push('t');
	if (this.walls.right)   className.push('r');
	if (this.walls.bottom)  className.push('b');
	if (this.walls.left)    className.push('l');
	if (this.diff.isStart)  className.push('start');
	if (this.diff.isFinish) className.push('finish');
	return '<td id="' + this.getId() + '" class="' + className.join(' ') + '"></td>';
};