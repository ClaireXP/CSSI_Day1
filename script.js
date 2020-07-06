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
  var r = 50;

  noFill();
  strokeWeight(w);

  //Blue ring
  stroke("#1aa3ff");
  ellipse(25+w, 25+w, r, r);

  //Yellow ring
  stroke("#ffc61a");
  ellipse(50 + w + i, 50 + w, r, r);

  //Blue arc
  stroke("#1aa3ff");
  arc(25 + w, 25 + w, r, r, PI + HALF_PI, QUARTER_PI);

  //Black ring
  stroke("#000000");
  ellipse(75 + w + 2 * i, 25 + w, r, r);

  //Yellow arc
  stroke("#ffc61a");
  arc(50 + w + i, 50 + w, r, r, PI + HALF_PI, PI + HALF_PI + QUARTER_PI);

  //Green ring
  stroke("#00b300");
  ellipse(100 + w + 3 * i, 50 + w, r, r);

  //Black arc
  stroke("#000000");
  arc(75 + w + 2 * i, 25 + w, r, r, PI + HALF_PI, QUARTER_PI);

  //Red ring
  stroke("#ff4d4d");
  ellipse(125 + w + 4 * i, 25 + w, r, r);

  //Green arc
  stroke("#00b300");
  arc(100+w+3*i, 50 +w, r, r, PI + HALF_PI, PI + HALF_PI + QUARTER_PI);

  //Linux Logo
  strokeWeight(1);

  stroke("#000000");
  fill("#000000");
  //Body base
  ellipse(200, 300, 200, 200);

  //Head base
  ellipse(200, 190, 100, 80);

  //Wings
  ellipse(102, 322, 8, 60);
  ellipse(298, 322, 8, 60);

  stroke("#FFFFFF");
  fill("#FFFFFF");
  //White part of body
  ellipse(200, 310, 160, 190);

  //Eyes
  ellipse(185, 187, 27, 35);
  ellipse(215, 187, 27, 35);

  //Pupils
  stroke("#000000");
  fill("#000000");
  ellipse(190, 188, 10, 15);
  ellipse(210, 188, 10, 15);

  //Water
  stroke("#FFFFFF");
  fill("#FFFFFF");
  rect(187.5, 181, 3, 3);
  rect(207.5, 181, 3, 3);

  stroke("#ffd633");
  fill("#ffd633");
  //Feet
  ellipse(155, 385, 80, 20);
  ellipse(245, 385, 80, 20);

  //Beak
  ellipse(200, 210, 45, 20);
  ellipse(200, 205, 25, 20);
}

/* Content within slash asterisk and asterisk slash is also a comment, and
   it can span multiple lines.
   
   This "global" comment below is used to tell Glitch that we are using
   some stuff that is not in this file, so don't warn us that it doesn't
   exist. */

/* global background, createCanvas, noFill, strokeWeight, stroke, ellipse, rect, fill, arc */
