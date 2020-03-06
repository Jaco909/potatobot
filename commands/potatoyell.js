exports.potatoyell = function (logaction, message, usertier, args, fs) {
	logaction()
	if (usertier <= 4)
	{
		if (args[0] !== undefined)
		{
			if (!args.some(isNaN))
			{
				message.delete({ timeout: 10});
				console.log('Potatoyell run!');
				fs.unlink(`./data/potatoyellnum.txt`, (err) => {
					if (err) throw err;
				});
				setTimeout(() => {
					fs.writeFileSync(`./data/potatoyellnum.txt`, `${args[0]}`, (err) => {
						if (err) throw err;
					});
				}, 50 );
				message.author.send(`**Curent threshold:** ${args[0]}`);
			}
			else
			{
				message.delete({ timeout: 10});
				message.author.send(`Invalid threshold #.`);
			}
		}
		else
		{
			message.delete({ timeout: 10});
			message.author.send(`Invalid threshold #.`);
		}
	}
	else {
		message.delete({ timeout: 10});
		message.author.send(`You do not have access to this command.`);
	}
};