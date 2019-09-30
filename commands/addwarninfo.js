exports.addwarninfo = function (logaction, message, usertier, args, messageChannel, fs, talk, warnchannel, client, moderator, warnlist) {
	if (usertier <= 4)
	{
		if (args[0] !== undefined)
		{
			var warnget = args[0].slice(0, -4);
			talk == (talk.shift().toString());
			talk.shift();
			logaction()
			if (fs.existsSync(`./warnings/${warnget}.txt`)) {
				fs.writeFileSync(`./warnings/${warnget}_info.txt`, `\n*ADDITIONAL INFO*\n ${talk.join(" ")}`, (err) => {
					if (err) throw err;
				});
				console.log('Append complete!');
				message.author.send(`Info has been added to warn file \`${warnget}_info.txt\`.`);
				client.channels.get(`${warnchannel}`).send(`\`\`\`Info for ${warnget}.txt has been saved to ${warnget}_info.txt\`\`\``);
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