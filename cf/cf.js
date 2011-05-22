!function (window, atom) {
	
var CF = atom.Class({
	initialize: function (canvas) {
		this.canvas = atom.dom( canvas ).first;
		this.ctx    = this.canvas.getContext('2d');
		this.mouse  = new Mouse( this.canvas );
		
		this.emptyCanvas = atom.dom.create( 'canvas', { width: 1, height: 1 }).first;
		this.emptyCanvas.ctx = this.emptyCanvas.getContext('2d');
		
		// 25 fps
		this.update.periodical( 1000/25, this );
	},
					   
	update: function (shapes) {
		this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
		this.elements.invoke('draw');
	},
	elements: [],
	_shape: function (Class, args) {
		var e = new Class(args[0], args[1]);
		this.mouse.add( e );
		this.elements.push( e );
		e.cf = this;
		return e;
	},
	circle: function (data, options) {
		return this._shape(Circle, arguments);
	},
	rect: function (data, options) {
		return this._shape(Rect, arguments);
	}
});

var Shape = atom.Class({
	Implements: [ atom.Class.Events, atom.Class.Options ],
	
	cf   : null,
	data : null,
	hover: false,
	
	path: atom.Class.abstractMethod,
	
	initialize: function (data, options) {
		this.data = data;
		this.setOptions( options );
	},
	
	hasPoint: function (x, y) {
		var ctx = this.cf.emptyCanvas.ctx;
		this.path( ctx );
		return ctx.isPointInPath(x, y);
	},
		   
	draw: function () {
		var ctx = this.cf.ctx, o = this.options;
		this.path( ctx );
		ctx.save();
		ctx.fillStyle = this.hover ? o.hover.fill : o.fill;
		ctx.fill();
		ctx.restore();
	}
});

// circle.data == [x, y, radius]
var Circle = atom.Class({
	Extends: Shape,
	path: function (ctx) {
		ctx.beginPath();
		ctx.arc( this.data[0], this.data[1], this.data[2], 0, Math.PI * 2, false );
		ctx.closePath();
	}
});

var Rect = atom.Class({
	Extends: Shape,
	path: function (ctx) {
		ctx.beginPath();
		ctx.rect.apply( ctx, this.data );
		ctx.closePath();
	}
});

var Mouse = atom.Class({
	x: 0, 
	y: 0,
	initialize: function (canvas) {
		this.elements = [];
		atom.dom( canvas ).bind({
			mousemove: this.move.bind(this),
			mousedown: this.fire.bind(this, 'mousedown'),
			mouseup:   this.fire.bind(this, 'mouseup'  )
		});
	},
	add: function (element) {
		this.elements.push( element );
	},
	move: function (e) {
		// Мы воспользуемся layer*, но на практике нужен более надёжный способ
		this.x = e.layerX;
		this.y = e.layerY;
		
		this.elements.forEach(function (el) {
			el.hover = el.hasPoint(this.x, this.y)
		}.bind(this));
	},
	fire: function (name, e) {
		this.elements.forEach(function (el) {
			if (el.hasPoint(this.x, this.y)) {
				el.fireEvent(name, e);
			}
		}.bind(this));
	}
});

window.CF = CF;
}(window, atom);