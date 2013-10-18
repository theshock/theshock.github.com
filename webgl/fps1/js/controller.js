/** @class Eye.Controller */
atom.declare( 'Eye.Controller', {

	initialize: function () {
		atom.ImagePreloader.run({
			textures: 'textures-0.png',
			player  : 'player.png'
		}, this.start, this);
	},

	player: null,

	start: function (images) {
		this.images = images;
		this.map = new Eye.Map(this);
		this.app = new App({ size: this.map.size });
		this.app.resources.set({ images: images });
		this.map.appendTileEngine();

		this.layer = this.app.createLayer({ name: 'objects', invoke: true });

		this.player = new Eye.Player( this.layer, {
			controller: this,
			position: new Point(10, 5)
		});

		this.render = new Eye.Render(this.player, this.map, images.get('textures'));

		setTimeout(function () {
			atom.frame.add(this.render.draw.bind(this.render));
		}.bind(this), 100);

		this.requestPointerLock(atom.dom('canvas').first);
	},

	requestPointerLock: function (element) {
		var player = this.player;

		function onMove (e) {
			player.pointer(new Point(e.movementX, e.movementY));
		}

		atom.dom(element).bind('click', function () {
			atom.pointerLock.request(element, onMove);
		});
	}

});


atom.dom(function () {
	var controller = new Eye.Controller();
});