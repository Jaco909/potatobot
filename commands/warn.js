exports.warn = function (logaction, message, usertier, args, messageChannel, fs, getUserFromMention, talk, warnchannel, client, moderator, warnlist, warnmute, guild) {
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
				console.log('Warn run!');
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
				var name = message.member.nickname;
				if (name != undefined){
					fs.writeFileSync(`./data/userdata/idnames/${userid}.txt`,`${name}`, (err) => {
						if (err) throw err;
					});
				}
				else if (name == undefined){
					var name = message.member.displayName;
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
					fs.writeFileSync(`./warnings/0_${userid}.txt`,``, (err) => {
						if (err) throw err;
					});
				}
				
				//warn code
				newwarnnumber = (warnnumber + 1);
				console.log(`New Warn Amount: ${totalwarns + 1}`);
				fs.renameSync(`./warnings/${warnnumber}_${userid}.txt`, `./warnings/${newwarnnumber}_${userid}.txt`, (err) => {
					if (err) throw err;
				});
				fs.appendFileSync(`./warnings/${newwarnnumber}_${userid}.txt`, `\n**WARNING #${newwarnnumber}**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk.join(" ")}`, (err) => {
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
						title: "Warning Log",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Warning #",
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
							value: `[${newwarnnumber}_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/warnings/${newwarnnumber}_${userid}.txt)`
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
						title: "Warning Log",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Warning #",
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
							value: `[${newwarnnumber}_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/warnings/${newwarnnumber}_${userid}.txt)`
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
				console.log('Warning logged!');
				if (warnmute == 0)
				{
					client.users.cache.get(`${userid}`).send(`You have recieved a warning. **Reason:** ${talk.join(" ")}.`);
				}
				//ban code
				if ((totalwarns + 1) >= 3) {
					setTimeout(() => {
						banmember.ban({});
					}, 1000 );
				}
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