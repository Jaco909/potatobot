//load discord dependencies
const fs = require('fs');
const Discord = require('discord.js');
const { Client, MessageAttachment } = require('discord.js');

//load server configs
const { prefix, token, timeouthour, timeout5min, timeout10min } = require('./config.json');
const { manager, officer, moderator, discordmoderator, giant, potatorole, testersrole, canteencrasherrole, betarole, robotrole, exstaff, miscmvm } = require('./serverconfig/roles.json');
const { botchannel, streamchannel, logchannel, warnchannel, entrancechannel } = require('./serverconfig/channels.json');

//Dynamic command loading
/* const commandFolder = './commands/';
var commandlist = [];
var commandcount = 0;
fs.readdirSync(commandFolder).forEach(file => {
  file = file.slice(0, -3);
  commandlist.push(file)
});
commandlist = commandlist.toLocaleString();
commandlist = commandlist.split(",")
//commandcount = commandlist.length;
commandlist.forEach(commandname => {
	const commandname = require(`./commands/${commandname}.js`);
}); */

//load commands
const { add } = require('./commands/add.js');
const { addpotato } = require('./commands/addpotato.js');
const { addwarninfo } = require('./commands/addwarninfo.js');
const { afenable } = require('./commands/afenable.js');
const { avatar } = require('./commands/avatar.js');
const { changelog } = require('./commands/changelog.js');
const { debug } = require('./commands/debug.js');
const { fuckgoback } = require('./commands/fuckgoback.js');
const { getwarn } = require('./commands/getwarn.js');
const { help } = require('./commands/help.js');
const { howis } = require('./commands/howis.js');
const { iam } = require('./commands/iam.js');
const { reboot } = require('./commands/reboot.js');
const { messagefunc } = require('./commands/message.js');
const { owo } = require('./commands/owo.js');
const { potato } = require('./commands/potato.js');
const { potatoyell } = require('./commands/potatoyell.js');
const { purge } = require('./commands/purge.js');
const { robot } = require('./commands/robot.js');
const { say } = require('./commands/say.js');
const { servers } = require('./commands/servers.js');
const { shitpost } = require('./commands/shitpost.js');
const { shutup } = require('./commands/shutup.js');
const { slots } = require('./commands/slots.js');
const { status } = require('./commands/status.js');
const { tempwarn } = require('./commands/tempwarn.js');
const { warn } = require('./commands/warn.js');
const { yorick } = require('./commands/yorick.js');

//load functions
const { aprilfools } = require('./functions/AFrun.js');
const { aprilfoolsreset } = require('./functions/AFcleanup.js');
const { bantime } = require('./functions/bantime.js');
const { furtrim } = require('./functions/furtrim.js');
const { messageChannel } = require('./functions/messageChannel.js');
const { robotcheck } = require('./functions/robot.js');
const { roletier } = require('./functions/roletier.js');
const { warncheck } = require('./functions/warncheck.js');

//load folders
const warnFolder = './warnings/';
const tempwarnFolder = './temp_warnings/';
const warntimeFolder = './temp_dates/';
const bantimeFolder = './ban_dates/';
//const AFFolder = './af_data/';

//check for missing data files; write dummy file.
if (!fs.existsSync(`./data/activities.txt`)) {
	console.log(`DATA FILE MISSING: activities.txt`);
	fs.writeFileSync(`./data/activities.txt`, `DATA FILE MISSING: activities.txt <@207174577783177216> you fucked up big time.`, (err) => {});
}
if (!fs.existsSync(`./data/potatoyellnum.txt`)) {
	console.log(`DATA FILE MISSING: potatoyellnum.txt`);
	fs.writeFileSync(`./data/potatoyellnum.txt`, `DATA FILE MISSING: potatoyellnum.txt <@207174577783177216> you fucked up big time.`, (err) => {});
}
if (!fs.existsSync(`./data/afstate.txt`)) {
	console.log(`DATA FILE MISSING: afstate.txt`);
	fs.writeFileSync(`./data/afstate.txt`, `0`, (err) => {});
}

//declare constants w/ temp values
const client = new Discord.Client();
const joinedRecently = new Set(); //auto-robot
const potatoRecently = new Set(); //potato
const seabadRecently = new Set(); //seabad
const owoedRecently = new Set(); //owo
const shitRecently = new Set(); //shitpost
const slotsRecently = new Set(); //slots
const howisRecently = new Set(); //howis
const yorickRecently = new Set(); //yorick
const channelist = new Set(); //debug

