require('dotenv').config();

const { Client } = require('discord.js')
const client = new Client();
const PREFIX = "--";


//events

//Ready event -- Emitted when the client becomes ready to start working.
client.on('ready' , () => {
    console.log(`${client.user.tag} Bot loggd in`);
});

client.on('message', (message) => {
    console.log(message.content);
    if(message.author.bot)
    return;
    if(message.content.startsWith(PREFIX)){
        // message.reply("hello there!");
        const CMD_NAME = message.content.trim().substring(PREFIX.length).split(" ");
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);