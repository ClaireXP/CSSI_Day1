// Content behind double slashes is a comment.









// Scroll down to see a sample solution.









// Solutions are usually available for exercises and are
// there as a resource to you.



























/* Content within slash asterisk and asterisk slash is also a comment, and
   it can span multiple lines.
   
   This "global" comment below is used to tell Glitch that we are using
   some stuff that is not in this file, so don't warn us that it doesn't
   exist. */

/* global background, createCanvas, noFill, strokeWeight, stroke, ellipse */

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Brush settings
  noFill()
  strokeWeight(5)

  // Ring 1: Blue
  stroke(10, 134, 205)
  ellipse(50, 50, 50)

  // Ring 2: Yellow
  stroke(255, 214, 0)
  ellipse(80, 80, 50)

  // Ring 3: Black
  stroke(0, 0, 0)
  ellipse(110, 50, 50)

  // Ring 4: Green
  stroke(33, 176, 76)
  ellipse(140, 80, 50)

  // Ring 5:
  stroke(234, 30, 35)
  ellipse(170, 50, 50)
}