const warnlist = [];
const member = [];
var potatocount = 0;
var usertier = 99;
var warnmute = 0;
var yorickrng = 0;
var date = 0;
var militime = 0;
var afstate = 0;
var medalstate = 0;
var autojoinstate = 0;
var automodstate = 1;

//???
client.commands = new Discord.Collection();

//collect warnings, store them
fs.readdirSync(warnFolder).forEach(file => {
  warnlist.push(file)
});

//discord login token
client.login(token);

//rng functionality
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};

//startup
client.on('ready', () => {
    console.log('Bot online!');
	client.user.setStatus('online');
	client.user.setActivity('!help for info');
	client.user.setUsername('Potatobot rc3b');
	/* fs.readFile(`./data/afstate.txt`, (err, afstated) => {
		afstate = afstated
	}); */
});

//auto robot role assign (dyno emergency catch)
client.on('guildMemberAdd', member => {
	var date = new Date();
	var militime = date.getTime();
	console.log(`${date}`);
	console.log(member.user.tag + ' has joined the server!');
	joinedRecently.add(member.user.tag);
	fs.writeFileSync(`./data/robot/${militime}.txt`,`${member.id}`, (err) => {
		if (err) throw err;
	});
	setTimeout(() => {
		joinedRecently.delete(member.user.tag);
		console.log(`${date}`);
		if (autojoinstate == 0); {
			member.roles.add(`${robotrole}`);
			console.log(member.user.tag + ' is now a robot!');
		}
	}, timeout10min ); //600000
});

//log unbans
client.on("guildBanRemove", function(guild, user){
	console.log(`${user} has been unbanned!`);
	guild.channels.cache.get(`${warnchannel}`).send({embed: {
		color: 3174889,
		title: "Ban Removed",
		description: `Unbanned User: ${user}`,
		timestamp: new Date(),
	}
	});
});

//log bans
client.on("guildBanAdd", function(guild, user){
	bantime(guild, user, client, fs, warnchannel);
});

