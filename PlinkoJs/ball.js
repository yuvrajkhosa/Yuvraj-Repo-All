class Ball{
  constructor(x, y, d, m){
    this.pos = createVector(x,y);
    this.diameter = d;
    this.accel = createVector(0, 0);
    this.vel = createVector(0,0);
    this.mass = m;
    this.doUpdates = true;
    this.isReleased = false;
  }

  applyForce(givenForce){
    var f = givenForce.div(this.mass);
    this.accel.add(f);
  }
  update(){
    if(this.doUpdates){
      this.vel.add(this.accel);
      this.pos.add(this.vel);
      this.accel.mult(0);//make sure acceleration is not accumalated.
    }
  }
  show(){
    fill(255, 200);
    ellipse(this.pos.x, this.pos.y, this.diameter);
  }
  bounce(){
    if((this.pos.y + this.diameter / 2) > height){
      this.pos.y = height - this.diameter / 2;
      this.vel.y *= -0.2;//Not make this one, if we make it to one, then all the enegry is transferred into the bounce. ALL OF THE ENERGY!
      this.vel.x *= -0.1;//Try to dampen the impact
      setTimeout(() => {
        ballArr[0] = null;
        ballArr.splice(0,1);
        ballArr.push(new Ball(0,0, 40, 30));
        console.log(ballArr);
      }, 3000);
    }
    if(this.pos.x > height || this.pos.x < 0){
      if(this.pos.x > height / 2){
        this.pos.x = height;
      }
      else{
        this.pos.x = 0;
      }
      this.vel.x *= -1;
    }
  }
}

class Peg{
  constructor(x, y, d){
    this.pos = createVector(x, y);
    this.diameter = d;
  }
  show(){
    stroke(155)

    fill(230)
    ellipse(this.pos.x, this.pos.y, this.diameter);
  }

  checkCollision(ball){
    if(dist(this.pos.x, this.pos.y, ball.pos.x, ball.pos.y) - ((this.diameter / 2) + (ball.diameter / 2)) <= 3){
      //ball.pos.y = this.pos.y - ((this.diameter / 2) + (ball.diameter / 2))
      ball.vel.mult(-0.4);
      ball.vel.add(p5.Vector.sub(ball.pos, this.pos).setMag(10))//This is a vector that points from the middle of the peg (that is impacted) to the middle of the ball. Then we just apply this vector to the ball to simulate impact direction
      ball.vel.add(createVector(Math.random(-0.1, 0.1), Math.random(-0.1, 0.1)));

    }
  }

}
