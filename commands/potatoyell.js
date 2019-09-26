exports.potatoyell = function (logaction, message, usertier, args, potatoyellnum) {
	logaction()
	if (usertier <= 4)
	{
		if (args[0] !== undefined)
		{
			if (!args.some(isNaN))
			{
				message.delete(10);
				console.log('Setpotatoyell run!');
				potatoyellnum = args[0];
				console.log(`Threshold: ${potatoyellnum}`);
				message.author.send(`**Curent threshold:** ${potatoyellnum}`);
			}
			else
			{
				console.log('Purge error!');
				message.delete(10);
				message.author.send(`Invalid threshold #.`);
			}
		}
		else
		{
			console.log('Potatoyell error!');
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