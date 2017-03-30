function setup() {
  createCanvas(600, 400);
  p1= new Pacman(300,200);
}

function draw() {
 background(0);
 p1.display();
 p1.move();
 p1.boundary();
 
}

function Pacman(){
    this.x = 300;
    this.y = 200;
    this.radB = 30;
    this.radT = 305;
    this.rotation = 0;
    this.display = function(){
        fill(255,255,0)
        arc(this.x, this.y, 40, 40, radians(this.radB + this.rotation), radians(this.radT + this.rotation), PIE);
    };

    this.move = function(){
        if(keyIsDown(Up_ARROW)){
            this.y -= 5;
            this.rotation = 270;
        }
         if(keyIsDown(DOWN_ARROW)){
            this.y +=5;
            this.rotation = 90;
        }
         if(keyIsDown(LEFT_ARROW)){
            this.x -=5;
            this.rotation = 180;
        }
         if(keyIsDown(RIGHT_ARROW)){
            this.x +=5;
            this.rotation = 0;
        }
    };
    
    this.boundary = function(){
        if(this.x > width){
            this.x = 0;
        }
        if(this.x < 0){
            this.x = width;
        }
        if(this.y > height){
            this.y = 0;
        }
        if(this.y < 0){
            this.y = height;
        }
    };
}

