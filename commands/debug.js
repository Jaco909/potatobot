exports.debug = function (logaction, message, usertier, guild, robotrole) {
	if (usertier <= 5)
	{
		message.member.roles.remove(`${robotrole}`);
	}
	else {
		console.log('Debug block!');
		message.delete(10);
		message.author.send(`You do not have access to this command.`);
	}
};