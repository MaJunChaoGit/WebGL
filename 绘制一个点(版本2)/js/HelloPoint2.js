var VSHADER_SOURCE = 
  'attribute vec4 a_Position;\n' + // 存储限定符 类型 变量名
  'attribute float a_PointSize;\n' + // 存储限定符 类型 变量名
  'void main() {\n' +
  ' gl_Position = a_Position;\n' +
  ' gl_PointSize = a_PointSize;\n' +
  '}\n';

// 片元着色器
var FSHADER_SOURCE =
  'void main() {\n' +
  ' gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' + // 设置颜色
  '}\n';

/**
 * 先在shader中定义attribute 类型 变量名
 * 然后通过gl.getAttribLocation(gl.program, 变量名)获取变量内存位置
 * 然后通过vertextAttrib4f进行赋值
 * 最后通过drawArrays绘制
 * @return {[type]} [description]
 */
function main() {
  var canvas = document.getElementById('webgl');
  var gl = getWebGLContext(canvas);

  if(!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    return;
  }

  var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');

  if (a_Position < 0) {
    return;
  }

  gl.vertexAttrib4f(a_Position, 0.0, 0.0, 0.0, 1.0);
  gl.vertexAttrib1f(a_PointSize, 10.0);

  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.drawArrays(gl.POINTS, 0, 1);
}