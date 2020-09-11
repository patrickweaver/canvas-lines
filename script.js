var matches = document.querySelectorAll("code");
for (var i = 0; i < matches.length; i++) {
  const e = matches[i];
  e.textContent = e.textContent.replace(/^\s+/mg, "");
}

var dpr = window.devicePixelRatio || 1;

const canvas1 = document.getElementById("canvas-1");
const ctx1 = canvas1.getContext("2d");
const canvas2 = document.getElementById("canvas-2");
const ctx2 = canvas2.getContext("2d");
const canvas3 = document.getElementById("canvas-3");
const ctx3 = canvas3.getContext("2d");
const canvas4 = document.getElementById("canvas-4");
const ctx4 = canvas4.getContext("2d");


const canvases = [canvas1, canvas2, canvas3, canvas4]

canvases.forEach(canvas => {
  canvas.width = 100;
  canvas.height = 100;
  const ctx = canvas.getContext("2d");
  ctx.strokeStyle = "#FF0000";
})

// - - - - - - - - - - - - - -
// Canvas 1
// - - - - - - - - - - - - - -
function drawCanvas1() {
  ctx1.beginPath();
  ctx1.moveTo(10, 0);
  ctx1.lineTo(10, 90);
  ctx1.moveTo(20, 0);
  ctx1.lineTo(70, 50);
  ctx1.stroke();
  ctx1.closePath();
}
drawCanvas1();

// - - - - - - - - - - - - - -
// Canvas 2
// - - - - - - - - - - - - - -
function drawCanvas2(spacing, lineWidth) {
  ctx2.clearRect(0, 0, 100, 100);
  ctx2.lineWidth = parseInt(lineWidth);
  ctx2.beginPath();
  for (var i = 0; i < 100; i += parseInt(spacing) + 1) {
    ctx2.moveTo(i, 0);
    ctx2.lineTo(i, 100);
  }
  ctx2.stroke();
  ctx2.closePath();
  ctx2.lineWidth = 1;
}

// line Spacing
const c2LineSpacing = document.getElementById("c2-line-spacing");
const c2LineSpacingLabel = document.getElementById("c2-line-spacing-label");
c2LineSpacingLabel.innerHTML = c2LineSpacing.value;

c2LineSpacing.oninput = (event) => {
  const v = c2LineSpacing.value;
  c2LineSpacingLabel.innerHTML = v;
  drawCanvas2(v, c2LineWidth.value);
}

// line width
const c2LineWidth = document.getElementById("c2-line-width");
const c2LineWidthLabel = document.getElementById("c2-line-width-label");
c2LineWidthLabel.innerHTML = c2LineWidth.value;

c2LineWidth.oninput = (event) => {
  const v = c2LineWidth.value;
  c2LineWidthLabel.innerHTML = v;
  drawCanvas2(c2LineSpacing.value, v);
}

drawCanvas2(c2LineSpacing.value, c2LineWidth.value)

// - - - - - - - - - - - - - -
// Canvas 3
// - - - - - - - - - - - - - -

function drawCanvas3(spacing, lineWidth) {
  ctx3.clearRect(0, 0, 100, 100);
  ctx3.translate(-0.5, -0.5);
  ctx3.lineWidth = parseInt(lineWidth);
  
  // Line 1
  ctx3.beginPath();
  ctx3.moveTo(0, 0);
  ctx3.lineTo(0, 40);
  ctx3.stroke();
  
  // Line 2
  ctx3.beginPath();
  ctx3.moveTo(25, 0);
  ctx3.lineTo(60, 40);
  ctx3.stroke();
  
  // Stripes
  for (var i = 0; i < 100; i += parseInt(spacing) + 1) {
    ctx3.beginPath();
    ctx3.moveTo(i, 50);
    ctx3.lineTo(i, 100);
    ctx3.stroke();
  }
  ctx3.lineWidth = 1;
  ctx3.resetTransform();
}

// line Spacing
const c3LineSpacing = document.getElementById("c3-line-spacing");
const c3LineSpacingLabel = document.getElementById("c3-line-spacing-label");
c3LineSpacingLabel.innerHTML = c3LineSpacing.value;

c3LineSpacing.oninput = (event) => {
  const v = c3LineSpacing.value;
  c3LineSpacingLabel.innerHTML = v;
  drawCanvas3(v, c3LineWidth.value);
}

// line width
const c3LineWidth = document.getElementById("c3-line-width");
const c3LineWidthLabel = document.getElementById("c3-line-width-label");
c3LineWidthLabel.innerHTML = c3LineWidth.value;

c3LineWidth.oninput = (event) => {
  const v = c3LineWidth.value;
  c3LineWidthLabel.innerHTML = v;
  drawCanvas3(c3LineSpacing.value, v);
}

drawCanvas3(c3LineSpacing.value, c3LineWidth.value)

// - - - - - - - - - - - - - -
// Canvas 4
// - - - - - - - - - - - - - -

function drawCanvas4(spacing, lineWidth) {
  ctx4.clearRect(0, 0, 100, 100);
  ctx4.translate(0.5, 0.5);
  ctx4.lineWidth = parseInt(lineWidth);
  
  // Line 1
  ctx4.beginPath();
  ctx4.moveTo(0, 0);
  ctx4.lineTo(0, 40);
  ctx4.stroke();
  
  // Line 2
  ctx4.beginPath();
  ctx4.moveTo(25, 0);
  ctx4.lineTo(60, 40);
  ctx4.stroke();
  
  // Stripes
  for (var i = 0; i < 100; i += parseInt(spacing) + 1) {
    ctx4.beginPath();
    ctx4.moveTo(i, 50);
    ctx4.lineTo(i, 100);
    ctx4.stroke();
  }
  ctx4.lineWidth = 1;
  ctx4.resetTransform();
}

// line Spacing
const c4LineSpacing = document.getElementById("c4-line-spacing");
const c4LineSpacingLabel = document.getElementById("c4-line-spacing-label");
c4LineSpacingLabel.innerHTML = c4LineSpacing.value;

c4LineSpacing.oninput = (event) => {
  const v = c4LineSpacing.value;
  c4LineSpacingLabel.innerHTML = v;
  drawCanvas4(v, c4LineWidth.value);
}

// line width
const c4LineWidth = document.getElementById("c4-line-width");
const c4LineWidthLabel = document.getElementById("c4-line-width-label");
c4LineWidthLabel.innerHTML = c4LineWidth.value;

c4LineWidth.oninput = (event) => {
  const v = c4LineWidth.value;
  c4LineWidthLabel.innerHTML = v;
  drawCanvas4(c4LineSpacing.value, v);
}

drawCanvas4(c4LineSpacing.value, c4LineWidth.value)

// - - - - - - - - - - - - - -
// Controls
// - - - - - - - - - - - - - -

function disableScaling() {
  scale(100)
  const scaleButton = document.getElementById("scale-button");
  const scaleStatus = document.getElementById("scale-status");
  scaleStatus.innerHTML = "not ";
  scaleButton.innerHTML = "Enable";
  scaleButton.onclick = enableScaling;
}

function enableScaling() {
  scale(300)
  const scaleButton = document.getElementById("scale-button");
  const scaleStatus = document.getElementById("scale-status");
  scaleStatus.innerHTML = "";
  scaleButton.innerHTML = "Disable";
  scaleButton.onclick = disableScaling;
}

function scale(size) {
  const cs = document.getElementsByTagName("canvas");
  for (var i = 0; i < cs.length; i++){
    var s = cs[i].style;
    s.width = `${size}px`;
    s.height = `${size}px`;
  }
}