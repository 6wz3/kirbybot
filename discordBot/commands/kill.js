const Discord = require('discord.js');
const { disconnect } = require('mongoose');

module.exports = {
    name: 'kill',
    description: 'kill command',
    execute(message, args){
        let user = message.mentions.users.first();
        if(!user){

            const mentionEmbed = new Discord.MessageEmbed()
            .setTitle('mention')
            .addField('please mention the user you are killing', 'or no kill')
            .setColor(0xFFB6C1);

            return message.channel.send(mentionEmbed);
        } else {

            const deadEmbed = new Discord.MessageEmbed()
            .setTitle('dead lol')
            .addField(user.username + ' just died lol', 'rip them.')
            .setColor(0xFFB6C1);

             return message.channel.send(deadEmbed);
        }
       
    }
}