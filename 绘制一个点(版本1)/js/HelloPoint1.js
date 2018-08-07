var gl;
// 顶点着色器程序
var VSHADER_SOURCE =
  'void main() {\n' +
  ' gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n' + // 设置坐标
  ' gl_PointSize = 10.0;\n' + // 设置尺寸
  '}\n';

// 片元着色器
var FSHADER_SOURCE =
  'void main() {\n' +
  ' gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' + // 设置颜色
  '}\n';

function main() {
  var canvas = document.getElementById('webgl');

  gl = getWebGLContext(canvas);

  if(!gl) {
    return;
  }

  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    return;
  }

  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  gl.clear(gl.COLOR_BUFFER_BIT);

  // 绘制一个点
  gl.drawArrays(gl.POINTS, 0, 1);
}

