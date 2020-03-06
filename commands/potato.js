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
				const potatorng = getRandomInt(2, 71);
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
							});
						}
						else{
							setTimeout(() => {
								fs.writeFileSync(`./potatodata/${userid}.txt`, `1`, (err) => {
									if (err) throw err;
								});
							}, 1000);
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
							var potatorngmessage = getRandomInt(1, potatoresponcecount);
							message.channel.send(potatoresponce[potatorngmessage]);
						});
						setTimeout(() => {
							potatoRecently.delete(message.author.id);
						}, timeouthour ); //3600000
						if (potatocount >= potatoyellnum) {
							console.log('Potato yell!');
							//message.channel.startTyping();
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
							/* setTimeout(() => {
								shutup(message);
							}, 4100); */
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