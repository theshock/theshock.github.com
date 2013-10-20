/* type:VERTEX_SHADER */

attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat4 uModelMatrix;
uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

varying float outZNorm;
varying vec2 vTextureCoord;

void main(void) {
	gl_Position = uPMatrix * uMVMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);

	float fogEnd = 20.0;
	float fogStart = 0.1;
	outZNorm = clamp((fogEnd - gl_Position.z) / (fogEnd - fogStart), 0.0, 1.0);
	vTextureCoord = aTextureCoord;
}