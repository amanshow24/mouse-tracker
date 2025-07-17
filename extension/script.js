const xDisplay = document.getElementById("x");
const yDisplay = document.getElementById("y");
const coordinates = document.getElementById("coordinates");

let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;

function animate() {
  currentX += (targetX - currentX) * 0.15;
  currentY += (targetY - currentY) * 0.15;

  const x = Math.round(currentX);
  const y = Math.round(currentY);

  xDisplay.textContent = x;
  yDisplay.textContent = y;
  coordinates.textContent = `(${x}, ${y})`;

  requestAnimationFrame(animate);
}

document.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

animate();
