var getRandomItem = () => {return(itemsArr[Math.floor(Math.random() * itemsArr.length)])}//Get random items from arrray

var getRandomChamp = () => {return(champsArr[Math.floor(Math.random() * champsArr.length)])}

var clientsCount = 0;
var startDrawing = false;
var itemsString = []
var champString = [""];
var names = [];
var spaceBetween;
var spaceBetweenMult;
var aboveOrBelow;


var socket = io.connect('/');
socket.on('toClient', (data) => {
  clientsCount = data.data.length;
  itemsString = data.data;

  startDrawing = true;
  names = [];
  for(let i = 0; i < clientsCount; i++){
	  names.push(data.names[i].name)
  }
  console.log(names)

});
socket.on('connect', () => {
  console.log(socket.id)
})
function setup(){
  createCanvas(displayWidth,displayHeight);
  spaceBetween = 0;
}

function draw(){
  if(startDrawing){
    background(240)
    rectMode(CENTER)
    textAlign(CENTER)
    
    spaceBetween = 1;
    spaceBetweenMult = 1;
    for(let playerCycles = 0; playerCycles < clientsCount; playerCycles++){
      textFont('Georgia', 30)
      if(playerCycles % 2 == 0){
        var aboveOrBelow = 1;
      }
      else{
        var aboveOrBelow = -1;
      }
      if((playerCycles) % 4 == 0){
        spaceBetweenMult *= -1;
      }
      else if(playerCycles % 2 == 0 && playerCycles != 0){
        spaceBetween += 250;
      }
      

      
     
      //text(itemsString, (width / 2) + (spaceBetween * spaceBetweenMult), (height / 2) + ((height / 2.2) * aboveOrBelow) );
      text(itemsString[playerCycles][0], (width / 2) + (spaceBetween * spaceBetweenMult), (height / 2) + (50 * aboveOrBelow))
      textFont('Arial', 28)
      text(names[playerCycles], (width / 2) + (spaceBetween * spaceBetweenMult), (height / 2) + (height / 3.2 * aboveOrBelow))
      textFont('Georgia', 20)
      for(let i = 1; i < itemsString[0].length; i++){
        text(itemsString[playerCycles][i], (width / 2) + (spaceBetween * spaceBetweenMult), (height / 2) + (aboveOrBelow * (height / 14)) + (i * (height / 36) * aboveOrBelow));
      }
    }
    strokeWeight(2)
    line(0, height / 2, width, height / 2)
  }
}

function keyPressed(){
  if(keyCode == LEFT_ARROW){
    socket.emit('requestRandom', 1);
  }
  if(keyCode == ENTER && document.getElementById("nameField").value.trim() != ""){
    fullscreen(true);
    socket.emit('username', document.getElementById("nameField").value)
    document.getElementById("nameField").style.display = "none"
  }
}


