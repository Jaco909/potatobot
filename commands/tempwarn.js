exports.tempwarn = function (logaction, message, usertier, args, messageChannel, fs, getUserFromMention, talk, warnchannel, client, moderator, warnlist, warnmute, date, militime) {
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
				if (fs.existsSync(`./temp_warnings/5t_${userid}.txt`)) {
					fs.appendFileSync(`./temp_warnings/5t_${userid}.txt`, `\n**WARNING #5+**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk.join(" ")}`, (err) => {
						if (err) throw err;
						console.log('Append complete!');
					});
					//check for existing timestamp
					fs.readdir(`./temp_dates`, function(err, filenames) {
						if (err) {
						  onError(err);
						  return;
						}
						filenames.forEach(checkid);
						
						function checkid(file){
							filename = file.slice(0,-4);
							fs.readFile(`./temp_dates/${filename}.txt`, (err, useridfromfile) => {
								if (err) {
								  onError(err);
								  return;
								}
								if (useridfromfile == userid) {
									console.log(`existing time found`)
									fs.renameSync(`./temp_dates/${filename}.txt`, `./temp_dates/${militime}.txt`, (err) => {
										if (err) throw err;
										console.log('Rename complete!');
									});
								}
							});
						}
					});
					message.author.send({embed: {
						color: 16738048,
						title: "Temporary Warning Logged",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Warning Log Url",
							value: `[5t_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/temp_warnings/5t_${userid}.txt)`
						  },
						  {
							name: "Please add any additional info or link to the offending image(s)",
							value: `!addwarninfo 5t_${userid}.txt [info]`
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
						title: "Temporary Warning Log",
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
							value: `[5t_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/warnings/5t_${userid}.txt)`
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
						client.users.get(`${userid}`).send(`You have recieved a temporary warning. **Reason:** ${talk.join(" ")}.`);
					}
				}
				//warning for user exists 4-5
				if (fs.existsSync(`./temp_warnings/4t_${userid}.txt`)) {
					fs.renameSync(`./temp_warnings/4t_${userid}.txt`, `./temp_warnings/5t_${userid}.txt`, (err) => {
						if (err) throw err;
						console.log('Rename complete!');
					});
					fs.appendFileSync(`./temp_warnings/5t_${userid}.txt`, `\n**WARNING #5**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk.join(" ")}`, (err) => {
						if (err) throw err;
						console.log('Append complete!');
					});
					//check for existing timestamp
					fs.readdir(`./temp_dates`, function(err, filenames) {
						if (err) {
						  onError(err);
						  return;
						}
						filenames.forEach(checkid);
						
						function checkid(file){
							filename = file.slice(0,-4);
							fs.readFile(`./temp_dates/${filename}.txt`, (err, useridfromfile) => {
								if (err) {
								  onError(err);
								  return;
								}
								if (useridfromfile == userid) {
									console.log(`existing time found`)
									fs.renameSync(`./temp_dates/${filename}.txt`, `./temp_dates/${militime}.txt`, (err) => {
										if (err) throw err;
										console.log('Rename complete!');
									});
								}
							});
						}
					});
					message.author.send({embed: {
						color: 16738048,
						title: "Temporary Warning Logged",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Warning Log Url",
							value: `[5t_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/temp_warnings/5t_${userid}.txt)`
						  },
						  {
							name: "Please add any additional info or link to the offending image(s)",
							value: `!addwarninfo 5t_${userid}.txt [info]`
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
						title: "Temporary Warning Log",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Number of temporary warnings",
							value: "5"
						  },
						  {
							name: "Reason",
							value: `${talk.join(" ")}`
						  },
						  {
							name: "Warning Log Url",
							value: `[5t_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/temp_warnings/5t_${userid}.txt)`
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
						client.users.get(`${userid}`).send(`You have recieved a temporary warning. **Reason:** ${talk.join(" ")}.`);
					}
				}
				//warning for user exists 3-4
				if (fs.existsSync(`./temp_warnings/3t_${userid}.txt`)) {
					fs.renameSync(`./temp_warnings/3t_${userid}.txt`, `./temp_warnings/4t_${userid}.txt`, (err) => {
						if (err) throw err;
						console.log('Rename complete!');
					});
					fs.appendFileSync(`./temp_warnings/4t_${userid}.txt`, `\n**WARNING #4**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk.join(" ")}`, (err) => {
						if (err) throw err;
						console.log('Append complete!');
					});
					//check for existing timestamp
					fs.readdir(`./temp_dates`, function(err, filenames) {
						if (err) {
						  onError(err);
						  return;
						}
						filenames.forEach(checkid);
						
						function checkid(file){
							filename = file.slice(0,-4);
							fs.readFile(`./temp_dates/${filename}.txt`, (err, useridfromfile) => {
								if (err) {
								  onError(err);
								  return;
								}
								if (useridfromfile == userid) {
									console.log(`existing time found`)
									fs.renameSync(`./temp_dates/${filename}.txt`, `./temp_dates/${militime}.txt`, (err) => {
										if (err) throw err;
										console.log('Rename complete!');
									});
								}
							});
						}
					});
					message.author.send({embed: {
						color: 16738048,
						title: "Temporary Warning Logged",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Warning Log Url",
							value: `[4t_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/temp_warnings/4t_${userid}.txt)`
						  },
						  {
							name: "Please add any additional info or link to the offending image(s)",
							value: `!addwarninfo 4t_${userid}.txt [info]`
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
						title: "Temporary Warning Log",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Number of temporary warnings",
							value: "4"
						  },
						  {
							name: "Reason",
							value: `${talk.join(" ")}`
						  },
						  {
							name: "Warning Log Url",
							value: `[4t_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/temp_warnings/4t_${userid}.txt)`
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
						client.users.get(`${userid}`).send(`You have recieved a temporary warning. **Reason:** ${talk.join(" ")}.`);
					}
				}
				//warning for user exists 2-3
				if (fs.existsSync(`./temp_warnings/2t_${userid}.txt`)) {
					fs.renameSync(`./temp_warnings/2t_${userid}.txt`, `./temp_warnings/3t_${userid}.txt`, (err) => {
						if (err) throw err;
						console.log('Rename complete!');
					});
					fs.appendFileSync(`./temp_warnings/3t_${userid}.txt`, `\n**WARNING #3**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk.join(" ")}`, (err) => {
						if (err) throw err;
						console.log('Append complete!');
					});
					//check for existing timestamp
					fs.readdir(`./temp_dates`, function(err, filenames) {
						if (err) {
						  onError(err);
						  return;
						}
						filenames.forEach(checkid);
						
						function checkid(file){
							filename = file.slice(0,-4);
							fs.readFile(`./temp_dates/${filename}.txt`, (err, useridfromfile) => {
								if (err) {
								  onError(err);
								  return;
								}
								if (useridfromfile == userid) {
									console.log(`existing time found`)
									fs.renameSync(`./temp_dates/${filename}.txt`, `./temp_dates/${militime}.txt`, (err) => {
										if (err) throw err;
										console.log('Rename complete!');
									});
								}
							});
						}
					});
					message.author.send({embed: {
						color: 16738048,
						title: "Temporary Warning Logged",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Warning Log Url",
							value: `[3t_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/temp_warnings/3t_${userid}.txt)`
						  },
						  {
							name: "Please add any additional info or link to the offending image(s)",
							value: `!addwarninfo 3t_${userid}.txt [info]`
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
						title: "Temporary Warning Log",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Number of temporary warnings",
							value: "3"
						  },
						  {
							name: "Reason",
							value: `${talk.join(" ")}`
						  },
						  {
							name: "Warning Log Url",
							value: `[3t_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/temp_warnings/3t_${userid}.txt)`
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
						client.users.get(`${userid}`).send(`You have recieved a temporary warning. **Reason:** ${talk.join(" ")}.`);
					}
				}
				//warning for user exists 1-2
				if (fs.existsSync(`./temp_warnings/1t_${userid}.txt`)) {
					fs.renameSync(`./temp_warnings/1t_${userid}.txt`, `./temp_warnings/2t_${userid}.txt`, (err) => {
						if (err) throw err;
						console.log('Rename complete!');
					});
					fs.appendFileSync(`./temp_warnings/2t_${userid}.txt`, `\n**WARNING #2**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk.join(" ")}`, (err) => {
						if (err) throw err;
						console.log('Append complete!');
					});
					//check for existing timestamp
					fs.readdir(`./temp_dates`, function(err, filenames) {
						if (err) {
						  onError(err);
						  return;
						}
						filenames.forEach(checkid);
						
						function checkid(file){
							filename = file.slice(0,-4);
							fs.readFile(`./temp_dates/${filename}.txt`, (err, useridfromfile) => {
								if (err) {
								  onError(err);
								  return;
								}
								if (useridfromfile == userid) {
									console.log(`existing time found`)
									fs.renameSync(`./temp_dates/${filename}.txt`, `./temp_dates/${militime}.txt`, (err) => {
										if (err) throw err;
										console.log('Rename complete!');
									});
								}
							});
						}
					});
					message.author.send({embed: {
						color: 16738048,
						title: "Temporary Warning Logged",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Warning Log Url",
							value: `[2t_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/temp_warnings/2t_${userid}.txt)`
						  },
						  {
							name: "Please add any additional info or link to the offending image(s)",
							value: `!addwarninfo 2t_${userid}.txt [info]`
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
						title: "Temporary Warning Log",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Number of temporary warnings",
							value: "2"
						  },
						  {
							name: "Reason",
							value: `${talk.join(" ")}`
						  },
						  {
							name: "Warning Log Url",
							value: `[2t_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/temp_warnings/2t_${userid}.txt)`
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
						client.users.get(`${userid}`).send(`You have recieved a temporary warning. **Reason:** ${talk.join(" ")}.`);
					}
				}
				//new warning user
				else if ((!fs.existsSync(`./temp_warnings/1t_${userid}.txt`)) && (!fs.existsSync(`./temp_warnings/2t_${userid}.txt`)) && (!fs.existsSync(`./temp_warnings/3t_${userid}.txt`)) && (!fs.existsSync(`./temp_warnings/4t_${userid}.txt`)) && (!fs.existsSync(`./temp_warnings/5t_${userid}.txt`)) && (!fs.existsSync(`./temp_warnings/6t_${userid}.txt`)))
				{
					fs.writeFileSync(`./temp_warnings/1t_${userid}.txt`, `\n**WARNING #1**\n**Staff:** ${message.author.username}\n**Date:** ${time}\n**Reason:**${talk.join(" ")}`, (err) => {
						if (err) throw err;
					});
					fs.writeFileSync(`./temp_dates/${militime}.txt`, `${userid}`, (err) => {
						if (err) throw err;
					});
					message.author.send({embed: {
						color: 16738048,
						title: "Temporary Warning Logged",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Warning Log Url",
							value: `[1t_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/temp_warnings/1t_${userid}.txt)`
						  },
						  {
							name: "Please add any additional info or link to the offending image(s)",
							value: `!addtwarninfo 1t_${userid}.txt [info]`
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
						title: "Temporary Warning Log",
						description: `Offending User: <@${userid}>`,
						fields: [{
							name: "Number of temporary warnings",
							value: "1"
						  },
						  {
							name: "Reason",
							value: `${talk.join(" ")}`
						  },
						  {
							name: "Warning Log Url",
							value: `[1t_${userid}.txt](https://github.com/Jaco909/potatobot/blob/master/temp_warnings/1t_${userid}.txt)`
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
						client.users.get(`${userid}`).send(`You have recieved a temporary warning. **Reason:** ${talk.join(" ")}.`);
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