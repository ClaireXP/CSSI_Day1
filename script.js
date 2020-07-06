// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

function setup() {
  // Code here runs only once
  createCanvas(800, 600);
}

function draw() {
  // Code here runs continuously
  background("#33cccc");
  
  stroke("yellow");
  fill("yellow");
  ellipse(100, 100, 50, 50);
  
  //Sky blue color
  stroke("#5cd65c");
  fill("#5cd65c");
  rect(0, 400, 800, 199);
  
  stroke("black");
  fill("black");
  ellipse(400, 360, 60, 100);
  rect(20, 20, 20, 20);
}

/* Content within slash asterisk and asterisk slash is also a comment, and
   it can span multiple lines.
   
   This "global" comment below is used to tell Glitch that we are using
   some stuff that is not in this file, so don't warn us that it doesn't
   exist. */

/* global background, createCanvas, noFill, strokeWeight, stroke, ellipse, rect, fill */
