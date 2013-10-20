
/** @class Box.Container */
atom.declare('Box.Container', {

	initialize: function (gl) {
		this.gl    = gl;
		this.builders = {};
	},

	getBuilder: function (map) {
		if (this.builders[map.name]) {
			return this.builders[map.name];
		}

		var builder = new Box.Builder();
		builder.build(map);
		builder.positionBuffer = builder.createBuffer(this.gl, true);
		builder.textureBuffer  = builder.createBuffer(this.gl, false);
		this.builders[map.name] = builder;
		return builder;
	}

});

/** @class Box.Builder */
atom.declare('Box.Builder', {
	textureMultiplier: 0.25,

	initialize: function () {
		this.positions = [];
		this.textures  = [];
		this.count     = 0;
	},

	build: function (map) {
		this.createCeil    ( [0,1,0], [1,1,1], map.ceil  );
		this.createFloor   ( [0,0,0], [1,0,1], map.floor );
		this.createWall    ( [0,0,0], [1,1,0], map.wall  );
		this.createWall    ( [1,0,0], [1,1,1], map.wall  );
		this.createWallBack( [0,0,0], [0,1,1], map.wall  );
		this.createWallBack( [0,0,1], [1,1,1], map.wall  );

		return this;
	},

	createBuffer: function (gl, positions) {
		var data, buffer;

		data   = positions ? this.positions : this.textures;
		buffer = gl.createBuffer();
		buffer.itemSize = positions ? 3 : 2;
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);

		return buffer;
	},

	/** @private */
	addPosition: function (x, y, z) {
		this.positions.push(parseFloat(x), parseFloat(y), parseFloat(z));
	},

	/** @private */
	addTexture: function (x, y) {
		this.textures.push(parseFloat(x), parseFloat(y));
	},

	/** @private */
	createTexture: function (tex) {
		var tM = this.textureMultiplier,
			texFrX = tex[0] * tM,
			texFrY = tex[1] * tM,
			texToX = texFrX + tM,
			texToY = texFrY + tM;

		this.addTexture(texFrX, texToY);
		this.addTexture(texFrX, texFrY);
		this.addTexture(texToX, texFrY);

		this.addTexture(texToX, texToY);
		this.addTexture(texFrX, texToY);
		this.addTexture(texToX, texFrY);
	},

	/** @private */
	createTextureBack: function (tex) {
		var tM = this.textureMultiplier,
			texFrX = tex[0] * tM,
			texFrY = tex[1] * tM,
			texToX = texFrX + tM,
			texToY = texFrY + tM;

		this.addTexture(texFrX, texFrY);
		this.addTexture(texToX, texFrY);
		this.addTexture(texFrX, texToY);

		this.addTexture(texToX, texToY);
		this.addTexture(texFrX, texToY);
		this.addTexture(texToX, texFrY);
	},

	/** @private */
	createWallBack: function (fr, to, tex) {
		this.createTextureBack(tex);

		this.addPosition(fr[0], fr[1], fr[2]);
		this.addPosition(to[0], fr[1], to[2]);
		this.addPosition(fr[0], to[1], fr[2]);

		this.addPosition(to[0], to[1], to[2]);
		this.addPosition(fr[0], to[1], fr[2]);
		this.addPosition(to[0], fr[1], to[2]);

		this.count += 6;
	},

	/** @private */
	createWall: function (fr, to, tex) {
		this.createTexture(tex);

		this.addPosition(to[0], to[1], to[2]);
		this.addPosition(to[0], fr[1], to[2]);
		this.addPosition(fr[0], fr[1], fr[2]);

		this.addPosition(fr[0], to[1], fr[2]);
		this.addPosition(to[0], to[1], to[2]);
		this.addPosition(fr[0], fr[1], fr[2]);

		this.count += 6;
	},

	/** @private */
	createCeil: function (fr, to, tex) {
		this.createTexture(tex);

		this.addPosition(fr[0], fr[1], fr[2]);
		this.addPosition(fr[0], to[1], to[2]);
		this.addPosition(to[0], to[1], to[2]);

		this.addPosition(to[0], fr[1], fr[2]);
		this.addPosition(fr[0], fr[1], fr[2]);
		this.addPosition(to[0], to[1], to[2]);

		this.count += 6;
	},

	/** @private */
	createFloor: function (fr, to, tex) {
		this.createTextureBack(tex);

		this.addPosition(fr[0], to[1], to[2]);
		this.addPosition(fr[0], fr[1], fr[2]);
		this.addPosition(to[0], to[1], to[2]);

		this.addPosition(to[0], fr[1], fr[2]);
		this.addPosition(to[0], to[1], to[2]);
		this.addPosition(fr[0], fr[1], fr[2]);

		this.count += 6;
	}
});