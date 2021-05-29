exports.automod = function (logaction, message, usertier, fs, talk, warnchannel, client, warnmute, guild) {
	if (usertier > 5)
	{
		var userid = message.author.id;
		console.log('Automod run!');
		const Discord = require('discord.js')
		
		//fetch userid
		client.user.fetch(userid);
		
		//fetch banid
		var user = client.users.cache.get(userid);
		//const banid = message.mentions.users.first();
		var banmember = message.guild.member(userid);
		
		//presets
		var warnnumber = 6;
		var tempwarnnumber = 6;
		var foundwarn = -1;
		var tempfoundwarn = -1;
		var newwarnnumber = 0;
		time = (message.createdAt);
		talk = talk.toString();
		
		//pull username for banlogs
		//const guildMember = message.mentions.users.first();
		var name = banmember.nickname;
		//var name = user.displayName;
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
			fs.writeFileSync(`./warnings/0_${userid}.txt`,``, (err) => {
				if (err) throw err;
			});
		}
		
		//warn code
		
		if (talk == ("AUTOMOD: nigger")) {
			newwarnnumber = (totalwarns + 3);
			console.log(`New Warn Amount: ${newwarnnumber}`);
			fs.renameSync(`./warnings/${warnnumber}_${userid}.txt`, `./warnings/${newwarnnumber}_${userid}.txt`, (err) => {
				if (err) throw err;
			});
			fs.appendFileSync(`./warnings/${newwarnnumber}_${userid}.txt`, `\n**WARNING #${newwarnnumber}**\n**Staff:** AUTOMOD\n**Date:** ${time}\n**Reason:**${talk}`, (err) => {
			if (err) throw err;
			});
		}
		else if (talk == ("AUTOMOD: negro")) {
			newwarnnumber = (totalwarns + 1);
			console.log(`New Warn Amount: ${newwarnnumber}`);
			fs.renameSync(`./warnings/${warnnumber}_${userid}.txt`, `./warnings/${newwarnnumber}_${userid}.txt`, (err) => {
				if (err) throw err;
			});
			fs.appendFileSync(`./warnings/${newwarnnumber}_${userid}.txt`, `\n**WARNING #${newwarnnumber}**\n**Staff:** AUTOMOD\n**Date:** ${time}\n**Reason:**${talk}`, (err) => {
			if (err) throw err;
			});
		}
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
					value: `${newwarnnumber}`
				  },
				  {
					name: "Reason",
					value: `${talk}`
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
					value: `${newwarnnumber}`
				  },
				  {
					name: "Reason",
					value: `${talk}`
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
			client.users.cache.get(`${userid}`).send(`You have recieved a warning. **Reason:** ${talk}.`);
		}
		//ban code
		if (newwarnnumber >= 3) {
			setTimeout(() => {
				banmember.ban({});
			}, 1000 );
		}
	}
};