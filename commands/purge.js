exports.purge = function (logaction, message, usertier, args) {
	if (usertier <= 5)
	{
		if (args[0] !== undefined)
		{
			if (!args.some(isNaN))
			{
				if (args[0] <= 100)
				{
					console.log('Purge run!');
					logaction()
					console.log(`Purging ${args[0]} messages!`);
					return message.channel.bulkDelete(args[0]);
				}
				else
				{
					console.log('Purge error +100!');
					message.author.send(`Discord is unable to purge more than 100 messages at a time.`);
				}
			}
			else
			{
				console.log('Purge error NaN!');
				message.delete({ timeout: 10});
				message.author.send(`Invalid purge #.`);
			}
		}
		else
		{
			console.log('Purge error blank!');
			message.delete({ timeout: 10});
			message.author.send(`Invalid purge ammount.`);
		}
	}
	else
	{
		console.log('Purge block!');
		message.delete({ timeout: 10});
		message.author.send(`You do not have access to this command.`);
	}
};