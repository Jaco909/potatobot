exports.stream = function (logaction, message, usertier, args, streamchannel, client, guild) {
	logaction()
	if (usertier <= 6)
	{
		//selfstream mode
		if ((args[0] !== `stop`) && (args.length !== 0))
		{
			console.log('Self Stream run!');
			client.user.setPresence({
				game: {
					name: `${message.member.displayName} is streaming!`,
					type: "STREAMING",
					url: `${args[0]}`
				}
			});
			guild.channels.cache.get(`${streamchannel}`).send(`${message.member.displayName} is kicking some robot butt! Watch it live at ${args[0]}`);
		}
		//secondarystream mode
		if ((args[0] !== `stop`) && (args.length == 2))
		{
			console.log('Secondary Stream run!');
			client.user.setPresence({
				game: {
					name: `${args[0]} is streaming!`,
					type: "STREAMING",
					url: `${args[1]}`
				}
			});
			guild.channels.cache.get(`${streamchannel}`).send(`${args[0]} is kicking some robot butt! Watch it live at ${args[1]}`);
		}
		if (args[0] == `stop`)
		{
			console.log('Stream stop!');
			client.user.setStatus('online');
			client.user.setActivity('!help for info');
			guild.channels.cache.get(`${streamchannel}`).bulkDelete(1);
		}
		else {
			console.log('Stream fail!');
			message.delete({ timeout: 10});
			message.author.send(`Please add a valid url.`);
		}
	}
	else {
		console.log('Stream block!');
		message.delete({ timeout: 10});
		message.author.send(`You do not have access to this command.`);
	}
};