const Discord = require('discord.js');
const Settings = require('./settings.json');
const client = new Discord.Client();

var prefix = Settings.prefix;
var i = 0;
var connection;

client.on('ready', () => {
  console.log(`${client.user.tag} geldi!`);
});

client.on('message', msg => {
  if (msg.content === 'ayberk') {
    msg.reply('oç erol!');
  }
  if (msg.content === 'a') {
    if(client.guildMember !== undefined)
      msg.reply('not undefined');
      else {

          msg.reply('undefined');
      }
      connection.play('./ho_ayberk.mp3');
    //const dispatcher = connection.playFile('./ho_ayberk.mp3');
    //PlayQuote('703338019842949130',"./ho_ayberk.mp3");
  }
});

client.on("voiceStateUpdate", (oldMember, newMember) => {

  if(connection == undefined || client.voice.connections.get("551446105116901403") == undefined)
    return;

  var newUserChannel = newMember.channelID;
  var oldUserChannel = oldMember.channelID;
  var clientChannel = client.voice.connections.get("551446105116901403").channel.id;

  if(oldUserChannel !== clientChannel && newUserChannel === clientChannel) {
    if(newMember.id == 321792266425335808) // Kutay
      connection.play('./voice/ho_amdin.mp3');
    if(newMember.id == 384411841637646346) // Ayberk
      connection.play('./voice/ho_ayberk.mp3');
    if(newMember.id == 303483041047773197) // Mali
      connection.play('./voice/ho_amdin.mp3');
    if(newMember.id == 323849177610321922) // Faruk
      connection.play('./voice/ho_faruk.mp3');
    if(newMember.id == 469229854647124008) // Mars
      connection.play('./voice/ho_mars.mp3');
    if(newMember.id == 197620487197556736) // Aliman
      connection.play('./voice/ho_aliman.mp3');
    if(newMember.id == 319085533026320385) // Erol
      connection.play('./voice/ho_erol.mp3');
    if(newMember.id == 276501498282770453) // Ali Eren
      connection.play('./voice/ho_alieren.mp3');
    if(newMember.id == 269504150268674048) // Ilker
      connection.play('./voice/ho_ilker.mp3');
    if(newMember.id == 701199061109309542) // Misa
      connection.play('./voice/ho_misaa.mp3');
    if(newMember.id == 325613866807590913) // Ozi
      connection.play('./voice/ho_ozi.mp3');
    if(newMember.id == 334706769765072896) // Yagiz
      connection.play('./voice/ho_yagiz.mp3');

  } else if(oldUserChannel === clientChannel && newUserChannel !== clientChannel){

    // User leaves a voice channel

  }

});

client.on('message', async message => {
  if (!message.guild) return;

  if (message.content === prefix + 'j') {
    if (message.member.voice.channel) {
      connection = await message.member.voice.channel.join();
      //connection.voiceChannel.playFile('./ho_ayberk.mp3');
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }

  if (message.content === prefix + 'dc') {
    if (message.member.voice.channel) {
      connection.disconnect();
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});

client.login(Settings.token);

function PlayQuote(voiceChannel, file) {
    // Join the channel
    client.joinVoiceChannel(voiceChannel, function(error, connection) {
      // check for errors here
      // since you get the connection from callback you don't need to get it from the bot
      connection.playFile(file, {volume: 0.5});
    });
}

function test() {
  return i + 1;
}
