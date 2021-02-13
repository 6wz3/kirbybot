const Discord = require('discord.js')

module.exports = {
    name: 'ban',
    description: 'ban command',
    execute(message, args){
      const { member, mentions} = message

      const tag = `<@${member.id}>`

      if (
          member.hasPermission('ADMINISTRATOR') ||
          member.hasPermission('BAN_MEMBERS')
      ) {
          const target = mentions.users.first()
          if (target) {
              const targetMember = message.guild.members.cache.get(target.id)
              
            const bannedEmbed = new Discord.MessageEmbed()
            .setTitle('banned')
            .addField(target.username + ' was banned lol', 'owned')
            .setColor(0xFFB6C1);

              targetMember.ban()
              message.channel.send(bannedEmbed)
          } else {

              const mentionEmbed = new Discord.MessageEmbed()
              .setTitle('mention')
              .addField(message.author.username + ' mention someone to ban', 'please')
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