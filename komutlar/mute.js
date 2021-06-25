const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
   if(!message.member.roles.cache.has('847449555493978133')) return message.channel.send('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin : `rôl adı`')
   let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
   if(!member) {
       return message.channel.send('Bir kişi etiketlemelisin')
   }
   let erkek = message.guild.roles.cache.find(r => r.id === '847449574552371240')
   let kayıtsız = message.guild.roles.cache.find(r => r.id === '847449580034326538')

   if(!erkek) {
       return message.channel.send('Erkek rolü ayarlanmamış veya rol aranırken bir hata oluştu logu kontrol et')
   }
   if(!kayıtsız) {
       return message.channel.send('kayıtsız rolü ayarlanmamış veya rol aranırken bir hata oluştu logu kontrol et')
   }
   let kayıt = message.guild.member(member)
   let isim = args[1]
   let yas = args[2]

   
   kayıt.setNickname(`CEZALI`)
   kayıt.roles.add(erkek)
   kayıt.roles.remove(kayıtsız)
   let embed = new Discord.MessageEmbed()
   .setColor('Blue')
   .setTitle('Zemheri Guard')
   .addField('Mute atan kullanıcı',member)
   .addField('Adı :', isim)
   .addField('Yaşı :', yas)
   .addField('Mute atan yetkili', message.author)
   client.channels.cache.get('847636534886531073').send(embed)///LOG KANAL İD YAZMALISIN
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mutee','mute','muteee'],
    permLevel: 0
};

exports.help = {
    name: 'mute',
    description: 'mute ',
    usage: 'mute'
};


