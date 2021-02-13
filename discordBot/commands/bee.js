const Discord = require('discord.js')

module.exports = {
    name: 'bee',
    description: 'ya like jazz?',
    execute(message, args){
       const beeembed = new Discord.MessageEmbed()
       .addField('ya like jazz?', '-barry benson')
       .setTitle(' ')
       .setColor(0xFFB6C1);

       message.channel.send(beeembed)
    }
}