#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {

	vec2 finaltexcoord = (2.0 * texcoord) - 1.0;
	
    float theta = atan(finaltexcoord.y, finaltexcoord.x);
	
    float radius = pow(length(finaltexcoord), 1.5);
	
    finaltexcoord = vec2(radius * cos(theta), radius * sin(theta));

    finaltexcoord = 0.5 * (finaltexcoord + 1.0);

    FragColor = texture(image, finaltexcoord);

}
