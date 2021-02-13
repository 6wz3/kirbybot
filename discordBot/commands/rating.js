const { MessageReaction } = require("discord.js");
const Discord = require('discord.js')

module.exports = {
    name: 'rating',
    description: "this is a rating command",
    execute(message, args){
       let number = Math.floor(Math.random() * 11);
         
       const rateEmbed = new Discord.MessageEmbed()
           .setTitle('your rating..')
           .addField('i rate you a ' + number + ' out of 10', 'lol')
           .setColor(0xFFB6C1);

        message.channel.send(rateEmbed)
    }
}