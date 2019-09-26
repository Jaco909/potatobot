exports.kill = function (logaction, message, usertier) {
	logaction()
	if (usertier <= 2)
	{
		guildMember.addRole(`${muterole}`); //invalid, throws error
	}
	else {
		message.delete(10);
		message.author.send(`You do not have access to this command.`);
	}
};