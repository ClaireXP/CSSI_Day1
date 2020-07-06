// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

function setup() {
  // Code here runs only once
  createCanvas(800, 600);
}

function draw() {
  background("white");
  
  //Olympic Rings
  var w = 5;
  var i = 4.5;
  
  noFill();
  strokeWeight(w);
  
  //Blue ring
  stroke("#1aa3ff");
  ellipse(25+w,25+w,50,50);
  
  //Yellow ring
  stroke("#ffc61a");
  ellipse(50+w+i,50+w,50,50);
  
  //Blue arc
  stroke("#1aa3ff");
  arc(25+w,25+w,50,50, PI+HALF_PI, QUARTER_PI);
  
  //Black ring
  stroke("#000000");
  ellipse(75+w+2*i,25+w,50,50);
  
  //Yellow arc
  stroke("#ffc61a");
  arc(50+w+i,50+w,50,50, PI+HALF_PI, PI+HALF_PI+QUARTER_PI);
  
  //Green ring
  stroke("#00b300");
  ellipse(100+w+3*i,50+w,50,50);
  
  //Black arc
  stroke("#000000");
  arc(75+w+2*i,25+w,50,50, PI+HALF_PI, QUARTER_PI);
  
  //Red ring
  stroke("#ff4d4d");
  ellipse(125+w+4*i,25+w,50,50);
  
  //Green arc
  stroke("#00b300");
  arc(100+w+3*i,50+w,50,50, PI+HALF_PI, PI+HALF_PI+QUARTER_PI);
  
  
  //Logo
  var c = "#000000";
  w = 1;
  strokeWeight(1);
  stroke(c);
  fill(c);
  
  rect(15, 150, 150, 150);
}

function update(){
  strokeWeight(1);
  stroke(c);
  fill(c);
}

/* Content within slash asterisk and asterisk slash is also a comment, and
   it can span multiple lines.
   
   This "global" comment below is used to tell Glitch that we are using
   some stuff that is not in this file, so don't warn us that it doesn't
   exist. */

/* global background, createCanvas, noFill, strokeWeight, stroke, ellipse, rect, fill, arc */
