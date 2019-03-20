const express = require('express');
const app = express();
const port = 3000;
const server = app.listen(port);
const io = require("socket.io")(server);
//const io = socket(server);
var itemsChamps = require("./champsItems.js")
app.use(express.static('public'));
var usernames = [];
var clients = 0;
console.log(`Server running on port ${port}`)

var items = itemsChamps.itemsArr();
var champs = itemsChamps.champsArr();
function getRandomItem(){
  return(items[Math.floor(Math.random() * items.length)])
}//Get random items from arrray

function getRandomChamp(){
  return(champs[Math.floor(Math.random() * champs.length)])
}
function returnRandomSet(){
  var itemsArr = [];
  for (let i = 0; i < clients; i++){
    itemsArr.push([])
    itemsArr[i].push(getRandomChamp());
    for(let j = 0; j < 6; j++){
      itemsArr[i].push(getRandomItem())
    }
  }

  return(itemsArr);
}

function randomizeArray(arr){
	for(let i = arr.length - 1; i >= 0; i--){
		let temp = arr[i];
		let randPos = Math.floor(Math.random() * i);
		arr[i] = arr[randPos]
		arr[randPos] = temp;
	}
	return(arr);
}
io.on("connect", (socket) => {
  clients++;
  usernames.push({id : socket.id, name : "NoNameGoof"})
  console.log(`New Connection: ${socket.id}`);
  //console.log(usernames)

  socket.on('username', (data) => {
    for(let i = 0; i < usernames.length; i++){
      if(usernames[i].id == socket.id){
        usernames[i].name = data;
      }
    }
	console.log(data);
  })

  socket.on('requestRandom', (data) => {//Recieved Request to send random
    io.emit('toClient', {
      data: returnRandomSet(),
      names: randomizeArray(usernames)
    })
  })
  socket.on("disconnect", (socket) => {
    usernames.splice(usernames.indexOf(socket.id), 1)
    clients--;
  })
})


