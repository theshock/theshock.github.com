
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

	getShader: function (gl, id) {
		var shaderScript = document.getElementById(id);
		if (!shaderScript) {
			return null;
		}

		var str = "";
		var k = shaderScript.firstChild;
		while (k) {
			if (k.nodeType == 3) {
				str += k.textContent;
			}
			k = k.nextSibling;
		}

		var shader;
		if (shaderScript.type == "x-shader/x-fragment") {
			shader = gl.createShader(gl.FRAGMENT_SHADER);
		} else if (shaderScript.type == "x-shader/x-vertex") {
			shader = gl.createShader(gl.VERTEX_SHADER);
		} else {
			return null;
		}

		gl.shaderSource(shader, str);
		gl.compileShader(shader);

		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			console.error(gl.getShaderInfoLog(shader));
			return null;
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
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
		gl.enable(gl.BLEND);
		gl.bindTexture  (gl.TEXTURE_2D, null);

		return texture;
	}

};