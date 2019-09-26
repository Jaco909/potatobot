exports.debug = function (logaction, message, usertier, Files) {
	if (usertier <= 2)
	{
		logaction()
		console.log('Debug run!');
		message.delete(10);
		console.log(`${Files}`);
	}
	else {
		console.log('Debug block!');
		message.delete(10);
		message.author.send(`You do not have access to this command.`);
	}
};