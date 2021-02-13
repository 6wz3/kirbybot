const Discord = require('discord.js')

module.exports = {
    name: 'astley',
    description: "this is rickroll command",
    execute(message, args){ 
        const astleyEmbed = new Discord.MessageEmbed()
        .setTitle(' ')
        .addField('https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'not a rickroll...')
        .setColor(0xFFB6C1);

        message.channel.send(astleyEmbed)
    }
}