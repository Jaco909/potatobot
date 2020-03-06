exports.reboot = function (logaction, message, usertier) {
	logaction()
	if (usertier <= 4)
	{
		guildMember.addRole(`${muterole}`); //invalid, throws error
	}
	else {
		message.delete({ timeout: 10});
		message.author.send(`You do not have access to this command.`);
	}
};