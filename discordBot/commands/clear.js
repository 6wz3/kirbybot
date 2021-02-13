const Discord = require('discord.js');
const { disconnect } = require('mongoose');

module.exports = {
    name: 'clear',
    description: 'clear cmd',
    execute(message, args){

        const noPerms = new Discord.MessageEmbed()
        .setTitle('no perms')
        .addField('you dont have the permissions to do this', 'lol nerd')
        .setColor(0xFFB6C1);

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(noPerms)
        
        let deleteAmount; 
        
        const legitEmbed = new Discord.MessageEmbed()
        .setTitle('legitimate number')
        .addField('put a legitimate number lol', 'please')
        .setColor(0xFFB6C1);

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply(legitEmbed) }

        const errorEmbed = new Discord.MessageEmbed()
        .setTitle('error')
        .addField('you can only delete up to 99 messages at a time', 'F')
        .setColor(0xFFB6C1);
        
     if (parseInt(args[0]) > 101) {
         return message.reply(errorEmbed)
      } else {
          deleteAmount = parseInt(args[0]);
      }

      const delEmbed = new Discord.MessageEmbed()
      .setTitle('bulkDelete')
      .addField(`successfully deleted ${deleteAmount} messages`, 'thats epic')
      .setColor(0xFFB6C1);

      message.channel.bulkDelete(deleteAmount + 1, true);
    message.reply(delEmbed)
    }
    }