
/** @class Vertexes */
atom.declare('Vertexes', {
	initialize: function () {
		this.positions = [];
		this.textures  = [];
		this.count     = 0;
	},

	/** @private */
	addPosition: function (x, y, z) {
		this.positions.push(parseFloat(x));
		this.positions.push(parseFloat(y));
		this.positions.push(parseFloat(z));
	},

	/** @private */
	addTexture: function (x, y) {
		this.textures.push(parseFloat(x));
		this.textures.push(parseFloat(y));
	},

	/** @private */
	createTexture: function (tex) {
		var texFrX = tex.x * 0.25;
		var texFrY = tex.y * 0.25;
		var texToX = texFrX + 0.25;
		var texToY = texFrY + 0.25;

		this.addTexture(texFrX, texToY);
		this.addTexture(texFrX, texFrY);
		this.addTexture(texToX, texFrY);

		this.addTexture(texFrX, texToY);
		this.addTexture(texToX, texToY);
		this.addTexture(texToX, texFrY);
	},

	createCeil: function (from, to, tex) {
		this.createTexture(tex);

		this.addPosition(from.x, from.y, from.z);
		this.addPosition(from.x,   to.y,   to.z);
		this.addPosition(  to.x,   to.y,   to.z);

		this.addPosition(from.x, from.y, from.z);
		this.addPosition(  to.x, from.y, from.z);
		this.addPosition(  to.x,   to.y,   to.z);

		this.count += 6;
	},

	createWall: function (from, to, tex) {
		this.createTexture(tex);

		this.addPosition(to.x, to.y, to.z);
		this.addPosition(to.x, from.y, to.z);
		this.addPosition(from.x, from.y, from.z);


		this.addPosition(to.x, to.y, to.z);
		this.addPosition(from.x, to.y, from.z);
		this.addPosition(from.x, from.y, from.z);

		this.count += 6;
	}
});