const Discord = require('discord.js');
const mongoose = require('mongoose');
const client = new Discord.Client();
mongoose.connect('mongodb+srv://6wz3:helloworld@cluster0.uhpun.mongodb.net/Data', { useNewUrlParser: true, useUnifiedTopology: true});
const prefix = '.'
const fs = require('fs');


client.commands = new Discord.Collection();

client.on('message', async message => { //verify channel setup
    if(message.author.bot) return;
    if(message.content.toLowerCase() === ".verify" && message.channel.id === '805962715633418300')
    {

        const role = message.guild.roles.cache.get('805954146980331550');
        if(role) {
              await message.member.roles.add(role);             
            }
        }
    }  
)

client.on('guildMemberAdd', member => { //welcome message
    const channel = member.guild.channels.cache.find(channel => channel.name === "👋-welcome")
    if(!channel) return

    const enterEmbed = new Discord.MessageEmbed()
    .setTitle('welcome')
    .addField(`welcome to hell, ${member}, please read the rules before doing anything.`, 'good luck')

    channel.send(enterEmbed)
})

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); //has to do with setting up commands idk
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.once('ready', () => { //logs that bot is online
    console.log('yo im online');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix)  || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'astley'){
        client.commands.get('astley').execute(message, args);
    } else if(command === 'bee'){
        client.commands.get('bee').execute(message, args);
    } else if(command === 'pee'){
        client.commands.get('pee').execute(message, args);
    } else if(command ==='kill'){
        client.commands.get('kill').execute(message, args);
    } else if(command === 'rate'){
        client.commands.get('rating').execute(message, args);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if(command === 'scream'){
        client.commands.get('scream').execute(message, args);
    } else if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }
})


const helpEmbed = new Discord.MessageEmbed() //help command
.setTitle("list of commands") 
.addField(" - .astley", "totally not a rickroll command") 
.addField(" - .bee", "ya like jazz?") 
.addField(" - .kill", "kill a player (dont forget to mention a user)") 
.addField(" - .pee", "time to take a piss") 
.addField(" - .rate", "let a bot rate you")
.addField(" - .kick", "mention a user to kick (mod+)")
.addField(" - .ban", "mention a user to ban (admin+)")
.addField(" - .scream", "its fun to spam.")
.addField(" - .clear", "can only clear up to 99 messages. (parseInt wont let me do higher D: )")
.setColor(0xFFB6C1) 
.setFooter("bot made by aaaaaaaaaaaaaaaaaaaaaaaaaaa#8896, version 2.6 (embed update! everything looks nicer!)")
.setAuthor("kirbybot")

client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.includes(".help")){
        message.channel.send(helpEmbed);
    }
})

//end of help command

//extra garbage commands

const notCool = new Discord.MessageEmbed()
    .setTitle('you arent.')
    .addField('you really arent cool.', 'lol')
    .setColor(0xFFB6C1);

client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.includes('Am I cool')){
        message.reply(notCool)
    }
})

client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.includes("am i cool")){
        message.reply(notCool)
    }
})



//end of extra garbage commands

//FILTERING

const noSwearing = new Discord.MessageEmbed()
.setTitle('stop swearing nerd')
.addField('no swearing in this server lol', 'stop')
.setColor(0xFFB6C1);

client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.includes('ass', 'asshole', 'dumbass', 'fatass')){
        message.delete();
        message.channel.send(noSwearing)
    }
})

client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.includes('bitch')){
        message.delete();
        message.channel.send(noSwearing)
    }
})

client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.includes('fuck')){
        message.delete();
        message.channel.send(noSwearing)
    }
})

//END OF FILTERING

client.login('ODA1MDgyODg1NjU5OTUxMTM2.YBVt3Q.p6MSOz6StyLYulM__LDhC8p7pQo');

