
/** @class BoxBuilder */
atom.declare('BoxBuilder', {
	textureMultiplier: 0.25,

	initialize: function () {
		this.positions = [];
		this.textures  = [];
		this.count     = 0;
	},

	build: function (voxel) {
		var position, map, x, y, z;

		position = voxel.position;
		map = voxel.getMap();
		x = position[0];
		y = position[1];
		z = position[2];

		this.createCeil    ( vec3.create([x,y+1,z]), vec3.create([x+1,y+1,z+1]), map.ceil  );
		this.createFloor   ( vec3.create([x,y,z])  , vec3.create([x+1,y,z+1])  , map.floor );
		this.createWall    ( vec3.create([x,y,z])  , vec3.create([x+1,y+1,z])  , map.wall  );
		this.createWall    ( vec3.create([x+1,y,z]), vec3.create([x+1,y+1,z+1]), map.wall  );
		this.createWallBack( vec3.create([x,y,z])  , vec3.create([x,y+1,z+1])  , map.wall  );
		this.createWallBack( vec3.create([x,y,z+1]), vec3.create([x+1,y+1,z+1]), map.wall  );

		return this;
	},

	createBuffer: function (gl, positions) {
		var data, buffer;

		data   = positions ? this.positions : this.textures;
		buffer = gl.createBuffer();
		buffer.numItems = this.count;
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