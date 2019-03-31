const Discord = require('discord.js');
const request = require('request');
const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?lat=49.1282432&lon=-122.8120064&APPID=947b2819a1fc0597feceedec185da84a&units=metric'
const newsURL = 'https://newsapi.org/v2/top-headlines?country=ca&apiKey=f7fbd0b429434a64b21ee399f19113a0'
const bot = new Discord.Client();
const fs = require('fs');

var isReady = true;
//GET THE weather
var ights = ["but ight", "ight","buh ight","ight","butight","but ite","but ite","ite","buh ite"]



simranStop = ["Harsimran... Shut up.", "Yo Shut up", "please... consider suicide", "kys"];
sartajStop = ["stfu sartaj", "HOLY SHIT FAGGOT GO LOSE SOME FORTNITE GAMES", "REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"];
/*
bot.on('typingStart',(member) =>{
	console.log(Channel.id);
})*/


bot.on('typingStart',(channel,user) =>{

	if(user.username == 'cheesemaster420'){
		bot.channels.get(channel.id).send("shut up horse",{tts: true});
	}
})

bot.on('message', (message) => {
			console.log(message.author.username)
            msg = message.content.toLowerCase() //stores the message sent into 'msg'
            //notBot = !message.author.bot //to check if the message is sent by the bot to prevent infinity loop
			var notBot = message.author.username != 'BadBoyBot';

			//Checks if any of the ights were said
			for (i in ights){
			if (msg.includes(ights[i]) && notBot){
				message.reply("BUT IGHT BUT IGHT BUT IGHT BUT IGHT BUT IGHT. SHUT THE FUCK UP");
				break

			}
	}



            if (msg.includes("kys") && notBot) { //Makes sure that the message is lowercase and not sent by the bot

                message.reply(simranStop[random(simranStop)]);
            }


            else if (msg.includes("retard") && notBot) {
                message.channel.send("Here, I found you a retard", {

					files: ["https://i.ytimg.com/vi/d0X7sozwcbw/hqdefault.jpg"]

				});
        }
		else if (msg.includes("earrape") && message.author.username == "Yuvraj"){
			guild.ban()

		}

		else if ((msg.includes("fag") || msg.includes("faggot")) && notBot){
					message.reply("tf you say to me say that to my fucking face one more fucking time watch what tf happens bitch fuckity fuck fuck");

					}
			else if (msg.includes("reee") && notBot) {

                let rand = Math.floor(Math.random() * 10) //Random number between 0 and 10. If 5 then spam REEEEE

                if (rand == 5) {
					console.log("re")
					var interval = setInterval(function(){message.reply("REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");console.log("hi")},500)

					setTimeout(function(){
					clearInterval(interval);
					console.log("finished")	},5000)
				}


                else {
                    message.reply(sartajStop[random(sartajStop)])
                  }
            }

    else if (msg.includes("feelsbad") && notBot){
        message.channel.send("feelsbad",{
            files:[ "https://ih0.redbubble.net/image.437583177.0368/ap,550x550,16x12,1,transparent,t.png"]
        })
    }

    else if (msg.match(/d[0-9]+/) && notBot){
      let n = msg.replace(/[^0-9]+/g,"")

      message.channel.send(`You Rolled A: 🎲**${roll(n)}**🎲`,)

    }



    else if (msg.includes("weather") && notBot){

      request(weatherURL,(err,res,body)=>{
        var data = JSON.parse(body)

        message.channel.send(`The current weather in ${data.name} is "${data.weather[0].main}". The low today is ${data.main.temp_min} and a high of ${data.main.temp_max}. The current temperature is ${data.main.temp}\°C.`,{tts: true})
        setTimeout(function(){message.channel.send("You bitch", {tts: true})},11200)
      })

    }

    else if (msg.includes("nani") && isReady){
      isReady = false;
      var voiceChannel = message.member.voiceChannel;
      voiceChannel.join().then(connection =>
      {
        const dispatcher = connection.playFile('./audioFiles/nani.mp3');
        dispatcher.on("end", end =>{
          voiceChannel.leave();
        })
      }).catch(err => console.log(err));
      isReady = true
    }
	  else if (msg.includes("confidence") && isReady){
      isReady = false;
      var voiceChannel = message.member.voiceChannel;
      voiceChannel.join().then(connection =>
      {
        const dispatcher = connection.playFile('./audioFiles/confidence.mp3');
        dispatcher.on("end", end =>{
          voiceChannel.leave();
        })
      }).catch(err => console.log(err));
      isReady = true
    }
	else if (msg.includes("bhoond") && isReady){
      isReady = false;
      var voiceChannel = message.member.voiceChannel;
      voiceChannel.join().then(connection =>
      {
        const dispatcher = connection.playFile('./audioFiles/bhoond.mp3');
        dispatcher.on("end", end =>{
          voiceChannel.leave();
        })
      }).catch(err => console.log(err));
      isReady = true
    }
	else if (msg.includes("lambo") && isReady){
      isReady = false;
      var voiceChannel = message.member.voiceChannel;
      voiceChannel.join().then(connection =>
      {
        const dispatcher = connection.playFile('./audioFiles/lambo.mp3');
        dispatcher.on("end", end =>{
          voiceChannel.leave();
        })
      }).catch(err => console.log(err));
      isReady = true
    }
	else if (msg.includes("khalistan") && isReady){
      isReady = false;
      var voiceChannel = message.member.voiceChannel;
      voiceChannel.join().then(connection =>
      {
        const dispatcher = connection.playFile('./audioFiles/zindabaad.mp3');
        dispatcher.on("end", end =>{
          voiceChannel.leave();
        })
      }).catch(err => console.log(err));
      isReady = true
    }
	else if (msg.includes("ak47") && isReady){
      isReady = false;
      var voiceChannel = message.member.voiceChannel;
      voiceChannel.join().then(connection =>
      {
        const dispatcher = connection.playFile('./audioFiles/ak47.mp3');
        dispatcher.on("end", end =>{
          voiceChannel.leave();
        })
      }).catch(err => console.log(err));
      isReady = true
    }
	
	else if (msg.includes("yoooo") && isReady){
      isReady = false;
      var voiceChannel = message.member.voiceChannel;
	  let amountOfYo = (getYoFileLength().then((res, err) => {
		  
		  return(res)
		  
	  }).catch(err => console.error(err)));
	  
	  amountOfYo.then(len => {
		let randAudio = Math.floor(Math.random() * len) + 1
		voiceChannel.join().then(connection =>{
			const dispatcher = connection.playFile('./audioFiles/yo/' + randAudio + '.m4a');
			dispatcher.on("end", end =>{
				voiceChannel.leave();
			})
		}).catch(err => console.log(err));
		isReady = true
		  
	  })
	 }

	else if (msg.includes("ohhhh") && isReady){
      isReady = false;
      var voiceChannel = message.member.voiceChannel;
      voiceChannel.join().then(connection =>
      {
        const dispatcher = connection.playFile('./audioFiles/reaction.mp3');
        dispatcher.on("end", end =>{
          voiceChannel.leave();
        })
      }).catch(err => console.log(err));
      isReady = true
    }
	
	

    else if (msg.includes("news") && notBot){

      request(newsURL,(err,res,body)=>{
        var news = JSON.parse(body)
        var randomArticle = random(news.articles)
        message.reply(`${news.articles[randomArticle].title}\n${news.articles[randomArticle].description}\n${news.articles[randomArticle].url}`)

      })

    }
	else if (msg.includes("teams")){
     message.reply(getRandomTeams());
	 
      
    }
	else if (msg.includes("superplay") && notBot){
		let n = msg.replace("superplay","").trim()
		
		message.channel.send("!play https://www.youtube.com/watch?v=OIYy32RuHao");
        
      //message.channel.send(`You Rolled A: 🎲**${roll(n)}**🎲`,)

    }










});//part of bot.onMessage

getYoFileLength = () => {
	
	return new Promise( (resolve, reject) => {
			
		fs.readdir('./audioFiles/yo', (error, files) => {
	
			resolve(files.length)
			//NO NEED TO RETURN BECAUSE THE FUNCTION WILL JUST END WHEN PAST HERE
			
		})
		
	} )

}	

getRandomTeams = () => {
	let names = ["Ronit", "Yuvraj", "Harsimran", "Satraj"];
	for(let i = names.length - 1; i >= 0; i--){
		console.log(i)
		let rand = Math.floor(Math.random() * i) + 1;
		let temp = names[i];
		names[i] = names[rand];
		names[rand] = temp;
	}
	return(`${names[0]}, ${names[1]} VS ${names[2]}, ${names[3]}`)
	
}

roll = (d) =>{
  return(Math.floor(Math.random() * d ) + 1)
}
random = (arr) => {

        return Math.floor(Math.random() * arr.length)
}

bot.login('NTExNDAxNTUxODk0NTQ0Mzg0.DsqX3A.7t3FzGYwXBVyowf-1HQK046-Py4');
