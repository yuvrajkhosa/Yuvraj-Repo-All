var getRandomItem = () => {return(itemsArr[Math.floor(Math.random() * itemsArr.length)])}//Get random items from arrray

var getRandomChamp = () => {return(champsArr[Math.floor(Math.random() * champsArr.length)])}

var clientsCount = 0;
var startDrawing = false;
var itemsString = []
var champString = [""];
var names = [];
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
  createCanvas(displayWidth,displayHeight)
}

function draw(){
  if(startDrawing){
    background(240)
    rectMode(CENTER)
    textAlign(CENTER)
    var spaceBetween = 0;

    for(let playerCycles = 0; playerCycles < clientsCount; playerCycles++){
      textFont('Georgia', 30)
      let aboveOrBelow = playerCycles % 2 == 0 ? 1 : -1;
      if(playerCycles % 2 == 0){
        spaceBetween += (width / clientsCount) + (width / clientsCount / 2);
      }
      //text(itemsString, (spaceBetween), (height / 2) + ((height / 2.2) * aboveOrBelow) );
      text(itemsString[playerCycles][0], spaceBetween ,(height / 2) + ((height / 2.2) * aboveOrBelow))
      textFont('Arial', 25)
      text(names[playerCycles], spaceBetween ,(height / 2) +  ((height / 2.4) * aboveOrBelow))
      textFont('Georgia', 20)
      for(let i = 1; i < itemsString[0].length; i++){
        text(itemsString[playerCycles][i],spaceBetween, (height / 2) + (aboveOrBelow * (height / 7.2)) + (i * (height / 36) * aboveOrBelow));
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
  if(keyCode == ENTER){
    fullscreen(true);
    socket.emit('username', document.getElementById("nameField").value)
    document.getElementById("nameField").style.display = "none"
  }
}


/*function draw(){
  background(240)
  rectMode(CENTER)
  textAlign(CENTER)
  if(itemsString.length > 1){
    var spaceBetween = 0;
    for(let playerCycles = 0; playerCycles < clientsCount; playerCycles++){
      textFont('Georgia', 30)
      let aboveOrBelow = playerCycles % 2 == 0 ? 1 : -1;
      if(playerCycles % 2 == 0){
        spaceBetween += (width / clientsCount) + (width / clientsCount / 2);
      }

      text(champString[playerCycles], (spaceBetween), (height / 2) + ((height / 2.2) * aboveOrBelow) );
      textFont('Georgia', 20)
      for(let i = 0; i < itemsString[0].length; i++){
        text(itemsString[playerCycles][i],spaceBetween, (height / 2) + (aboveOrBelow * 165) + (i * 30 * aboveOrBelow));
      }
    }
  }
  strokeWeight(2)
  line(0, height / 2, width, height / 2)
}
function mousePressed(){
  //fullscreen(true)
  itemsString = []; //to add more arrays just do itemsString.push([])
  for(let i = 0; i < clientsCount; i++){
    itemsString.push([])
  }
  champString = [];
  for(let j = 0; j < clientsCount; j++){
    for(let i = 0; i < 6; i++){
      itemsString[j].push(getRandomItem());
    }
    champString.push(getRandomChamp());
  }
  console.log(itemsString)
}
*/
