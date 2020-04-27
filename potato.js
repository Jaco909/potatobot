//load discord dependencies
const fs = require('fs');
const Discord = require('discord.js');
const { Client, MessageAttachment } = require('discord.js');

//load server configs
const { prefix, token, timeouthour, timeout5min, timeout10min } = require('./config.json');
const { manager, officer, moderator, discordmoderator, giant, potatorole, testersrole, canteencrasherrole, betarole, robotrole, exstaff } = require('./serverconfig/roles.json');
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
const owoedRecently = new Set(); //owo
const shitRecently = new Set(); //shitpost
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
	client.user.setUsername('Potatobot rc3');
	fs.readFile(`./data/afstate.txt`, (err, afstated) => {
		afstate = afstated
	});
});

//auto robot role assign (dyno emergency catch)
client.on('guildMemberAdd', member => {
	console.log(member.user.tag + ' has joined the server!');
	joinedRecently.add(member.user.tag);
	setTimeout(() => {
		joinedRecently.delete(member.user.tag);
		member.roles.add(`${robotrole}`);
		console.log(member.user.tag + ' is now a robot!');
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
	console.log(`${user}`);
	console.log(`${user.id}`);
	bantime(guild, user, client, fs, warnchannel);
});

//message suppression for DMs
client.on('message', message => {
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
	/* if (!message.author.bot && (message.channel.type !== `dm`) && (message.channel.id == 415530382897840128)){
		const guild = message.guild;
		var userid = message.author.id
		if (!fs.existsSync(`./help_data/${userid}.txt`)) {
			var args = message.content.toLocaleString().toLowerCase();
			if (((args.includes("badge")) || (args.includes("medal"))) && ((args.includes("get")) || (args.includes("how")) || (args.includes("obtain")) || (args.includes("where's")) || (args.includes("wheres")))){
				message.reply("Please read <#415530274294726666> for information regarding the 2020 AF Medal. Do understand that you will not recieve your badge untill the next TF2 update.");
				fs.writeFileSync(`./help_data/${userid}.txt`, `wack`, (err) => {
					if (err) throw err;
				});
			}
		}
		if (!fs.existsSync(`./help_data2/${userid}.txt`)) {
			var args = message.content.toLocaleString().toLowerCase();
			if (((args.includes("trash")) || (args.includes("sequoia"))) && ((args.includes("crash")) || (args.includes("broken")))){
				message.reply("We are aware of players having issues with the mission Trash on Sequoia. Players are not required to complete this mission in order to earn the AF 2020 badge.");
				fs.writeFileSync(`./help_data2/${userid}.txt`, `wack`, (err) => {
					if (err) throw err;
				});
			}
		}
	} */
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

//no more augh
/* client.on('message', message => {
	if (message.author.id == "207174577783177216"){
		const guildMember = message.member;
		guildMember.roles.remove(`694673275111997464`);
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
			if ((command === 'potato') || (command === 'shitpost') || (command === 'howis') || (command === 'yorick')) {
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
		if ((message.channel.id === `${botchannel}`) || (message.channel.id === `${entrancechannel}`) || (usertier <=5))
		{
			try {
				if (command === 'add') {
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
					iam(logaction, message, args, botchannel, testersrole, canteencrasherrole, betarole);
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
							potato(logaction, getRandomInt, message, potatoRecently, potatocount, potatorole, botchannel, timeouthour, fs, shutup, args);
						}
						else
						{
							potatocount = (+potatocount + 1)
							potato(logaction, getRandomInt, message, potatoRecently, potatocount, potatorole, botchannel, timeouthour, fs, shutup, args);
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
					client.user.setUsername('Potatobot - offline')
					resetBot(usertier);
				}
				else if (command === 'robot') {
					robot(logaction, message, args, entrancechannel, robotrole, joinedRecently, member);
				}
				else if (command === 'say'){
					say(logaction, message, usertier, args, talk, messageChannel, guild);
				}
				else if (command === 'servers') {
					servers(logaction, message, args);
				}
				else if (command === 'shitpost') {
					shitpost(logaction, getRandomInt, message, shitRecently, fs);
				}
				else if (command === 'shutup') {
					shutup(logaction, message, usertier, guild);
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
						message.author.send(`Warnings will not send messages to the warned user.`);
					}
					else
					{
						warnmute = 0;
						message.author.send(`Warnings will send messages to the warned user.`);
					}
				}
				else if (command === 'yorick') {
					yorick(logaction, message, args, getRandomInt, yorickrng, yorickRecently, botchannel, timeout5min, args, potatorole, usertier, guild, client, fs);
				}
				
				else if (command === 'debug'){
					debug(logaction, message, usertier, guild);
				}
				else if (command === 'nuq'){
					message.author.send(`https://youtu.be/1nDnqLDmFrs?t=11`);
				}
				else if (command === 'hydrogen'){
					message.delete({ timeout: 10});
					message.author.send(`https://cdn.discordapp.com/attachments/587862013779378186/677980626380652551/Hydrogen.zip`);
				}
				else if (command === 'hydro'){
					message.delete({ timeout: 10});
					message.author.send(`https://cdn.discordapp.com/attachments/587862013779378186/677980626380652551/Hydrogen.zip`);
				}
				else if (command === 'bitch'){
					logaction()
					message.delete({ timeout: 10})
					message.author.send(`no u`);
				}
				else {
					console.log('invalid run!');
					console.log(`${talk}`);
					message.author.send(`That is not a valid command. Please use \`!help\` in **#botato_cellar** for commands.`);
					message.delete({ timeout: 10})
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
		message.delete({ timeout: 10})
		message.author.send(`Invalid channel. Please use \`!help\` in **#botato_cellar** for commands.`);
		}
	}
})