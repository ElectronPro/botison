const Discord = require('discord.js');

const client = new Discord.Client();

const token = ('ODE2OTc0MzYwNzgyODMxNjM2.YECw2A._n0vCslfBDhAcVoiZCDxWuYQWj4')


client.on('ready', () =>{
      console.log("ready for action!");
      
})


client.login(process.env.BOT_TOKEN);
      
      
