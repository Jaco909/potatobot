exports.avatar = function (logaction, message, args, getUserFromMention, talk, client) {
	if (args[0] !== undefined)
	{
		const user = getUserFromMention(args[0]);
		if (!user) {
			console.log('Avatar fail!');
			return message.author.send('Please use a proper mention.');
		}
		else
		{
			console.log('Avatar other!');
			logaction(user);
			if (args[0].startsWith('<@') && args[0].endsWith('>')) {
				var userid = args[0].slice(2, -1);

				if (userid.startsWith('!')) {
					userid = userid.slice(1);
				}
			}
			return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL}`);
		}
	}
	else
	{
		console.log('Avatar user!');
		logaction();
		return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
	}
};