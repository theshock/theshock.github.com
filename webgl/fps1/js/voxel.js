/** @class Voxel */
atom.declare( 'Voxel', {

	initialize: function (material, position) {
		this.material = material;
		this.position = position;
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
