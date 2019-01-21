const express = require('express')
const app = express();
const messages = []

var server = app.listen(3000, () =>{console.log("listening")});

const io = require('socket.io')(server)
app.use(express.static('website'))

io.sockets.on('connection',(socket) =>{
    console.log("New User " + socket.id)


    socket.on('disconnect',() =>{
      console.log(`User ${socket.id} has disconnected`)
    })
    socket.on('toServer',(data) =>{

      data.id = socket.id
      console.log(data)





      socket.broadcast.emit('toClient',data)
    })

})
