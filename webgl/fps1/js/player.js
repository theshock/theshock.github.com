/** @class Player */
atom.declare( 'Player', {

	speed: {
		rotate  : 0.05,
		movement: 3
	},

	initialize: function () {
		this.trace = atom.trace();

		this.position   = vec3.create([ -1, -0.25, -1]);
		this.direction  = vec3.normalize(vec3.create([ 0.7, 0.25, 0.7]));

		atom.Keyboard().events.add(
			['aup', 'adown', 'aright', 'aleft', 'w', 's', 'd', 'a', 'space', 'shift'],
			function (e) {e.preventDefault()}
		);
	},

	get cameraVector () {
		return vec3.negate(vec3.create(this.position));
	},

	get angleHorisontal () {
		var dir = this.direction;

		return Math.atan2(dir[2], dir[0]) + (90).degree();
	},

	get angleVertical () {
		var
			normal = vec3.create([0,1,0]),
			dir    = this.direction,
			length = vec3.length(normal) * vec3.length(dir),
			angle  = Math.acos( vec3.dot(normal, dir) / length );

		return angle - (90).degree();
	},

	getStrafeVector: function () {
		var
			dir = this.direction,
			strafe = vec3.create([dir[0], 0, dir[2]]),
			dirVec = vec3.create([dir[0], 1, dir[2]]);

		return vec3.normalize( vec3.cross(strafe, dirVec) );
	},

	/** @private */
	rotateVertical: function (angle) {
		angle *= this.speed.rotate;

		var current = this.angleVertical;

		if (angle > 0 && current >  (85).degree()) return;
		if (angle < 0 && current < -(85).degree()) return;

		var
			axis = this.getStrafeVector(),
			x = axis[0],
			y = axis[1],
			z = axis[2],
			s = Math.sin(angle),
			c = Math.cos(angle);

		mat3.multiplyVec3([
			c+(1-c)*x*x, (1-c)*x*y-s*z, (1-c)*x*z+s*y,
			(1-c)*y*x+s*z, c+(1-c)*y*y, (1-c)*y*z-s*x,
			(1-c)*z*x-s*y, (1-c)*z*y+s*x, c+(1-c)*z*z
		], this.direction);
	},

	/** @private */
	rotateHorisontal: function (angle) {
		angle *= this.speed.rotate;

		var sin = Math.sin(angle),
			cos = Math.cos(angle),
			mat = [ cos, 0, sin, 0, 1, 0, -sin, 0, cos ];

		mat3.multiplyVec3(mat, this.direction);
	},

	/** @private */
	debug: function () {
		this.trace.value = {
			'position ': vec3.str([].slice.call(this.position ).invoke('toFixed', 2)),
			'direction': vec3.str([].slice.call(this.direction).invoke('toFixed', 2)),
			'horAngle ': this.angleHorisontal.getDegree().round(),
			'verAngle ': this.angleVertical  .getDegree().round()
		};
	},

	/** @private */
	checkAction: function (time, keyFor, keyRev, callback) {
		var keyboard = atom.Keyboard();

		if (keyboard.key(keyRev)) {
			time *= -1;
		} else if (!keyboard.key(keyFor)) {
			time = 0;
		}

		if (time) callback.call(this, time);

		return time;
	},

	pointer: function (x, y) {
		if (x) this.rotateHorisontal( x.degree()*10 );
		if (y) this.rotateVertical  ( y.degree()*10 );
	},

	getMovementVector: function (time, strafe) {
		var direction = strafe ? this.getStrafeVector() : vec3.create(this.direction);

		return vec3.scale(direction, time/1000*this.speed.movement);
	},

	onTick: function (time) {
		this.checkAction(time, 'aright', 'aleft', function (time) {
			this.rotateHorisontal( time.degree() );
		});
		this.checkAction(time, 'aup'   , 'adown', function (time) {
			this.rotateVertical  (-time.degree() );
		});
		this.checkAction(time, 'w', 's', function (time) {
			vec3.add(this.position, this.getMovementVector(time, false));
		});
		this.checkAction(time, 'd', 'a', function (time) {
			vec3.add(this.position, this.getMovementVector(time, true ));
		});

		this.debug();
	}

});