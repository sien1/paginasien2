uniform sampler2D uSampler;
uniform sampler2D uTextureOne;
uniform sampler2D uTextureTwo;
varying vec2 vTextureCoord;
uniform mat3 mappedMatrix;
uniform vec2 uvAspect;
uniform float uTime;
uniform float uProgress;


mat2 rotate(  float a) {
    float s = sin(a);
    float c = cos(a);
    return  mat2(c,-s,s,-c);
    
}


void main(){    
    //gl_FragColor = vec4(1.,1.,0.,1.);
    vec3 map = vec3(vTextureCoord.xy, 1.)*mappedMatrix;
    vec2 uv = (map.xy - 0.5)*uvAspect +  0.5;

    //vec2 uv =  vec2(vTextureCoord.x + sin(vTextureCoord.y*10.)/10., vTextureCoord);
    vec2 uvDivided = fract(uv*900.*vec2(10.,1.))*sin(36.);

    float time = abs(sin(uTime));

    vec2 uvDisplaced1 = uv + rotate(-3.1415926/4.)*uvDivided*time;
    vec2 uvDisplaced2 = uv + rotate(-3.1415926/4.)*uvDivided*(1. - time);

    vec4 im1 = texture2D(uTextureOne, uvDisplaced1);
    vec4 im2 = texture2D(uTextureTwo, uvDisplaced2);

    gl_FragColor = texture2D(uTextureOne, uvDisplaced1);

    gl_FragColor = mix(im1, im2, time);
    //gl_FragColor = vec4(uvDivided, 0., 1.);
}