class ball {

constructor(){

this.color = []


}
createBall() {
  var choice = [1,-1,]






  this.diam = 15;
  this.xSpeed = random(1,5);
  this.ySpeed = random(1, 5);
  this.xDir = random(choice);
  this.yDir = random(choice);
  this.xPos = random(this.diam / 2, width - (this.diam / 2));
  this.yPos = random(this.diam / 2, height - (this.diam / 2));

}

startMoving(){
  this.xPos += this.xSpeed * this.xDir;
  this.yPos += this.ySpeed * this.yDir;

if (this.xPos <= this.diam / 2 || this.xPos >= width - this.diam / 2){
  this.xDir *= -1;
  this.color = [255, 0, 0]
}
if (this.yPos <= this.diam / 2 || this.yPos >= height - this.diam / 2){
  this.yDir *= -1;
  this.color = [255, 0, 0]
}
}





show(){

  noStroke();
  fill(this.color[0],this.color[1],this.color[2])
  ellipse(this.xPos, this.yPos, this.diam)


}



intersects(other){
  let d = dist(this.xPos, this.yPos, other.xPos, other.yPos);
  return  (d <= this.diam + 4);


}

changeColor(r,g,b){
  this.color = [r,g,b]

}

inside(other){

let d = dist(this.xPos, this.yPos, other.xPos, other.yPos);

return (d < this.diam)


}



}