//random always running features
client.on('message', message => {
	//catch DMs by suppressing other channels, since message.channel.type appears to crash here.
	if ((!message.author.bot) && (message.channel.id != 480079567458140171) && (message.channel.id != 480080287393382402) && (message.channel.id != 661750808026808370) && (message.channel.id != 437863525965365249) && (message.channel.id != 606836121325797377) && (message.channel.id != 437863546852999168) && (message.channel.id != 572097290119020551) && (message.channel.id != 504399559993196545) && (message.channel.id != 655472399713828865) && (message.channel.id != 487328581320441888) && (message.channel.id != 593502787145302021) && (message.channel.id != 437863876587945985) && (message.channel.id != 480416823695638578) && (message.channel.id != 480416908223447052) && (message.channel.id != 505837134335442964) && (message.channel.id != 587862013779378186) && (message.channel.id != 650479881133490187) && (message.channel.id != 415523320281301004) && (message.channel.id != 729752874770497556) && (message.channel.id != 415530274294726666) && (message.channel.id != 415530382897840128) && (message.channel.id != 551330160545234944) && (message.channel.id != 626459691278532663) && (message.channel.id != 679201651961102358) && (message.channel.id != 807728360813363240) && (message.channel.id != 763251430961709086) && (message.channel.id != 515285416396455948)){
		date = new Date();
		console.log(`${date}`);
		console.log(`${message.author.username}`);
		console.log(message.channel.id);
		console.log(`${message}`);
	}
	//catch tacobot mentions. Behold the shitty yardredev if pyramid. THIS IS WHY WE CAN'T HAVE NICE THINGS
	if (!message.author.bot && (message.channel.type !== `dm`)){
		const guild = message.guild;
		var reply = message.channel.id
		var args = message.content.toLocaleString().toLowerCase();
		if ((args.includes("tacobot")) || args.includes("tacobot.tf")){
			console.log("HOLY FUCK, SOMEONE SAID THE T WORD! WEEEEE WOOOO WEEE WOOOO CALL THE GASS POLICE!");
			fs.readFile(`./data/tacobot.txt`, (err, lasttacotime) => {
				var date = new Date();
				var militime = date.getTime();
				tacotime = militime - lasttacotime;
				if (tacotime >= 1000) { //is a second
					tacotime = Math.floor(tacotime / 1000); //get seconds
					if (tacotime >= 60) { //is a minute
						tacotime = Math.floor(tacotime / 60) //get minutes
						if (tacotime >= 60) { //is an hour
							tacotime = Math.floor(tacotime / 60) //get hours
							if (tacotime >= 24) { //is a day
								tacotime = Math.floor(tacotime / 24) //get days
								if (tacotime == 1){
									guild.channels.cache.get(`${reply}`).send(`This server has operated **${tacotime}** day without a tacobot mention.`);
								}
								else {
									guild.channels.cache.get(`${reply}`).send(`This server has operated **${tacotime}** days without a tacobot mention.`);
								}
							}
							else {
								//guild.channels.cache.get(`${reply}`).send(`This server has operated **${tacotime}** hours without a tacobot mention.`);
							}
						}
						else {
							//guild.channels.cache.get(`${reply}`).send(`This server has operated **${tacotime}** minutes without a tacobot mention.`);
						}
					}
					else {
						//guild.channels.cache.get(`${reply}`).send(`This server has operated **${tacotime}** seconds without a tacobot mention.`);
					}
				}
				else {
					//guild.channels.cache.get(`${reply}`).send(`This server has operated **${tacotime}** miliseconds without a tacobot mention.`);
				}
				fs.writeFileSync(`./data/tacobot.txt`, `${militime}`, (err) => {
					if (err) throw err;
				});
			});
		}
	}
	/* if (!message.author.bot){
		robotcheck(fs, client, robotrole, message);
	} */
	/* if (!message.author.bot && (message.channel.type !== `dm`) && (afstate == 1)){
		const guild = message.guild;
		const grabhighest = guild.member(message.author).roles.highest;
		const rolehighest = String(grabhighest).slice(3, -1);
		usertier = roletier(rolehighest, usertier, manager, officer, moderator, discordmoderator, giant, potatorole, testersrole, canteencrasherrole, betarole, exstaff);
		fs.readFile(`./data/afstate.txt`, (err, afstated) => {
			afstate = afstated
			if (afstate == 1){
				aprilfools(message, usertier, fs, guild, getRandomInt);
			}
		});
	} */
	/* if (!message.author.bot && (message.channel.type !== `dm`)){
		const guild = message.guild;
		if (!potatoRecently.has("1")) {
			var args = message.content.toLocaleString().toLowerCase();
			if (args.includes("seabed")){
				message.reply("More like Seabad.");
				seabadRecently.add("1");
				setTimeout(() => {
					seabadRecently.delete("1");
				}, 7200000 );
			}
		}
	} */
	if (!message.author.bot && (message.channel.type !== `dm`) && (automodstate == 1)){
		const guild = message.guild;
		var userid = message.author.id
		var args = message.content.toLocaleString().toLowerCase();
		if ((args.includes("nigger") || (args.includes("niggers")) || (args.includes("Nigger")) || (args.includes("Niggers"))) {
			automod(logaction, message, args, getUserFromMention, talk, client);
		}
	}
});

//aprilfools
/* client.on('message', message => {
	if (!message.author.bot && (message.channel.type !== `dm`)){
		const guild = message.guild;
		const grabhighest = guild.member(message.author).roles.highest;
		const rolehighest = String(grabhighest).slice(3, -1);
		usertier = roletier(rolehighest, usertier, manager, officer, moderator, discordmoderator, giant, potatorole, testersrole, canteencrasherrole, betarole, exstaff);
		fs.readFile(`./data/afstate.txt`, (err, afstated) => {
			afstate = afstated
			if (afstate == 1){
				aprilfools(message, usertier, fs, guild, getRandomInt);
			}
		});
	}
}); */

//message recieved
client.on('message', message => {
	if (message.content.startsWith(prefix) && !message.author.bot && (message.channel.type !== `dm`)) {
		console.log(`message from ${message.author.username}!`);
		const guild = message.guild;
		var data = [];
		new Discord.GuildMember(message.author, data, guild);
		var date = new Date();
		var militime = date.getTime();
		const talk = message.content.toLocaleString().slice(prefix.length).split(' ');
		const args = message.content.toLocaleString().toLowerCase().slice(prefix.length).split(' ');
		const furtalk = `${message.content.toLocaleString().slice(prefix.length).split(' ')}`;
		const command = args.shift().toLowerCase();
		const grabhighest = guild.member(message.author).roles.highest;
		const rolehighest = String(grabhighest).slice(3, -1);
		
		//role check function (usertier)
		usertier = roletier(rolehighest, usertier, manager, officer, moderator, discordmoderator, giant, potatorole, testersrole, canteencrasherrole, betarole, exstaff);
		
		//warncheck
		warncheck(fs, client, militime, date, warnchannel, guild);
		
		//command logging
		function logaction(rng, rng2, rng3) {
			if ((command === 'potato') || (command === 'shitpost') || (command === 'howis') || (command === 'yorick') || (command === 'slots')) {
				return guild.channels.cache.get(`${logchannel}`).send({embed: {
						color: 9647333,
						author: {
						  name: `${message.member.displayName}`,
						  icon_url: `${message.author.displayAvatarURL()}`
						},
						title: "Channel",
						description: `${message.channel}`,
						fields: [{
							name: "Command",
							value: `${talk.join(" ")}`
						  },
						  {
							name: "RNG",
							value: `${rng}`
						  },
						  {
							name: "RNG2",
							value: `${rng2}`
						  },
						  {
							name: "RNG3",
							value: `${rng3}`
						  }
						],
						timestamp: new Date(),
					}
					});
			}
			else if (command === 'aprilfools') {
				return guild.channels.cache.get(`${logchannel}`).send({embed: {
						color: 9647333,
						author: {
						  name: `${message.member.displayName}`,
						  icon_url: `${message.author.displayAvatarURL()}`
						},
						title: "AF Cleanup",
						description: `Attempted to restore ${rng} usernames.`,
						fields: [{
							name: "Processed Usernames",
							value: `${rng2}`
						  },
						  {
							name: "Failed Changes",
							value: `${rng3}`
						  }
						],
						timestamp: new Date(),
					}
					});
			}
			else {
				return guild.channels.cache.get(`${logchannel}`).send({ embed: 
					{
						color: 3438828,
						author: {
						  name: `${message.member.displayName}`,
						  icon_url: `${message.author.displayAvatarURL()}`
						},
						title: "Channel",
						description: `${message.channel}`,
						fields: [{
							name: "Command",
							value: `${talk.join(" ")}`
						  }
						],
						timestamp: new Date(),
					}
				});
			}
		}
		
		//pulls userdata from mention
		function getUserFromMention(mention) {
			if (!mention) return;

			if (mention.startsWith('<@') && mention.endsWith('>')) {
				mention = mention.slice(2, -1);

				if (mention.startsWith('!')) {
					mention = mention.slice(1);
				}
				return guild.members.cache.get(mention);
			}
		}
		
		function resetBot(usertier) {
			if (usertier <= 4)
			{
				console.log(`Wack.`)
				guildMember.addRole(`${muterole}`); //invalid, throws error
			}
		}
		if ((message.channel.id === `${botchannel}`) || (message.channel.id === 585780564959821842) || (usertier <=5))
		{
			try {
				if (command === 'autojoin') {
					if (usertier <= 5) {
						if (autojoinstate == 0) {
							console.log("Auto-role assign off!");
							autojoinstate = 1;
							message.reply(`Automatic role assignment has been disabled.`);
						}
						else if (autojoinstate == 1) {
							console.log("Auto-role assign on!");
							autojoinstate = 0;
							message.reply(`Automatic role assignment has been enabled.`);
						}
					}
				}
				else if (command === 'add') {
					add(logaction, fs, args, talk, usertier, message);
				}
				else if (command === 'addpotato') {
					addpotato(logaction, message, usertier, potatocount);
				}
				else if (command === 'addwarninfo'){
					addwarninfo(logaction, message, usertier, args, messageChannel, fs, talk, warnchannel, client, moderator, warnlist, guild);
				}
				else if (command === 'aprilfools'){
					afenable(logaction, message, usertier, args, fs, guild, aprilfoolsreset, client);
				}
				else if (command === 'avatar'){
					avatar(logaction, message, args, getUserFromMention, talk, client);
				}
				else if (command === 'changelog') {
					changelog(logaction, message);
				}
				else if (command === 'fuckgoback') {
					fuckgoback(logaction, message);
				}
				else if (command === 'getwarn'){
					getwarn(logaction, message, usertier, args, messageChannel, fs, talk, warnchannel, client, moderator, warnlist);
				}
				else if (command === 'help') {
					help(logaction, message, args, usertier, getRandomInt, potatorole, client, guild);
				}
				else if (command === 'howis') {
					howis(logaction, message, args, getRandomInt, howisRecently, botchannel, timeout5min, args, fs);
				}
				else if (command === 'iam') {
					iam(logaction, message, args, botchannel, testersrole, canteencrasherrole, betarole, joinedRecently, robotrole, miscmvm);
				}
				else if (command === 'slap') {
					message.reply(`That doesn't work here silly.`);
				}
				else if (command === 'plap') {
					message.reply(`Who are you, interrobang?`);
				}
				else if (command === 'medalyell'){
					if (medalstate == 0)
					{
						medalstate = 1;
						message.reply(`Will attempt to yell about medal questions.`);
					}
					else
					{
						medalstate = 0;
						message.reply(`Will not yell about medal questions.`);
					}
				}
				else if (command === 'message'){
					messagefunc(logaction, message, usertier, args, talk, client);
				}
				else if (command === 'owo') {
					owo(logaction, message, args, potatorole, furtrim, owoedRecently, getRandomInt, prefix);
				}
				else if (command === 'potato') {
					fs.readFile(`./data/potatoyellnum.txt`, (err, potatoyellnum) => {
						potatoyellnum = potatoyellnum.toLocaleString();
						potatoyellnum = parseInt(potatoyellnum);
						if (potatocount >= potatoyellnum)
						{
							potatocount = 1;
							potato(logaction, getRandomInt, message, potatoRecently, potatocount, potatorole, botchannel, timeouthour, fs, shutup, args, client);
						}
						else
						{
							potatocount = (+potatocount + 1)
							potato(logaction, getRandomInt, message, potatoRecently, potatocount, potatorole, botchannel, timeouthour, fs, shutup, args, client);
						}
					});
				}
				else if (command === 'potatoyell') {
					potatoyell(logaction, message, usertier, args, fs);
				}
				else if (command === 'purge') {
					purge(logaction, message, usertier, args);
				}
				else if (command === 'reboot') {
					if (message.member.id == 207174577783177216) {
						client.user.setUsername('Potatobot - offline')
						guildMember.addRole(`${muterole}`); //invalid, throws error
					}
				}
				else if (command === 'robot') {
					robot(logaction, message, args, entrancechannel, robotrole, joinedRecently, member);
				}
				else if (command === 'say'){
					say(logaction, message, usertier, args, talk, messageChannel, guild);
				}
				/* else if (command === 'servers') {
					servers(logaction, message, args);
				} */
				else if (command === 'shitpost') {
					shitpost(logaction, getRandomInt, message, shitRecently, fs);
				}
				else if (command === 'shutup') {
					shutup(logaction, message, usertier, guild);
				}
				else if (command === 'slots') {
					slots(logaction, getRandomInt, message, fs, args, slotsRecently);
				}
				else if (command === 'status'){
					status(logaction, message, usertier, args, client);
				}
				else if (command === 'pwarn'){
					warn(logaction, message, usertier, args, messageChannel, fs, getUserFromMention, talk, warnchannel, client, moderator, warnlist, warnmute, guild);
				}
				else if (command === 'twarn'){
					tempwarn(logaction, message, usertier, args, messageChannel, fs, getUserFromMention, talk, warnchannel, client, moderator, warnlist, warnmute, date, militime, guild);
				}
				else if (command === 'warnmute'){
					if (warnmute == 0)
					{
						warnmute = 1;
						message.reply(`Warnings will not send messages to the warned user.`);
					}
					else
					{
						warnmute = 0;
						message.reply(`Warnings will send messages to the warned user.`);
					}
				}
				else if (command === 'yorick') {
					yorick(logaction, message, args, getRandomInt, yorickrng, yorickRecently, botchannel, timeout5min, args, potatorole, usertier, guild, client, fs);
				}
				
				else if (command === 'debug'){
					debug(logaction, message, usertier, guild, robotrole);
				}
				else if (command === 'nuq'){
					message.author.send(`https://youtu.be/1nDnqLDmFrs?t=11`);
				}
				else if (command === 'bitch'){
					logaction()
					//message.delete({ timeout: 10})
					message.author.send(`no u`);
				}
				else {
					console.log('invalid run!');
					console.log(`${talk}`);
					//message.author.send(`That is not a valid command. Please use \`!help\` in **#botato_cellar** for commands.`);
					//message.delete({ timeout: 10})
				}
			}
			catch (err){
				if (err && err.message === `(node:15156) UnhandledPromiseRejectionWarning: DiscordAPIError: Cannot send messages to this user`){
					client.channels.get(`${botchannel}`).send(`You have DMs dissabled <@${message.member.id}>. Most bot functions will not work for you.`);
				}
				if (err && err.message === `guildMember is not defined`){
					guildMember.addRole(`${muterole}`); //invalid, throws error
					//I don't think you understand. I'm throwing an error to catch an error to then throw another error.
					//It just works.
				}
				else {
					console.log(`${err.message}`)
					console.log("wack")
				}
			}
		}
		else  {
		console.log('invalid channel!');
		//message.delete({ timeout: 10})
		//message.author.send(`Invalid channel. Please use \`!help\` in **#botato_cellar** for commands.`);
		}
	}
})