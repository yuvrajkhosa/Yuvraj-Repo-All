var socket;
var socketId;
var counter = 0;
var inputURL = document.getElementById("inputURL");
socket = io.connect('/');
// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
window.onYouTubeIframeAPIReady = function() {
  player = new YT.Player('player', {
      videoId: 'ErQQc6cUSTA',
      height: '400',
      width: '800',
      playerVars: {
          color: "red",
          controls: 1,
          autoplay: 0,
          enablejsapi: 1,
          iv_load_policy: 3,
          // modestbranding: 1,
          showinfo: 1
      },
      events: {
        "onReady" : onPlayerReady,
        "onStateChange": onPlayerStateChange
      }
  });
};

function onPlayerReady(){
  console.log("Ready");
}

// function getId(url){//Finds the equals in the URL and starts the string from one more than that
//   return(url.substring(url.indexOf('=') + 1));
// }
//
function onPlayerStateChange(event){
  if(counter == 0){
    socket.emit("eventChange",
    {
      "id": socketId,
      "type": event.data,
      "time": player.getCurrentTime()
    });
  }
  else{
    counter--;
  }
}

inputURL.addEventListener("keyup", event => {//Press enter in input bar
  if(event.keyCode == 13){
    event.preventDefault();
    socket.emit("changeVideo", inputURL.value);
    inputURL.value = "";
  }
});



socket.on('clientCount', (count) => {
    document.getElementById("clientCount").innerHTML = count;
})

socket.on('connect', () => {
  socketId = socket.id;
  console.log(`${socketId} connected`);

});

// socket.on('addNameForClient', (name) => {
//   document.getElementById("names").innerHTML = document.getElementById("names").innerHTML + "<br>" + name;
// });
// 
// socket.on('removeNameForClient', (name) => {
//
// })

socket.on('forClient', (data) => {
  if(typeof data == "string"){
    player.loadVideoById(data);
    setTimeout(() => {
    //  player.playVideo()
    }, 500);
  }
  else{
    if(data.id != socketId){//Execute if message not from self
      console.log(`Type: ${data.type}`);
      switch(data.type){
        case(1):

          console.log("Playing... ");
          counter = 2;
          player.seekTo(data.time);
          player.playVideo();
        break;

        case(2):
          console.log("Pausing... ");
          player.seekTo(data.time);
          player.pauseVideo();
        break;

      }
    }
  }
})
