function main() {
  var canvas = document.getElementById('webgl');

  // 获取跨浏览器兼容的webgl上下文
  var gl = getWebGLContext(canvas);

  if(!gl) {
    return;
  }
  // 指定背景色,这时颜色是被保存在WebGL系统中
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  
  // 当清除的颜色缓冲区时，将会使用gl.clearColor覆盖背景色
  gl.clear(gl.COLOR_BUFFER_BIT);
}