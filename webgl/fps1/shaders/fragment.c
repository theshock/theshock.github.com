/* type:FRAGMENT_SHADER */

precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
varying float outZNorm;

void main(void) {
	vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));
	gl_FragColor = vec4(mix(textureColor.rgb, vec3(0.0, 0.0, 0.0), 1.0 - outZNorm), textureColor.a);
}