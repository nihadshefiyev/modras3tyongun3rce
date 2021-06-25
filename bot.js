const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(
    `Az Önce Bot Ping yedi, Sorun önemli değil merak etme. Hatayı düzelttik.`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const db = require('quick.db')
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");
moment.locale("tr")
const chalk = require("chalk");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login( process.env.token);
////////////OtoCevap

//Nihad Design


const data = new Map();


//kurucunun mesajina tepki client olan / asagidakilarin hamisi eyni komutdu  // ADMIN MESAJLARINA TEPKI BASLANGIC



//Garson botunun sistemi






//GUARD MODERATION DATABASE REGISTER TANIMLAMA VE OZEL DURUM KOYMA






client.on("message", async message => {
let kanal = "840942887986135070" //buraya kanal id sini yaz
if(message.channel.id !== kanal) return;
message.react('841517354814275584') //buraya emojiyi koy
})



//Owo Safe Trade Bolumu



//log dm





client.on("message", async message => {
let kanal = "848987947553259551" //buraya kanal id sini yaz
if(message.channel.id !== kanal) return;
message.react('848985855187615834') //buraya emojiyi koy
})



//HATIRLATICILAR
const { WebhookClient, MessageEmbed } = require('discord.js')
const BUMP = new Discord.WebhookClient("855455682560131092", "CpRsQCzYO4VPExfw2R7ywYuadLMQtrM8trAZolOoZ1QFVTokZQs1ZtaVn8IZcHJndYE6")
const OWODAILY = new Discord.WebhookClient("855736733295837214", "7gQJDRrdiVUdkv503Uc2dGndfkEQ4jeMeoZ49SkEyKQ57vxGKCmhWYLkmZFEQWLXe8AB")
const OWOCOOKIE = new Discord.WebhookClient("855736731109031957", "vswqW2eeTKv2C4S76J1Z9PZctQPa4DS5u22lEWToNZRNJmIrFMZVt14oLzqabjF-Fd9_")
const OWOPRAY = new Discord.WebhookClient("855736735672434729", "1z57568551GJmBP7ipPd9LOh7ZVo5UH9AHqZcn_kfAFhyJgm2dPXvF-Hy4tbFG9QMGHc")

setInterval(function() {
    let krevzkanal = client.channels.cache.get("855051453123264542");
    if (krevzkanal) {
      BUMP.send(
        "<a:soru:855728213681373204>** Bump Zamani Geldi ** <#855696715226546206>"
      );//krevz
    }
  }, 3600000);

setInterval(function() {
    let krevzkanal = client.channels.cache.get("855051453123264542");
    if (krevzkanal) {
      OWODAILY.send(
        "<a:soru:855728213681373204>** Owo Daily Zamani Geldi ** <#855051533251117097>"
      );//krevz
    }
  }, 72000000);

setInterval(function() {
    let krevzkanal = client.channels.cache.get("855051533251117097");
    if (krevzkanal) {
      OWOCOOKIE.send(
        "<a:soru:855728213681373204>** Owo Cookie Zamani Geldi ** <#855051533251117097>"
      );//krevz
    }
  }, 72000000);

setInterval(function() {
    let krevzkanal = client.channels.cache.get("855051533251117097");
    if (krevzkanal) {
      OWOPRAY.send(
        "<a:soru:855728213681373204>** Owo Pray Zamani Geldi ** <#855051533251117097>"
      );//krevz
    }
  }, 300000);

