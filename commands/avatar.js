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
			if (args[0].startsWith('<@') && args[0].endsWith('>')) {
				var userid = args[0].slice(2, -1);

				if (userid.startsWith('!')) {
					userid = userid.slice(1);
				}
			}
			client.user.fetch(userid);
			const user = client.users.cache.get(userid);
			logaction(user);
			return message.reply(`${user.username}'s avatar: ${user.avatarURL({ format: 'png', dynamic: true, size: 1024 })}`);
		}
	}
	else
	{
		console.log('Avatar user!');
		logaction();
		return message.channel.send(`Your avatar: ${message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 })}`);
	}
};