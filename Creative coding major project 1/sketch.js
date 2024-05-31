let balls = []; // save ball info
let minNumber;

let time1 = 0, time2 = 0, time3 = 0, time4 = 0;
let speed1 = 0.04, speed2 = 0.1, speed3 = 0.02, speed4 = 0.08;
let startTime;
let animationDuration = 5 * 1000; // Animation duration of 5 seconds (in milliseconds)
let stopDuration = 3 * 1000; // Stop duration of 3 seconds (in milliseconds)
let isAnimating = true;

function setup() {
  minNumber = Math.min(windowWidth, windowHeight);
  createCanvas(minNumber, minNumber);
  setupBalls();
  startTime = millis(); // Get the start time
}

// Initialize balls with random positions and speeds
function setupBalls() {
  balls = [];
  background(31, 74, 104);

  let numBalls = 500; // Number of balls to generate
  
  for (let i = 0; i < numBalls; i++) {
    let x = random(width);
    let y = random(height);
    let c = color(random(255), random(255), random(255));
    let speedX = random(-1, 1); // Random speed in x direction
    let speedY = random(-1, 1); // Random speed in y direction

    balls.push({ x: x, y: y, color: c, speedX: speedX, speedY: speedY });
  }
}

// Handle window resize event
function windowResized() {
  resizeCanvas(minNumber, minNumber);
  setupBalls(); // Recalculate ball positions based on new window size
}

// Main draw loop
function draw() {
  let currentTime = millis();
  if (isAnimating) {
    if (currentTime - startTime > animationDuration) {
      isAnimating = false; // Stop the animation
      startTime = millis(); // Record the stop start time
    }
  } else {
    if (currentTime - startTime > stopDuration) {
      isAnimating = true; // Restart the animation
      startTime = millis(); // Record the animation start time
      resetAnimation(); // Reset animation time and speed
    } else {
      return; // Do not draw anything during the stop period
    }
  }

  minNumber = Math.min(windowWidth, windowHeight);
  background(31, 74, 104);

  // Update time for each circle
  time1 += speed1;
  time2 += speed2;
  time3 += speed3;
  time4 += speed4;

  // Calculate new positions for the large circles based on time
  let x1 = minNumber * 0.3 + sin(time1) * 50;
  let y1 = minNumber * 0.25 + cos(time1) * 50;
  let x2 = minNumber * 0.85 + sin(time2) * 50;
  let y2 = minNumber * 0.2 + cos(time2) * 50;
  let x3 = minNumber * 0.2 + sin(time3) * 50;
  let y3 = minNumber * 0.85 + cos(time3) * 50;
  let x4 = minNumber * 0.8 + sin(time4) * 50;
  let y4 = minNumber * 0.75 + cos(time4) * 50;

  // Draw moving balls
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.x += ball.speedX; // Update x position
    ball.y += ball.speedY; // Update y position

    // Boundary detection and reverse movement
    if (ball.x < 0 || ball.x > width) ball.speedX *= -1;
    if (ball.y < 0 || ball.y > height) ball.speedY *= -1;

    fill(ball.color);
    strokeWeight(2);
    ellipse(ball.x, ball.y, minNumber * 0.02, minNumber * 0.02);
  }

  // Draw large circles with concentric circles inside them
  drawBigCircleWithCircles(x1, y1, minNumber * 0.55, ['#FFFFFF', '#4E9E48', '#FFFFFF', '#4E9E48', '#FFFFFF', '#4E9E48', '#FFFFFF', '#4E9E48', '#D449AC', '#F55060', '#000000', '#199B34', '#FFFFFF']);
  drawBigCircleWithCircles(x2, y2, minNumber * 0.4, ['#FFFFFF', '#ED6E0B', '#FFFFFF', '#ED6E0B', '#FFFFFF', '#ED6E0B', '#FFFFFF', '#ED6E0B', '#D449AC', '#4DADCE', '#000000', '#199B34', '#FFFFFF']);
  drawBigCircleWithCircles(x3, y3, minNumber * 0.5, ['#00238B', '#E0B155', '#00238B', '#E0B155', '#00238B', '#E0B155', '#00238B', '#E93B6E', '#FF3512', '#F363C5', '#000000', '#199B34', '#FF1B1D', '#FFFFFF']);
  drawBigCircleWithCircles(x4, y4, minNumber * 0.55, ['#FFFFFF', '#EB1D59', '#FFFFFF', '#EB1D59', '#FFFFFF', '#EB1D59', '#FFFFFF', '#EB1D59', '#D449AC', '#FC5E45', '#000000', '#FF1631', '#FF1B1D', '#FFFFFF', '#FFFFFF']);
}

// Draw a large circle with concentric circles inside it
function drawBigCircleWithCircles(x, y, diameter, colors) {
  drawBigCircle(x, y, diameter);
  drawCirclesInsideBigCircle(x, y, diameter, colors);
}

// Draw a large circle
function drawBigCircle(x, y, diameter) {
  fill(255);
  stroke(0);
  strokeWeight(minNumber * 0.02);
  ellipse(x, y, diameter);
}

// Draw concentric circles inside a large circle
function drawCirclesInsideBigCircle(x, y, diameter, colors) {
  let numOfCircles = colors.length;
  let circleDiameter = diameter;

  for (let i = 0; i < numOfCircles; i++) {
    drawCircle(x, y, circleDiameter, colors[i]);
    circleDiameter -= diameter / numOfCircles;
  }
}

// Draw a single circle
function drawCircle(x, y, diameter, strokeColor) {
  noFill();
  stroke(strokeColor);
  strokeWeight(minNumber * 0.05);
  ellipse(x, y, diameter);
}

// Handle mouse press event to change the speeds and colors
function mousePressed() {
  // Randomize the speeds to make changes more noticeable for each circle
  speed1 = random(0.03, 0.15); // Different speed range for first circle
  speed2 = random(0.06, 0.10); // Different speed range for second circle
  speed3 = random(0.01, 0.05); // Different speed range for third circle
  speed4 = random(0.16, 0.20); // Different speed range for fourth circle

}

// Reset animation parameters
function resetAnimation() {
  time1 = 0;
  time2 = 0;
  time3 = 0;
  time4 = 0;
  speed1 = random(0.03, 0.15); // Different speed range for first circle
  speed2 = random(0.06, 0.10); // Different speed range for second circle
  speed3 = random(0.01, 0.05); // Different speed range for third circle
  speed4 = random(0.16, 0.20); // Different speed range for fourth circle
}