/** @class Controller */
atom.declare( 'Controller', {

	initialize: function () {
		atom.ImagePreloader.run({
			textures: 'textures.png'
		}, this.start, this);
	},

	player: null,
	render: null,

	start: function (images) {
		var onTick = this.onTick.bind(this);

		this.player = new Player();

		this.render = new Render(function () {
			atom.frame.add( onTick );
		});
		this.render.setTexture(images.get('textures'));

		this.voxels = Voxel.tinyWorld();

		this.voxels.forEach(function (voxel) {
			this.render.addItem(voxel);
		}.bind(this));

		this.requestPointerLock(this.render.canvas);

		this.changeVoxelsActive(this.voxels);
	},

	changeVoxelsActive: function (voxels) {
		var active = null,
			traceActive = atom.trace();

		atom.Keyboard().events.add('q', function () {
			if (active != null) {
				voxels[active].active = false;
			}

			if (active == null || active >= voxels.length - 1) {
				active = 0;
			} else {
				active++;
			}

			voxels[active].active = true;
			traceActive.value = voxels[active];
		});
	},

	onTick: function (time) {
		this.player.onTick(time);
		this.render.positionCamera(this.player);
		this.render.redraw();
	},

	requestPointerLock: function (element) {
		var player = this.player;

		function onMove (e) {
			player.pointer(e.movementX, e.movementY);
		}

		atom.dom(element).bind('click', function () {
			atom.pointerLock.request(element, onMove);
		});
	}

});


atom.dom(Controller);