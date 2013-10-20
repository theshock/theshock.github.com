
window.Utils = {

	getContext: function (canvas) {
		var i, names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];

		for (i = 0; i < names.length; i++) {
			try {
				return canvas.getContext(names[i]);
			} catch(ignored) {}
		}
		return null;
	},

	loadShaders: function (gl, names, callback) {
		var results = {},
			pathPrefix = location.origin + atom.uri().directory + 'shaders/';

		function checkReady () {
			for (var i = names.length; i--;) {
				if (!results[names[i]]) {
					return;
				}
			}

			callback(results);
		}

		names.forEach(function (name) {
			var path = pathPrefix + name + '.c';

			console.log( 'Require shader from [ ' + path + ' ] name: ' + name + '' );

			atom.ajax({
				url: path,
				method: 'GET',
				onLoad: function (code) {
					results[name] = Utils.prepareShader(gl, code, name);
					checkReady();
				}});
		});
	},

	prepareShader: function (gl, code, name) {
		var
			lines  = code.split('\n'),
			header = lines.shift(),
			match  = header.match('type:([A-Z_]+)');

		if (!match || !gl[match[1]]) {
			throw new Error('Unknown shader type: ' + header);
		}

		var shader = gl.createShader(gl[match[1]]);

		code = lines.join('\n');
		gl.shaderSource(shader, code);
		gl.compileShader(shader);

		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			console.error(gl.getShaderInfoLog(shader));
			throw new TypeError('Cannot compile shader ' + name + ' (' + match[0] + ')');
		}

		return shader;
	},

	loadTexture: function (gl, image) {
		var texture = gl.createTexture();
		texture.image = image;

		gl.pixelStorei  (gl.UNPACK_FLIP_Y_WEBGL, true);
		gl.bindTexture  (gl.TEXTURE_2D, texture);
		gl.texImage2D   (gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.blendFunc    (gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
		gl.enable       (gl.BLEND);
		gl.bindTexture  (gl.TEXTURE_2D, null);

		return texture;
	}

};