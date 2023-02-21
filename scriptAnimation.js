// Set up the canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array of particles
const particles = [];
for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 5 + 1,
    speedX: Math.random() * 3 - 1.5,
    speedY: Math.random() * 3 - 1.5,
  });
}

// Draw the particles
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2);
    ctx.fill();

    // Move the particles
    particles[i].x += particles[i].speedX;
    particles[i].y += particles[i].speedY;

    // Bounce the particles off the walls
    if (particles[i].x < 0 || particles[i].x > canvas.width) {
      particles[i].speedX = -particles[i].speedX;
    }
    if (particles[i].y < 0 || particles[i].y > canvas.height) {
      particles[i].speedY = -particles[i].speedY;
    }
  }
}

// Update the animation
function update() {
  draw();
  requestAnimationFrame(update);
}
update();
