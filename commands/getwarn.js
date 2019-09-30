exports.getwarn = function (logaction, message, usertier, args, messageChannel, fs, talk, warnchannel, client, moderator, warnlist) {
	if (usertier <= 4)
	{
		if (args[0] !== undefined)
		{
			var warnget = args[0]
			logaction()
			if (fs.existsSync(`./warnings/${warnget}`)) {
				fs.readFile(`./warnings/${args[0]}`, (err, data) => {
				message.author.send(`${data}`);
				});
			}
			else {
				message.author.send(`That is not a valid file. Please use \`!getwarn\` with no text for a list of files.`);
			}
		}
		else
		{
			logaction()
			console.log('Getwarn list give!');
			message.author.send(`${warnlist}`);
		}
	}
	else
	{
		console.log('Getwarn block!');
		message.delete(10);
		message.author.send(`You do not have access to this command.`);
	}
};