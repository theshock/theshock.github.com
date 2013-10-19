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
		this.render = new Render(this.player, Voxel.baseWorld(), images.get('textures'));

		setTimeout(function () {
			atom.frame.add( onTick );
		}, 100);

		this.requestPointerLock(atom.dom('canvas').first);
	},

	onTick: function (time) {
		this.player.onTick(time);
		this.render.onTick(time);
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


atom.dom(function () {
	new Controller();
});