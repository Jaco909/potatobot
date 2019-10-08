exports.addpotato = function (logaction, message, usertier, potatocount) {
	logaction()
	if (usertier <= 4)
	{
		message.delete(10);
		console.log('Addpotato run!');
		potatocount = (potatocount + 1);
	}
	else {
		console.log('Addpotato block!');
		message.delete(10);
		message.author.send(`You do not have access to this command.`);
	}
};