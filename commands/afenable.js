exports.afenable = function (logaction, message, usertier, args, fs, guild, aprilfoolsreset, client) {
	if (usertier <= 4)
	{
		if (args[0] != undefined)
		{
			logaction(args[0])
			fs.unlink(`./data/afstate.txt`, (err) => {
				if (err) throw err;
			});
			setTimeout(() => {
				if (args[0] == "on"){
					console.log('aprilfools on!');
					fs.writeFileSync(`./data/afstate.txt`, `1`, (err) => {
						if (err) throw err;
					});
					message.reply('April fools mode enabled. Let the clusterfuck begin...');
				}
				else if (args[0] == "off"){
					console.log('aprilfools off!');
					fs.writeFileSync(`./data/afstate.txt`, `0`, (err) => {
						if (err) throw err;
					});
					aprilfoolsreset(fs, guild, client, logaction);
					message.reply('April fools mode disabled. Restoring usernames...');
				}
				else{
					message.reply(`Valid states: on, off.`);
				}
			}, 100 );
		}
		else
		{
			message.reply(`Valid states: **on**, **off**.`);
		}
	}
	else {
		message.delete({ timeout: 10});
		message.author.send(`You do not have access to this command.`);
	}
};