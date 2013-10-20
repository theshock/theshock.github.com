/** @class Render */
atom.declare('Render', {

	gl: null,
	canvas: null,
	shaderProgram: null,

	initialize: function (onReady) {
		this.mvMatrix = mat4.create();
		this.persMatrix = mat4.create();

		this.glInit();
		this.shadersInit(onReady);
	},

	glInit: function () {
		var gl, canvas;

		canvas = atom.dom('canvas').first;

		gl = Utils.getContext(canvas);
		gl.viewportWidth  = canvas.width;
		gl.viewportHeight = canvas.height;
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.enable(gl.DEPTH_TEST);

		this.gl     = gl;
		this.canvas = canvas;
	},

	setTexture: function (image) {
		this.texture = Utils.loadTexture(this.gl, image);
	},

	loadWorld: function (world) {
		this.world = world;

		world.invoke('buildBuffers', this.gl);
	},

	setMatrixUniforms: function () {
		this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform , false, this.persMatrix);
		this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform, false, this.mvMatrix);
	},

	shadersInit: function (onReady) {
		var gl = this.gl;

		Utils.loadShaders(gl, [ 'fragment', 'vertex' ], function (shaders) {
			var shaderProgram = gl.createProgram();
			gl.attachShader(shaderProgram, shaders.vertex  );
			gl.attachShader(shaderProgram, shaders.fragment);
			gl.linkProgram(shaderProgram);

			if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
				throw new Error('Could not initialize shaders');
			}

			gl.useProgram(shaderProgram);

			shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
			gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

			shaderProgram.textureCoordAttribute = gl.getAttribLocation(shaderProgram, 'aTextureCoord');
			gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);

			shaderProgram.modelMatrixUniform  = gl.getUniformLocation(shaderProgram, "uModelMatrix" );
			shaderProgram.pMatrixUniform      = gl.getUniformLocation(shaderProgram, 'uPMatrix' );
			shaderProgram.mvMatrixUniform     = gl.getUniformLocation(shaderProgram, 'uMVMatrix');
			shaderProgram.samplerUniform      = gl.getUniformLocation(shaderProgram, 'uSampler' );

			this.shaderProgram = shaderProgram;

			onReady.call(this);
		}.bind(this));

	},

	positionCamera: function (player) {
		var mvMatrix = mat4.identity( this.mvMatrix );
		mat4.rotate   ( mvMatrix, player.angleVertical, [1, 0, 0]);
		mat4.rotate   ( mvMatrix, player.angleHorisontal  , [0, 1, 0]);
		mat4.translate( mvMatrix, player.cameraVector );
	},

	redraw: function () {
		var gl = this.gl;

		gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

		if (this.positionBuffer == null || this.textureBuffer == null) {
			return;
		}

		mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, this.persMatrix);

		gl.enable(gl.CULL_FACE);

		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, this.texture);
		gl.uniform1i(this.shaderProgram.samplerUniform, 0);

		this.setMatrixUniforms();
		this.world.invoke('bindBuffers', gl, this.shaderProgram);

		gl.drawArrays(gl.TRIANGLES, 0, this.positionBuffer.numItems);
	}

});
