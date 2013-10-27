/** @class Render */
atom.declare('Render', {

	gl: null,
	canvas: null,
	program: null,

	initialize: function (onReady) {
		this.items = [];
		this.modelViewMatrix = mat4.create();
		this.persMatrix = mat4.create();

		this.glInit();
		this.shadersInit(onReady);

		this.container = new Box.Container(this.gl);

		this.debugCreate();
	},

	debugCreate: function () {
		var indices = [
				0, 1, 2, 0, 2, 3,
				8, 6, 9, 6, 7, 9,
				8, 9, 3, 8, 3, 2,
				0, 3, 9, 0, 9, 7,
				0, 7, 6, 0, 6, 1,
				2, 1, 6, 2, 6, 8
			],
			gl = this.gl,
			vertices = [
				// position XYZ, normal XYZ, texcoord3UV => 8 floats per vertex
				0,0,1,  0,0,0,  0,0,
				1,0,1,  0,0,0,  0,0,
				0,0,0,  0,0,0,  0,0,
				1,0,0,  0,0,0,  0,0,

				0,1,1,  0,0,0,  0,0,
				1,1,1,  0,0,0,  0,0,
				0,1,0,  0,0,0,  0,0,
				1,1,0,  0,0,0,  0,0
			];

		// create VBO and IBO
		this.vbo = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
		this.ibo = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibo);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

		this.length = indices.length;

	},

	/** @param {Image} image */
	setTexture: function (image) {
		this.texture = Utils.loadTexture(this.gl, image);
	},

	/** @param {Voxel} voxel */
	addItem: function (voxel) {
		this.items.push( voxel.buildBuffers(this.container) );
	},

	/** @param {Player} player */
	positionCamera: function (player) {
		var mv = mat4.identity( this.modelViewMatrix );
		mat4.rotate   ( mv, player.angleVertical  , [1, 0, 0]);
		mat4.rotate   ( mv, player.angleHorisontal, [0, 1, 0]);
		mat4.translate( mv, player.cameraVector );

		mat4.perspective(45, this.gl.viewportWidth / this.gl.viewportHeight, 0.1, 100.0, this.persMatrix);
	},

	redraw: function () {
		var gl = this.gl, i, uniforms = this.program.uniforms;

		gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
		gl.clear   (gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		gl.enable  (gl.CULL_FACE);

		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, this.texture);
		gl.uniform1i(uniforms['sampler'], 0);

		gl.uniformMatrix4fv(uniforms['persMatrix']     , false, this.persMatrix);
		gl.uniformMatrix4fv(uniforms['modelViewMatrix'], false, this.modelViewMatrix);

		gl.uniformMatrix4fv(uniforms['modelMatrix'], false, mat4.identity(mat4.create()));
		gl.uniform1f       (uniforms['activeVoxel'], 0.0);
		gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibo);
		gl.drawElements(gl.TRIANGLES, this.length, gl.UNSIGNED_SHORT, 0);

		for (i = 0; i < this.items.length; i++) {
			this.items[i].bindBuffers(gl, this.program);
		}
	},

	/** @private */
	glInit: function () {
		var gl, canvas;

		canvas = atom.dom('canvas').first;

		gl = Utils.getContext(canvas);

		if (!gl) {
			throw new Error('Fail getting WebGL context');
		}

		gl.viewportWidth  = canvas.width;
		gl.viewportHeight = canvas.height;
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.enable(gl.DEPTH_TEST);

		this.gl     = gl;
		this.canvas = canvas;
	},

	/** @private */
	createUniform: function (name) {
		this.program.uniforms[name] = this.gl.getUniformLocation(this.program, name);
	},

	/** @private */
	createAttribute: function (name) {
		var gl = this.gl, program = this.program;
		program.attributes[name] = gl.getAttribLocation(program, name);
		gl.enableVertexAttribArray(program.attributes[name]);
	},

	/** @private */
	createVariables: function () {
		this.createAttribute('textureCoord');
		this.createAttribute('vertexPosition');

		this.createUniform('sampler');
		this.createUniform('persMatrix');
		this.createUniform('modelMatrix');
		this.createUniform('activeVoxel');
		this.createUniform('modelViewMatrix');
	},

	/** @private */
	shadersInit: function (onReady) {
		var gl = this.gl;

		Utils.loadShaders(gl, [ 'fragment', 'vertex' ], function (shaders) {
			var program = this.program = gl.createProgram();
			gl.attachShader(program, shaders['vertex']  );
			gl.attachShader(program, shaders['fragment']);
			gl.linkProgram (program);

			if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
				throw new Error('Could not initialize shaders');
			}

			gl.useProgram(program);

			program.uniforms   = {};
			program.attributes = {};

			this.createVariables();

			onReady.call(this);
		}.bind(this));

	}

});
