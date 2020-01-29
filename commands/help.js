exports.help = function (logaction, message, args, usertier, getRandomInt, potatorole, client) {
	logaction()
	var stopgethelp = ["https://youtu.be/9Deg7VrpHbM", "https://youtu.be/NPtSGYi7HII?t=23s", "https://youtu.be/S4bmCvekW48", "https://youtu.be/9Deg7VrpHbM"];
	if (args[0] == `help`) {
		console.log('Help help!');
		message.delete(10);
		const stoprngmessage = getRandomInt(1, 3);
		const stophelp = stopgethelp[stoprngmessage];
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!help`,
			fields: [{
				name: "Usage",
				value: `!help [command]`
			  },
			  {
				name: "Description",
				value: `I... what... why? Why ask for help using help? You just overshot your destination by a command. Like, what are you even trying to achieve by doing this?\n\**STOP**\n${stophelp}`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `potato`) {
		console.log('Potato help!');
		message.delete(10);
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!potato`,
			fields: [{
				name: "Usage",
				value: `!potato`
			  },
			  {
				name: "Description",
				value: `Ask the bot if there are any potatoes available. ||But we\'re usually out||`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `owo`) {
		console.log('Owo help!');
		message.delete(10);
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!owo`,
			fields: [{
				name: "Usage",
				value: `!owo [sentence]`
			  },
			  {
				name: "Description",
				value: `Care fow somie huggy wuggies?`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `howis`) {
		console.log('Howis help!');
		message.delete(10);
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!howis`,
			fields: [{
				name: "Usage",
				value: `!howis [object/person]`
			  },
			  {
				name: "Description",
				value: `How is that person really doing?`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `avatar`) {
		console.log('Avatar help!');
		message.delete(10);
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!avatar`,
			fields: [{
				name: "Usage",
				value: `!avatar [@user]`
			  },
			  {
				name: "Description",
				value: `Returns the users avatar. Leave it blank to give your own avatar.`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `warnmute`) {
		console.log('Warnmute help!');
		message.delete(10);
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!warnmute`,
			fields: [{
				name: "Usage",
				value: `!warnmute`
			  },
			  {
				name: "Description",
				value: `Will toggle warning messages being sent to the warned user.`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `pwarn`) {
		console.log('Warn help!');
		message.delete(10);
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!pwarn`,
			fields: [{
				name: "Usage",
				value: `!pwarn [@user] [reason]`
			  },
			  {
				name: "Description",
				value: `Add a permenent warning to the lister user with a reason.`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `twarn`) {
		console.log('Warn help!');
		message.delete(10);
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!twarn`,
			fields: [{
				name: "Usage",
				value: `!twarn [@user] [reason]`
			  },
			  {
				name: "Description",
				value: `Add a temporary warning to the lister user with a reason.`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `addwarninfo`) {
		console.log('Warn help!');
		message.delete(10);
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!addwarninfo`,
			fields: [{
				name: "Usage",
				value: `!addwarninfo [warnlog] [info]`
			  },
			  {
				name: "Description",
				value: `Will add additional info about a particular warning.`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `getwarn`) {
		console.log('Getwarn help!');
		message.delete(10);
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!getwarn`,
			fields: [{
				name: "Usage",
				value: `!getwarn [warnlog]`
			  },
			  {
				name: "Description",
				value: `Will retrieve the warning log given. Leave blank to see all warning logs.`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `servers`) {
		console.log('Servers help!');
		message.delete(10);
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!servers`,
			fields: [{
				name: "Usage",
				value: `!servers [region]`
			  },
			  {
				name: "Description",
				value: `Retrives information about current Potato servers. You can also add \`USA\` for USA servers and \`EU\` for Europe servers.`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if(args[0] == `iam`) {
		message.delete(10);
		console.log('iam help!');
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!iam`,
			fields: [{
				name: "Usage",
				value: `!iam [role name]`
			  },
			  {
				name: "Description",
				value: `Gives you the requested role. Current available options: \n\`!iam madness\` to assign the role @Madness.\n\`!iam Testers\` to assign the role @Testers.`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `shitpost`) {
		console.log('Shitpost help!');
		message.delete(10);
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!shitpost`,
			fields: [{
				name: "Usage",
				value: `!shitpost`
			  },
			  {
				name: "Description",
				value: `Sends the user a SFW garbage shitpost. Then again, all shitposts are garbage.`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `changelog`) {
		console.log('Changelog help!');
		message.delete(10);
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!changelog`,
			fields: [{
				name: "Usage",
				value: `!changelog`
			  },
			  {
				name: "Description",
				value: `Lists the changelog, so I actually take the time to document what I've changed.`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `purge`) {
		console.log('Purge help!');
		message.delete(10);
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!purge`,
			fields: [{
				name: "Usage",
				value: `!purge #`
			  },
			  {
				name: "Description",
				value: `Delete the # most recent messages from the channel. Remeber that the command counts as a message.`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `fuckgoback`) {
		console.log('Fuckgoback help!');
		message.delete(10);
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!fuckgoback`,
			fields: [{
				name: "Usage",
				value: `!fuckgoback`
			  },
			  {
				name: "Description",
				value: `We went too far.`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `shutup`) {
		console.log('Shutup help!');
		message.delete(10);
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!shutup`,
			fields: [{
				name: "Usage",
				value: `!shutup`
			  },
			  {
				name: "Description",
				value: `If the bot is stuck in typing status, this will force it to stop. Issue is very rare ||I actually haven't seen it in months, so it\'s probably already fixed||, so this is more of a precaution.`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `addpotato`) {
		console.log('Addpotato help!');
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!addpotato`,
			fields: [{
				name: "Usage",
				value: `!addpotato`
			  },
			  {
				name: "Description",
				value: `Adds 1 to the current counter of when the bot yells after using \`!potato\`. Bot will yell when # >= 15.`
			  },
			  {
				name: "Current count",
				value: `${potatocount}`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `potatoyell`) {
		console.log('Potatoyell help!');
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!potatoyell`,
			fields: [{
				name: "Usage",
				value: `!potatoyell`
			  },
			  {
				name: "Description",
				value: `Set\'s the current threshold for when the bot yells after \`!potato\`. Default is 15.`
			  },
			  {
				name: "Current threshold",
				value: `${potatoyellnum}`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `stream`) {
		console.log('Stream help!');
		message.delete(10);
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!potatoyell`,
			fields: [{
				name: "Usage",
				value: `\`!stream twitchURL [username]\` \& \`!stream stop\``
			  },
			  {
				name: "Description",
				value: `Will set the status of the bot to stream to the url defined with \`Username is streaming!\`, and will make a post in the streaming channel. You can add a custom username after the twitch link if you would like to not use your discord username. \`!stream stop\` will end streaming status and clean the streaming announcement.`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `status`) {
		console.log('Status help!');
		message.delete(10);
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!status`,
			fields: [{
				name: "Usage",
				value: `!status [status]`
			  },
			  {
				name: "Description",
				value: `Sets the status of the bot. Options are: \`online\`, \`idle\`, \`dnd\`. This will set the message back to it's default setting.`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	/* else if (args[0] == `launchdate`) {
		console.log('Launchdate help!');
		message.delete(10);
		message.author.send(`**Usage:** \`!status status\`\n\**Channels:** *#botato_cellar*.\n\**Description:** Sets the status of the bot. Options are: \`online\`, \`idle\`, \`dnd\`. This will set the message back to it's default setting.`);
	} */
	else if (args[0] == `message`) {
		console.log('Message help!');
		message.delete(10);
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!message`,
			fields: [{
				name: "Usage",
				value: `!message [message]`
			  },
			  {
				name: "Description",
				value: `Sets the playing text of the bot. Type only \`!message\` to set the message back to normal.`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `say`){
		console.log('Say help!');
		message.delete(10);
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!say`,
			fields: [{
				name: "Usage",
				value: `!say [#channel] [message]`
			  },
			  {
				name: "Description",
				value: `Bot will send a message to the given channel #name.`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == `reboot`) {
		console.log('Reboot help!');
		message.author.send({embed: {
			color: 8213292,
			title: "Command",
			description: `!reboot`,
			fields: [{
				name: "Usage",
				value: `!reboot`
			  },
			  {
				name: "Description",
				value: `Bot will restart, applying any new changes.`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	else if (args[0] == undefined)
	{
		console.log('help run!');
		message.author.send({embed: {
			color: 4886754,
			title: "User Commands",
			fields: [{
				name: "Fun Commands",
				value: `~`
			  },
			  {
				name: "!potato",
				value: `RNG potato fun!`
			  },
			  {
				name: "!howis",
				value: `How is that person doing?`
			  },
			  {
				name: "!shitpost",
				value: `A stale shitpost, just for you.`
			  },
			  {
				name: "Discord Commands",
				value: `~`
			  },
			  {
				name: "!iam",
				value: `Assign a role. Use \`!help iam\` for more info.`
			  },
			  {
				name: "Information Commands",
				value: `~`
			  },
			  {
				name: "!servers",
				value: `Gives a list of potato servers. See \`!servers help\` for more info.`
			  },
			  {
				name: "!avatar",
				value: `Returns the user\'s avatar.`
			  },
			  {
				name: "!changelog",
				value: `What crap got added now?`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			}
		  }
		});
		if (usertier <= 5) {
			console.log('Help GIANT run!');
			message.author.send({embed: {
			color: 9442302,
			title: "Giant Commands",
			fields: [{
				name: "!stream",
				value: `Sets the potato bot to display a stream. Use \`!stream help\` for more info.`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			}
		  }
		});
		}
		if (message.member.roles.has(`${potatorole}`)) {
			console.log('Help POTATO run!');
			message.author.send({embed: {
			color: 8213292,
			title: "Potatoed Commands",
			fields: [{
				name: "!owo",
				value: `owoify a sentence.`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			}
		  }
		});
		}
		if (usertier <= 4) {
			console.log('Help discordmoderator run!');
			message.author.send({embed: {
			color: 16740610,
			title: "Moderator Commands",
			fields: [{
				name: "Bot Controls",
				value: `~`
			  },
			  {
				name: "!addpotato",
				value: `Triggers the internal potato counter.`
			  },
			  {
				name: "!message",
				value: `Sets the bot\'s current game message.`
			  },
			  {
				name: "!say",
				value: `Have the bot say something you write in the desired channel.`
			  },
			  {
				name: "!status",
				value: `Sets the status of the bot.`
			  },
			  {
				name: "!potatoyell",
				value: `Sets the threshold of when the bot yells about \`!potato\` usage.`
			  },
			  {
				name: "!reboot",
				value: `Force bot to restart.`
			  },
			  {
				name: "Moderation Commands",
				value: `~`
			  },
			  {
				name: "!purge",
				value: `Deletes # messages from the channel.`
			  },
			  {
				name: "!pwarn",
				value: `Logs a permenent warning about a user.`
			  },
			  {
				name: "!twarn",
				value: `Logs a temporary warning about a user.`
			  },
			  {
				name: "!addwarninfo",
				value: `Adds information about a warning.`
			  },
			  {
				name: "!getwarn",
				value: `Gets a warning file.`
			  },
			  {
				name: "!warnmute",
				value: `Disables reporting warnings to the offender.`
			  },
			  {
				name: "Unlisted Commands",
				value: `~`
			  },
			  {
				name: "!fuckgoback",
				value: `Well we sure fucked that up.`
			  },
			  {
				name: "!bitch",
				value: `no u`
			  }
			],
			footer: {
			  icon_url: client.user.avatarURL,
			}
		  }
		});
		}
		/* if (usertier <= 3) {
			console.log('help MODERATOR run!');
			message.author.send('\`\`\`Moderator Commands\`\`\`\n\`!status\` : Sets the status of the bot.\n\`!stream\` : Set the bot to display a Twitch stream.');
		} */
		/* if (usertier <= 2) {
			console.log('Help officer run!');
			message.author.send('\`\`\`Officer Commands\`\`\`\`!debug\` : Whatever garbage jaka is working on at the moment.');
		} */
		message.author.send({embed: {
			color: 4886754,
			title: `Use !\`help\` **command** for more information about a command. All commands have help information.\n\All commands must be sent through **#botato_cellar**.`,
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "Beep Boop"
			}
		  }
		});
	}
	/* else
	{
		console.log('help error!');
		message.delete(10);
		message.author.send(`.`);
	} */
};