
var constant = -0.01;
var ballsArr = []
function setup(){
  createCanvas(600,600)
for (i = 0; i < 10; i++){
  ballsArr[i] = new Ball(300 + random(-200, 200),300 ,30)
}

}

function draw(){
  background(200)
  for (ball of ballsArr){
  var gravity = createVector(0, 0.03)
  gravity.mult(ball.mass)//Make them fall at same time. Multiply the gravity and ball mass to make it back to 0.05. Which it was before. Sooo all balls affected by same amount of gravity
  var wind = createVector(0.02, 0)
  var friction = createVector(ball.vel.x, ball.vel.y)
  friction.normalize()
  var co = -0.01;
  friction.mult(co)
  var drag = createVector(ball.vel.x, ball.vel.y);
    drag.normalize();
  var speed = ball.vel.magSq()

  drag.mult(speed * speed * constant )
if (keyIsPressed){
  ball.applyForce(drag)
}

  ball.applyForce(gravity)
  ball.applyForce(wind)
  if(keyIsPressed){
    ball.applyForce(friction)

  }


  ball.show()
  ball.update()
  ball.bounce()
}

}
