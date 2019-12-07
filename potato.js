//load discord dependencies
const fs = require('fs');
const Discord = require('discord.js');
const commandFolder = './commands/';
const warnFolder = './warnings/';

//load base config
const { prefix, token, timeouthour, timeout5min } = require('./config.json');

//load roles
const { manager, officer, moderator, discordmoderator, giant, potatorole, testersrole, canteencrasherrole, betarole, robotrole } = require('./serverconfig/roles.json');

//load channels
const { botchannel, streamchannel, logchannel, warnchannel, entrancechannel } = require('./serverconfig/channels.json');

//load commands
//will cleanup when I learn how
const { addpotato } = require('./commands/addpotato.js');
const { addwarninfo } = require('./commands/addwarninfo.js');
const { avatar } = require('./commands/avatar.js');
const { changelog } = require('./commands/changelog.js');
const { debug } = require('./commands/debug.js');
const { fuckgoback } = require('./commands/fuckgoback.js');
const { getwarn } = require('./commands/getwarn.js');
const { help } = require('./commands/help.js');
const { howis } = require('./commands/howis.js');
const { iam } = require('./commands/iam.js');
const { reboot } = require('./commands/reboot.js');
const { launchdate } = require('./commands/launchdate.js');
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
const { stream } = require('./commands/stream.js');
const { warn } = require('./commands/warn.js');

//declare constants w/ temp values
//clean up later
const client = new Discord.Client();
const joinedRecently = new Set(); //auto-robot
const potatoRecently = new Set(); //potato
const superpotatoRecently = new Set(); //potato
const ultrapotatoRecently = new Set(); //potato
const finalpotatoRecently = new Set(); //potato
const potatobanned = new Set(); //potato
const owoedRecently = new Set(); //owo
const shitRecently = new Set(); //shitpost
const howisRecently = new Set(); //howis
const channelist = new Set(); //debug
const commandlist = [];
const warnlist = [];
const member = [];
var potatoyellnum = 15;
var potatocount = 0;
var roletier = 0;
var usertier = 99;
var warnmute = 0;
var howisrng = 0;

//???
client.commands = new Discord.Collection();

//collect command file names, store them
fs.readdirSync(commandFolder).forEach(file => {
  file = file.slice(0, -3);
  commandlist.push(file)
});

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
});

//attempt to fix websocket error
/* client.on('error', () => {
	console.log('WEBSOCKET ERROR DETECTED');
	setTimeout(() => {
		reconnect();
		}, 5000 );
});
 */
//auto robot role assign (dyno emergency catch)
client.on('guildMemberAdd', member => {
	console.log(member.user.tag + ' has joined the server!');
	joinedRecently.add(member.user.tag);
	setTimeout(() => {
		joinedRecently.delete(member.user.tag);
		member.addRole(`${robotrole}`);
		console.log(member.user.tag + ' is now a robot!');
		}, 600000 ); //600000
});

//log unbans
client.on("guildBanRemove", function(guild, user){
	console.log(`${user} has been unbanned!`);
	client.channels.get(`${warnchannel}`).send({embed: {
		color: 3174889,
		title: "Ban Removed",
		description: `Unbanned User: ${user}`,
		timestamp: new Date(),
	  }
	});
});

//log bans
client.on("guildBanAdd", function(guild, user){
	console.log(`${user} has been banned!`);
	client.channels.get(`${warnchannel}`).send({embed: {
		color: 16711680,
		title: "Ban Issued",
		description: `Banned User: ${user}`,
		timestamp: new Date(),
	  }
	});
});

