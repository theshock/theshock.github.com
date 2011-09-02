Maze.prototype.mapOutput = function () {
	$('body').append(this.mapRender());
	return this;
}

Unit.prototype.mapRender = function () {
	return '<div class="unit unit-'+ this.dir +'"></div>';
}

Unit.prototype.mapOutput = function () {
	if (this.htmlElem) {
		this.htmlElem.remove();
	}
	this.htmlElem = $(this.mapRender())
		.appendTo(this.getCell().getHtmlElem());
	return this;
}