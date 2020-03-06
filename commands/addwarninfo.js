exports.addwarninfo = function (logaction, message, usertier, args, messageChannel, fs, talk, warnchannel, client, moderator, warnlist, guild) {
	if (usertier <= 4) {
		if (args[0] !== undefined) {
			var warnget = args[0].slice(0, -4);
			talk == (talk.shift().toString());
			talk.shift();
			logaction()
			message.delete({ timeout: 10})
			if (fs.existsSync(`./warnings/${warnget}.txt`)) {
				fs.writeFileSync(`./warnings/${warnget}_info.txt`, `\n*ADDITIONAL INFO*\n ${talk.join(" ")}`, (err) => {
					if (err) throw err;
				});
				console.log('Addwarninfo success!');
				message.author.send({embed: {
					color: 16748343,
					author: {
					  name: `Potato Bot`,
					  icon_url: client.user.avatarURL()
					},
					title: "Info Added",
					description: `Warning info saved.`,
					fields: [{
						name: "File name",
						value: `[${warnget}_info.txt](https://github.com/Jaco909/potatobot/blob/master/warnings/${warnget}_info.txt)`
					  }
					],
					timestamp: new Date(),
					footer: {
					  icon_url: client.user.avatarURL(),
					  text: "Beep Boop"
					}
				  }
				});
				guild.channels.cache.get(`${warnchannel}`).send({embed: {
					color: 16748343,
					title: "Warning Info Added",
					description: `Additional warning info has been logged.`,
					fields: [{
						name: "User",
						value: `<@${warnget.slice(2)}>`
					  },
					  {
						name: "File name",
						value: `[${warnget}_info.txt](https://github.com/Jaco909/potatobot/blob/master/warnings/${warnget}_info.txt)`
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
			else if (fs.existsSync(`./temp_warnings/${warnget}.txt`)) {
				fs.writeFileSync(`./temp_warnings/${warnget}_info.txt`, `\n*ADDITIONAL INFO*\n ${talk.join(" ")}`, (err) => {
					if (err) throw err;
				});
				console.log('Addwarninfo success!');
				message.author.send({embed: {
					color: 16748343,
					author: {
					  name: `Potato Bot`,
					  icon_url: client.user.avatarURL()
					},
					title: "Info Added",
					description: `Warning info saved.`,
					fields: [{
						name: "File name",
						value: `[${warnget}_info.txt](https://github.com/Jaco909/potatobot/blob/master/temp_warnings/${warnget}_info.txt)`
					  }
					],
					timestamp: new Date(),
					footer: {
					  icon_url: client.user.avatarURL(),
					  text: "Beep Boop"
					}
				  }
				});
				guild.channels.cache.get(`${warnchannel}`).send({embed: {
					color: 16748343,
					title: "Warning Info Added",
					description: `Additional warning info has been logged.`,
					fields: [{
						name: "User",
						value: `<@${warnget.slice(2)}>`
					  },
					  {
						name: "File name",
						value: `[${warnget}_info.txt](https://github.com/Jaco909/potatobot/blob/master/temp_warnings/${warnget}_info.txt)`
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
			else {
				console.log('Addwarninfo wrong file!');
				message.author.send(`That is not a valid file. Please use \`!getwarn\` for a list of files.`);
			}
		}
		else {
			console.log('Addwarninfo wrong file!');
			message.author.send(`That is not a valid file. Please use \`!getwarn\` for a list of files.`);
		}
	}
	else {
		console.log('Addwarninfo block!');
		message.delete({ timeout: 10})
		message.author.send(`You do not have access to this command.`);
	}
};