//message recieved
client.on('message', message => {
	if (message.content.startsWith(prefix) && !message.author.bot) {
		console.log(`message from ${message.author.username}!`);
		const talk = message.content.toLocaleString().slice(prefix.length).split(' ');
		const furtalk = `${message.content.toLocaleString().slice(prefix.length).split(' ')}`;
		const args = message.content.toLocaleString().toLowerCase().slice(prefix.length).split(' ');
		const command = args.shift().toLowerCase();
		const guild = message.guild
		
		//command logging
		function logaction(rng, rng2, rng3) {
			if ((command === 'potato') || (command === 'shitpost') || (command === 'howis') || (command === 'launchdate')) {
				return client.channels.get(`${logchannel}`).send({embed: {
						color: 9647333,
						author: {
						  name: `${message.member.displayName}`,
						  icon_url: `${message.author.displayAvatarURL}`
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
			else {
				return client.channels.get(`${logchannel}`).send({embed: {
						color: 3438828,
						author: {
						  name: `${message.member.displayName}`,
						  icon_url: `${message.author.displayAvatarURL}`
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
		/* function logaction(rng, rng2, rng3) {
			if ((command === 'potato') || (command === 'shitpost') || (command === 'howis') || (command === 'launchdate')) {
				return client.channels.get(`${logchannel}`).send(`**Message From:** ${message.member.displayName}\n**Location:** ${message.channel}\n**Command:** ${talk.join(" ")}\n**RNG Values:** ${rng}\`\`\` \`\`\``);
			}
			else {
				return client.channels.get(`${logchannel}`).send(`**Message From:** ${message.member.displayName}\n**Location:** ${message.channel}\n**Command:** ${talk.join(" ")}\`\`\` \`\`\``);
			}
		} */
		
		//role check function (usertier)
		function roletier(manager, officer, moderator, discordmoderator, giant, potatorole, testersrole, canteencrasherrole, betarole) {
			//manager only check
			if (message.member.roles.has(`${manager}`)){
				return usertier = 1;
			}
			//officer only check
			else if ((message.member.roles.has(`${officer}`)) && (!message.member.roles.has(`${manager}`))){
				return usertier = 2;
			}
			//moderator only check
			else if ((message.member.roles.has(`${moderator}`)) && (!message.member.roles.has(`${officer}`))){
				return usertier = 3;
			}
			//discoermoderator only check
			else if ((message.member.roles.has(`${discordmoderator}`)) && ((!message.member.roles.has(`${officer}`)) || (!message.member.roles.has(`${moderator}`)))){
				return usertier = 4;
			}
			//giant only check
			else if ((message.member.roles.has(`${giant}`)) && ((!message.member.roles.has(`${officer}`)) || (!message.member.roles.has(`${moderator}`)) || (!message.member.roles.has(`${discoermoderator}`)))){
				return usertier = 5;
			}
			else
			{
				return usertier = 99
			}
		}
		
		//\!say function
		function messageChannel(mention) {
			if (!mention) return;
			
			if (mention.startsWith('<#') && mention.endsWith('>')) {
				mention = mention.slice(2, -1);
				var channelid = mention
				talk.shift();
				talk.shift().toString();
				return client.channels.get(`${channelid}`).send(talk.join(" "));
				//return client.users.get(mention);
			}
		}
		
		//\!owo function
		function furtrim() {
			const oworng = getRandomInt(1, 6);
			let talk = (message.content.toLocaleString().slice(prefix.length).split(' ').join(" "));
			if (oworng <= 4){
				let furtalk = (talk.slice(4).toString().replace(/l/gi, "w").replace(/r/gi, "w").replace(/i/gi, "ei").replace(/ww/gi, "w"));
				return message.channel.send(`${furtalk}`);
			}
			else if (oworng >= 5){
				let furtalk = ((talk.slice(4).toString().replace(/l/gi, "w").replace(/r/gi, "w").replace(/i/gi, "ei").replace(/a/gi, "wa").replace(/ww/gi, "w")) + " OwO");
				return message.channel.send(`${furtalk}`);
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
				return client.users.get(mention);
			}
		}
		
		function resetBot(usertier) {
			if (usertier <= 4)
			{
				console.log(`Wack.`)
				guildMember.addRole(`${muterole}`); //invalid, throws error
			}
		}
		
		if ((message.channel.type !== `dm`))
		{
			roletier(manager, officer, moderator, discordmoderator, giant, potatorole, testersrole, canteencrasherrole, betarole);
			//console.log(`User tier: ${usertier}!`);
			//check channel/usertier
			if ((message.channel.id === `${botchannel}`) || (message.channel.id === `${entrancechannel}`) || (usertier <=4))
			{
				//load commands without if statement
				/* if (commandlist.some(command)) {
					var run = command.toString();
					run(logaction, client, message, args, usertier, getRandomInt, potatoRecently, potatocount, potatorole, potatoyellnum, botchannel, testersrole, canteencrasherrole, betarole, shitRecently, furtrim, owoedRecently, potatocount, potatoyellnum, streamchannel, talk, messageChannel);
				} */
				try {
					if (command === 'potato') {
						if (potatocount >= potatoyellnum)
						{
							potatocount = 1;
							potato(logaction, getRandomInt, message, potatoRecently, potatocount, potatorole, potatoyellnum, botchannel, timeouthour, superpotatoRecently, ultrapotatoRecently, finalpotatoRecently, potatobanned);
						}
						else
						{
							potatocount = (potatocount + 1)
							potato(logaction, getRandomInt, message, potatoRecently, potatocount, potatorole, potatoyellnum, botchannel, timeouthour, superpotatoRecently, ultrapotatoRecently, finalpotatoRecently, potatobanned);
						}
					}
					else if (command === 'servers') {
						servers(logaction, message, args);
					}
					else if (command === 'iam') {
						iam(logaction, message, args, botchannel, testersrole, canteencrasherrole, betarole);
					}
					else if (command === 'shitpost') {
						shitpost(logaction, getRandomInt, message, shitRecently);
					}
					else if (command === 'help') {
						help(logaction, message, args, usertier, getRandomInt, potatorole, client);
					}
					else if (command === 'howis') {
						howis(logaction, message, args, getRandomInt, howisrng, howisRecently, botchannel, timeout5min, args);
					}
					else if (command === 'changelog') {
						changelog(logaction, message);
					}
					else if (command === 'purge') {
						purge(logaction, message, usertier, args);
					}
					else if (command === 'debug') {
						debug(logaction, message, usertier);
					}
					else if (command === 'owo') {
						owo(logaction, message, args, potatorole, furtrim, owoedRecently);
					}
					else if (command === 'fuckgoback') {
						fuckgoback(logaction, message);
					}
					else if (command === 'shutup') {
						shutup(logaction, message, usertier);
					}
					else if (command === 'addpotato') {
						addpotato(logaction, message, usertier, potatocount);
					}
					else if (command === 'potatoyell') {
						potatoyell(logaction, message, usertier, args, potatoyellnum);
					}
					else if (command === 'stream') {
						stream(logaction, message, usertier, args, streamchannel, client);
					}
					else if (command === 'robot') {
						robot(logaction, message, args, entrancechannel, robotrole, joinedRecently, member);
					}
					else if (command === 'status'){
						status(logaction, message, usertier, args, client);
					}
					/* else if (command === 'launchdate'){
						launchdate(logaction, message, getRandomInt);
					} */
					else if (command === 'message'){
						messagefunc(logaction, message, usertier, args, talk, client);
					}
					else if (command === 'say'){
						say(logaction, message, usertier, args, messageChannel);
					}
					else if (command === 'bitch'){
						logaction()
						message.delete(10);
						message.author.send(`no u`);
					}
					else if (command === 'avatar'){
						avatar(logaction, message, args, getUserFromMention, talk, client);
					}
					else if (command === 'warn'){
						warn(logaction, message, usertier, args, messageChannel, fs, getUserFromMention, talk, warnchannel, client, moderator, warnlist, warnmute);
					}
					else if (command === 'getwarn'){
						getwarn(logaction, message, usertier, args, messageChannel, fs, talk, warnchannel, client, moderator, warnlist);
					}
					else if (command === 'addwarninfo'){
						addwarninfo(logaction, message, usertier, args, messageChannel, fs, talk, warnchannel, client, moderator, warnlist);
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
					else if (command === 'reboot') {
						resetBot(usertier);
					}
					else {
						console.log('invalid run!');
						message.author.send(`That is not a valid command. Please use \`!help\` in **#botato_cellar** for commands.`);
						if (message.channel.type !== `dm`) {
							message.delete(10);
						}
					}
				}
				catch (err){
					if (err && err.message === `err is not defined`){
						client.channels.get(`${botchannel}`).send(`You have DMs dissabled <@${message.member.id}>. Most bot functions will not work for you.`);
					}
					if (err && err.message === `guildMember is not defined`){
						guildMember.addRole(`${muterole}`); //invalid, throws error
						//I don't think you understand. I'm throwing an error to catch an error to then throw another error.
						//It just works.
					}
					else {
						console.log(`${err.message}`)
						//client.channels.get(`${botchannel}`).send(`Wack.`);
					}
				}
			}
			else  {
			console.log('invalid channel!');
			message.delete(10);
			message.author.send(`Invalid channel. Please use \`!help\` in **#botato_cellar** for commands.`);
			}
		}
		else  {
			console.log('invalid channel DM!');
			message.delete(10);
			message.author.send(`Invalid channel. Please use \`!help\` in **#botato_cellar** for commands. \n\ \n\Going forward, Potato Bot will no longer accept commands sent through DMs. This is being done to improve bot functionality and allow for more administrative functions. Please use \`!help\` in **#botato_cellar** for a full list of commands your account has access to.`);
		}
	}
})