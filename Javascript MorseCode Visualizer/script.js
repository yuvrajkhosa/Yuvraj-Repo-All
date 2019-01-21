const fps = 30;
const dotTime = 0.2;//AFter what amount of time to stop the dot
const dashTime = 1;//AFter what amount of time to stop the dash
const coolDownTime = 0.7;//How long to wait before next symbol
var counter = 0;
var coolDown = true
var morseString = ". . . - . . . . - - -"
var arr = morseString.split(' ').reverse();//Must reverse array because it takes current dot or dash from the end. so reverse the reverse.
function setup(){
  frameRate(fps);
  createCanvas(600,600);
}
function draw(){
  var index = arr.length - 1;//Must update length everytime in order to keep it dynamic.
  if (arr[index] == "." && coolDown){//Check to see if current time is dash or dot.
    background(255,0,0);//BLINK
    if(counter == (fps * dotTime)){//If time for dot is up
      counter = 0;
      coolDown = false;
      arr.pop();//Remove dot from array
    }
    counter++;//This goes up everytime if time is NOT up.
  }
  else if(arr[index] == "-" && coolDown){//Same for dot but in DASH.
    background(255,0,0)
    if (counter == (fps * dashTime)){
      counter = 0;
      coolDown = false;
      arr.pop();
    }
    counter++;
  }
  else{
    background(0);
  }
  if (!coolDown){//If current dot or dash is finished. This will execute to wait before playing next dot or dash.
  //  counter = 0;
    if (counter == (fps * coolDownTime)){//To check if cooldown time is over.
      coolDown = true;
      counter = 0;
    }
    counter++;
  }//Could use coolDownCounter but this is easier. Takes up less memory.
}
