var g, sensors = [];

var robots = [];
var velikost=400;

function setup() {
  var canvas=createCanvas(velikost, velikost);
  canvas.parent("sketch-container");
  g = createGraphics(velikost, velikost);
  g.noStroke();
  stroke('#f00');
  pixelDensity(1);
  sensors = [-PI / 4, 0, PI / 4];
  for(var i=0; i<6; ++i){
  	append(robots, new Robot());
  }
}
class Robot{
  constructor(){
    this.x = velikost*random();
    this.y = velikost*random();
    this.r = TWO_PI*random();
    this.randomChangeTime = 400+200*random();
    this.randomChangeTimer = 100;
    this.goalDirection = undefined;
    this.direction = 1;
  }
  move(){
    var dx = cos(this.r);
    var dy = sin(this.r);
    fill(255);
    var vr = (random() - random()) / 100;
    for (var i = 0; i < 3; ++i) {
      var cx = floor(this.x + cos(this.r + sensors[i]) * 14);
      var cy = floor(this.y + sin(this.r + sensors[i]) * 14);
      var c = pixels[4 * (cx + cy * width)];
      if (cx < 0 || cx > width || cy < 0 || cy > height) {
        c = undefined;
      }
      if (c != 0) {
        dx = 0;
        dy = 0;
        vr = 0.1;
      }
      //ellipse(cx, cy, 5, 5);
    }
    if(this.randomChangeTimer == 0){
      this.goalDirection=(random()*TWO_PI)%TWO_PI;
    }else{
      this.randomChangeTimer--;
    }
    if(random() < 0.001) this.direction*=-1;
    if(this.goalDirection != undefined){
      vr=0.1;
      dx=0;
      dy=0;
      if(abs(this.r - this.goalDirection)<vr){
        this.goalDirection=undefined;
        this.randomChangeTimer = this.randomChangeTime;
      }
    }
    vr -= 0.001;
    this.x += dx;
    this.y += dy;
    vr = min(0.1, max(vr, -0.1));
    this.r += vr*this.direction;
    this.r=(this.r+TWO_PI)%TWO_PI;
    g.fill('#0f0');
    g.ellipse(this.x, this.y, 20, 20);
    ellipse(this.x, this.y, 20, 20);
    line(this.x,this.y,
         this.x+10*cos(this.r),
      	 this.y+10*sin(this.r));
  }
}


function draw() {
  background(0);
  if (mouseIsPressed) {
    g.fill("#fff");
    g.ellipse(mouseX, mouseY, 20, 20);
  }
  image(g, 0, 0);
  for(var i=0; i<robots.length; ++i){
  	robots[i].move();
  }

  loadPixels();
}

