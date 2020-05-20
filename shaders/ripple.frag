#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
	
	vec2 newtexcoord = texcoord * 2.0 - 1.0;
	
	float radius = length(newtexcoord);
	
	vec2 offset = newtexcoord * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;

	newtexcoord = newtexcoord + offset;
	
    FragColor = texture(image, texcoord);
}
