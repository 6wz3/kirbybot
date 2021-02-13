const { MessageAttachment } = require("discord.js")
const Discord = require('discord.js')

module.exports = {
    name: 'pee',
    description: "this is a pee command",
    execute(message, args){
       const image = ('https://media.discordapp.net/attachments/805248886587129918/805255216274341911/PEE.jpg?width=1009&height=567');
       
       const peeEmbed = new Discord.MessageEmbed()
       .setTitle('time to take a piss')
       .setImage(image)
       .setColor(0xFFB6C1); 

       message.channel.send(peeEmbed)
    }
}