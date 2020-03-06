exports.say = function (logaction, message, usertier, args, talk, messageChannel, guild) {
	logaction()
	if (usertier <= 5)
	{
		if (args[0] !== undefined)
		{
			if ((isNaN(args[0])) && (args[0].startsWith('<#') && args[0].endsWith('>')) && (args[1] !== undefined))
			{
				console.log('Say run!');
				messageChannel(args[0], talk, guild);
			}
			else
			{
				console.log('Say error channel!');
				message.delete(10);
				message.author.send(`Please use the name of the channel (#channel_name_here) and attatch a message.`);
			}
		}
		else if (args[0] == undefined) {
			console.log('Say error blank!');
			message.delete(10);
			message.author.send(`**Usage:** \`!say [channel] [text]\`\n\**Channels:** All.\n\**Description:** Bot will send a message to the given channel.`);
		}
	}
	else {
		message.delete(10);
		console.log('Say block!');
		message.author.send(`You do not have access to this command.`);
	}
};