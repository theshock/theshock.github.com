/* type:FRAGMENT_SHADER */

precision highp float;
varying vec3 vNormal;
varying vec2 vTexCoord;
uniform sampler2D uTexture;

void main() {
	gl_FragColor = texture2D(uTexture, vTexCoord);
}