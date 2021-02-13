const Discord = require('discord.js')

module.exports = {
    name: 'kick',
    description: 'kick command',
    execute(message, args){
      const { member, mentions} = message

      const tag = `<@${member.id}>`

      if (
          member.hasPermission('ADMINISTRATOR') ||
          member.hasPermission('KICK_MEMBERS')
      ) {
          const target = mentions.users.first()
          if (target) {
              const targetMember = message.guild.members.cache.get(target.id)
              
            const kickedEmbed = new Discord.MessageEmbed()
            .setTitle('kicked')
            .addField(target.username + ' was kicked lol', 'owned')
            .setColor(0xFFB6C1);

              targetMember.kick()
              message.channel.send(kickedEmbed)
          } else {

              const mentionEmbed = new Discord.MessageEmbed()
              .setTitle('mention')
              .addField(message.author.username + ' mention someone to kick', 'please')
              .setColor(0xFFB6C1);

              message.channel.send(mentionEmbed)
          }
      } else {
          const noPerms = new Discord.MessageEmbed()
          .setTitle('no perms :(')
          .addField(message.author.username + ' you dont have permission to do that', 'F')
          .setColor(0xFFB6C1);

          message.channel.send(noPerms)
      }
    }
}