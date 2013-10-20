/* type:VERTEX_SHADER */

attribute vec3 vertexPosition;
attribute vec2 textureCoord;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 persMatrix;

varying float outZNorm;
varying vec2 outTextureCoord;

void main(void) {
	gl_Position = persMatrix * modelViewMatrix * modelMatrix * vec4(vertexPosition, 1.0);

	float fogEnd = 20.0;
	float fogStart = 0.1;

	outZNorm        = clamp((fogEnd - gl_Position.z) / (fogEnd - fogStart), 0.0, 1.0);
	outTextureCoord = textureCoord;
}