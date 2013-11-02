/* type:FRAGMENT_SHADER */

precision mediump float;

/*uniform float activeVoxel;*/
uniform sampler2D sampler;

varying float outZNorm;
varying vec2 outTextureCoord;

void main(void) {
	vec4 textureColor = texture2D(sampler, vec2(outTextureCoord.s, outTextureCoord.t));
	gl_FragColor = vec4(mix(textureColor.rgb, vec3(0.3, 0.3, 0.3), 1.0 - outZNorm), textureColor.a);
}