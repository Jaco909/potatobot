exports.potato = function (logaction, getRandomInt, message, potatoRecently, potatocount, potatorole, botchannel, timeouthour, fs, shutup, args) {
	if (message.channel.id === `${botchannel}`){
		var potatoresponcecount = 0
		var activitycount = 0
		var potatoyellnum = 2
		fs.readFile(`./data/activities.txt`, (err, activities) => {
			activities = activities.toLocaleString();
			activities = activities.split("\n")
			activitycount = activities.length
			fs.readFile(`./data/potatoyellnum.txt`, (err, potatoyellnum) => {
				potatoyellnum = potatoyellnum.toLocaleString();
				potatoyellnum = parseInt(potatoyellnum);
				const potatorng = getRandomInt(61, 81);
				const potatorngyell = getRandomInt(1, activitycount);
				const potatoyell = activities[potatorngyell];
				const potatorngmessage = getRandomInt(1, 10);
				if (potatoRecently.has(message.author.id)){
					console.log('Potato too soon!');
					message.delete({ timeout: 10});
					message.author.send('You just asked for a potato. Come back in an hour.');
				}
				else if (!potatoRecently.has(message.author.id)){
					if(potatorng == 69){
						console.log('Potato give!');
						const guildMember = message.member;
						guildMember.roles.add(`${potatorole}`);
						if(potatorngmessage >= 6){
						message.channel.send('Here, have a potato. It\'s worthless.');}
						if(potatorngmessage <= 5){
						message.channel.send(`I found a potato for you ${message.member.displayName}. I don\'t know why you wanted one in the first place...`);}
						const Discord = require('discord.js')
						var userid = message.member.id;
						if (fs.existsSync(`./potatodata/${userid}.txt`)) {
							fs.readFile(`./potatodata/${userid}.txt`, (err, potatovalue) => {
								potatovalue = potatovalue.toLocaleString();
								potatovalue = parseInt(potatovalue);
								potatovalue = (potatovalue + 1);
								fs.unlink(`./potatodata/${userid}.txt`, (err) => {
									if (err) throw err;
								});
								setTimeout(() => {
									fs.writeFileSync(`./potatodata/${userid}.txt`, `${potatovalue}`, (err) => {
										if (err) throw err;
									});
								}, 1000);
								setTimeout(() => {
									if (potatovalue == 2){
									message.channel.send(`Well aren't you special, ${message.member.displayName}. You have ${potatovalue} potatoes now.`);
									}
									if (potatovalue == 3){
										message.channel.send(`You have ${potatovalue} potatoes now. Why are you trying to hoard potatoes?`);
									}
									if (potatovalue == 4){
										message.channel.send(`You have ${potatovalue} potatoes now. Are you trying to start a farm or something?`);
									}
									if (potatovalue == 5){
										message.channel.send(`This is getting out of hand, now there are ${potatovalue} of them.`);
									}
									if (potatovalue == 6){
										message.channel.send(`Seriously ${message.member.displayName}, you have ${potatovalue} potatoes now. What are you even trying to achieve here?`);
									}
									if (potatovalue == 7){
										message.channel.send(`Well well, check out the big potatoes on ${message.member.displayName}. How many you got now? ${potatovalue}? Wooooow.`);
									}
									if (potatovalue == 8){
										message.channel.send(`Holy shamoley! ${potatovalue} potatoes! They don't even do anything!`);
									}
									if (potatovalue == 9){
										message.channel.send(`You're up to ${potatovalue} potatoes now. I seriously don't understand why you bother.`);
									}
									if (potatovalue == 10){
										message.channel.send(`${potatovalue} potatoes now. This is going in my cringe compliation.`);
									}
									if (potatovalue == 11){
										message.channel.send(`Up to ${potatovalue} now. How about a story?`);
									}
									if (potatovalue == 12){
										message.channel.send(`There once was someone who had so many potatoes, they died.`);
									}
									if (potatovalue == 13){
										message.channel.send(`The end. What did you expect? People with ${potatovalue} potatoes get shit stories.`);
									}
									if (potatovalue == 14){
										message.channel.send(`You keep getting potatoes and I'm running out of responces. Let's stop at ${potatovalue}, shall we?`);
									}
									if (potatovalue == 15){
										message.channel.send(`${potatovalue} potatoes? Bruh, I said stop.`);
									}
									if (potatovalue == 16){
										message.channel.send(`I'm tired of writing more phrases, so I'm just going to owo the next one. Oh, ${potatovalue} by the way.`);
									}
									if (potatovalue == 16){
										message.channel.send(`OwO whaz this? ${potatovalue} potaytoes? uwu ey diwndn't know sowmeone cowuld hawve sow mawny powtatowes! How awbout a huggy wuggy? I down't bwite. OwO`);
									}
									if (potatovalue >= 17){
										message.channel.send(`<@207174577783177216> could you add more phrases? This clown has soooooo many potatoes.`);
									}
								}, 2000);
								setTimeout(() => {
									potatoRecently.delete(message.author.id);
								}, 3600000 ); //3600000
							});
						}
						else{
							setTimeout(() => {
								fs.writeFileSync(`./potatodata/${userid}.txt`, `1`, (err) => {
									if (err) throw err;
								});
							}, 1000);
							setTimeout(() => {
								potatoRecently.delete(message.author.id);
							}, 3600000 ); //3600000
						}
					}
					else{
						console.log('Potato none!');
						potatoRecently.add(message.author.id);
						fs.readFile(`./data/potatoresponce.txt`, (err, potatoresponce) => {
							logaction(potatorng);
							potatoresponce = potatoresponce.toLocaleString();
							potatoresponce = potatoresponce.split("\n")
							potatoresponcecount = potatoresponce.length
							var potatorngmessage = getRandomInt(1, potatoresponcecount).toLocaleString();
							message.channel.send(`${potatoresponce[potatorngmessage]}`);
							setTimeout(() => {
							potatoRecently.delete(message.author.id);
							}, 3600000 ); //3600000
						});
						if (potatocount >= potatoyellnum) {
							console.log('Potato yell!');
							setTimeout(() => {
								message.channel.send('**C\'mon guys, are just going to sit there and spam !potato all day?**');
							}, 2000);
							setTimeout(() => {
								message.channel.send('**Aren\'t there more productive things you could be doing?**');
							}, 3000);
							setTimeout(() => {
								message.channel.send(`**${potatoyell}**`);
								potatocount = 0
							}, 4000);
						}
					}
				}
			});
		});
	}
	else{
		console.log('Potato invalid channel!');
		message.delete({ timeout: 10})
		message.author.send(`Invalid channel. Please use \`!help\` in **#botato_cellar** for commands.`);
	}
};