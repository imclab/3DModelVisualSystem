
#version 120
#extension GL_ARB_texture_rectangle : enable

uniform float halfGridDim = 100.;
uniform float falloffDist =  2000.;
uniform float falloffExpo = 2.;
uniform float falloffScl = 1.2;
uniform float alphaScale = 1.;

varying vec3 ePos;
varying float dist;
varying vec2 endVal;

void main(void)
{
	float alpha = pow( max(0., 1. - dist / falloffDist) * falloffScl, falloffExpo );
	alpha *= 1. - length(endVal) / halfGridDim;
	gl_FragColor = vec4( gl_Color.xyz, gl_Color.w * alpha * alphaScale);
}