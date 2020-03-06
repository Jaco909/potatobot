exports.messagefunc = function (logaction, message, usertier, args, talk, client) {
	logaction()
	if (usertier <= 5)
	{
		if (args[0] !== undefined)
		{
			console.log('Message run!');
			talk == (talk.shift().toString());
			client.user.setActivity(`${talk.join(" ")}`);
		}
		if (args[0] === undefined || args[0].length == 0)
		{
			console.log('Message reset!');
			client.user.setActivity('!help for info');
		}
	}
	else {
		console.log('Message block!');
		message.delete({ timeout: 10});
		message.author.send(`You do not have access to this command.`);
	}
};