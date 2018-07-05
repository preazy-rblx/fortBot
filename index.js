const discord = require('discord.js')
const PREFIX = ">";

var bot = new discord.Client();

bot.on('ready', function(message) {
   console.log("fortBot is online!\nPrefix: " + PREFIX)
   bot.user.setActivity("with an Assault Rifle | >help")
});

bot.on('message', function(message) {
  if(message.author.equals(bot.user)) return;
  if (!message.content.startsWith(PREFIX.toLowerCase())) return;

  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLowerCase()) {
    case "help":
    message.author.send("First off, thanks for using fortBot, made by Preazy#7819\n-==Commands==-\nprofile @<username> - View the users profile\n\nThere is also a command to view the weapons, using the intials of their name, for example, The Assault Rifle (Bullpup Burts) would be: >arbb")
    break;

    //Normal Commands

    case "profile":
    let userToGrabProfile = message.mentions.members.first();

    var embed = new discord.RichEmbed()
    .addField(message.mentions.members.first().toString(), "Roles: " + userToGrabProfile.roles.map(role => role.name).join(", ")) // user, roles
    .addField("Stats", "XP: 0/100 Level 0") // XP, Level?
    .setColor(0x00ffff)
    .setThumbnail(userToGrabProfile.avatarURL)
    message.channel.send(embed);
    break;

    //Weapons
    
    case "arbb":
    var embed = new discord.RichEmbed()
    .addField("Assault Rifle (Bullpup Burst)", "https://db.fortnitetracker.com/weapons/assault-rifle-bullpup-burst-epic")
    .addBlankField()
    .addField("Epic", "DPS: 56\nDamage: 32\nEnv Damage: 32\nFire Rate: 1.75\nMagazine: 30\nReload Time: 2.5s")
    .addBlankField()
    .addField("Legendary", "DPS: 57.8\nDamage: 33\nEnv Damage: 33\nFire Rate: 1.75\nMagazine: 30\nReload Time: 2.3s")
    .setThumbnail("https://i.imgur.com/1obDfzO.png")
    .setColor(0x00ffff)
    message.channel.send(embed);
    break;
      
    case "arb":
      var embed = new discord.RichEmbed()
      .addField("Assault Rifle (Burst)", "https://db.fortnitetracker.com/weapons/assault-rifle-burst-common")
      .addBlankField()
      .addField("Common", "DPS: 47.2\nDamage: 27\nEnv Damage: 27\nFire Rate: 1.75\nMagazine: 30\nReload Time: 2.9s")
      .addBlankField()
      .addField("Uncommon", "DPS: 50.8\nDamage: 29\nEnv Damage: 29\nFire Rate: 1.75\nMagazine: 30\nReload Time: 2.7s")
      .addBlankField()
      .addField("Rare", "DPS: 52.5\nDamage: 30\nEnv Damage: 30\nFire Rate: 1.75\nMagazine: 30\nReload Time: 2.6s")
      .setThumbnail("https://i.imgur.com/D2jWRQM.png")
      .setColor(0x00ffff)
      message.channel.send(embed);
      break;

    case "arm4":
      var embed = new discord.RichEmbed()
      .addField("Assault Rifle (M4)", "https://db.fortnitetracker.com/weapons/assault-rifle-m4-common")
      .addBlankField()
      .addField("Common", "DPS: 165\nDamage: 30\nEnv Damage: 30\nFire Rate: 5.5\nMagazine: 30\nReload Time: 2.3s")
      .addBlankField()
      .addField("Uncommon", "DPS: 170.5\nDamage: 31\nEnv Damage: 31\nFire Rate: 5.5\nMagazine: 30\nReload Time: 2.2s")
      .addBlankField()
      .addField("Rare", "DPS: 181.5\nDamage: 33\nEnv Damage: 33\nFire Rate: 5.5\nMagazine: 30\nReload Time: 2.2s")
      .setThumbnail("https://i.imgur.com/rvaKGeI.png")
      .setColor(0x00ffff)
      message.channel.send(embed);
    break;

    case "ars":
    var embed = new discord.RichEmbed()
    .addField("Assault Rilfle (SCAR)", "https://db.fortnitetracker.com/weapons/assault-rifle-scar-epic")
    .addBlankField()
    .addField("Epic", "DPS: 192.5\nDamage: 35\nEnv Damage: 35\nFire Rate: 5.5\nMagazine: 30\nReload Time: 2.1s")
    .addBlankField()
    .addField("Legendary", "DPS: 198\nDamage: 36\nEnv Damage: 36\nFire Rate: 5.5\nMagazine: 30\nReload Time: 2.1s")
    .setThumbnail("https://i.imgur.com/OGYGp2o.png")
    .setColor(0x00ffff)
    message.channel.send(embed);
    break;

    case "arsc":
    var embed = new discord.RichEmbed()
    .addField("Assault Rilfle (Scoped)", "https://db.fortnitetracker.com/weapons/assault-rifle-scoped-rare")
    .addBlankField()
    .addField("Rare", "DPS: 80.5\nDamage: 23\nEnv Damage: 25\nFire Rate: 3.5\nMagazine: 20\nReload Time: 2.3s")
    .addBlankField()
    .addField("Epic", "DPS: 84\nDamage: 24\nEnv Damage: 26\nFire Rate: 3.5\nMagazine: 20\nReload Time: 2.2s")
    .setThumbnail("https://i.imgur.com/a2u3ol7.png")
    .setColor(0x00ffff)
    message.channel.send(embed);
    break;

    case "lmg":
    var embed = new discord.RichEmbed()
    .addField("Light Machine Gun", "https://db.fortnitetracker.com/weapons/light-machine-gun-rare")
    .addBlankField()
    .addField("Rare", "DPS: 200\nDamage: 25\nEnv Damage: 25\nFire Rate: 8\nMagazine: 100\nReload Time: 4.8s")
    .addBlankField()
    .addField("Epic", "DPS: 208\nDamage: 26\nEnv Damage: 26\nFire Rate: 8\nMagazine: 100\nReload Time: 4.8s")
    .setThumbnail("https://i.imgur.com/anPv5tP.png")
    .setColor(0x00ffff)
    message.channel.send(embed);
    break;

    case "mg":
    var embed = new discord.RichEmbed()
    .addField("Mingun", "https://db.fortnitetracker.com/weapons/minigun-epic")
    .addBlankField()
    .addField("Epic", "DPS: 216\nDamage: 18\nEnv Damage: 32\nFire Rate: 12\nMagazine: 0\nReload Time: 4.8s")
    .addBlankField()
    .addField("Legendary", "DPS: 228\nDamage: 19\nEnv Damage: 33\nFire Rate: 12\nMagazine: 0\nReload Time: 4.5s")
    .setThumbnail("https://i.imgur.com/0SFPNwY.png")
    .setColor(0x00ffff)
    message.channel.send(embed);
    break;

    case "tsar":
    var embed = new discord.RichEmbed()
    .addField("Thermal Scope Assault Rifle", "https://db.fortnitetracker.com/weapons/minigun-epic")
    .addBlankField()
    .addField("Epic", "DPS: 64.8\nDamage: 36\nEnv Damage: 36\nFire Rate: 1.8\nMagazine: 15\nReload Time: 2.2s")
    .addBlankField()
    .addField("Legendary", "DPS: 66.6\nDamage: 37\nEnv Damage: 37\nFire Rate: 1.8\nMagazine: 15\nReload Time: 2.1s")
    .setThumbnail("https://i.imgur.com/fxT5kTi.png")
    .setColor(0x00ffff)
    message.channel.send(embed);
    break;

    case "hs":
    var embed = new discord.RichEmbed()
    .addField("Heavy Shotgun", "https://db.fortnitetracker.com/weapons/heavy-shotgun-epic")
    .addBlankField()
    .addField("Epic", "DPS: 147\nDamage: 147\nEnv Damage: 15.8\nFire Rate: 1\nMagazine: 7\nReload Time: 5.9s")
    .addBlankField()
    .addField("Legendary", "DPS: 154\nDamage: 154\nEnv Damage: 16.5\nFire Rate: 1\nMagazine: 7\nReload Time: 5.6s")
    .setThumbnail("https://i.imgur.com/s4sq1BG.png")
    .setColor(0x00ffff)
    message.channel.send(embed);
    break;

    case "ps":
    var embed = new discord.RichEmbed()
    .addField("Pump Shotgun", "https://db.fortnitetracker.com/weapons/pump-shotgun-uncommon")
    .addBlankField()
    .addField("Uncommon", "DPS: 56\nDamage: 80\nEnv Damage: 4.5\nFire Rate: 0.7\nMagazine: 5\nReload Time: 4.8s")
    .addBlankField()
    .addField("Rare", "DPS: 59.5\nDamage: 85\nEnv Damage: 4.8\nFire Rate: 0.7\nMagazine: 5\nReload Time: 4.6s")
    .setThumbnail("https://i.imgur.com/vhasSxj.png")
    .setColor(0x00ffff)
    message.channel.send(embed);
    break;

    case "ts":
    var embed = new discord.RichEmbed()
    .addField("Tactical Shotgun", "https://db.fortnitetracker.com/weapons/tactical-shotgun-common")
    .addBlankField()
    .addField("Common", "DPS: 100.5\nDamage: 67\nEnv Damage: 5\nFire Rate: 1.5\nMagazine: 8\nReload Time: 6.3s")
    .addBlankField()
    .addField("Uncommon", "DPS: 105\nDamage: 70\nEnv Damage: 5.3\nFire Rate: 1.5\nMagazine: 8\nReload Time: 6s")
    .addBlankField()
    .addField("Rare", "DPS: 111\nDamage: 74\nEnv Damage: 5.5\nFire Rate: 1.5\nMagazine: 8\nReload Time: 5.7s")
    .setThumbnail("https://i.imgur.com/ZmlwrxJ.png")
    .setColor(0x00ffff)
    message.channel.send(embed);
    break;

    case "dp":
    var embed = new discord.RichEmbed()
    .addField("Dual Pistol", "https://db.fortnitetracker.com/weapons/dual-pistol-epic")
    .addBlankField()
    .addField("Epic", "DPS: 90.2\nDamage: 41\nEnv Damage: 42\nFire Rate: 2.2\nMagazine: 18\nReload Time: 2.8s")
    .addBlankField()
    .addField("Legendary", "DPS: 94.6\nDamage: 43\nEnv Damage: 44\nFire Rate: 2.2\nMagazine: 18\nReload Time: 2.7s")
    .setThumbnail("https://i.imgur.com/ctXjCyd.png")
    .setColor(0x00ffff)
    message.channel.send(embed);
    break;

    case "hc":
    var embed = new discord.RichEmbed()
    .addField("Hand Cannon", "https://db.fortnitetracker.com/weapons/hand-cannon-epic")
    .addBlankField()
    .addField("Epic", "DPS: 60\nDamage: 75\nEnv Damage: 79\nFire Rate: 0.8\nMagazine: 7\nReload Time: 2.1s")
    .addBlankField()
    .addField("Legendary", "DPS: 62.4\nDamage: 78\nEnv Damage: 83\nFire Rate: 0.8\nMagazine: 7\nReload Time: 2s")
    .setThumbnail("https://i.imgur.com/Kq6F0bR.png")
    .setColor(0x00ffff)
    message.channel.send(embed);
    break;

    case "p":
    var embed = new discord.RichEmbed()
    .addField("Pistol", "https://db.fortnitetracker.com/weapons/pistol-common")
    .addBlankField()
    .addField("Common", "DPS: 155.2\nDamage: 23\nEnv Damage: 23\nFire Rate: 6.75\nMagazine: 16\nReload Time: 1.5s")
    .addBlankField()
    .addField("Uncommon", "DPS: 162\nDamage: 24\nEnv Damage: 24\nFire Rate: 6.75\nMagazine: 16\nReload Time: 1.5s")
    .addBlankField()
    .addField("Rare", "DPS: 168.8\nDamage: 25\nEnv Damage: 25\nFire Rate: 6.75\nMagazine: 16\nReload Time: 1.4s")
    .setThumbnail("https://i.imgur.com/UFs3x9r.png")
    .setColor(0x00ffff)
    message.channel.send(embed);
    break;

    case "r":
    var embed = new discord.RichEmbed()
    .addField("Revolver", "https://db.fortnitetracker.com/weapons/revolver-common")
    .addBlankField()
    .addField("Common", "DPS: 48.6\nDamage: 54\nEnv Damage: 54\nFire Rate: 0.9\nMagazine: 6\nReload Time: 2.4s")
    .addBlankField()
    .addField("Uncommon", "DPS: 51.3\nDamage: 57\nEnv Damage: 57\nFire Rate: 0.9\nMagazine: 6\nReload Time: 2.3s")
    .addBlankField()
    .addField("Rare", "DPS: 54\nDamage: 60\nEnv Damage: 60\nFire Rate: 0.9\nMagazine: 6\nReload Time: 2.2s")
    .setThumbnail("https://i.imgur.com/MxyNytY.png")
    .setColor(0x00ffff)
    message.channel.send(embed);
    break;

    case "sp":
    var embed = new discord.RichEmbed()
    .addField("Suppressed Pistol", "https://db.fortnitetracker.com/weapons/suppressed-pistol-epic")
    .addBlankField()
    .addField("Epic", "DPS: 175.5\nDamage: 26\nEnv Damage: 26\nFire Rate: 6.75\nMagazine: 16\nReload Time: 1.3s")
    .addBlankField()
    .addField("Legendary", "DPS: 189\nDamage: 28\nEnv Damage: 28\nFire Rate: 6.75\nMagazine: 16\nReload Time: 1.3s")
    .setThumbnail("https://i.imgur.com/bxgTucE.png")
    .setColor(0x00ffff)
    message.channel.send(embed);
    break;

    case "smg":
    var embed = new discord.RichEmbed()
    .addField("Suppressed Pistol", "https://db.fortnitetracker.com/weapons/suppressed-pistol-epic")
    .addBlankField()
    .addField("Epic", "DPS: 175.5\nDamage: 26\nEnv Damage: 26\nFire Rate: 6.75\nMagazine: 16\nReload Time: 1.3s")
    .addBlankField()
    .addField("Legendary", "DPS: 189\nDamage: 28\nEnv Damage: 28\nFire Rate: 6.75\nMagazine: 16\nReload Time: 1.3s")
    .setThumbnail("https://i.imgur.com/bxgTucE.png")
    .setColor(0x00ffff)
    message.channel.send(embed);
    break;
  }
});

bot.login(process.env.botToken);