/* global createCanvas, colorMode, HSB, color, noStroke, fill, noFill, strokeWeight,
background, ellipse, text, stroke, line, globalS, globalB
width, height, mouseX, mouseY, rect, ellipse, random
mouseIsPressed, priorX, priorY, collideCircleCircle
keyCode, UP_ARROW, textSize, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW, consol, collideRectCircle
drop1, drop2, drop, windowWidth, windowHeight, HSL, old_dots, Dot
sqrt, round, mousePosition
*/

let backgroundColor, spherePosition, rectPosition

function setup() {
  // Canvas & color settings
  createCanvas(500, 400);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  // This variable contains a JSON object
  spherePosition = {
    "x": 100,
    "y": 100
  }
  
  rectPosition = {
    "x": 130,
    "y": 140
  }
}

function draw() {
  background(backgroundColor);
  ellipse(spherePosition.x, spherePosition.y, 20, 20);
  rect(rectPosition.x, rectPosition.y, 20, 20);
  line(spherePosition.x, spherePosition.y, rectPosition.x, rectPosition.y);
  
  let dist = computeDistance(spherePosition, rectPosition);
  let roundedDist = round(dist);
  text(`The distance between the circle and rectangle is ${roundedDist} units apart.`, 20, 20);
  
  mousePosition = {
    "x": mouseX,
    "y": mouseY
  }
  
  let mouseDist = round(computeDistance(mousePosition, rectPosition));
  text(`The mouse and rectangle are ${mouseDist} units apart.`, 200, 200);
  
  computeCategoryOfDistance(mousePosition, rectPosition);
  
  let category = computeCategoryOfDistance(mousePosition, rectPosition);
  text(`Warmer/Colder? ${category}`, 20, 350);
}

function computeDistance(point1, point2)
{
  let answer = sqrt((point2.x - point1.x)**2 + (point2.y - point2.x)**2);
  return answer;
}

function computeCategoryOfDistance(point1, point2)
{
  let distance = computeDistance(point1, point2);
  
  if (distance < 20) //hot
    {
      backgroundColor = color(0, 10, 100);
      return "hot";
    }
  else if (distance < 200) //warm
    {
      backgroundColor = color(120, 10, 100);
      return "warm";
    }
  else
    {
      backgroundColor = color(240, 10, 100);
      return "cold";
    }
}

function mousePressed() {
  spherePosition.x = random(width);
  spherePosition.y = random(height);
}
