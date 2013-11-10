/* type:FRAGMENT_SHADER */

precision mediump float;

uniform sampler2D sampler;

varying float outZNorm;
varying vec2 outTextureCoord;
varying vec3 outLightWeighting;

void main(void) {
	vec4 textureColor = texture2D(sampler, vec2(outTextureCoord.s, outTextureCoord.t));
	/*gl_FragColor = vec4(textureColor.rgb * outLightWeighting, textureColor.a);*/
	float alpha = 1.0;
	gl_FragColor = vec4(mix(textureColor.rgb * outLightWeighting, vec3(0.0, 0.0, 0.0), 1.0 - outZNorm), textureColor.a * alpha);
}