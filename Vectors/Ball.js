class Ball{

    constructor(x = 300,y = 300,inputDiam = 60){
      this.color = [random(255),random(255),random(255)]
      this.stroke = [random(255),random(255),random(255)]
      this.pos = createVector(x,y)
      this.diam = inputDiam;
      this.accel = createVector(0,0);
      this.vel = createVector(0,0)
      this.mass = random(0.3, 5)
    }




  update(){



    this.vel.add(this.accel)
    this.pos.add(this.vel)
    this.accel.mult(0);


  }

  applyForce(f){
    f.div(this.mass)
    this.accel.add(f)
  }

  show(){
    fill(this.color)

    ellipse(this.pos.x, this.pos.y, this.diam)
    textSize(16)
    fill(0)
    text("Yuvys", this.pos.x - 10, this.pos.y - 20)



  }




  bounce(){
    if(this.pos.x > width){
      this.pos.x = width;
      this.vel.x *= -1;
         }

    if (this.pos.y > height) {
      this.pos.y = height
      this.vel.y *= -1;
    }

    if (this.pos.y < 0){
      this.pos.y = 0
      this.vel.y *= -1;
    }
  }




}
