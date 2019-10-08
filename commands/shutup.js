exports.shutup = function (logaction, message, usertier) {
	logaction()
	if (usertier <= 4)
	{
		console.log('Shutup run!');
		if (message.channel.type !== `dm`) {
			message.delete(10);
		}
		message.channel.stopTyping(true);
	}
	else {
		console.log('Shutup block!');
		message.delete(10);
		message.author.send(`You do not have access to this command.`);
	}
};