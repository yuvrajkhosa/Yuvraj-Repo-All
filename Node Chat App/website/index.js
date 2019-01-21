var counter = 0
var currentTime;
var socket = io.connect('/')
var amountOfSpam = 1;
var headers = new Headers();
var header = document.getElementById("head")
var header2 = document.getElementById("head2")
var input = document.getElementById("textField")
var clientName = document.getElementById("clientName")
var name;

var clientCol = getRandomColor()
var firstClick = true



input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("submit").click();

  }
});





socket.on('toClient', (data)=>{
  var message = data.name + ": " + data.msg
  //console.log(data)
  // header.innerHTML = data[0]






var newHeader = document.createElement("h1")
newHeader.append(document.createTextNode(data.name + ": " + data.msg))
document.getElementById("ul").appendChild(newHeader)
newHeader.style.color = data.col
if (counter % 3 == 0){
  newHeader.className += "alert alert-danger log"
}
else if (counter % 2 == 0) {
  newHeader.className += "alert alert-secondary log"
}
else{
  newHeader.className += "alert alert-info log"
}
document.body.style.backgroundColor = data.msg

if (data.msg === "crash"){
  while (true){
    alert("HAHAHAHHA")
  }
}





counter++
})

submit = () =>{


  $("#clientName").slideUp(500)
  if (firstClick || Date.now() - currentTime > 500){
    currentTime = Date.now();
  //  console.log(currentTime)






function submitMessage(){
    if (input.value != ""){



    //clientName.style.display = "none"

    var message = {
      msg: input.value,

      name: clientName.value,

      col: clientCol,

      id: null,



    }

    socket.emit('toServer',message)



    // var x = document.createTextNode(clientName.value + ": " + input.value);
    // document.body.appendChild(x)
    // var breakElem = document.createElement("BR");
    // document.body.appendChild(breakElem)

    // var newPar = document.getElementById("l1")
    // var newMessageNode = document.createTextNode(clientName.value + ": " + input.value);
    // newPar.appendChild(newMessageNode)

    var newHeader = document.createElement("h1")
    newHeader.append(document.createTextNode(message.name + ": " + message.msg))
    document.getElementById("ul").appendChild(newHeader)
    newHeader.style.color = message.col

      newHeader.className += "log alert alert-light"



    // var breakElem = document.createElement("BR");
    // newPar.appendChild(breakElem)

    input.value = ""


  }

}

submitMessage()
}else{
  amountOfSpam++

}
  firstClick = false
    }

function getRandomColor(){
  var colorArray = ['#4286f4','#9e42f4','#ef8f62','#43afb7','#ff3f95','#ff0015','#000000','#ff00ff','#DC143C','#00CED1','#00FF7F'];


  return colorArray[Math.floor(Math.random() * colorArray.length)];

}
