exports.status = function (logaction, message, usertier, args, client) {
	logaction()
	if (usertier <= 4)
	{
		console.log('Status run!');
		console.log(`${args}`);
		client.user.setStatus(`${args}`);
		client.user.setActivity('!help for info');
	}
	else {
		message.delete(10);
		message.author.send(`You do not have access to this command.`);
	}
};