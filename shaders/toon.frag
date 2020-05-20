#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
	vec4 toon = texture(image, texcoord);
	toon = round(toon * 4.0) / 4.0;
    FragColor = toon;
}
