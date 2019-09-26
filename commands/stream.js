exports.stream = function (logaction, message, usertier, args, streamchannel, client) {
	logaction()
	if (usertier <= 5)
	{
		//selfstream mode
		if (args[0] !== `stop`)
		{
			console.log('Self Stream run!');
			console.log(`${message.member.displayName}`);
			console.log(`${args[0]}`);
			client.user.setPresence({
				game: {
					name: `${message.member.displayName} is streaming!`,
					type: "STREAMING",
					url: `${args[0]}`
				}
			});
			client.channels.get(`${streamchannel}`).send(`${message.member.displayName} is kicking some robot butt! Watch it live at ${args[0]}`);
		}
		//secondarystream mode
		if ((args[0] !== `stop`) && (args.length == 2))
		{
			console.log('Secondary Stream run!');
			console.log(`${message.member.displayName}`);
			console.log(`${args[0]}`);
			console.log(`${args[1]}`);
			client.user.setPresence({
				game: {
					name: `${args[1]} is streaming!`,
					type: "STREAMING",
					url: `${args[0]}`
				}
			});
			client.channels.get(`${streamchannel}`).send(`${args[1]} is kicking some robot butt! Watch it live at ${args[0]}`);
		}
		if (args[0] == `stop`)
		{
			console.log('Stream stop!');
			client.user.setStatus('online');
			client.user.setActivity('!help for info');
			client.channels.get(`${streamchannel}`).bulkDelete(1);
		}
	}
	else {
		message.delete(10);
		message.author.send(`You do not have access to this command.`);
	}
};