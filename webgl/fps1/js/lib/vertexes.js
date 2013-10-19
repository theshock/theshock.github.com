
/** @class Vertexes */
atom.declare('Vertexes', {
	initialize: function () {
		this.positions = [];
		this.textures  = [];
		this.count     = 0;
	},

	createVoxel: function (voxel) {
		var position, map, x, y, z;

		position = voxel.position;
		map = voxel.getMap();
		x = position[0];
		y = position[1];
		z = position[2];

		this.createCeil    ( vec3.create([x,y+1,z]), vec3.create([x+1,y+1,z+1]), map.ceil );
		this.createWall    ( vec3.create([x,y,z])  , vec3.create([x+1,y+1,z])  , map.wall );
		this.createWall    ( vec3.create([x+1,y,z]), vec3.create([x+1,y+1,z+1]), map.wall );

		this.createFloor   ( vec3.create([x,y,z])  , vec3.create([x+1,y,z+1])  , map.floor );
		this.createWallBack( vec3.create([x,y,z])  , vec3.create([x,y+1,z+1])  , map.wall );
		this.createWallBack( vec3.create([x,y,z+1]), vec3.create([x+1,y+1,z+1]), map.wall );
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
		var texFrX = tex[0] * 0.25;
		var texFrY = tex[1] * 0.25;
		var texToX = texFrX + 0.25;
		var texToY = texFrY + 0.25;

		this.addTexture(texFrX, texToY);
		this.addTexture(texFrX, texFrY);
		this.addTexture(texToX, texFrY);

		this.addTexture(texToX, texToY);
		this.addTexture(texFrX, texToY);
		this.addTexture(texToX, texFrY);
	},

	createTextureBack: function (tex) {
		var texFrX = tex[0] * 0.25;
		var texFrY = tex[1] * 0.25;
		var texToX = texFrX + 0.25;
		var texToY = texFrY + 0.25;

		this.addTexture(texFrX, texFrY);
		this.addTexture(texFrX, texToY);
		this.addTexture(texToX, texFrY);

		this.addTexture(texFrX, texToY);
		this.addTexture(texToX, texToY);
		this.addTexture(texToX, texFrY);
	},

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

	createFloor: function (fr, to, tex) {
		this.createTextureBack(tex);

		this.addPosition(fr[0], to[1], to[2]);
		this.addPosition(fr[0], fr[1], fr[2]);
		this.addPosition(to[0], to[1], to[2]);

		this.addPosition(fr[0], fr[1], fr[2]);
		this.addPosition(to[0], fr[1], fr[2]);
		this.addPosition(to[0], to[1], to[2]);

		this.count += 6;
	},

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

	createWallBack: function (fr, to, tex) {
		this.createTextureBack(tex);

		this.addPosition(to[0], fr[1], to[2]);
		this.addPosition(to[0], to[1], to[2]);
		this.addPosition(fr[0], fr[1], fr[2]);

		this.addPosition(to[0], to[1], to[2]);
		this.addPosition(fr[0], to[1], fr[2]);
		this.addPosition(fr[0], fr[1], fr[2]);

		this.count += 6;
	}
});