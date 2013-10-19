/** @class Render */
atom.declare('Render', {

	gl: null,
	shaderProgram: null,

	initialize: function (player, world, image) {
		this.player = player;
		this.world  = world;

		this.moveMatrix = mat4.create();
		this.persMatrix = mat4.create();

		this.glInit();
		this.shadersInit();
		this.texture = Utils.loadTexture(this.gl, image);
		this.worldLoad();

		this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
		this.gl.enable(this.gl.DEPTH_TEST);
	},

	setMatrixUniforms: function () {
		this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform , false, this.persMatrix);
		this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform, false, this.moveMatrix);
	},

	glInit: function () {
		this.canvas = atom.dom('canvas').first;
		this.gl = Utils.getContext(this.canvas);
		this.gl.viewportWidth = this.canvas.width;
		this.gl.viewportHeight = this.canvas.height;
	},

	worldLoad: function () {
		var v = new Vertexes(), world = this.world, i;

		for (i = 0; i < world.length; i++) {
			v.createVoxel(world[i]);
		}

		this.prepareWorld(v);
	},

	prepareWorld: function (vertexes) {
		var gl = this.gl;

		this.positionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexes.positions), gl.STATIC_DRAW);
		this.positionBuffer.itemSize = 3;
		this.positionBuffer.numItems = vertexes.count;

		this.textureBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.textureBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexes.textures), gl.STATIC_DRAW);
		this.textureBuffer.itemSize = 2;
		this.textureBuffer.numItems = vertexes.count;
	},

	shadersInit: function () {
		var gl = this.gl, shader;

		var fragmentShader = Utils.getShader(gl, "shader-fs");
		var vertexShader   = Utils.getShader(gl, "shader-vs");

		var shaderProgram = gl.createProgram();
		gl.attachShader(shaderProgram, vertexShader);
		gl.attachShader(shaderProgram, fragmentShader);
		gl.linkProgram(shaderProgram);

		if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
			throw new Error("Could not initialise shaders");
		}

		gl.useProgram(shaderProgram);

		shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
		gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

		shaderProgram.textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");
		gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);

		shaderProgram.pMatrixUniform  = gl.getUniformLocation(shaderProgram, "uPMatrix" );
		shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
		shaderProgram.samplerUniform  = gl.getUniformLocation(shaderProgram, "uSampler" );

		this.shaderProgram = shaderProgram;
	},

	onTick: function () {
		var gl = this.gl, mvMatrix = this.moveMatrix;

		gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

		if (this.positionBuffer == null || this.textureBuffer == null) {
			return;
		}

		mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, this.persMatrix);

		mat4.identity(mvMatrix);

		mat4.rotate(mvMatrix, this.player.getAngleY(), [1, 0, 0]);
		mat4.rotate(mvMatrix, this.player.getAngleX(), [0, 1, 0]);
		mat4.translate(mvMatrix, vec3.negate(vec3.create(this.player.position)) );

		gl.enable(gl.CULL_FACE);

		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, this.texture);
		gl.uniform1i(this.shaderProgram.samplerUniform, 0);

		gl.bindBuffer(gl.ARRAY_BUFFER, this.textureBuffer);
		gl.vertexAttribPointer(this.shaderProgram.textureCoordAttribute  , this.textureBuffer.itemSize, gl.FLOAT, false, 0, 0);

		gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
		gl.vertexAttribPointer(this.shaderProgram.vertexPositionAttribute, this.positionBuffer.itemSize, gl.FLOAT, false, 0, 0);

		this.setMatrixUniforms();
		gl.drawArrays(gl.TRIANGLES, 0, this.positionBuffer.numItems);
	}

});
