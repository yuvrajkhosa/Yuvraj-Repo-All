const express = require('express');
const app = express();
const server = app.listen(3000);
const io = require('socket.io')(server);
app.use(express.static('public'));
console.log("Server running... ");

var clients = 0;
io.on("connect", (socket) => {
  console.log(socket.id);

  socket.on("disconnect", (socket) => {
    console.log("DISCONNEEEEEEEEECT!");
    clients--;
  })

  socket.on("eventChange", (data) => {
      console.log(data);
      io.emit("forClient", data);
  })

  socket.on("changeVideo", (url) =>{
      io.emit("forClient", url.substring(url.indexOf('=') + 1));
  })




})
