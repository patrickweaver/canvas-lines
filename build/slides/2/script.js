function drawCanvas2() {
  ctx.beginPath();
  ctx.lineWidth = 50;
  ctx.moveTo(50, 10);
  ctx.lineTo(50, 90);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
}
drawCanvas2();