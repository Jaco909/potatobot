exports.potatoyell = function (logaction, message, usertier, args, potatoyellnum) {
	logaction()
	if (usertier <= 4)
	{
		if (args[0] !== undefined)
		{
			if (!args.some(isNaN))
			{
				message.delete(10);
				console.log('Potatoyell run!');
				potatoyellnum = args[0];
				message.author.send(`**Curent threshold:** ${potatoyellnum}`);
			}
			else
			{
				console.log('Potatoyell error NaN!');
				message.delete(10);
				message.author.send(`Invalid threshold #.`);
			}
		}
		else
		{
			console.log('Potatoyell error blank!');
			message.delete(10);
			message.author.send(`Invalid threshold #.`);
		}
	}
	else {
		console.log('Potatoyell block!');
		message.delete(10);
		message.author.send(`You do not have access to this command.`);
	}
};