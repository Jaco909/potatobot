exports.say = function (logaction, message, usertier, args, messageChannel) {
	logaction()
	if (usertier <= 4)
	{
		if (args[0] !== undefined)
		{
			if ((isNaN(args[0])) && (args[0].startsWith('<#') && args[0].endsWith('>')) && (args[1] !== undefined))
			{
				console.log('Say run!');
				messageChannel(args[0]);
			}
			else
			{
				console.log('Say error!');
				message.delete(10);
				message.author.send(`Please use the name of the channel (#channel_name_here) and attatch a message.`);
			}
		}
		else if (args[0] == undefined) {
			console.log('Say error!');
			message.delete(10);
			message.author.send(`**Usage:** \`!say [channel] [text]\`\n\**Channels:** All.\n\**Description:** Bot will send a message to the given channel.`);
		}
	}
	else {
		message.delete(10);
		message.author.send(`You do not have access to this command.`);
	}
};