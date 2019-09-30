exports.warn = function (logaction, message, usertier, args, messageChannel, fs, getUserFromMention, talk, warnchannel, client, moderator, warnlist, warnmute) {
	if (usertier <= 4)
	{
		if ((args[0] !== undefined) && (args[1] !== undefined))
		{
			const user = getUserFromMention(args[0]);
			if (!user) {
				return message.reply('Please use a proper mention.');
			}
			else
			{
				console.log('Incomming warning!');
				logaction();
				if (args[0].startsWith('<@') && args[0].endsWith('>')) {
					var userid = args[0].slice(2, -1);

					if (userid.startsWith('!')) {
						userid = userid.slice(1);
					}
				}
				talk.shift();
				talk.shift().toString();
				time = (message.createdAt);
				console.log(`${userid}`);
				console.log(`${user.username}`);
				console.log(`Warning: ${talk}`);
				//warning for user exists maximum
				if (fs.existsSync(`./warnings/9_${userid}.txt`)) {
					console.log('Warning already present!');
					fs.appendFileSync(`./warnings/9_${userid}.txt`, `\n**WARNING #10+**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk}`, (err) => {
						if (err) throw err;
						console.log('Append complete!');
					});
					message.author.send(`${user.username}\'s warning has been appended to \`9_${userid}.txt\`. System warn limit reached.`);
					client.channels.get(`${warnchannel}`).send(`**Staff:** ${message.author.username}\n**Warning:** ${user}\n**Total Warnings:** 10+\n**Reason:** ${talk.join(" ")}\n**User's Warning Log:** \`9_${userid}.txt\` \`\`\`Type !getwarn [filename] to open a user's warning file. \`\`\``);
					if (warnmute == 0)
					{
						client.users.get(`${userid}`).send(`You have recieved a warning. Reason: ${talk}.`);
					}
				}
				//warning for user exists 8-9
				if (fs.existsSync(`./warnings/8_${userid}.txt`)) {
					console.log('Warning already present!');
					fs.renameSync(`./warnings/8_${userid}.txt`, `./warnings/9_${userid}.txt`, (err) => {
						if (err) throw err;
						console.log('Rename complete!');
					});
					fs.appendFileSync(`./warnings/9_${userid}.txt`, `\n**WARNING #9**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk}`, (err) => {
						if (err) throw err;
						console.log('Append complete!');
					});
					message.author.send(`${user.username}\'s warning has been logged as \`9_${userid}.txt\`. Please use \`!addwarninfo 9_${userid}.txt\` to add any additional info.`);
					client.channels.get(`${warnchannel}`).send(`**Staff:** ${message.author.username}\n**Warning:** ${user}\n**Total Warnings:** 9\n**Reason:** ${talk.join(" ")}\n**User's Warning Log:** \`9_${userid}.txt\` \`\`\`Type !getwarn [filename] to open a user's warning file. \`\`\``);
					if (warnmute == 0)
					{
						client.users.get(`${userid}`).send(`You have recieved a warning. Reason: ${talk}.`);
					}
				}
				//warning for user exists 7-8
				if (fs.existsSync(`./warnings/7_${userid}.txt`)) {
					console.log('Warning already present!');
					fs.renameSync(`./warnings/7_${userid}.txt`, `./warnings/8_${userid}.txt`, (err) => {
						if (err) throw err;
						console.log('Rename complete!');
					});
					fs.appendFileSync(`./warnings/8_${userid}.txt`, `\n**WARNING #8**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk}`, (err) => {
						if (err) throw err;
						console.log('Append complete!');
					});
					message.author.send(`${user.username}\'s warning has been logged as \`8_${userid}.txt\`. Please use \`!addwarninfo 8_${userid}.txt\` to add any additional info.`);
					client.channels.get(`${warnchannel}`).send(`**Staff:** ${message.author.username}\n**Warning:** ${user}\n**Total Warnings:** 8\n**Reason:** ${talk.join(" ")}\n**User's Warning Log:** \`8_${userid}.txt\` \`\`\`Type !getwarn [filename] to open a user's warning file. \`\`\``);
					if (warnmute == 0)
					{
						client.users.get(`${userid}`).send(`You have recieved a warning. Reason: ${talk}.`);
					}
				}
				//warning for user exists 6-7
				if (fs.existsSync(`./warnings/6_${userid}.txt`)) {
					console.log('Warning already present!');
					fs.renameSync(`./warnings/6_${userid}.txt`, `./warnings/7_${userid}.txt`, (err) => {
						if (err) throw err;
						console.log('Rename complete!');
					});
					fs.appendFileSync(`./warnings/7_${userid}.txt`, `\n**WARNING #7**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk}`, (err) => {
						if (err) throw err;
						console.log('Append complete!');
					});
					message.author.send(`${user.username}\'s warning has been logged as \`7_${userid}.txt\`. Please use \`!addwarninfo 7_${userid}.txt\` to add any additional info.`);
					client.channels.get(`${warnchannel}`).send(`**Staff:** ${message.author.username}\n**Warning:** ${user}\n**Total Warnings:** 7\n**Reason:** ${talk.join(" ")}\n**User's Warning Log:** \`7_${userid}.txt\` \`\`\`Type !getwarn [filename] to open a user's warning file. \`\`\``);
					if (warnmute == 0)
					{
						client.users.get(`${userid}`).send(`You have recieved a warning. Reason: ${talk}.`);
					}
				}
				//warning for user exists 5-6
				if (fs.existsSync(`./warnings/5_${userid}.txt`)) {
					console.log('Warning already present!');
					fs.renameSync(`./warnings/5_${userid}.txt`, `./warnings/6_${userid}.txt`, (err) => {
						if (err) throw err;
						console.log('Rename complete!');
					});
					fs.appendFileSync(`./warnings/6_${userid}.txt`, `\n**WARNING #6**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk}`, (err) => {
						if (err) throw err;
						console.log('Append complete!');
					});
					message.author.send(`${user.username}\'s warning has been logged as \`6_${userid}.txt\`. Please use \`!addwarninfo 6_${userid}.txt\` to add any additional info.`);
					client.channels.get(`${warnchannel}`).send(`**Staff:** ${message.author.username}\n**Warning:** ${user}\n**Total Warnings:** 6\n**Reason:** ${talk.join(" ")}\n**User's Warning Log:** \`6_${userid}.txt\` \`\`\`Type !getwarn [filename] to open a user's warning file. \`\`\``);
					if (warnmute == 0)
					{
						client.users.get(`${userid}`).send(`You have recieved a warning. Reason: ${talk}.`);
					}
				}
				//warning for user exists 4-5
				if (fs.existsSync(`./warnings/4_${userid}.txt`)) {
					console.log('Warning already present!');
					fs.renameSync(`./warnings/4_${userid}.txt`, `./warnings/5_${userid}.txt`, (err) => {
						if (err) throw err;
						console.log('Rename complete!');
					});
					fs.appendFileSync(`./warnings/5_${userid}.txt`, `\n**WARNING #5**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk}`, (err) => {
						if (err) throw err;
						console.log('Append complete!');
					});
					message.author.send(`${user.username}\'s warning has been logged as \`5_${userid}.txt\`. Please use \`!addwarninfo 5_${userid}.txt\` to add any additional info.`);
					client.channels.get(`${warnchannel}`).send(`**Staff:** ${message.author.username}\n**Warning:** ${user}\n**Total Warnings:** 5\n**Reason:** ${talk.join(" ")}\n**User's Warning Log:** \`5_${userid}.txt\` \`\`\`Type !getwarn [filename] to open a user's warning file. \`\`\``);
					if (warnmute == 0)
					{
						client.users.get(`${userid}`).send(`You have recieved a warning. Reason: ${talk}.`);
					}
				}
				//warning for user exists 3-4
				if (fs.existsSync(`./warnings/3_${userid}.txt`)) {
					console.log('Warning already present!');
					fs.renameSync(`./warnings/3_${userid}.txt`, `./warnings/4_${userid}.txt`, (err) => {
						if (err) throw err;
						console.log('Rename complete!');
					});
					fs.appendFileSync(`./warnings/4_${userid}.txt`, `\n**WARNING #4**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk}`, (err) => {
						if (err) throw err;
						console.log('Append complete!');
					});
					message.author.send(`${user.username}\'s warning has been logged as \`4_${userid}.txt\`. Please use \`!addwarninfo 4_${userid}.txt\` to add any additional info.`);
					client.channels.get(`${warnchannel}`).send(`**Staff:** ${message.author.username}\n**Warning:** ${user}\n**Total Warnings:** 4\n**Reason:** ${talk.join(" ")}\n**User's Warning Log:** \`4_${userid}.txt\` \`\`\`Type !getwarn [filename] to open a user's warning file. \`\`\``);
					if (warnmute == 0)
					{
						client.users.get(`${userid}`).send(`You have recieved a warning. Reason: ${talk}.`);
					}
				}
				//warning for user exists 2-3
				if (fs.existsSync(`./warnings/2_${userid}.txt`)) {
					console.log('Warning already present!');
					fs.renameSync(`./warnings/2_${userid}.txt`, `./warnings/3_${userid}.txt`, (err) => {
						if (err) throw err;
						console.log('Rename complete!');
					});
					fs.appendFileSync(`./warnings/3_${userid}.txt`, `\n**WARNING #3**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk}`, (err) => {
						if (err) throw err;
						console.log('Append complete!');
					});
					message.author.send(`${user.username}\'s warning has been logged as \`3_${userid}.txt\`. Please use \`!addwarninfo 3_${userid}.txt\` to add any additional info.`);
					client.channels.get(`${warnchannel}`).send(`**Staff:** ${message.author.username}\n**Warning:** ${user}\n**Total Warnings:** 3\n**Reason:** ${talk.join(" ")}\n**User's Warning Log:** \`3_${userid}.txt\` \`\`\`Type !getwarn [filename] to open a user's warning file. \`\`\``);
					if (warnmute == 0)
					{
						client.users.get(`${userid}`).send(`You have recieved a warning. Reason: ${talk}.`);
					}
				}
				//warning for user exists 1-2
				if (fs.existsSync(`./warnings/1_${userid}.txt`)) {
					console.log('Warning already present!');
					fs.renameSync(`./warnings/1_${userid}.txt`, `./warnings/2_${userid}.txt`, (err) => {
						if (err) throw err;
						console.log('Rename complete!');
					});
					fs.appendFileSync(`./warnings/2_${userid}.txt`, `\n**WARNING #2**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk}`, (err) => {
						if (err) throw err;
						console.log('Append complete!');
					});
					message.author.send(`${user.username}\'s warning has been logged as \`2_${userid}.txt\`. Please use \`!addwarninfo 2_${userid}.txt\` to add any additional info.`);
					client.channels.get(`${warnchannel}`).send(`**Staff:** ${message.author.username}\n**Warning:** ${user}\n**Total Warnings:** 2\n**Reason:** ${talk.join(" ")}\n**User's Warning Log:** \`2_${userid}.txt\` \`\`\`Type !getwarn [filename] to open a user's warning file. \`\`\``);
					console.log('Warning logged!');
					if (warnmute == 0)
					{
						client.users.get(`${userid}`).send(`You have recieved a warning. Reason: ${talk}.`);
					}
				}
				//new warning user
				else if ((!fs.existsSync(`./warnings/1_${userid}.txt`)) && (!fs.existsSync(`./warnings/2_${userid}.txt`)) && (!fs.existsSync(`./warnings/3_${userid}.txt`)) && (!fs.existsSync(`./warnings/4_${userid}.txt`)) && (!fs.existsSync(`./warnings/5_${userid}.txt`)) && (!fs.existsSync(`./warnings/6_${userid}.txt`)) && (!fs.existsSync(`./warnings/7_${userid}.txt`)) && (!fs.existsSync(`./warnings/8_${userid}.txt`)) && (!fs.existsSync(`./warnings/9_${userid}.txt`)))
				{
					console.log('New warning!');
					fs.writeFileSync(`./warnings/1_${userid}.txt`, `\n**WARNING #1**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk}`, (err) => {
						if (err) throw err;
					});
					message.author.send(`${user.username}\'s warning has been logged as \`1_${userid}.txt\`. Please use \`!addwarninfo 1_${userid}.txt\` to add any additional info.`);
					client.channels.get(`${warnchannel}`).send(`**Staff:** ${message.author.username}\n**Warning:** ${user}\n**Total Warnings:** 1\n**Reason:** ${talk.join(" ")}\n**User's Warning Log:** \`1_${userid}.txt\` \`\`\`Type !getwarn [filename] to open a user's warning file. \`\`\``);
					
					console.log('Warning logged!');
					if (warnmute == 0)
					{
						client.users.get(`${userid}`).send(`You have recieved a warning. Reason: ${talk}.`);
					}
				}
			}
		}
		else
		{
			console.log('Warn error!');
			message.delete(10);
			message.author.send(`Invalid warn variables. Please enter a username and reason at minimum.`);
		}
	}
	else
	{
		console.log('Warn block!');
		message.delete(10);
		message.author.send(`You do not have access to this command.`);
	}
};