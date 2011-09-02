/* data {
 *		wall
 *		angle
 *		size
 * }
 */

Cell.prototype.hasCorner = function (dir1, dir2) {
	return (
		this.walls[dir1] ||
		this.walls[dir2] ||
		this.getNeighbour(dir1).walls[dir2] ||
		this.getNeighbour(dir2).walls[dir1]
	);
}

Cell.prototype.getCornerNeighbour = function (dir1, dir2) {
	return this.hasCorner(dir1, dir2) ? null : 
		this.getNeighbour(dir1).getNeighbour(dir2);
}

Cell.prototype.rcFullRay = function (data) {
	// Этот код может показаться обфусцированным, я понимаю.
	// Но на самом деле достаточно посмотреть на рисунок
	var w, L, x, nb = null; // aim

	var sh = (data.wall + 2) % 4;
	var a  = (data.angle - (90 * sh).degree()).round(8).degreeSingle();
	var b  = (360).degree() - a;
	var k  = data.size;
	var j  = 1 - k;
	var n = a.tan().abs();
	var corner = false;

	
	if (k < 1) { // + Counting w, L, x
		if (0 == a.round(8)) { // p1
			w = 0;
			L = 1;
			x = k;
		} else if (a < (90).degree()) { // p2, p3, p4
			if (n > k) { // p4
				w = 1;
				L = k / a.sin();
				x = k / a.tan();
			} else { // p2, p3
				corner = (n == k);
				w = 0;
				L = (1 + n*n).sqrt();
				x = corner ? 1 : k - n;
			}
		} else if (a > (270).degree()) { // p5, p6, p7
			if (n > j) { // p5
				w = 3;
				L =       j / b.sin();
				x = 1 - ( j / b.tan() );
			} else {
				corner = (n == k);
				w = corner ? 3 : 0;
				L = (1 + n*n).sqrt();
				x = corner ? 1 : k + n;
			}
		} else {
			throw 'WrongAngleException : ' + a .getDegree();
		}
	} else if (k == 1) { // p8, p9, p10
		if (a == (45).degree()) { // p9
			corner = true;
			w = 0;
			L = (2).sqrt();
			x = 1;
		} else if (a > (45).degree()) { // p10
			w = 1;
			L = 1 / a.sin();
			x = 1 / a.tan();
		} else if (a < (45).degree()) { // p8
			w = 0;
			L = 1 / a.cos();
			x = 1 - a.tan();
		} else {
			throw 'WrongCornerAngleException : ' + a .getDegree();
		}
	} else {
		throw 'Wrong_K_LengthException : ' + k;
	} // - Counting w, L, x

	nb = corner ?
		this.getCornerNeighbour(
			dirShift (data.wall + 2 + w),
			dirShift (data.wall + 3 + w)
		) : this.getNeighbour( dirShift (data.wall + 2 + w), true);

	var result = {}
	if (nb) {
		result = nb.rcFullRay({
			wall  : data.wall + w,
			angle : data.angle,
			size  : x
		});
		L += result.length;
	}
	return $.extend({
		wall   : dirShift (data.wall + 2 + w),
		corner : corner,
		dist   : x,
		last   : this
	}, result, {
		length : L
	});
}

Cell.prototype.rcRay = function (data) {
	// TODO : from walls
	var x, L, cell;
	var j, k, index, w, a, result;
	var angle = data.angle.degreeSingle().getDegree().round(8);
	var tmp =
		(angle.between(  0,  90, 'L')) ? [  data.x,   data.y, 0] :
		(angle.between( 90, 180, 'L')) ? [  data.y, 1-data.x, 1] :
		(angle.between(180, 270, 'L')) ? [1-data.x, 1-data.y, 2] :
		(angle.between(270, 360, 'L')) ? [1-data.y,   data.x, 3] : null;

	if (tmp) {
		j     = tmp[0];
		k     = tmp[1];
		index = tmp[2];
	} else {
		throw 'WrongRayAngleException : ' + angle;
	}
	
	a = (angle % 90).degree();
	
	x = 1 - j - k * a.tan();

	if (a == 0) {
		w = 0;
		L = k;
		x = 1 - j;
	} else {
		if (x < 0) {
			w = 1;
			L = (1-j) / a.sin();
			x = (1-j) / a.tan() + (1 - k);
		} else {
			w = 0;
			L = k / a.cos();
		}
	}

	cell = this.getNeighbour(dirShift(w + index), true);
	if (cell) {
		result = cell.rcFullRay({
			wall  : w + index + 2,
			angle : data.angle,
			size  : x
		});
		L += result.length;
	}

	if (!isNaN(data.removeFish)) {
		L *= (data.angle - data.removeFish).abs().cos();
	}

	return $.extend({
		wall   : dirShift (w + index),
		corner : false,
		dist   : x,
		last   : this
	}, result, {
		length : L
	});
};

Cell.prototype.rcGetRays = function (data, light) {
	var cfg = this.maze.cfg, rays = [];
	if (light) {
		cfg = $.extend(cfg);
		// cfg.quality/=2;
	}
	for (var i = -cfg.angle/2; i < cfg.angle/2; i=(i+cfg.angle/cfg.quality).round(8)) {
		rays.push(this.rcRay({
			removeFish : data.angle,
			angle : i.degree() + data.angle,
			x     : data.x == undefined ? 0.5 : data.x,
			y     : data.y == undefined ? 0.5 : data.y
		}));
	}
	return rays;
}