/* type:VERTEX_SHADER */

precision highp float;
uniform mat4 modelViewMatrix;
uniform mat4 persMatrix;
attribute vec3 aPosition;
attribute vec3 aNormal;
attribute vec2 aTexCoord;
varying vec3 vNormal;
varying vec2 vTexCoord;

void main() {
	gl_Position = persMatrix * modelViewMatrix * vec4(aPosition, 1.0);
	vTexCoord = aTexCoord;
	vNormal = aNormal;
}