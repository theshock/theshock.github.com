/** @class Voxel */
atom.declare( 'Voxel', {

	initialize: function (material, position) {
		this.material    = material;
		this.position    = position;
		this.modelMatrix = mat4.create();

		mat4.identity (this.modelMatrix);
		mat4.translate(this.modelMatrix, this.position);
	},

	bindBuffers: function (gl, shaderProgram) {
		gl.bindBuffer(gl.ARRAY_BUFFER, this.textureBuffer);
		gl.vertexAttribPointer(shaderProgram.textureCoordAttribute  , this.textureBuffer.itemSize, gl.FLOAT, false, 0, 0);

		gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
		gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, this.positionBuffer.itemSize, gl.FLOAT, false, 0, 0);

		gl.uniformMatrix4fv(shaderProgram.modelMatrixUniform, false, this.modelMatrix);

		gl.drawArrays(gl.TRIANGLES, 0, this.positionBuffer.numItems);
	},

	buildBuffers: function (gl) {
		var bb = new BoxBuilder().build(this);

		this.positionBuffer = bb.createBuffer(gl, true );
		this.textureBuffer  = bb.createBuffer(gl, false);
	},

	getMap: function () {
		return this.constructor.mapping[this.material];
	}

});

Voxel.mapping = {
	glass: { floor: [3,3], wall : [3,3], ceil : [3,3] },
	logo : { floor: [3,1], wall : [3,1], ceil : [3,1] },
	rock : { floor: [3,2], wall : [3,2], ceil : [3,2] },
	grass: { floor: [2,2], wall : [2,1], ceil : [2,3] },
	tree : { floor: [1,2], wall : [1,1], ceil : [1,3] },
	sand : { floor: [0,2], wall : [0,1], ceil : [0,3] }
};

Voxel.baseWorld = function () {
	var x, z, i,
		result = [],
		materials = Object.keys(this.mapping);

	materials.erase('rock');

	for (x = 0; x <= 10; x++) {
		for (z = 0; z <= 10; z++) {
			result.push(
				new Voxel('rock', vec3.create([x,-1,z]))
			);
		}
	}

	for (i = 150; i--;) {
		result.push(
			new Voxel(materials.random, vec3.create([
				Number.random(0, 10),Number.random(0, 10),Number.random(0, 10)
			]))
		);
	}

	return result;
};
