
/** @class Box.Container */
atom.declare('Box.Container', {

	initialize: function (gl) {
		/** @private */
		this.gl = gl;
		/** @private */
		this.builders = {};
	},

	/** @return {Box.Builder} */
	getBuilder: function (map) {
		var buildersCache = this.builders, builder;

		if (buildersCache[map.name]) {
			return buildersCache[map.name];
		}

		builder = new Box.Builder();
		builder.build(map);
		builder.createBuffers(this.gl);
		return buildersCache[map.name] = builder;
	}

});

/** @class Box.Builder */
atom.declare('Box.Builder', {

	/** @private */
	textureMultiplier: 0.25,

	vertices: [
		0,0,1,  1,0,1,  1,1,1,  0,1,1, // Front face
		0,0,0,  0,1,0,  1,1,0,  1,0,0, // Back face
		0,1,0,  0,1,1,  1,1,1,  1,1,0, // Top face
		0,0,0,  1,0,0,  1,0,1,  0,0,1, // Bottom face
		1,0,0,  1,1,0,  1,1,1,  1,0,1, // Right face
		0,0,0,  0,0,1,  0,1,1,  0,1,0  // Left face
	],

	indices: [
		 0,  1,  2,    0,  2,  3, // Front face
		 4,  5,  6,    4,  6,  7, // Back face
		 8,  9, 10,    8, 10, 11, // Top face
		12, 13, 14,   12, 14, 15, // Bottom face
		16, 17, 18,   16, 18, 19, // Right face
		20, 21, 22,   20, 22, 23  // Left face
	],

	/** @return {Box.Builder} */
	build: function (map) {
		var
			cX = map.ceil [0],
			cY = map.ceil [1],
			fX = map.floor[0],
			fY = map.floor[1],
			wX = map.wall [0],
			wY = map.wall [1];

		this.textures = [
			wX  ,wY  ,   wX+1,wY  ,   wX+1,wY+1,   wX  ,wY+1, // Front face
			wX+1,wY  ,   wX+1,wY+1,   wX  ,wY+1,   wX  ,wY  , // Back face
			cX  ,cY+1,   cX  ,cY  ,   cX+1,cY  ,   cX+1,cY+1, // Top face
			fX+1,fY+1,   fX  ,fY+1,   fX  ,fY  ,   fX+1,fY  , // Bottom face
			wX+1,wY  ,   wX+1,wY+1,   wX  ,wY+1,   wX  ,wY  , // Right face
			wX  ,wY  ,   wX+1,wY  ,   wX+1,wY+1,   wX  ,wY+1  // Left face
		].mul(this.textureMultiplier);

		return this;
	},

	/** @return {Box.Builder} */
	createBuffers: function (gl) {
		this.positionBuffer = this.createBuffer(gl, true);
		this.textureBuffer  = this.createBuffer(gl, false);
		this.indicesBuffer  = this.createIndicesBuffer(gl);
		return this;
	},

	createBuffer: function (gl, vertices) {
		var data, buffer;

		data   = vertices ? this.vertices : this.textures;
		buffer = gl.createBuffer();
		buffer.itemSize = vertices ? 3 : 2;
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);

		return buffer;
	},

	createIndicesBuffer: function (gl) {
		var buffer = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), gl.STATIC_DRAW);
		return buffer;
	}

});