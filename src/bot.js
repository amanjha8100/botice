require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "--";

const s = require('./script.js');


//events

//Ready event -- Emitted when the client becomes ready to start working.
client.on('ready' , () => {
    console.log(`${client.user.tag} Bot loggd in`);
});

client.on('message', async (message) => {
    console.log(message.content);
    if(message.author.bot)
    return;
    // if(message.content === '--notice')
    // {
    //     let x = s.notice;
    //     console.log(x);
    // }
    if(message.content.startsWith(PREFIX)){
        const [CMD_NAME, ...args] = message.content.trim().substring(PREFIX.length).split(" ");
        if(CMD_NAME == 'notice')
        {
            let x = await s.notice;
            message.channel.send(`Even Semester: \nTitle: ${x.rawTxt} \nLink: ${x.srcTxt} \nTitle: ${x.rawTxt1} \nLink: ${x.srcTxt1} \nOdd Semester: \nTitle: ${x.rawTxt2} \nLink: ${x.srcTxt2} \nTitle: ${x.rawTxt3} \nLink: ${x.srcTxt3}`);
        }
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);