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
			else if (fs.existsSync(`./temp_warnings/${warnget}`)) {
				fs.readFile(`./warnings/${args[0]}`, (err, data) => {
				message.author.send(`${data}`);
				});
			}
			else {
				console.log('Getwarn invalid name!');
				message.author.send(`That is not a valid file. Please use \`!getwarn\` with no text for a list of files.`);
			}
		}
		else
		{
			logaction()
			console.log('Getwarn list give!');
			message.author.send(`**Permanent Warns:** https://github.com/Jaco909/potatobot/tree/master/warnings \n **Temporary Warns:** https://github.com/Jaco909/potatobot/tree/master/temp_warnings`);
		}
	}
	else
	{
		console.log('Getwarn block!');
		message.delete({ timeout: 10})
		message.author.send(`You do not have access to this command.`);
	}
};