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

	addItem: function (voxel) {
		this.items.push( voxel.buildBuffers(this.container) );
	},

	createUniform: function (name) {
		this.program.uniforms[name] = this.gl.getUniformLocation(this.program, name);
	},

	createAttribute: function (name) {
		var gl = this.gl, program = this.program;
		program.attributes[name] = gl.getAttribLocation(program, name);
		gl.enableVertexAttribArray(program.attributes[name]);
	},

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

			this.createAttribute('textureCoord');
			this.createAttribute('vertexPosition');

			this.createUniform('sampler');
			this.createUniform('persMatrix');
			this.createUniform('modelMatrix');
			this.createUniform('activeVoxel');
			this.createUniform('modelViewMatrix');

			onReady.call(this);
		}.bind(this));

	},

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

		for (i = 0; i < this.items.length; i++) {
			this.items[i].bindBuffers(gl, this.program);
		}
	}

});
