exports.owo = function (logaction, message, args, potatorole, furtrim, owoedRecently) {
	logaction()
	if (message.member.roles.has(`${potatorole}`))
	{
		if (owoedRecently.has(message.author.id))
		{
			console.log('OwO  banned!');
			message.delete(10);
			message.author.send('I\'m still embarrsed from the last time. Give me an hour.');
		}
		else if (!owoedRecently.has(message.author.id))
		{
			if (args[0] !== undefined)
			{
				furtrim();
				owoedRecently.add(message.author.id);
				setTimeout(() => {
					owoedRecently.delete(message.author.id);
				}, 3600000 ); //3600000
			}
			else {
				message.delete(10);
				message.author.send(`How can I owo nothing?`);
			}
		}
	}
	else {
		message.delete(10);
		message.author.send(`You are not enough of a potato to access this command.`);
	}
};