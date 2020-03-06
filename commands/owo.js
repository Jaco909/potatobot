exports.owo = function (logaction, message, args, potatorole, furtrim, owoedRecently, getRandomInt, prefix) {
	logaction()
	if (message.member.roles.cache.has(`${potatorole}`)){
		if (owoedRecently.has(message.author.id)){
			console.log('OwO too soon!');
			message.delete({ timeout: 10})
			message.author.send('I\'m still embarrsed from the last time. Give me an hour.');
		}
		else if (!owoedRecently.has(message.author.id)){
			if (args[0] !== undefined)
			{
				furtrim(message, prefix, getRandomInt);
				console.log('OwO!');
				owoedRecently.add(message.author.id);
				setTimeout(() => {
					owoedRecently.delete(message.author.id);
				}, 3600000 ); //3600000
			}
			else{
				console.log('OwO error blank!');
				message.delete({ timeout: 10})
				message.author.send(`How can I owo nothing?`);
			}
		}
	}
	else{
		console.log('OwO block!');
		message.delete({ timeout: 10})
		message.author.send(`You are not enough of a potato to access this command.`);
	}
};