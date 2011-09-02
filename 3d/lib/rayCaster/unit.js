Unit.prototype.rcRenderRotate = function (dir) {
	var unit  = this;
	var angle = unit.getViewAngle();
	var cfg   = unit.maze.cfg;
	var rotateFrames = cfg.rotateFrames + 1;
	var step  = (dir == 'right' ? 1 : -1) * (90).degree() / rotateFrames;
	var frame = 1;
	
	unit.rcFrameRender(function () {
		unit.rcRenderRays(unit.getCell().rcGetRays({
			angle : angle+(step*frame)
		}, frame != rotateFrames));

		if (++frame > rotateFrames) {
			unit.rcFrameRender()
		}
	});
	return this;
}

Unit.prototype.rcRenderView = function () {
	this.rcRenderRays(
		this.getCell().rcGetRays({
			angle : this.getViewAngle()
		})
	);
	return this;
}

Unit.prototype.rcRenderMove = function (back) {
	var unit   = this;
	var cfg    = unit.maze.cfg;
	// Unit looks to the dir...
	var shift  = dirShift(unit.dir);
	var angle  = this.getViewAngle();
	// Unit moves to the dir...
	var dir    = dirShift(shift + (back ? 2 : 0));
	// Unit in the
	var cell   = unit.getCell();
	// Unit moves to the
	var nbCell = cell.getNeighbour(dir, true);

	var moveFrames = cfg.moveFrames + 1;
	// Unit moves for one step on 
	var step   = (back ? -1 : 1) / moveFrames;

	// Start logic
	var frame  = 1;
	if (nbCell) {
		var distInCell = function (dist) {
			if (dist > 1) {
				return dist % 1;
			} else if (dist < 0) {
				return dist % 1 + 1;
			} else {
				return dist;
			}
		};

		unit.rcFrameRender(function () {
			var c = (frame * step);
			var x = 0.5, y = 0.5;
			if (shift % 2) { // 1, 3 Changing X while moving left or right
				// Add change if right or subtract if left
				x = distInCell(x + (shift == 1 ? c : -c));
			} else {         // 2, 4 Changing Y while moving top or bottom
				// Add change if bottom or subtract if top
				y = distInCell(y + (shift == 2 ? c : -c));
			}
			
			unit.rcRenderRays(
				cell.rcGetRays({
					angle : angle,
					x     : x,
					y     : y
				}, frame != moveFrames)
			);
			if (cell != nbCell && frame >= moveFrames / 2) {
				cell = nbCell;
			}
			if (++frame > moveFrames) {
				unit.rcFrameRender();
			}
		});
	}
	return this;
}

Unit.prototype.rcFrameRender = function (fn) {
	if (this.rcInterval) {
		clearInterval(this.rcInterval);
	}
	if (fn) {
		this.rcInterval = setInterval(fn, 1000/this.maze.cfg.fps);
	}
	return this;
}