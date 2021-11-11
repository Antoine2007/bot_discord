const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

const prefix = "!";

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.login("OTA0MDU3MTU0Njc0MjM3NTEw.YX1-1g.Bt1UtJskSjTbCMWjyMiVT1oY0z4");

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //!ping
    if(message.content === prefix + "à toi de jouer"){
        message.reply("yo yo yo !");
    }

});

