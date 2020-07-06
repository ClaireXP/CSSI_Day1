// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

function setup() {
  // Code here runs only once
  createCanvas(600, 200);
}

function draw() {
  background("white");
  
  var w = 6;
  var i = 2;
  
  noFill();
  strokeWeight(w);
  
  stroke("#1aa3ff");
  ellipse(25+w+i,25+w,50,50);
  
  stroke("#ffc61a");
  ellipse(50+w+i,50+w,50,50);
  
  stroke("black");
  ellipse(75+w+i,25+w,50,50);
  
  stroke("#ffc61a");
  ellipse(100+w,50+w,50,50);
  
  stroke("#ffc61a");
  ellipse(125+w,25+w,50,50);
}

/* Content within slash asterisk and asterisk slash is also a comment, and
   it can span multiple lines.
   
   This "global" comment below is used to tell Glitch that we are using
   some stuff that is not in this file, so don't warn us that it doesn't
   exist. */

/* global background, createCanvas, noFill, strokeWeight, stroke, ellipse, rect, fill */
