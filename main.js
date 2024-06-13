// City Setup
// Plan:
// 1 - sky gradually becomes darker
// 2 - sun sets and reappears as the moon
// 3 - windows become black (lights out)

// Animation Variableslet
roadDetails = 10;
skyR = 71;
skyG = 188;
skyB = 237;

sunY = 50;

towerR = 169;
towerG = 167;
towerB = 167;

groundR = 41;
groundG = 133;
groundB = 43;

sunColor = "yellow";

window11 = "white";
window21 = "white";
window31 = "white";
window41 = "white";

window12 = "white";
window22 = "white";
window32 = "white";
window42 = "white";

// Track frames gone by
let frame = 0;

requestAnimationFrame(draw);
function draw() {
  let cnv = document.getElementById("myCanvas");
  let ctx = cnv.getContext("2d");
  cnv.width = 400;
  cnv.height = 400;

  // Background - Sky

  ctx.fillStyle = `rgb(${skyR}, ${skyG}, ${skyB})`;
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  frame++;

  // sun
  ctx.fillStyle = sunColor;
  ctx.beginPath();
  ctx.arc(75, sunY, 35, 0, 2 * Math.PI);
  ctx.fill();

  // tower 1
  ctx.beginPath();
  ctx.fillStyle = `rgb(${towerR}, ${towerG}, ${towerB})`;
  ctx.fillRect(70, 100, 90, 200);

  // windows 1 on tower 1
  ctx.beginPath();
  ctx.fillStyle = window11;
  ctx.fillRect(80, 130, 25, 25);

  // window 2 on tower 1
  ctx.beginPath();
  ctx.fillStyle = window21;
  ctx.fillRect(124, 130, 25, 25);

  // window 3 on tower 1
  ctx.beginPath();
  ctx.fillStyle = window31;
  ctx.fillRect(80, 180, 25, 25);

  //window 4 on tower 1
  ctx.beginPath();
  ctx.fillStyle = window41;
  ctx.fillRect(124, 180, 25, 25);

  // tower 2
  ctx.beginPath();
  ctx.fillStyle = `rgb(${towerR}, ${towerG}, ${towerB})`;
  ctx.fillRect(220, 100, 90, 200);

  // window 1 on tower 2
  ctx.beginPath();
  ctx.fillStyle = window12;
  ctx.fillRect(230, 130, 25, 25);

  //window 2 on tower 2
  ctx.beginPath();
  ctx.fillStyle = window22;
  ctx.fillRect(275, 130, 25, 25);

  // window 3 on tower 2
  ctx.beginPath();
  ctx.fillStyle = window32;
  ctx.fillRect(230, 180, 25, 25);

  // window 4 on tower 2
  ctx.beginPath();
  ctx.fillStyle = window42;
  ctx.fillRect(275, 180, 25, 25);

  // ground
  ctx.beginPath();
  ctx.fillStyle = `rgb(${groundR}, ${groundG}, ${groundB})`;
  ctx.fillRect(0, 250, cnv.width, 250);

  // road
  ctx.beginPath();
  ctx.fillStyle = "rgb(55, 49, 49)";
  ctx.fillRect(0, 280, 400, 80);

  // road details
  ctx.beginPath();
  ctx.fillStyle = "white";
  for (
    let roadDetails = 10;
    roadDetails <= 400;
    roadDetails = roadDetails + 50
  ) {
    ctx.fillRect(roadDetails, 312, 30, 12);
  }
  ctx.font = "20px Georgia";
  ctx.fillText("Frame: " + frame, 275, 20);

  // ANIMATIONS

  // blue sky - rgb(71, 188, 237)
  // sunset - rgb(10, 10, 36)
  if (skyR <= 10) {
    skyR++;
  }

  if (skyG >= 5) {
    skyG--;
  }

  if (skyB >= 0) {
    skyB++;
  }

  // towers get darker
  if (towerR >= 67) {
    towerR--;
  }

  if (towerG >= 63) {
    towerG--;
  }

  if (towerB >= 63) {
    towerB--;
  }

  // ground - 19, 39, 20
  if (groundR >= 19) {
    groundR--;
  }

  if (groundG >= 39) {
    groundG--;
  }

  if (groundB >= 20) {
    groundB--;
  }
  // Sun sets
  // why can't i get the sun to settt
  if (sunY <= 100 && frame === 100) {
    sunY = sunY++; // or sunY++
  }

  // Sun to moon
  if (frame >= 100) {
    sunColor = "white";
  }

  if (frame >= 110) {
    window11 = "black";
  }

  if (frame >= 120) {
    window41 = "black";
  }

  if (frame >= 140) {
    window32 = "black";
  }

  if (frame >= 170) {
    window12 = "black";
  }

  if (frame >= 200) {
    window41 = "black";
  }

  if (frame >= 214) {
    window31 = "black";
  }

  if (frame >= 220) {
    window21 = "black";
  }

  if (frame >= 233) {
    window32 = "black";
  }

  if (frame >= 244) {
    window42 = "black";
  }

  if (frame >= 250) {
    window22 = "black";
  }

  requestAnimationFrame(draw);
}

// Animations
