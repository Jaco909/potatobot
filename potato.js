const fs = require('fs');
const Discord = require('discord.js');
const { prefix, giant, streamchannel, logchannel, admin, mods, discordmod, lfp, botchannel, potatorole, testersrole, canteencrasherrole, betarole, token } = require('./config.json');
const client = new Discord.Client();
//var vdebug = require(`./commands/debug`);

//declare constants
const talkedRecently = new Set();
const owoedRecently = new Set();
const shitRecently = new Set();
const channelist = new Set();
var potatoyellnum = 15;
var potatocount = 0;
var purge = 0;
var activities = ["reading a book?", "going outside?", "making a mvm mission?", "playing some mvm?", "bothering that garbage dynobot?", "masturbating?", "shitposting in memes?", "being a productive member of society?", "eating some potatoes?", "talking to your firends? Oh right, you don't have any.", "running away from your problems?", "being a worse person?", "listening to some music?", "worshiping the comming AI apocalypse?", "waiting for your dad to come home?", "teaching me how to code?", "waiting for Half-Life 3?", "taking a shower? You really need one."];
var stopgethelp = ["https://youtu.be/9Deg7VrpHbM", "https://youtu.be/NPtSGYi7HII?t=23s", "https://youtu.be/S4bmCvekW48", "https://youtu.be/9Deg7VrpHbM"];

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//discord login token
client.login(token);

//rng functionality
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};

/* function getUserFromMention(mention) {
	
	if (!mention) return;
	
	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);
		console.log(`${mention}`);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
			console.log(`${mention}`);
		}

		return client.users.get(mention);
	}
} */

client.on('ready', () => {
    console.log('Bot online!');
	client.user.setStatus('online');
	client.user.setActivity('!help for info');
});

