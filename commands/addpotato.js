exports.addpotato = function (logaction, message, usertier, potatocount) {
	logaction()
	if (usertier <= 4)
	{
		console.log('Addpotato run!');
		message.delete({ timeout: 10})
		potatocount = (potatocount + 1);
	}
	else {
		console.log('Addpotato block!');
		message.delete({ timeout: 10})
		message.author.send(`You do not have access to this command.`);
	}
};