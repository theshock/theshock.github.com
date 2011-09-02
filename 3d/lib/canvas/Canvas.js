Canvas = function (maze, obj) {
	this.maze = maze;
	this.obj  = obj;
	obj.width  = maze.cfg.width;
	obj.height = maze.cfg.height;
	this.ctx  = obj.getContext('2d');
};

Canvas.prototype = {
	getContext : function () {
		return this.ctx;
	}
};