//call commands
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.on('message', message => {
	if (message.content.startsWith(prefix) && !message.author.bot){
		
		console.log(`message from ${message.author.username}!`);
		const talk = message.content.toLocaleString().slice(prefix.length).split(' ');
		const furtalk = `${message.content.toLocaleString().slice(prefix.length).split(' ')}`;
		const args = message.content.toLocaleString().toLowerCase().slice(prefix.length).split(' ');
		const command = args.shift().toLowerCase();
		const guild = message.guild
		const guildMember = message.member;
		
		//command logging
		function logaction(rng, rng2, rng3) {
			if ((command === 'potato') ||  (command === 'shitpost') || (command === 'launchdate')) {
				return client.channels.get(`${logchannel}`).send(`**Message From:** ${message.member.displayName}\n**Location:** ${message.channel}\n**Command:** ${talk.join(" ")}\n**RNG Values:** ${rng}\`\`\` \`\`\``);
			}
			else {
				return client.channels.get(`${logchannel}`).send(`**Message From:** ${message.member.displayName}\n**Location:** ${message.channel}\n**Command:** ${talk.join(" ")}\`\`\` \`\`\``);
			}
		}
		
		//\!say function
		function messageChannel(mention) {
			if (!mention) return;
			
			if (mention.startsWith('<#') && mention.endsWith('>')) {
				mention = mention.slice(2, -1);
				console.log(`${mention}`);
				var channelid = mention
				talk.shift();
				talk.shift().toString();
				console.log(`Channel: ${channelid}`);
				console.log(`Message: ${talk}`);
				return client.channels.get(`${channelid}`).send(talk.join(" "));
				//return client.users.get(mention);
			}
		}
		//\!owo function
		function furtrim() {
			const oworng = getRandomInt(1, 6);
			console.log(`OwO: ${oworng}`);
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
		
		if ((message.channel.type !== `dm`))
		{
			if ((message.channel.id === `${botchannel}`) || (message.member.roles.has(`${admin}`)) || (message.member.roles.has(`${mods}`)) || (message.member.roles.has(`${discordmod}`)))
				{
					if (command === 'potato') {
						const potatorng = getRandomInt(1, 100);
						const potatorngmessage = getRandomInt(1, 11);
						const potatorngyell = getRandomInt(1, 18);
						const potatoyell = activities[potatorngyell]
						logaction(potatorng)
						console.log('Potato run!');
						if (message.channel.id === `${botchannel}`)
						{
							potatocount = (potatocount + 1);
							console.log(`RNG: ${potatorng}`);
							console.log(`Message: ${potatorngmessage}`);
							console.log(`Total: ${potatocount}`);
							
							if (talkedRecently.has(message.author.id))
							{
								console.log('Potato banned!');
								message.channel.send('You just asked for a potato. Come back later.');
								if (potatocount >= potatoyellnum)
								{
									console.log('Potato yell!');
									console.log(`Message: ${potatorngyell}`);
									message.channel.startTyping(true);
									setTimeout(() => {
										message.channel.send('**C\'mon guys, are just going to sit there and spam !potato all day?**');
									}, 4000);
									setTimeout(() => {
										message.channel.send('**Aren\'t there more productive things you could be doing?**');
									}, 5000);
									setTimeout(() => {
										message.channel.send(`**Why not try ${potatoyell}**`);
										potatocount = 0
									}, 6000);
								}
							}
							else if (!talkedRecently.has(message.author.id))
							{
								if(message.member.roles.has(`${potatorole}`)){
									console.log('potato owned!');
									if(potatorngmessage >= 6){
									message.channel.send(`I\'m not giving you another potato, ${message.member.displayName}. Cut it out.`);}
									if(potatorngmessage <= 5){
									message.channel.send(`You already have a potato, ${message.member.displayName}. Don\'t be greedy.`);}
								}
								else if(potatorng == 69){
									console.log('potato give!');
									const guildMember = message.member;
									guildMember.addRole(`${potatorole}`);
									if(potatorngmessage >= 6){
									message.channel.send('Here, have a potato. Potatoes solve everything.');}
									if(potatorngmessage <= 5){
									message.channel.send(`I found a potato for you ${message.member.displayName}. Boil it, mash it, stick it in a stew; do whatever you want with it.`);}
								}
								else {
									console.log('potato none!');
									talkedRecently.add(message.author.id);
									if (potatorngmessage == 1){
									message.channel.send(`I\'m sorry. We\'re currently out of potatoes. Try again later.`)};
									if (potatorngmessage == 2){
									message.channel.send(`These things, they take time. Come back later.`)};
									if (potatorngmessage == 3){
									message.channel.send(`Look, we were struck by a potato famine, and I\'ve got kids to feed. I can't give you this potato.`)};
									if (potatorngmessage == 4){
									message.channel.send(`We used up all of our potatoes making meme badges. I need to grow some more.`)};
									if (potatorngmessage == 5){
									message.channel.send(`I have a potato. But honestly, I just don\'t like you. Ask again later.`)};
									if (potatorngmessage == 6){
									message.channel.send(`I can\'t just hand out potatoes all willy-nilly ${message.member.displayName}. It\'ll crash the potato economy.`)};
									if (potatorngmessage == 7){
									message.channel.send(`I got hungry and ate the last potato I had. And no, it wasn\'t cannibalism. I\'m a sweet potato.`)};
									if (potatorngmessage == 8){
									message.channel.send(`Oh, *you* want a potato. Well let me just strap on my *potato helmet*, squeeze down into a *potato cannon*, and fire off into *potato land*, where *potatoes* grow on *potatoies*. (No)`)};
									if (potatorngmessage == 9){
									message.channel.send(`Sans ate all the potatoes. I need to go out and buy some more.`)};
									if (potatorngmessage == 10){
									message.channel.send(`We\'re fresh out of potatoes. Ask again in a bit.`)};
									setTimeout(() => {
										talkedRecently.delete(message.author.id);
									}, 3600000 ); //3600000
									if (potatocount >= potatoyellnum)
									{
										console.log('potato yell!');
										message.channel.startTyping(true);
										setTimeout(() => {
											message.channel.send('**C\'mon guys, are just going to sit there and spam !potato all day?**');
										}, 2000);
										setTimeout(() => {
											message.channel.send('**Aren\'t there more productive things you could be doing?**');
										}, 3000);
										setTimeout(() => {
											message.channel.send(`**Why not try ${potatoyell}**`);
											potatocount = 0
										}, 4000);
									}
								}
							}
						}
						/* else if (args[0] == `help`) {
							console.log('potato help!');
							message.delete(10);
							message.author.send(`**Usage:** \`!potato\`\n\**Channels:** *#botato_cellar*\n\**Description:** Ask the bot if there are any potatoes available. ||But we\'re usually out||`);
						} */
						message.channel.stopTyping(true);
					}
					else if (command === 'servers') {
						logaction()
						console.log('servers run!');
						if ((args.length && args[0] == 'usa') || (args.length && args[0] == 'america') || (args.length && args[0] == 'us') || (args.length && args[0] == 'murica') || (args.length && args[0] == 'guns'))
						{
							console.log('USA give!');
							message.channel.send(`https://potato.tf/servers/USA`);
						}
						else if ((args.length && args[0] == 'eu') || (args.length && args[0] == 'europe'))
						{
							console.log('EU give!');
							message.channel.send(`https://potato.tf/servers/EU`);
						}
						/* else if(args.length && args[0] == 'help')
						{
							console.log('servers help!');
							message.delete(10);
							message.author.send(`**Usage:** \`!server [region]\`\n\**Channels:** *#botato_cellar*, *#looking_for_players*.\n\**Description:** Retrives information about current Potato servers. You can also add \`USA\` for USA servers and \`EU\` for Europe servers.`);
						} */
						else
						{
							console.log('servers generic!');
							message.channel.send(`https://potato.tf/servers`);
						}
					}
					else if (command === 'iam') {
						logaction()
						console.log('iam run!');
						if (message.channel.id === `${botchannel}`) {
							if (args.length && args[0] == 'testers') {
								if(message.member.roles.has(`${testersrole}`)){
									console.log('iam tester remove!');
									message.member.removeRole(`${testersrole}`);
									message.author.send(`You have been removed from Testers.`);
								}
								else {
									const guildMember = message.member;
									console.log('iam tester add!');
									guildMember.addRole(`${testersrole}`);
									message.author.send(`You now have the role Testers.`);
								}
							}
							else if(args.length && args[0] == 'canteencrasher') {
								if(message.member.roles.has(`${canteencrasherrole}`)){
									console.log('iam canteen remove!');
									message.member.removeRole(`${canteencrasherrole}`);
									message.author.send(`You have been removed from CanteenCrasher.`);
								}
								else {
									const guildMember = message.member;
									console.log('iam canteen add!');
									guildMember.addRole(`${canteencrasherrole}`);
									message.author.send(`You now have the role CanteenCrasher.`);
								}
							}
							else if(args.length && args[0] == 'beta') {
								if(message.member.roles.has(`${betarole}`)){
									console.log('iam beta remove!');
									message.member.removeRole(`${betarole}`);
									message.author.send(`You have been removed from Beta Tester.`);
								}
								else {
									const guildMember = message.member;
									console.log('iam beta add!');
									guildMember.addRole(`${betarole}`);
									message.author.send(`You now have the role Beta Tester.`);
								}
							}
							/* else if(args.length && args[0] == 'help') {
								message.delete(10);
								console.log('iam help!');
								message.author.send(`**Usage:** \`!iam [role]\`\n\**Channels:** *#botato_cellar*.\n\**Description:** Gives you the requested role. Current available options: \n\`!iam CanteenCrasher\` to assign the role @CanteenCrasher.\n\`!iam Testers\` to assign the role @Testers.\n\`!iam beta\` to assign the role @Beta Tester.`);
							} */
							else {
								message.delete(10);
								console.log('iam invalid!');
								message.author.send(`That is not a valid role. Please use \`!iam help\` for available roles.`);
							}
						}
					}
					else if (command === 'shitpost') {
						const shitrng = getRandomInt(1, 150);
						logaction(shitrng)
						console.log('Shitpost run!');
						if (args[0] !== `help`)
						{
							if (shitRecently.has(message.author.id)) {
								console.log('Shitpost banned!');
								message.delete(10);
								message.author.send("Please wait a minute for another shitpost.");
								return;
							}
							else if (!shitRecently.has(message.author.id)){
								console.log('shitpost give!');
								console.log(shitrng);
								shitRecently.add(message.author.id);
								setTimeout(() => {
									shitRecently.delete(message.author.id);
								}, 60000);
								if(shitrng == 1){
									message.author.send(`Happy Spooktober. https://youtu.be/RPyLhKIFzms`)};
								if(shitrng == 2){
									message.author.send(`Someone stop this madman. https://youtu.be/Y5NBxNn_SwY`)};
								if(shitrng == 3){
									message.author.send(`And they were the best 5 notes. https://youtu.be/LVyOWbrxjHM`)};
								if(shitrng == 4){
									message.author.send(`Hanging moss + Blue Moutain Flower. https://youtu.be/uJ9GaYGJEWE`)};
								if(shitrng == 5){
									message.author.send(`Is mayonnaise an infinity stone?﻿ https://youtu.be/bleoywz0oeg`)};
								if(shitrng == 6){
									message.author.send(`Anne are you ok? https://youtu.be/6-7NDP8V-6A`)};
								if(shitrng == 7){
									message.author.send(`The best remix yet. https://youtu.be/120HFjKPuJ4`)};
								if(shitrng == 8){
									message.author.send(`Break out your credit card. https://youtu.be/SGi4j-bdcLk`)};
								if(shitrng == 9){
									message.author.send(`I hope mine\'s a football. https://youtu.be/M1uVi41I1oc`)};
								if(shitrng == 10){
									message.author.send(`Pizza Time. https://youtu.be/ckTkZnJkZUw`)};
								if(shitrng == 11){
									message.author.send(`Bongo cat best meme. https://youtu.be/U1fHWN4OkHM`)};
								if(shitrng == 12){
									message.author.send(`\"Fixed going to hell while in a bumpercart\" https://youtu.be/4nxsCZ2SEcQ`)};
								if(shitrng == 13){
									message.author.send(`SPAAAAAAAAAAAAAAAAAAAAAAACE!!!!! https://youtu.be/Z1roP52Py7s`)};
								if(shitrng == 14){
									message.author.send(`Interrobang? https://youtu.be/2vOa8EkLdJY`)}; //DM furry
								if(shitrng == 15){
									message.author.send(`Almost. https://youtu.be/beDN-q3UcbY`)};
								if(shitrng == 16){
									message.author.send(`Dam you Phil Swift. https://youtu.be/XsNaL-pNAW0`)};
								if(shitrng == 17){
									message.author.send(`And you too. https://youtu.be/xF0cGt5-69k`)};
								if(shitrng == 18){
									message.author.send(`MAH SOAP! https://youtu.be/KvdfDveEQh4`)};
								if(shitrng == 19){
									message.author.send(`BITCH! https://youtu.be/As0YXoa6qw4`)};
								if(shitrng == 20){
									message.author.send(`Source: Every anime ever. https://youtu.be/kSVkprXlc6k`)};
								if(shitrng == 21){
									message.author.send(`Missing here: all the griefers and modders. https://youtu.be/t0PAEehqLOw`)};
								if(shitrng == 22){
									message.author.send(`Time for a little CQC. https://youtu.be/JoRYWinS_u8`)}; //sfw brazzers MGSV
								if(shitrng == 23){
									message.author.send(`He has a nice yard too. https://youtu.be/N0gb9v4LI4o`)};
								if(shitrng == 24){
									message.author.send(`Nyoom. https://youtu.be/X5S0OjTq9kY`)};
								if(shitrng == 25){
									message.author.send(`I\'ve just been in this place before! https://youtu.be/bGLjXZT5rhw`)};
								if(shitrng == 26){
									message.author.send(`Next up on The Office: https://youtu.be/MI_igHMjGlQ`)};
								if(shitrng == 27){
									message.author.send(`He has some sick moves. https://youtu.be/-6NK0co5Nho`)};
								if(shitrng == 28){
									message.author.send(`Poor dog. https://youtu.be/jVk3kePdYRA`)};
								if(shitrng == 29){
									message.author.send(`Typical German response. https://youtu.be/3t3XiieGA5E`)};
								if(shitrng == 30){
									message.author.send(`A classic. https://youtu.be/VqB1uoDTdKM`)};
								if(shitrng == 31){
									message.author.send(`GABENGABENGABENGABENGABEN https://youtu.be/aYgXSGNpLSA`)};
								if(shitrng == 32){
									message.author.send(`Thicc. https://youtu.be/ybi90Qz_FSY`)};
								if(shitrng == 33){
									message.author.send(`Poor interro. https://youtu.be/Tp76cHN2FDU`)}; //gassed furries
								if(shitrng == 34){
									message.author.send(`Spawn tank. Set speed 200. https://youtu.be/NG-_CJzD1Lc`)};
								if(shitrng == 35){
									message.author.send(`Where\'s the dancing groot? https://youtu.be/71a0Nx_qWYw`)};
								if(shitrng == 36){
									message.author.send(`This is pure shitpost. https://youtu.be/AI4rexHukPU?t=11s`)};
								if(shitrng == 37){
									message.author.send(`Photoshop is amazing. ﻿https://youtu.be/Tui2FAQO7z4`)};
								if(shitrng == 38){
									message.author.send(`HOTLINE MIAMI 3: WRONG DOOR﻿ https://youtu.be/0mt0EFau6xg`)};
								if(shitrng == 39){
									message.author.send(`Trumpet Boy Meme is underrated.﻿ https://youtu.be/9SFxtqc3v08`)};
								if(shitrng == 40){
									message.author.send(`Stay away from my waifu. https://youtu.be/2kqEfuVUwOE`)};
								if(shitrng == 41){
									message.author.send(`What a magical lady. https://youtu.be/jsPhMdgb51c`)};
								if(shitrng == 42){
									message.author.send(`BITCH! https://youtu.be/dHHJGEeCLSo`)};
								if(shitrng == 43){
									message.author.send(`It was a strange episode. https://youtu.be/mK2fNG26xFg`)};
								if(shitrng == 44){
									message.author.send(`Tim Curry is a national treasure. https://youtu.be/g1Sq1Nr58hM`)};
								if(shitrng == 45){
									message.author.send(`AKA Interro pings everyone. https://youtu.be/D1VqrwEyL5k`)};
								if(shitrng == 46){
									message.author.send(`So that\'s what Nuke looks like. https://youtu.be/CzhyCm_S-Pw`)};
								if(shitrng == 47){
									message.author.send(`The love child of two stale memes. https://youtu.be/tUOrwWge62A`)};
								if(shitrng == 48){
									message.author.send(`Howdy diddly. https://youtu.be/hnewjEEUs1c`)};
								if(shitrng == 49){
									message.author.send(`A zebra being eaten would also be acceptable. https://youtu.be/8eXj97stbG8`)};
								if(shitrng == 50){
									message.author.send(`Fashion comes at a price.﻿ https://youtu.be/HPjJCVylFBo`)};
								if(shitrng == 51){
									message.author.send(`A classic. https://youtu.be/uE-1RPDqJAY`)};
								if(shitrng == 52){
									message.author.send(`Ho ho ho ho ho ho ho ho no. https://youtu.be/aRsOBFhNjVM`)};
								if(shitrng == 53){
									message.author.send(`Begone you unworthy peasent. https://youtu.be/w0qVciN4lTs`)};
								if(shitrng == 54){
									message.author.send(`DO THA MARIO! https://youtu.be/PGfhtLrwiKo`)};
								if(shitrng == 55){
									message.author.send(`A classic potato post from the potato bot. https://youtu.be/qrQVFZx7XX4`)};
								if(shitrng == 56){
									message.author.send(`Uhh... Ramen.﻿ https://youtu.be/T_PuZBdT2iM`)};
								if(shitrng == 57){
									message.author.send(`How do you even describe the man, the myth, the Nicolas Cage. https://youtu.be/yaYxqDEP7L8`)};
								if(shitrng == 58){
									message.author.send(`I\'d watch it. https://youtu.be/I1XQduS6IfA`)};
								if(shitrng == 59){
									message.author.send(`A classic shitpost. https://youtu.be/pbe5fOdp9Hk`)};
								if(shitrng == 60){
									message.author.send(`WAHHHHHOOOOOOOWAHOOOOOOOOOOOOOOOOOOOOOOOOOO! https://youtu.be/aaSRYecKaqc`)};
								if(shitrng == 61){
									message.author.send(`Banana Pudding was a hard year for all of us.﻿ https://youtu.be/znKz_J6Mg2E`)};
								if(shitrng == 62){
									message.author.send(`owuzdis. https://youtu.be/voJmOYyI-T0`)};
								if(shitrng == 63){
									message.author.send(`Anyway, that is how i lost my medical license﻿. https://youtu.be/dj4bmq5IzDo`)};
								if(shitrng == 64){
									message.author.send(`One sexy boi. https://youtu.be/q4JFu3C6VXU`)};
								if(shitrng == 65){
									message.author.send(`Meanwhile, in Half Life 1... https://youtu.be/pZCN2T1XDt8`)};
								if(shitrng == 66){
									message.author.send(`Pluto doesn't mess around. https://youtu.be/AXxBhOc7jEA`)};
								if(shitrng == 67){
									message.author.send(`You\'re Welcome. https://youtu.be/vA3OqkSX4QA`)};
								if(shitrng == 68){
									message.author.send(`After all, we\'re all just air conditioners. https://youtu.be/kjS6bQ5OQ-o`)};
								if(shitrng == 69){
									message.author.send(`POLITICAL JOKES, AMIRITE? https://youtu.be/LRpyzafneYo`)};
								if(shitrng == 70){
									message.author.send(`We have to go back Kate! WE HAVE TO GO BACK!! https://youtu.be/wAu_fYHZKLs`)};
								if(shitrng == 71){
									message.author.send(`Dang ol tell you whut mang. https://youtu.be/M-mQ3JLt8SQ`)};
								if(shitrng == 72){
									message.author.send(`Who could've CENA thing like that coming?﻿ https://youtu.be/3E--xFjR1dM`)};
								if(shitrng == 73){
									message.author.send(`I'm fed up with this- squirrel!﻿ https://youtu.be/XXg29KpIlwM`)};
								if(shitrng == 74){
									message.author.send(`2016 was a strange year. https://youtu.be/6C5_VbK6VCo`)};
								if(shitrng == 75){
									message.author.send(`Doomguy for Smashbros.﻿ https://youtu.be/rwvgSf8jqFA`)};
								if(shitrng == 76){
									message.author.send(`What is gay frogs? https://youtu.be/lVQza7Luqj0?t=9s`)};
								if(shitrng == 77){
									message.author.send(`Eat your steamed hams, Apollo.﻿ https://youtu.be/n-QtsAf9xyU`)};
								if(shitrng == 78){
									message.author.send(`This video actually casues mental and physical pain. https://youtu.be/3q7oJuyy5Ac`)};
								if(shitrng == 79){
									message.author.send(`This video causes mental and physical pain. https://youtu.be/Q9wDLSrLeUE`)};
								if(shitrng == 80){
									message.author.send(`AAAAAAAAAHHH! AAAAAAAAAAHHHHHHH!!! AAAAAAAAAAAAAAHAHAH!!!!! https://youtu.be/nAjh3fJuI6k`)};
								if(shitrng == 81){
									message.author.send(`The buns of the patriots. https://youtu.be/V8kp3b5h2DY`)};
								if(shitrng == 82){
									message.author.send(`THIS MAN NEEDS TO BE STOPPED! https://youtu.be/-V2PdCT9TSk`)};
								if(shitrng == 83){
									message.author.send(`As a weeb, I can confirm this is accurate. https://youtu.be/frKyaFTeC7c`)};
								if(shitrng == 84){
									message.author.send(`NOT THE BEES!﻿ https://youtu.be/PYtXuBN1Hvc`)};
								if(shitrng == 85){
									message.author.send(`Too soon﻿. https://youtu.be/ej0TwOZ0hjw`)};
								if(shitrng == 86){
									message.author.send(`A preview of the upcomming Lion King remake: https://youtu.be/UmPmpUTr22c`)};
								if(shitrng == 87){
									message.author.send(`It's worse than you think. https://youtu.be/AP1d1mOCLsI`)};
								if(shitrng == 88){
									message.author.send(`This is why I cry each time I boot up the game.﻿ https://youtu.be/5nGdHeaPXw8`)};
								if(shitrng == 89){
									message.author.send(`Titanium teeth﻿. https://youtu.be/W5STjplRAX8`)}; //coconut pussy
								if(shitrng == 90){
									message.author.send(`Pokemans are still cool, right? https://youtu.be/jcH_CX7n0NI`)};
								if(shitrng == 91){
									message.author.send(`The inner Aku-nations of my mind are an egg-nigma.﻿ https://youtu.be/1jXxnJgeTd8`)};
								if(shitrng == 92){
									message.author.send(`You’re a Jedi harry﻿! https://youtu.be/o-ZM7iVP6Ko`)};
								if(shitrng == 93){
									message.author.send(`I\'m sorry. This is just bad. https://youtu.be/HZyAI-RdRKc`)};
								if(shitrng == 94){
									message.author.send(`That music theory degree is really paying off I see. https://youtu.be/9XM6P6mygPw`)};
								if(shitrng == 95){
									message.channel.send(`Oh boy.`);
									message.author.send(`I'm so sorry. Nobody should have to watch this. https://youtu.be/NgWn7zbgxZ4?t=12s`)}; //pickle supprise
								if(shitrng == 96){
									message.author.send(`When the Ghostbusters are too expensive﻿. https://youtu.be/3ufm_PPEulM`)};
								if(shitrng == 97){
									message.author.send(`That\'s me every morning. https://youtu.be/tpb_5mYp_0o`)};
								if(shitrng == 98){
									message.author.send(`If Dr Sues owned Marvel﻿. https://youtu.be/OOUGnVVEDAA`)};
								if(shitrng == 99){
									message.channel.send(`Oh no.`);
									message.author.send(`I should probably remove this one. TRIGGER WARNING! https://youtu.be/GYXZcd6imzA`)}; //6 flags car crash
								if(shitrng == 100){
									message.author.send(`NANOMACHINES SON! https://youtu.be/1vtNZqzbXkk`)};
								if(shitrng == 101){
									message.author.send(`Give this man a saxxy! https://youtu.be/DAAEGiyHFwI`)};
								if(shitrng == 102){
									message.author.send(`Potato, play Canteen Crasher. https://youtu.be/9ps7XTZxRjg`)};
								if(shitrng == 103){
									message.author.send(`And patch day... and the patch 2 day... https://youtu.be/Rb4iB-_Ew6I`)};
								if(shitrng == 104){
									message.author.send(`When the judges played Skye. https://youtu.be/tqaWtxmhcvY`)};
								if(shitrng == 105){
									message.author.send(`I went to Australia recently. It\'s a very strange place. https://youtu.be/v6yg4ImnYwA`)};
								if(shitrng == 106){
									message.author.send(`One of my favorite meals is boiled cheeseburgers. https://youtu.be/xw-jSymE76o`)};
								if(shitrng == 107){
									message.author.send(`Fuck science. https://youtu.be/LJDgVlv55Uw`)};
								if(shitrng == 108){
									message.author.send(`\'cause I like life at Paddy\'s pub. https://youtu.be/1gmWMk24OfI`)};
								if(shitrng == 109){
									message.author.send(`Is this, too easy for you? https://youtu.be/2kr7KDCsIws`)};
								if(shitrng == 110){
									message.author.send(`These are still funny, right? Right? https://youtu.be/6kIsEzEmI9w`)};
								if(shitrng == 111){
									message.author.send(`Kliner, you dirty bastard. https://youtu.be/gyYIjn0V1Uc?t=8s`)};
								if(shitrng == 112){
									message.author.send(`TRUCKS! https://youtu.be/26nNM5DsUTo`)};
								if(shitrng == 113){
									message.author.send(`Big oof. https://youtu.be/XwgrwcPaSzA`)};
								if(shitrng == 114){
									message.author.send(`Hoi ti toi ti toiiii! https://youtu.be/TKWGFLbhgec`)};
								if(shitrng == 115){
									message.author.send(`No, it\'s the gun. https://youtu.be/c6b9DdbO_gE`)};
								if(shitrng == 116){
									message.author.send(`Wut? INTERNET! https://youtu.be/rkGUrjALL1s`)};
								if(shitrng == 117){
									message.author.send(`Shia surprise! https://youtu.be/o0u4M6vppCI`)};
								if(shitrng == 118){
									message.author.send(`I\'M AT SOUP! https://youtu.be/nVDRnDyZWDo`)};
								if(shitrng == 119){
									message.author.send(`That haircut is pretty bad. https://youtu.be/9uqSaoVG7B4`)};
								if(shitrng == 120){
									message.author.send(`BONUS DUCKS! https://youtu.be/MzC2zkAHmPg`)};
								if(shitrng == 121){
									message.author.send(`I feel inspired now. https://youtu.be/eQq5Dol40vY`)};
								if(shitrng == 122){
									message.author.send(`I wanna go to space. https://youtu.be/k-UmqZdmbmE`)};
								if(shitrng == 123){
									message.author.send(`Stay away from his sentry. https://youtu.be/HjGrHBpfqCo`)};
								if(shitrng == 124){
									message.author.send(`Next week we look at Payday 2. https://youtu.be/jtxK6fKpJpo`)};
								if(shitrng == 125){
									message.author.send(`God damn meat eaters. https://youtu.be/p0VUY-5qeIA`)};
								if(shitrng == 126){
									message.author.send(`Don\'t tell interro. https://youtu.be/4xLxozJhCdA`)};
								if(shitrng == 127){
									message.author.send(`Who want\'s to play with my wii? https://youtu.be/O3MVf6H49wA`)};
								if(shitrng == 128){
									message.author.send(`Let\'s nerf Mercy again. https://youtu.be/RMDItOwN_SU`)};
								if(shitrng == 129){
									message.author.send(`Super PSTW Action RPG was the *shit*. https://youtu.be/4Z2Z23SAFVA`)};
								if(shitrng == 130){
									message.author.send(`Fuck I\'m hungry now. https://youtu.be/aYAGB11YrSs`)};
								if(shitrng == 131){
									message.author.send(`Well that smarts. https://youtu.be/r0TGzOFwxhs`)};
								if(shitrng == 132){
									message.author.send(`I am required by law to include Running in the 90\'s. For maximum effect, please play this song when a fast tank spawns. https://youtu.be/XCiDuy4mrWU`)};
								if(shitrng == 133){
									message.author.send(`I am required by law to include Running in the 90\'s. For maximum effect, please play this song when a sentry tank spawns. https://youtu.be/NG-_CJzD1Lc`)};
								if(shitrng == 134){
									message.author.send(`I am required by law to include Running in the 90\'s. For maximum effect, please play this song when a shield tank spawns. https://youtu.be/prYrizLYFEw`)};
								if(shitrng == 135){
									message.author.send(`I am required by law to include Running in the 90\'s. For maximum effect, please play this song when a tank train spawns. https://youtu.be/yt6B7X1FDNU`)};
								if(shitrng == 136){
									message.author.send(`I am required by law to include Running in the 90\'s. For maximum effect, please play this song when a normal tank spawns. https://youtu.be/MGHbdE4oMGM`)};
								if(shitrng == 137){
									message.author.send(`I am required by law to include Running in the 90\'s. For maximum effect, please play this song when the Omega Tank spawns. https://youtu.be/V0v7gtER3ro`)};
								if(shitrng == 138){
									message.author.send(`I had a professor once who was into black midi. He was an odd person. https://youtu.be/p_c6uQHlhZ0`)};
								if(shitrng == 139){
									message.author.send(`Dat \'aint Kiefer Sutherland. https://youtu.be/44ZNMhWdr5U`)};
								if(shitrng == 140){
									message.author.send(`Dam, the later movies got dark. https://youtu.be/aa9JH_iUSzg`)};
								if(shitrng == 141){
									message.author.send(`Guys I\'m scared. https://youtu.be/m6EYCtkQtEI`)};
								if(shitrng == 142){
									message.author.send(`I\'m offended. https://youtu.be/k-Fgwt4Yd-o`)};
								if(shitrng == 143){
									message.author.send(`Half-Life 3 when?. https://youtu.be/XfgN-EzthJM`)};
								if(shitrng == 144){
									message.author.send(`Gota unlock that secret level. https://youtu.be/PxfyZ5E8lCY`)};
								if(shitrng == 145){
									message.author.send(`Have a free movie. Just don\'t tell the cops. https://youtu.be/tAA_yWX8ycQ`)};
								if(shitrng == 146){
									message.author.send(`I could do it better. https://youtu.be/YSWKtuaV2fY`)};
								if(shitrng == 147){
									message.author.send(`OwO. https://youtu.be/rrD3jp34BFg`)};
								if(shitrng == 148){
									message.author.send(`Please lower your volume for the epicness about to befall you. https://youtu.be/m7yN9UaUCcQ`)};
								if(shitrng == 149){
									message.author.send(`Please Mr. Howard, not again. https://youtu.be/bxg085yEUzo`)};
								if(shitrng == 150){
									message.author.send(`Neahhayana. Harng! Neh! https://youtu.be/gEJKQI_ht1I`)};
							}
						}
						/* else if (args[0] == `help`) {
							console.log('Shitpost help!');
							message.delete(10);
							message.author.send(`**Usage:** \`!shitpost\`\n\**Channels:** *#botato_cellar*.\n\**Description:** Sends the user a SFW garbage shitpost. Then again, all shitposts are garbage.`);
						} */
					}
					else if (command === 'help') {
						logaction()
						if (args[0] == `help`) {
							console.log('Help help!');
							message.delete(10);
							const stoprngmessage = getRandomInt(1, 3);
							const stophelp = stopgethelp[stoprngmessage];
							message.author.send(`**Usage:** \`!help\`\n\**Channels:** *#botato_cellar*\n\**Description:** I... what... why? Why ask for help using help? You just overshot your destination by a command. Like, what are you even trying to achieve by doing this?\n\**STOP**\n${stophelp}`);
						}
						else if (args[0] == `potato`) {
							console.log('Potato help!');
							message.delete(10);
							message.author.send(`**Usage:** \`!potato\`\n\**Channels:** *#botato_cellar*\n\**Description:** Ask the bot if there are any potatoes available. ||But we\'re usually out||`);
						}
						else if (args[0] == `owo`) {
							console.log('Owo help!');
							message.delete(10);
							message.author.send(`**Usage:** \`!owo [text]\`\n\**Channels:** *#botato_cellar*\n\**Description:** Care fow somie huggy wuggies?`);
						}
						else if (args[0] == `servers`) {
							console.log('Servers help!');
							message.delete(10);
							message.author.send(`**Usage:** \`!server [region]\`\n\**Channels:** *#botato_cellar*, *#looking_for_players*.\n\**Description:** Retrives information about current Potato servers. You can also add \`USA\` for USA servers and \`EU\` for Europe servers.`);
						}
						else if(args[0] == `iam`) {
							message.delete(10);
							console.log('iam help!');
							message.author.send(`**Usage:** \`!iam [role]\`\n\**Channels:** *#botato_cellar*.\n\**Description:** Gives you the requested role. Current available options: \n\`!iam CanteenCrasher\` to assign the role @CanteenCrasher.\n\`!iam Testers\` to assign the role @Testers.\n\`!iam beta\` to assign the role @Beta Tester.`);
						}
						else if (args[0] == `shitpost`) {
							console.log('Shitpost help!');
							message.delete(10);
							message.author.send(`**Usage:** \`!shitpost\`\n\**Channels:** *#botato_cellar*.\n\**Description:** Sends the user a SFW garbage shitpost. Then again, all shitposts are garbage.`);
						}
						else if (args[0] == `changelog`) {
							console.log('Changelog help!');
							message.delete(10);
							message.author.send(`**Usage:** \`!changelog\`\n\**Channels:** *#botato_cellar*\n\**Description:** Lists the changelog, so I actually take the time to document what I've changed.`);
						}
						else if (args[0] == `purge`) {
							console.log('Purge help!');
							message.delete(10);
							message.author.send(`**Usage:** \`!purge #\`\n\**Channels:** All.\n\**Description:** Delete the # most recent messages from the channel. Remeber that the command counts as a message.`);
						}
						else if (args[0] == `fuckgoback`) {
							console.log('Fuckgoback help!');
							message.delete(10);
							message.author.send(`**Usage:** \`!fuckgoback\`\n\**Channels:** All.\n\**Description:** We went to far.`);
						}
						else if (args[0] == `shutup`) {
							console.log('Shutup help!');
							message.delete(10);
							message.author.send(`**Usage:** \`!shutup\`\n\**Channels:** All.\n\**Description:** If the bot is stuck in typing status, this will force it to stop. Issue is very rare ||I actually haven't seen it in days, so it\'s probably already fixed||, so this is more of a precaution.`);
						}
						else if (args[0] == `addpotato`) {
							console.log('Addpotato help!');
							message.author.send(`**Usage:** \`!addpotato\`\n\**Channels:** All.\n\**Description:** Adds 1 to the current counter of when the bot yells after using \`!potato\`. Bot will yell when # >= 10.`);
							message.author.send(`**Curent count:** ${potatocount}`);
						}
						else if (args[0] == `potatoyell`) {
							console.log('Potatoyell help!');
							message.author.send(`**Usage:** \`!potatoyell\`\n\**Channels:** All.\n\**Description:** Set\'s the current threshold for when the bot yells after \`!potato\`. Default is 15.`);
							message.author.send(`**Curent threshold:** ${potatoyellnum}`);
						}
						else if (args[0] == `stream`) {
							console.log('Stream help!');
							message.delete(10);
							message.author.send(`**Usage:** \`!stream twitchURL [username]\` \& \`!stream stop\`\n\**Channels:** All.\n\**Description:** Will set the status of the bot to stream to the url defined with \`Username is streaming!\`, and will make a post in the streaming channel. You can add a custom username after the twitch link if you would like to not use your discord username. \`!stream stop\` will end streaming status and clean the streaming announcement.`);
						}
						else if (args[0] == `status`) {
							console.log('Status help!');
							message.delete(10);
							message.author.send(`**Usage:** \`!status status\`\n\**Channels:** All.\n\**Description:** Sets the status of the bot. Options are: \`online\`, \`idle\`, \`dnd\`. This will set the message back to it's default setting.`);
						}
						else if (args[0] == `launchdate`) {
							console.log('Launchdate help!');
							message.delete(10);
							message.author.send(`**Usage:** \`!status status\`\n\**Channels:** All.\n\**Description:** Sets the status of the bot. Options are: \`online\`, \`idle\`, \`dnd\`. This will set the message back to it's default setting.`);
						}
						else if (args[0] == `message`) {
							console.log('Message help!');
							message.delete(10);
							message.author.send(`**Usage:** \`!message [text]\`\n\**Channels:** All.\n\**Description:** Sets the playing text of the bot. Currently breaks sentences into arrays. Will fix soon. Type only \`!message\` to set the message back to normal. `);
						}
						else if (args[0] == `say`){
							console.log('Say help!');
							message.delete(10);
							message.author.send(`**Usage:** \`!say [#channel name] [text]\`\n\**Channels:** All.\n\**Description:** Bot will send a message to the given channel #name.`);
						}
						else if (args[0] == `kill`) {
							console.log('Kill help!');
							message.author.send(`**Usage:** \`!kill\`\n\**Channels:** All.\n\**Description:** Forces the bot to run garbage code and crash. For when shit gets real bad.`);
						}
						else
						{
							console.log('help run!');
							message.author.send('\`\`\`User Commands\`\`\`\n\**Fun Commands**\n\`!potato\` : RNG potato fun!\n\`!shitpost\` : A stale shitpost, just for you.\n\`!launchdate\` : Gives the current launch date of MM.\n\ \n\**Discord Commands**\n\`!iam\` : Assign a role. Use \`!help iam\` for more info.\n\ \n\**Information Commands**\n\`!servers\` : Gives a list of CC servers. See `!servers help\` for more info.');
							if (message.member.roles.has(`${giant}`)) {
								console.log('Help GIANT run!');
								message.author.send('\`\`\`Giant Commands\`\`\`\n\`!stream\` : Sets the potato bot to display a stream. Use \`!stream help\` for more info.');
							}
							if (message.member.roles.has(`${potatorole}`)) {
								console.log('Help POTATO run!');
								message.author.send('\`\`\`Potato Commands\`\`\`\n\`!owo\` : Forces the bot to give huggy wuggies.');
							}
							if ((message.member.roles.has(`${discordmod}`)) || (message.member.roles.has(`${mods}`)) || (message.member.roles.has(`${admin}`))) {
								console.log('Help DISCORDMOD run!');
								message.author.send('\`\`\`Discord Moderator Commands\`\`\`\n\**Bot Controls**\n\`!addpotato\` : Triggers the internal potato counter.\n\`!message\` : Sets the bot\'s current game message *(currently wip)*.\n\`!say\` : Have the bot say something you write.\n\`!shutup\` : Forces the bot to stop typing.\n\`!status\` : Sets the status of the bot.\n\`!stream\` : Set the bot to display a Twitch stream.\n\`!potatoyell\` : Sets the threshold of when the bot yells about \`!potato\` usage.\n\ \n\**Moderation Commands**\n\`!purge\` : Deletes # messages from the channel.');
							}
							/* if ((message.member.roles.has(`${mods}`)) || (message.member.roles.has(`${admin}`))) {
								console.log('help MODERATOR run!');
								message.author.send('\`\`\`Moderator Commands\`\`\`\n\`!status\` : Sets the status of the bot.\n\`!stream\` : Set the bot to display a Twitch stream.');
							} */
							if (message.member.roles.has(`${admin}`)) {
								console.log('Help ADMIN run!');
								message.author.send('\`\`\`Officer Commands\`\`\`\n\`!debug\` : Whatever garbage jaka can\'t make work at the moment.\n\`!kill\` : Force bot to bake itself.\n\`!changelog\` : What bullshit got added now?');
							}
							message.author.send('\`\`\` \`\`\`\n\Use !\`help\` **command** for more information about a command. All commands have help information.\n\All commands must be sent through **#botato_cellar**.');
						}
						
					}
					else if (command === 'changelog') {
						logaction()
						console.log('changelog run!');
						message.author.send('**0.9**\n  **•**Bot restored from old backup.\n\n**1.0**\n  **•**Config updated for current server.\n  **•**Removed \`!meme\`.\n  **•**Updated \`!potato\`.\n		*-*Cooldown lowered from 2 hours to 1 hour.\n		*-*Potato chance lowered from 25% to 1%.\n  **•**Updated \`!servers\`.\n		*-*Removed Singapore and Australia from possible options.\n		*-*Merged Illinois and Philadelphia into USA.\n\n**1.0.1**\n  **•**Removed auto-restart loop.\n\n**1.1**\n  **•**Updated \`!potato\`.\n		*-*Added \`potatoyell\` that triggers after 10 command uses.\n  **•**Added \`!addpotato\`.\n  **•**Added \`!shutup\`.\n\n**1.2**\n  **•**All Commands.\n		*-*Now displays information when help is added to the command.\n  **•**DM Channel.\n		*-*Commands can no longer be sent through DM.\n  **•**Role Autherization.\n		*-*Specified roles are immune to #botato_cellar restriction.\n		*-*Specified roles are allowed to access administrative commands.\n  **•**Updated \`!addpotato\`.\n		*-*Moderator locked command.\n  **•**Updated \`!shutup\`.\n		*-*Moderator locked command.\n  **•**Updated \`!help\`.\n		*-*Now displays commands based on user\'s roles.\n  **•**Added \`!purge\`.\n  **•**Added \`!kill\`.\n\n**1.2.1**\n  **•**Updated \`!potato\`.\n		*-*Locked to #botato_cellar for all users, regardless of role.\n  **•**Updated \`!iam\`.\n		*-*Locked to #botato_cellar for all users, regardless of role.\n\n**1.3**\n  **•**Added \`!status\`.\n  **•**Added \`!message\`.\n  **•**Added \`!stream\`.\n\n**1.3.1**\n  **•**Updated \`!message\`.\n		*-*Fixed \`array.join\` not being applied to the sent message.\n\n**1.3.2**\n  **•**Updated \`!status\`.\n		*-*Fixed status not being changed if the bot\'s status had not been previously changed by a different command.\n\n**1.4**\n  **•**Updated \`!potato\`.\n		*-*Raised potatoyell threshold, and added a command to manualy set the yell threshold.\n		*-*Added 8 new possible rejection phrases.\n		*-*Added 7 new possible yell phrases.\n  **•**Added \`!potatoyell\`.\n  **•**Added \`!launchdate\`.\n  **•**Added \`!changelog\`.\n.');
						message.author.send('\n**1.5**\n  **•**Added \`!fuckgoback\`.\n  **•**Added \`!say\`.\n  **•**Updated \`!stream\`.\n		*-*Now announces stream to the *#streams* channel.\n		*-*Username is now the second value collected.\n		*-*Bot will automatically collect username if not provided.\n		*-*\`!stream stop\` will now also purge the announcement from the *#streams* channel.\n**1.5.1**\n  **•**Updated all commands.\n		*-*Help for all commands now goes through \`!help [command name]\`.\n		*-*Bot will now give rejection messages if the user does not have permission to use the given command.\n  **•**Updated \`!message\`.\n		*-*Capital letters are now displayed.\n  **•**Updated \`!say\`.\n		*-*Capital letters are now displayed.\n**1.5.2**\n  **•**Updated \`!say\`.\n		*-*Now accepts channel names instead of id.\n**1.5.3**\n  **•**Added \`!owo\`.\n  **•**Updated \`!help\`.\n		*-*\`!iam help\` now lists the correct help text.\n  **•**Updated \`!message\`.\n		*-*Fixed the command not being removed from the string.');
						/* else if (args[0] == `help`) {
							console.log('changelog help!');
							message.delete(10);
							message.author.send(`**Usage:** \`!changelog\`\n\**Channels:** *#botato_cellar*\n\**Description:** Lists the changelog, so I actually take the time to document what I've changed.`);
						} */
					}
					else if (command === 'purge') {
						logaction()
						if ((message.member.roles.has(`${discordmod}`)) || (message.member.roles.has(`${mods}`)) || (message.member.roles.has(`${admin}`)))
						{
							console.log('Purge run!');
							var purge = (args[0]);
							console.log(`Purging ${purge} messages!`);
							message.channel.bulkDelete(purge);
							return;
							/* else if (args[0] == `help`) {
								console.log('Purge help!');
								message.delete(10);
								message.author.send(`**Usage:** \`!purge #\`\n\**Channels:** All.\n\**Description:** Delete the # most recent messages from the channel. Remeber that the command counts as a message.`);
							} */
						}
						else {
							message.delete(10);
							message.author.send(`You do not have access to this command.`);
						}
					}
					else if (command === 'debug') {
						logaction()
						/* L = W
						R = W
						randomly double the start of a word (s-suck)
						N = ny
						i = wi
						a = wa */
						if (message.member.roles.has(`${admin}`))
						{
							if (args[0] !== undefined)
							{
								var blah = furtrim();
								/* console.log('owo run!');
								console.log(args.join(" "));
								talk == (talk.join(" "));
								talk == (talk.shift().toString().replace(/l/gi, "w"));
								message.channel.send(talk.join(" ")); */
							}
							//remove commas
							//console.log(talk.join(" "));
							//talk == (talk.join(" "));
							//replace L
							//const furtalk = furtalkmessage();
							//console.log(args.join(" "));
							//args == (args.join(" "));
							//convert arg to string
							//edit string
							//print string
							//
							//message.channel.send(`${furtalk}`);
						}
						else {
							message.delete(10);
							message.author.send(`You do not have access to this command.`);
						}
					}
					else if (command === 'owo') {
						logaction()
						if ((message.member.roles.has(`${potatorole}`)) || (message.member.roles.has(`${discordmod}`)) || (message.member.roles.has(`${mods}`)) || (message.member.roles.has(`${admin}`)))
						{
							if (talkedRecently.has(message.author.id))
							{
								console.log('OwO  banned!');
								message.delete(10);
								message.author.send('I\'m still embarrsed from the last time. Give me an hour.');
							}
							else if (!talkedRecently.has(message.author.id))
							{
								if (args[0] !== undefined)
								{
									furtrim();
									talkedRecently.add(message.author.id);
									setTimeout(() => {
										owoedRecently.delete(message.author.id);
									}, 3600000 ); //3600000
								}
								else {
									message.delete(10);
									message.author.send(`How can I owo nothing?`);
								}
							}
						}
						else {
							message.delete(10);
							message.author.send(`You do not have access to this command.`);
						}
					}
					else if (command === 'fuckgoback') {
						logaction()
						console.log('fuckgoback run!');
						message.channel.send(`https://www.youtube.com/watch?v=39BIdOP0D6E`);
					}
					else if (command === 'shutup') {
						logaction()
						if ((message.member.roles.has(`${discordmod}`)) || (message.member.roles.has(`${mods}`)) || (message.member.roles.has(`${admin}`)))
						{
							console.log('Shutup run!');
							if (message.channel.type !== `dm`) {
								message.delete(10);
							}
							message.channel.stopTyping(true);
							/* else if (args[0] == `help`) {
								console.log('Shutup help!');
								message.delete(10);
								message.author.send(`**Usage:** \`!shutup\`\n\**Channels:** All.\n\**Description:** If the bot is stuck in typing status, this will force it to stop. Issue is very rare ||I actually haven't seen it in days, so it\'s probably already fixed||, so this is more of a precaution.`);
							} */
						}
						else {
							message.delete(10);
							message.author.send(`You do not have access to this command.`);
						}
					}
					/* else if (command === 'mute') {
						logaction()
						if ((message.member.roles.has(`${discordmod}`)) || (message.member.roles.has(`${mods}`)) || (message.member.roles.has(`${admin}`)))
						{
							if (args[0] !== `help`)
							{
								console.log('Shutup run!');
								if (message.channel.type !== `dm`) {
									message.delete(10);
								}
								message.channel.stopTyping(true);
							}
							else if (args[0] == `help`) {
								console.log('Shutup help!');
								message.delete(10);
								message.author.send(`**Usage:** \`!shutup\`\n\**Channels:** All.\n\**Description:** If the bot is stuck in typing status, this will force it to stop. Issue is very rare ||I actually haven't seen it in days, so it\'s probably already fixed||, so this is more of a precaution.`);
							}
						}
					} */
					else if (command === 'addpotato') {
						logaction()
						if ((message.member.roles.has(`${discordmod}`)) || (message.member.roles.has(`${mods}`)) || (message.member.roles.has(`${admin}`)))
						{
							message.delete(10);
							console.log('Addpotato run!');
							potatocount = (potatocount + 1);
							console.log(`Total: ${potatocount}`);
							/* else if (args[0] == `help`) {
								console.log('Addpotato help!');
								message.author.send(`**Usage:** \`!addpotato\`\n\**Channels:** All.\n\**Description:** Adds 1 to the current counter of when the bot yells after using \`!potato\`. Bot will yell when # >= 10.`);
								message.author.send(`**Curent count:** ${potatocount}`);
							} */
						}
						else {
							message.delete(10);
							message.author.send(`You do not have access to this command.`);
						}
					}
					else if (command === 'potatoyell') {
						logaction()
						if ((message.member.roles.has(`${discordmod}`)) || (message.member.roles.has(`${mods}`)) || (message.member.roles.has(`${admin}`)))
						{
							message.delete(10);
							console.log('Setpotatoyell run!');
							potatoyellnum = args[0];
							console.log(`Threshold: ${potatoyellnum}`);
							message.author.send(`**Curent threshold:** ${potatoyellnum}`);
							/* else if (args[0] == `help`) {
								console.log('Setpotatoyell help!');
								message.author.send(`**Usage:** \`!addpotato\`\n\**Channels:** All.\n\**Description:** Adds 1 to the current counter of when the bot yells after using \`!potato\`. Bot will yell when # >= 10.`);
								message.author.send(`**Curent threshold:** ${potatoyellnum}`);
							} */
						}
						else {
							message.delete(10);
							message.author.send(`You do not have access to this command.`);
						}
					}
					else if (command === 'stream') {
						logaction()
						if ((message.member.roles.has(`${giant}`)) || (message.member.roles.has(`${discordmod}`)) || (message.member.roles.has(`${mods}`)) || (message.member.roles.has(`${admin}`)))
						{
							//selfstream mode
							if (args[0] !== `stop`)
							{
								console.log('Self Stream run!');
								console.log(`${message.member.displayName}`);
								console.log(`${args[0]}`);
								client.user.setPresence({
									game: {
										name: `${message.member.displayName} is streaming!`,
										type: "STREAMING",
										url: `${args[0]}`
									}
								});
								client.channels.get(`${streamchannel}`).send(`${message.member.displayName} is kicking some robot butt! Watch it live at ${args[0]}`);
							}
							//secondarystream mode
							if ((args[0] !== `stop`) && (args.length == 2))
							{
								console.log('Secondary Stream run!');
								console.log(`${message.member.displayName}`);
								console.log(`${args[0]}`);
								console.log(`${args[1]}`);
								client.user.setPresence({
									game: {
										name: `${args[1]} is streaming!`,
										type: "STREAMING",
										url: `${args[0]}`
									}
								});
								client.channels.get(`${streamchannel}`).send(`${args[1]} is kicking some robot butt! Watch it live at ${args[0]}`);
							}
							if (args[0] == `stop`)
							{
								console.log('Stream stop!');
								client.user.setStatus('online');
								client.user.setActivity('!help for info');
								client.channels.get(`${streamchannel}`).bulkDelete(1);
							}
							/* else if (args[0] == `help`) {
								console.log('Stream help!');
								message.delete(10);
								message.author.send(`**Usage:** \`!stream twitchURL [username]\` \& \`!stream stop\`\n\**Channels:** All.\n\**Description:** Will set the status of the bot to stream to the url defined with \`Username is streaming!\`, and will make a post in the streaming channel. You can add a custom username after the twitch link if you would like to not use your discord username. \`!stream stop\` will end streaming status and clean the streaming announcement.`);
							} */
						}
						else {
							message.delete(10);
							message.author.send(`You do not have access to this command.`);
						}
					}
					else if (command === 'status'){
						logaction()
						if ((message.member.roles.has(`${discordmod}`)) || (message.member.roles.has(`${mods}`)) || (message.member.roles.has(`${admin}`)))
						{
							console.log('Status run!');
							console.log(`${args}`);
							client.user.setStatus(`${args}`);
							client.user.setActivity('!help for info');
							/* else if (args[0] == `help`) {
								console.log('Status help!');
								message.delete(10);
								message.author.send(`**Usage:** \`!status status\`\n\**Channels:** All.\n\**Description:** Sets the status of the bot. Options are: \`online\`, \`idle\`, \`dnd\`. This will set the message back to it's default setting.`);
							} */
						}
						else {
							message.delete(10);
							message.author.send(`You do not have access to this command.`);
						}
					}
					else if (command === 'launchdate'){
						const launchdate = getRandomInt(1, 10);
						logaction(launchdate)
						console.log('Launchdate run!');
						console.log(`RNG: ${launchdate}`);
						if (launchdate == 1){
							message.channel.send(`MM will launch in this current month.`)};
						if (launchdate == 2){
							message.channel.send(`MM will launch in 982,000,000,000 shakes.`)};
						if (launchdate == 3){
							message.channel.send(`MM will launch in 0.4 TF2 updates.`)};
						if (launchdate == 4){
							message.channel.send(`MM will launch in 8262 moments.`)};
						if (launchdate == 5){
							message.channel.send(`MM will launch in 0.159 dog years.`)};
						if (launchdate == 6){
							message.channel.send(`MM will launch in 376.72 microcenturies.`)};
						if (launchdate == 7){
							message.channel.send(`MM will launch in 2,720,000 New York Seconds.`)};
						if (launchdate == 8){
							message.channel.send(`MM will launch in 930 ghurries.`)};
						if (launchdate == 9){
							message.channel.send(`MM will launch in \`date range not found\`.`)};
						if (launchdate == 10){
							message.channel.send(`MM will launch in a jiffy. Well, technically 390,000 jiffies.`)};
						/* else if (args[0] == `help`) {
							console.log('Launchdate help!');
							message.delete(10);
							message.author.send(`**Usage:** \`!status status\`\n\**Channels:** All.\n\**Description:** Sets the status of the bot. Options are: \`online\`, \`idle\`, \`dnd\`. This will set the message back to it's default setting.`);
						} */
					}
					else if (command === 'message'){
						logaction()
						if ((message.member.roles.has(`${discordmod}`)) || (message.member.roles.has(`${mods}`)) || (message.member.roles.has(`${admin}`)))
						{
							if (args[0] !== undefined)
							{
								console.log('Message run!');
								console.log(talk.join(" "));
								talk == (talk.shift().toString());
								client.user.setActivity(`${talk.join(" ")}`);
							}
							if (args[0] === undefined || args[0].length == 0)
							{
								console.log('Message reset!');
								client.user.setActivity('!help for info');
							}
							/* else if (args[0] == `help`) {
								console.log('Message help!');
								message.delete(10);
								message.author.send(`**Usage:** \`!message [text]\`\n\**Channels:** All.\n\**Description:** Sets the playing text of the bot. Currently breaks sentences into arrays. Will fix soon. Type only \`!message\` to set the message back to normal. `);
							} */
						}
						else {
							message.delete(10);
							message.author.send(`You do not have access to this command.`);
						}
					}
					else if (command === 'say'){
						logaction()
						if ((message.member.roles.has(`${discordmod}`)) || (message.member.roles.has(`${mods}`)) || (message.member.roles.has(`${admin}`)))
						{
							if (args[0] !== undefined)
							{
								if ((isNaN(args[0])) && (args[0].startsWith('<#') && args[0].endsWith('>')) && (args[1] !== undefined))
								{
									console.log('Say run!');
									messageChannel(args[0]);
									//var blah = messageChannel(args[0]); //this just works, don't ask how.
								}
								else
								{
									console.log('Say error!');
									message.delete(10);
									message.author.send(`Please use the name of the channel (#channel_name_here) and attatch a message.`);
								}
								/* else
								{
									//depreciated id only code. This crashes if the given id does not exist.
									console.log(talk.join(" "));
									const saychannel = (args[0])
									talk.shift();
									talk.shift().toString();
									console.log(`Channel: ${saychannel}`);
									console.log(`Message: ${talk}`);
									client.channels.get(`${saychannel}`).send(talk.join(" "));
								} */
							}
							else if (args[0] == undefined) {
								console.log('Say error!');
								message.delete(10);
								message.author.send(`**Usage:** \`!say [channel] [text]\`\n\**Channels:** All.\n\**Description:** Bot will send a message to the given channel.`);
							}
						}
						else {
							message.delete(10);
							message.author.send(`You do not have access to this command.`);
						}
					}
					else if (command === 'kill') {
						logaction()
						if (message.member.roles.has(`${admin}`))
						{
							guildMember.addRole(`${muterole}`);
							/* else if (args[0] == `help`) {
								console.log('Kill help!');
								message.author.send(`**Usage:** \`!kill\`\n\**Channels:** All.\n\**Description:** Forces the bot to run garbage code and crash. For when shit gets real bad.`);
							} */
						}
						else {
							message.delete(10);
							message.author.send(`You do not have access to this command.`);
						}
					}
					else {
					console.log('invalid run!');
					message.author.send(`That is not a valid command. Please use \`!help\` in **#botato_cellar** for commands.`);
					if (message.channel.type !== `dm`) {
						message.delete(10);
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
			console.log('invalid channel!');
			message.delete(10);
			message.author.send(`Invalid channel. Please use \`!help\` in **#botato_cellar** for commands. \n\ \n\Going forward, Potato Bot will no longer accept commands sent through DMs. This is being done to improve bot functionality and allow for more administrative functions. Please use \`!help\` in **#botato_cellar** for a full list of commands your account has access to.`);
		}
	}
})