
#version 120
#extension GL_ARB_texture_rectangle : enable

uniform float falloffDist =  1000.;
uniform float falloffExpo = 2.;
uniform float alphaScale = 1.;

varying vec3 ePos;
varying float dist;

void main(void)
{
	float alpha = pow( max(0., 1. - dist / falloffDist), falloffExpo );
	gl_FragColor = vec4( gl_Color.xyz, gl_Color.w * alpha * alphaScale);
}