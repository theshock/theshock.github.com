LibCanvas.extract();

/** @class Controls */
atom.declare( 'Controls', {

	initialize: function (arrows) {
		this.arrows  = arrows;
		this.helper  = new App.Light( new Size(800, 100) );
		this.actions = {};

		this.create(0, 'left' , 'a');
		this.create(1, 'up'   , 'w');
		this.create(2, 'down' , 's');
		this.create(3, 'right', 'd');

		this.create(5, 'left' , 'aleft');
		this.create(6, 'up'   , 'aup');
		this.create(7, 'down' , 'adown');
		this.create(8, 'right', 'aright');
	},

	key: function (key) {
		return this.actions[key] === true;
	},

	create: function (index, type, action) {
		var button, actions = this.actions;

		button = new Controls.Button( this.helper.layer, {
			image: this.arrows,
			type : type,
			shape: new Rectangle(90 * index, 10, 80, 80)
		});

		this.helper.mouseHandler.subscribe(button);

		button.events.add('mousedown', function () {
			actions[action] = true;
		});

		button.events.add('mouseup', function () {
			actions[action] = false;
		});

		button.events.add('mouseout', function () {
			actions[action] = false;
		});
	}


});

/** @class Controls.Button */
atom.declare( 'Controls.Button', App.Element, {

	imageMap: [ 'up', 'right', 'left', 'down' ],

	renderTo: function (ctx) {
		var typeIndex = this.imageMap.indexOf(this.settings.get('type'));
		ctx.drawImage({
			image: this.settings.get('image'),
			draw : this.shape,
			crop : new Rectangle(80*typeIndex,0,80,80)
		});
		ctx.stroke(this.shape.clone().snapToPixel(), '#999');
	}

});