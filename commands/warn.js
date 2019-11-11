exports.warn = function (logaction, message, usertier, args, messageChannel, fs, getUserFromMention, talk, warnchannel, client, moderator, warnlist, warnmute) {
	if (usertier <= 4)
	{
		if ((args[0] !== undefined) && (args[1] !== undefined))
		{
			const user = getUserFromMention(args[0]);
			if (!user) {
				console.log('Warn error mention!');
				return message.reply('Please use a proper mention.');
			}
			else
			{
				console.log('Warn run!');
				const Discord = require('discord.js')
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
				//warning for user exists maximum
				if (fs.existsSync(`./warnings/5_${userid}.txt`)) {
					fs.appendFileSync(`./warnings/5_${userid}.txt`, `\n**WARNING #5+**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk.join(" ")}`, (err) => {
						if (err) throw err;
						console.log('Append complete!');
					});
					message.author.send({embed: {
						color: 16738048,
						title: "Warning Logged",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Warning Log",
							value: `[5_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/warnings/5_${userid}.txt)`
						  },
						  {
							name: "Please add any additional info or link to the offending image(s)",
							value: `!addwarninfo 5_${userid}.txt [info]`
						  },
						],
						timestamp: new Date(),
						footer: {
						  icon_url: client.user.avatarURL,
						  text: "Beep Boop"
						}
					  }
					});
					client.channels.get(`${warnchannel}`).send({embed: {
						color: 16738048,
						author: {
						  name: `${message.author.username}`,
						  icon_url: `${message.author.displayAvatarURL}`
						},
						thumbnail: {
							url: `${user.displayAvatarURL}`
						},
						title: "Warning Log",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Number of warnings",
							value: "6"
						  },
						  {
							name: "Reason",
							value: `${talk.join(" ")}`
						  },
						  {
							name: "Warning Log",
							value: `[5_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/warnings/5_${userid}.txt)`
						  },
						  {
							name: "CAUTION",
							value: `@here This user has been warned over 5 times now. Action should be taken.`
						  }
						],
						timestamp: new Date(),
						footer: {
						  icon_url: client.user.avatarURL,
						  text: "Type !getwarn [filename] to view a user\'s warning log or info file."
						}
					  }
					});
					if (warnmute == 0)
					{
						client.users.get(`${userid}`).send(`You have recieved a warning. **Reason:** ${talk.join(" ")}.`);
					}
				}
				//warning for user exists 4-5
				if (fs.existsSync(`./warnings/4_${userid}.txt`)) {
					fs.renameSync(`./warnings/4_${userid}.txt`, `./warnings/5_${userid}.txt`, (err) => {
						if (err) throw err;
						console.log('Rename complete!');
					});
					fs.appendFileSync(`./warnings/5_${userid}.txt`, `\n**WARNING #5**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk.join(" ")}`, (err) => {
						if (err) throw err;
						console.log('Append complete!');
					});
					message.author.send({embed: {
						color: 16738048,
						title: "Warning Logged",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Warning Log",
							value: `[5_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/warnings/5_${userid}.txt)`
						  },
						  {
							name: "Please add any additional info or link to the offending image(s)",
							value: `!addwarninfo 5_${userid}.txt [info]`
						  },
						],
						timestamp: new Date(),
						footer: {
						  icon_url: client.user.avatarURL,
						  text: "Beep Boop"
						}
					  }
					});
					client.channels.get(`${warnchannel}`).send({embed: {
						color: 16738048,
						author: {
						  name: `${message.author.username}`,
						  icon_url: `${message.author.displayAvatarURL}`
						},
						thumbnail: {
							url: `${user.displayAvatarURL}`
						},
						title: "Warning Log",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Number of warnings",
							value: "5"
						  },
						  {
							name: "Reason",
							value: `${talk.join(" ")}`
						  },
						  {
							name: "Warning Log",
							value: `5_${userid}.txt`
						  }
						],
						timestamp: new Date(),
						footer: {
						  icon_url: client.user.avatarURL,
						  text: "Type !getwarn [filename] to view a user\'s warning log or info file."
						}
					  }
					});
					if (warnmute == 0)
					{
						client.users.get(`${userid}`).send(`You have recieved a warning. **Reason:** ${talk.join(" ")}.`);
					}
				}
				//warning for user exists 3-4
				if (fs.existsSync(`./warnings/3_${userid}.txt`)) {
					fs.renameSync(`./warnings/3_${userid}.txt`, `./warnings/4_${userid}.txt`, (err) => {
						if (err) throw err;
						console.log('Rename complete!');
					});
					fs.appendFileSync(`./warnings/4_${userid}.txt`, `\n**WARNING #4**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk.join(" ")}`, (err) => {
						if (err) throw err;
						console.log('Append complete!');
					});
					message.author.send({embed: {
						color: 16738048,
						title: "Warning Logged",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Warning Log",
							value: `[4_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/warnings/4_${userid}.txt)`
						  },
						  {
							name: "Please add any additional info or link to the offending image(s)",
							value: `!addwarninfo 4_${userid}.txt [info]`
						  },
						],
						timestamp: new Date(),
						footer: {
						  icon_url: client.user.avatarURL,
						  text: "Beep Boop"
						}
					  }
					});
					client.channels.get(`${warnchannel}`).send({embed: {
						color: 16738048,
						author: {
						  name: `${message.author.username}`,
						  icon_url: `${message.author.displayAvatarURL}`
						},
						thumbnail: {
							url: `${user.displayAvatarURL}`
						},
						title: "Warning Log",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Number of warnings",
							value: "4"
						  },
						  {
							name: "Reason",
							value: `${talk.join(" ")}`
						  },
						  {
							name: "Warning Log",
							value: `4_${userid}.txt`
						  }
						],
						timestamp: new Date(),
						footer: {
						  icon_url: client.user.avatarURL,
						  text: "Type !getwarn [filename] to view a user\'s warning log or info file."
						}
					  }
					});
					if (warnmute == 0)
					{
						client.users.get(`${userid}`).send(`You have recieved a warning. **Reason:** ${talk.join(" ")}.`);
					}
				}
				//warning for user exists 2-3
				if (fs.existsSync(`./warnings/2_${userid}.txt`)) {
					fs.renameSync(`./warnings/2_${userid}.txt`, `./warnings/3_${userid}.txt`, (err) => {
						if (err) throw err;
						console.log('Rename complete!');
					});
					fs.appendFileSync(`./warnings/3_${userid}.txt`, `\n**WARNING #3**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk.join(" ")}`, (err) => {
						if (err) throw err;
						console.log('Append complete!');
					});
					message.author.send({embed: {
						color: 16738048,
						title: "Warning Logged",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Warning Log",
							value: `[3_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/warnings/3_${userid}.txt)`
						  },
						  {
							name: "Please add any additional info or link to the offending image(s)",
							value: `!addwarninfo 3_${userid}.txt [info]`
						  },
						],
						timestamp: new Date(),
						footer: {
						  icon_url: client.user.avatarURL,
						  text: "Beep Boop"
						}
					  }
					});
					client.channels.get(`${warnchannel}`).send({embed: {
						color: 16738048,
						author: {
						  name: `${message.author.username}`,
						  icon_url: `${message.author.displayAvatarURL}`
						},
						thumbnail: {
							url: `${user.displayAvatarURL}`
						},
						title: "Warning Log",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Number of warnings",
							value: "3"
						  },
						  {
							name: "Reason",
							value: `${talk.join(" ")}`
						  },
						  {
							name: "Warning Log",
							value: `3_${userid}.txt`
						  }
						],
						timestamp: new Date(),
						footer: {
						  icon_url: client.user.avatarURL,
						  text: "Type !getwarn [filename] to view a user\'s warning log or info file."
						}
					  }
					});
					if (warnmute == 0)
					{
						client.users.get(`${userid}`).send(`You have recieved a warning. **Reason:** ${talk.join(" ")}.`);
					}
				}
				//warning for user exists 1-2
				if (fs.existsSync(`./warnings/1_${userid}.txt`)) {
					fs.renameSync(`./warnings/1_${userid}.txt`, `./warnings/2_${userid}.txt`, (err) => {
						if (err) throw err;
						console.log('Rename complete!');
					});
					fs.appendFileSync(`./warnings/2_${userid}.txt`, `\n**WARNING #2**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk.join(" ")}`, (err) => {
						if (err) throw err;
						console.log('Append complete!');
					});
					message.author.send({embed: {
						color: 16738048,
						title: "Warning Logged",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Warning Log",
							value: `[2_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/warnings/2_${userid}.txt)`
						  },
						  {
							name: "Please add any additional info or link to the offending image(s)",
							value: `!addwarninfo 2_${userid}.txt [info]`
						  },
						],
						timestamp: new Date(),
						footer: {
						  icon_url: client.user.avatarURL,
						  text: "Beep Boop"
						}
					  }
					});
					client.channels.get(`${warnchannel}`).send({embed: {
						color: 16738048,
						author: {
						  name: `${message.author.username}`,
						  icon_url: `${message.author.displayAvatarURL}`
						},
						thumbnail: {
							url: `${user.displayAvatarURL}`
						},
						title: "Warning Log",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Number of warnings",
							value: "2"
						  },
						  {
							name: "Reason",
							value: `${talk.join(" ")}`
						  },
						  {
							name: "Warning Log",
							value: `2_${userid}.txt`
						  }
						],
						timestamp: new Date(),
						footer: {
						  icon_url: client.user.avatarURL,
						  text: "Type !getwarn [filename] to view a user\'s warning log or info file."
						}
					  }
					});
					console.log('Warning logged!');
					if (warnmute == 0)
					{
						client.users.get(`${userid}`).send(`You have recieved a warning. **Reason:** ${talk.join(" ")}.`);
					}
				}
				//new warning user
				else if ((!fs.existsSync(`./warnings/1_${userid}.txt`)) && (!fs.existsSync(`./warnings/2_${userid}.txt`)) && (!fs.existsSync(`./warnings/3_${userid}.txt`)) && (!fs.existsSync(`./warnings/4_${userid}.txt`)) && (!fs.existsSync(`./warnings/5_${userid}.txt`)) && (!fs.existsSync(`./warnings/6_${userid}.txt`)) && (!fs.existsSync(`./warnings/7_${userid}.txt`)) && (!fs.existsSync(`./warnings/8_${userid}.txt`)) && (!fs.existsSync(`./warnings/9_${userid}.txt`)))
				{
					fs.writeFileSync(`./warnings/1_${userid}.txt`, `\n**WARNING #1**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk.join(" ")}`, (err) => {
						if (err) throw err;
					});
					message.author.send({embed: {
						color: 16738048,
						title: "Warning Logged",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Warning Log",
							value: `[1_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/warnings/1_${userid}.txt)`
						  },
						  {
							name: "Please add any additional info or link to the offending image(s)",
							value: `!addwarninfo 1_${userid}.txt [info]`
						  },
						],
						timestamp: new Date(),
						footer: {
						  icon_url: client.user.avatarURL,
						  text: "Beep Boop"
						}
					  }
					});
					client.channels.get(`${warnchannel}`).send({embed: {
						color: 16738048,
						author: {
						  name: `${message.author.username}`,
						  icon_url: `${message.author.displayAvatarURL}`
						},
						thumbnail: {
							url: `${user.displayAvatarURL}`
						},
						title: "Warning Log",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Number of warnings",
							value: "1"
						  },
						  {
							name: "Reason",
							value: `${talk.join(" ")}`
						  },
						  {
							name: "Warning Log",
							value: `[1_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/warnings/1_${userid}.txt)`
						  }
						],
						timestamp: new Date(),
						footer: {
						  icon_url: client.user.avatarURL,
						  text: "Type !getwarn [filename] to view a user\'s warning log or info file."
						}
					  }
					});
					console.log('Warning logged!');
					if (warnmute == 0)
					{
						client.users.get(`${userid}`).send(`You have recieved a warning. **Reason:** ${talk.join(" ")}.`);
					}
				}
			}
		}
		else
		{
			console.log('Warn error args!');
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