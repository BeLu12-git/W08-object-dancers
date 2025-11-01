/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new BadbadtzSarah(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class BadbadtzSarah {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.t = 0;
    this.mouth = 0;
    this.jump = 0;
    this.jumpSpeed = 0;

    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.t += 0.05;
    this.mouth = sin(this.t);
    this.jump += this.jumpSpeed;
    this.jumpSpeed += 0.5;
    if (this.jump > 0) {
      this.jump = 0;
      this.jumpSpeed = random(-8, -5);
    }
    

  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    
    push();//身体
    translate(this.x, this.y+this.jump);
    rotate(sin(this.t)*0.1);
    fill(80);
    ellipse(0,40,80,90);
    fill(250);
    noStroke();
    ellipse(0,55,55,60);
    pop();

    push();//头
    translate(this.x, this.y+this.jump);
    noStroke();
    fill(80);
    ellipse(0,-20,70,60);
    
    fill(255);
    ellipse(-15,-30,15,20);
    ellipse(15,-30,15,20);
    
    fill(0);
    ellipse(-15,-30,5,8);
    ellipse(15,-30,5,8);
    
    
    noStroke();
    fill(255,245,127);
    ellipse(0,this.mouth-14.5,18,20);

    stroke(0);
    fill(255);
    ellipse(0,this.mouth-14.5,13,15);
    pop();
    
    push();//左翅膀
    translate(this.x-35, this.y+10+this.jump);
    rotate(sin(this.t)*0.5);
    noStroke();
    fill(100);
    ellipse(0,30,30,50);
    pop();
  
    push();//右翅膀
    translate(this.x+30, this.y+10+this.jump);
    rotate(-sin(this.t)*0.5);
    noStroke();
    fill(100);
    ellipse(0,30,30,50);
    pop();
  
    push();//脚
    translate(this.x, this.y+this.jump);
    rotate(sin(this.t)*0.1);
    fill(255,245,127);
    noStroke()
    ellipse(15,90,20,10);
    ellipse(-15,90,20,10);
    pop();
    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }

  
  drawReferenceShapes() {
    translate(this.x, this.y);
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(100);
    rect(-100, -100, 200,200 );
    fill(255);
    stroke(0);
  }
}




/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/