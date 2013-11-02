/* type:VERTEX_SHADER */

attribute vec3 vertexPosition;
attribute vec3 vertexNormal;
attribute vec2 textureCoord;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 persMatrix;

uniform vec3 ambientColor;
uniform vec3 directionalColor;
uniform vec3 lightingDirection;

varying float outZNorm;
varying vec2 outTextureCoord;
varying vec3 outLightWeighting;

void main(void) {
	gl_Position = persMatrix * modelViewMatrix * modelMatrix * vec4(vertexPosition, 1.0);
	outTextureCoord = textureCoord;

    float directionalLightWeighting = max(dot(vertexNormal, lightingDirection), 0.0);
    outLightWeighting = ambientColor + directionalColor * directionalLightWeighting;
	/*float fogEnd = 20.0;
	float fogStart = 0.1;

	outZNorm        = clamp((fogEnd - gl_Position.z) / (fogEnd - fogStart), 0.0, 1.0);
	*/
}