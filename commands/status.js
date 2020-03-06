exports.status = function (logaction, message, usertier, args, client) {
	logaction()
	if (usertier <= 5)
	{
		console.log('Status run!');
		console.log(`${args}`);
		client.user.setStatus(`${args}`);
		client.user.setActivity('!help for info');
	}
	else {
		console.log('Status block!');
		message.delete({ timeout: 10});
		message.author.send(`You do not have access to this command.`);
	}
};