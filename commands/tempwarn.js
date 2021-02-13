exports.tempwarn = function (logaction, message, usertier, args, messageChannel, fs, getUserFromMention, talk, warnchannel, client, moderator, warnlist, warnmute, date, militime, guild) {
	if (usertier <= 4)
	{
		if ((args[0] !== undefined) && (args[1] !== undefined))
		{
			const user = getUserFromMention(args[0]);
			if (!user) {
				console.log('Warn error mention!');
				return message.reply('Please use a proper mention and reason.');
			}
			else
			{
				console.log('Temp Warn run!');
				const Discord = require('discord.js')
				
				//rework this later
				if (args[0].startsWith('<@') && args[0].endsWith('>')) {
					var userid = args[0].slice(2, -1);

					if (userid.startsWith('!')) {
						userid = userid.slice(1);
					}
				}
				
				//fetch userid
				client.user.fetch(userid);
				
				//fetch banid
				const user = client.users.cache.get(userid);
				const banid = message.mentions.users.first();
				const banmember = message.guild.member(banid);
				
				//presets
				var warnnumber = 6;
				var tempwarnnumber = 6;
				var foundwarn = -1;
				var tempfoundwarn = -1;
				var newwarnnumber = 0;
				time = (message.createdAt);
				talk.shift();
				talk.shift().toString();
				
				//pull username for banlogs
				var name = banmember.nickname;
				if (name != undefined){
					fs.writeFileSync(`./data/userdata/idnames/${userid}.txt`,`${name}`, (err) => {
						if (err) throw err;
					});
				}
				else if (name == undefined){
					var name = banmember.displayName;
					fs.writeFileSync(`./data/userdata/idnames/${userid}.txt`,`${name}`, (err) => {
						if (err) throw err;
					});
				}
				
				//find current warn amount if any
				do{
					warnnumber = (warnnumber - 1)
					if (fs.existsSync(`./warnings/${warnnumber}_${userid}.txt`)){
						foundwarn = warnnumber
					}
				}
				while (warnnumber >= 1)
				
				//if warns are found, set the var warnnumber
				if (foundwarn != -1) {
					warnnumber = foundwarn
				}
				console.log(`Previous Warns: ${warnnumber}`);
				
				//find current temp warn amount if any
				do{
					tempwarnnumber = (tempwarnnumber - 1)
					if (fs.existsSync(`./temp_warnings/${tempwarnnumber}t_${userid}.txt`)){
						tempfoundwarn = tempwarnnumber
					}
				}
				while (tempwarnnumber >= 1)
				
				//if warns are found, set the var warnnumber
				if (tempfoundwarn != -1) {
					tempwarnnumber = tempfoundwarn
				}
				console.log(`Previous Tempwarns: ${tempwarnnumber}`);
				var totalwarns = (warnnumber + tempwarnnumber);
				console.log(`Total Previous Warns: ${totalwarns}`);
				
				//generate file for new warns
				if (warnnumber == 0) {
					fs.writeFileSync(`./temp_warnings/0t_${userid}.txt`,``, (err) => {
						if (err) throw err;
					});
				}
				
				//warn code
				setTimeout(() => {
					newwarnnumber = (tempwarnnumber + 1);
					console.log(`New Warn Amount: ${totalwarns + 1}`);
					if (fs.existsSync(`./temp_warnings/${tempwarnnumber}t_${userid}.txt`)){
						fs.renameSync(`./temp_warnings/${tempwarnnumber}t_${userid}.txt`, `./temp_warnings/${newwarnnumber}t_${userid}.txt`, (err) => {
							if (err) throw err;
						});
					}
					else {
						fs.writeFileSync(`./temp_warnings/1t_${userid}.txt`,``, (err) => {
							if (err) throw err;
						});
					}
					setTimeout(() => {
						fs.appendFileSync(`./temp_warnings/${newwarnnumber}t_${userid}.txt`, `\n**WARNING #${newwarnnumber}**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk.join(" ")}`, (err) => {
							if (err) throw err;
						});
						console.log('Warn file generated!');
						
						//message log
						//catch default avatars
						if (!user.avatarURL() || !message.author.displayAvatarURL()) {
							guild.channels.cache.get(`${warnchannel}`).send({embed: {
								color: 16738048,
								author: {
								  name: `${message.author.username}`,
								},
								title: "Temporary Warning Log",
								description: `Offending User: <@${userid}>`,
								fields: [{
									name: "Temporary warning #",
									value: `${newwarnnumber}`
								  },
								  {
									name: "Total Warnings",
									value: `${totalwarns + 1}`
								  },
								  {
									name: "Reason",
									value: `${talk.join(" ")}`
								  },
								  {
									name: "Warning Log",
									value: `[${newwarnnumber}t_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/warnings/${newwarnnumber}t_${userid}.txt)`
								  }
								],
								timestamp: new Date(),
								footer: {
								  icon_url: client.user.avatarURL(),
								  text: "Type !getwarn [filename] to view a user\'s warning log or info file."
								}
							  }
							});
						}
						//normal message
						else {
							guild.channels.cache.get(`${warnchannel}`).send({embed: {
								color: 16738048,
								author: {
								  name: `${message.author.username}`,
								  icon_url: `${message.author.displayAvatarURL()}`
								},
								thumbnail: {
									url: `${user.avatarURL()}`
								},
								title: "Temporary Warning Log",
								description: `Offending User: <@${userid}>`,
								fields: [{
									name: "Temporary warning #",
									value: `${newwarnnumber}`
								  },
								  {
									name: "Total Warnings",
									value: `${totalwarns + 1}`
								  },
								  {
									name: "Reason",
									value: `${talk.join(" ")}`
								  },
								  {
									name: "Warning Log",
									value: `[${newwarnnumber}t_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/warnings/${newwarnnumber}t_${userid}.txt)`
								  }
								],
								timestamp: new Date(),
								footer: {
								  icon_url: client.user.avatarURL(),
								  text: "Type !getwarn [filename] to view a user\'s warning log or info file."
								}
							  }
							});
						}
						console.log('Temp Warning logged!');
						if (warnmute == 0)
						{
							client.users.cache.get(`${userid}`).send(`You have recieved a temporary warning. **Reason:** ${talk.join(" ")}.`);
						}
						//ban code
						if ((totalwarns + 1) >= 3) {
							setTimeout(() => {
								banmember.ban({});
							}, 1000 );
						}
					}, 2000 );
				}, 2000 );
			}
		}
		else
		{
			console.log('Warn block!');
			message.delete({ timeout: 10});
			return message.reply('Please use a proper mention and reason.');
		}
	}
	else
	{
		console.log('Warn block!');
		message.delete({ timeout: 10});
		return message.reply(`You do not have access to this command.`);
	}
};