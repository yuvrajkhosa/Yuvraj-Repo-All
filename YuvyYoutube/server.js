const express = require('express');
const app = express();
const server = app.listen(3000);
const io = require('socket.io')(server);
app.use(express.static('public'));
console.log("Server running... ");

var names = {};
var clients = 0;
io.on("connect", (socket) => {
  clients++;
  updateClientCount();




  socket.on("disconnect", () => {
    console.log("DISCONNEEEEEEEEECT!");
    clients--;
    updateClientCount();
    // io.emit("removeNameForClient", names[socket.id.substring(0, 4)]);
    // delete names[socket.id.substring(0, 4)];
    // console.log(names);
    console.log(`Clients: ${clients}`)
  });

  // socket.on("addNameForServer", (name) => {
  //     console.log(`Adding name: ${name}`);
  //     names[socket.id.substring(0, 4)] = name;//Only use first 4 charactes of id.
  //     console.log(names);
  //     io.emit("addNameForClient", name);
  // });

  socket.on("eventChange", (data) => {
      console.log(data);
      io.emit("forClient", data);
  });

  socket.on("changeVideo", (url) =>{

	  io.emit("forClient", extractID(url));
  });




})

function updateClientCount(){
  io.emit("clientCount", clients);
}

function extractID(url){
  var finalString;
  if(url.includes(".com")){//Nomral url looking for "com" because only normal urls have .com
    if(url.includes("&")){//Check if any url parameters are present
      console.log("1")
     finalString = (url.substring(url.indexOf("=") + 1, url.indexOf("&")))//Go from the equals to the parameters
    }
    else{
      console.log("2")
      finalString = (url.substring(url.indexOf("=") + 1));//No parameters.
    }
  }
  else{//youtu.be url
    if(url.includes("?")){//If using shortened youtu.be url.
      console.log("3")
      finalString = (url.substring(url.indexOf("/", 10) + 1, url.indexOf("?")))
    }
    else{
      console.log("4")
      finalString = (url.substring(url.indexOf("/", 10) + 1));
    }
  }
  return(finalString);
}
