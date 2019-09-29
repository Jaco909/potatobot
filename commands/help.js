exports.help = function (logaction, message, args, usertier, getRandomInt, potatorole) {
	logaction()
	var stopgethelp = ["https://youtu.be/9Deg7VrpHbM", "https://youtu.be/NPtSGYi7HII?t=23s", "https://youtu.be/S4bmCvekW48", "https://youtu.be/9Deg7VrpHbM"];
	if (args[0] == `help`) {
		console.log('Help help!');
		message.delete(10);
		const stoprngmessage = getRandomInt(1, 3);
		const stophelp = stopgethelp[stoprngmessage];
		message.author.send(`**Usage:** \`!help\`\n\**Channels:** *#botato_cellar*\n\**Description:** I... what... why? Why ask for help using help? You just overshot your destination by a command. Like, what are you even trying to achieve by doing this?\n\**STOP**\n${stophelp}`);
	}
	else if (args[0] == `potato`) {
		console.log('Potato help!');
		message.delete(10);
		message.author.send(`**Usage:** \`!potato\`\n\**Channels:** *#botato_cellar*\n\**Description:** Ask the bot if there are any potatoes available. ||But we\'re usually out||`);
	}
	else if (args[0] == `owo`) {
		console.log('Owo help!');
		message.delete(10);
		message.author.send(`**Usage:** \`!owo [text]\`\n\**Channels:** *#botato_cellar*\n\**Description:** Care fow somie huggy wuggies?`);
	}
	else if (args[0] == `servers`) {
		console.log('Servers help!');
		message.delete(10);
		message.author.send(`**Usage:** \`!server [region]\`\n\**Channels:** *#botato_cellar*, *#looking_for_players*.\n\**Description:** Retrives information about current Potato servers. You can also add \`USA\` for USA servers and \`EU\` for Europe servers.`);
	}
	else if(args[0] == `iam`) {
		message.delete(10);
		console.log('iam help!');
		message.author.send(`**Usage:** \`!iam [role]\`\n\**Channels:** *#botato_cellar*.\n\**Description:** Gives you the requested role. Current available options: \n\`!iam madness\` to assign the role @Madness.\n\`!iam Testers\` to assign the role @Testers.`);
	}
	else if (args[0] == `shitpost`) {
		console.log('Shitpost help!');
		message.delete(10);
		message.author.send(`**Usage:** \`!shitpost\`\n\**Channels:** *#botato_cellar*.\n\**Description:** Sends the user a SFW garbage shitpost. Then again, all shitposts are garbage.`);
	}
	else if (args[0] == `changelog`) {
		console.log('Changelog help!');
		message.delete(10);
		message.author.send(`**Usage:** \`!changelog\`\n\**Channels:** *#botato_cellar*\n\**Description:** Lists the changelog, so I actually take the time to document what I've changed.`);
	}
	else if (args[0] == `purge`) {
		console.log('Purge help!');
		message.delete(10);
		message.author.send(`**Usage:** \`!purge #\`\n\**Channels:** All.\n\**Description:** Delete the # most recent messages from the channel. Remeber that the command counts as a message.`);
	}
	else if (args[0] == `fuckgoback`) {
		console.log('Fuckgoback help!');
		message.delete(10);
		message.author.send(`**Usage:** \`!fuckgoback\`\n\**Channels:** *#botato_cellar*.\n\**Description:** We went to far.`);
	}
	else if (args[0] == `shutup`) {
		console.log('Shutup help!');
		message.delete(10);
		message.author.send(`**Usage:** \`!shutup\`\n\**Channels:** All.\n\**Description:** If the bot is stuck in typing status, this will force it to stop. Issue is very rare ||I actually haven't seen it in days, so it\'s probably already fixed||, so this is more of a precaution.`);
	}
	else if (args[0] == `addpotato`) {
		console.log('Addpotato help!');
		message.author.send(`**Usage:** \`!addpotato\`\n\**Channels:** All.\n\**Description:** Adds 1 to the current counter of when the bot yells after using \`!potato\`. Bot will yell when # >= 10.`);
		message.author.send(`**Curent count:** ${potatocount}`);
	}
	else if (args[0] == `potatoyell`) {
		console.log('Potatoyell help!');
		message.author.send(`**Usage:** \`!potatoyell\`\n\**Channels:** All.\n\**Description:** Set\'s the current threshold for when the bot yells after \`!potato\`. Default is 15.`);
		message.author.send(`**Curent threshold:** ${potatoyellnum}`);
	}
	else if (args[0] == `stream`) {
		console.log('Stream help!');
		message.delete(10);
		message.author.send(`**Usage:** \`!stream twitchURL [username]\` \& \`!stream stop\`\n\**Channels:** All.\n\**Description:** Will set the status of the bot to stream to the url defined with \`Username is streaming!\`, and will make a post in the streaming channel. You can add a custom username after the twitch link if you would like to not use your discord username. \`!stream stop\` will end streaming status and clean the streaming announcement.`);
	}
	else if (args[0] == `status`) {
		console.log('Status help!');
		message.delete(10);
		message.author.send(`**Usage:** \`!status status\`\n\**Channels:** All.\n\**Description:** Sets the status of the bot. Options are: \`online\`, \`idle\`, \`dnd\`. This will set the message back to it's default setting.`);
	}
	else if (args[0] == `launchdate`) {
		console.log('Launchdate help!');
		message.delete(10);
		message.author.send(`**Usage:** \`!status status\`\n\**Channels:** *#botato_cellar*.\n\**Description:** Sets the status of the bot. Options are: \`online\`, \`idle\`, \`dnd\`. This will set the message back to it's default setting.`);
	}
	else if (args[0] == `message`) {
		console.log('Message help!');
		message.delete(10);
		message.author.send(`**Usage:** \`!message [text]\`\n\**Channels:** All.\n\**Description:** Sets the playing text of the bot. Currently breaks sentences into arrays. Will fix soon. Type only \`!message\` to set the message back to normal. `);
	}
	else if (args[0] == `say`){
		console.log('Say help!');
		message.delete(10);
		message.author.send(`**Usage:** \`!say [#channel name] [text]\`\n\**Channels:** All.\n\**Description:** Bot will send a message to the given channel #name.`);
	}
	else if (args[0] == `kill`) {
		console.log('Kill help!');
		message.author.send(`**Usage:** \`!kill\`\n\**Channels:** All.\n\**Description:** Forces the bot to run garbage code and crash. For when shit gets real bad.`);
	}
	else if (args[0] == undefined)
	{
		console.log('help run!');
		message.author.send('**Help**\n\`\`\`User Commands\`\`\`\**Fun Commands**\n\`!potato\` : RNG potato fun!\n\`!shitpost\` : A stale shitpost, just for you.\n\`!launchdate\` : Gives the current launch date of MM.\n\ \n\**Discord Commands**\n\`!iam\` : Assign a role. Use \`!help iam\` for more info.\n\ \n\**Information Commands**\n\`!servers\` : Gives a list of CC servers. See `!servers help\` for more info.\n\`!changelog\` : What crap got added now?');
		if (usertier <= 5) {
			console.log('Help GIANT run!');
			message.author.send('\`\`\`Giant Commands\`\`\`\`!stream\` : Sets the potato bot to display a stream. Use \`!stream help\` for more info.');
		}
		if (message.member.roles.has(`${potatorole}`)) {
			console.log('Help POTATO run!');
			message.author.send('\`\`\`Potato Commands\`\`\`\`!owo\` : Forces the bot to give huggy wuggies.');
		}
		if (usertier <= 4) {
			console.log('Help discordmoderator run!');
			message.author.send('\`\`\`Discord Moderator Commands\`\`\`\**Bot Controls**\n\`!addpotato\` : Triggers the internal potato counter.\n\`!message\` : Sets the bot\'s current game message *(currently wip)*.\n\`!say\` : Have the bot say something you write.\n\`!shutup\` : Forces the bot to stop typing.\n\`!status\` : Sets the status of the bot.\n\`!stream\` : Set the bot to display a Twitch stream.\n\`!potatoyell\` : Sets the threshold of when the bot yells about \`!potato\` usage.\n\ \n\**Moderation Commands**\n\`!purge\` : Deletes # messages from the channel.\n\ \n\**Unlisted Commands**\n\`!fuckgoback\` : We need to go back!.');
		}
		/* if (usertier <= 3) {
			console.log('help MODERATOR run!');
			message.author.send('\`\`\`Moderator Commands\`\`\`\n\`!status\` : Sets the status of the bot.\n\`!stream\` : Set the bot to display a Twitch stream.');
		} */
		if (usertier <= 2) {
			console.log('Help officer run!');
			message.author.send('\`\`\`Officer Commands\`\`\`\`!debug\` : Whatever garbage jaka is working on at the moment.\n\`!kill\` : Force bot to bake itself.');
		}
		message.author.send('\`\`\` \`\`\`\n\Use !\`help\` **command** for more information about a command. All commands have help information.\n\All commands must be sent through **#botato_cellar**.');
	}
	/* else
	{
		console.log('help error!');
		message.delete(10);
		message.author.send(`.`);
	} */
};