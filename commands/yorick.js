exports.yorick = function (logaction, message, args, getRandomInt, yorickrng, yorickRecently, botchannel, timeout5min, args, potatorole, usertier, guild, client, fs) {
	if (message.member.roles.cache.has(`${potatorole}`) || (usertier <= 99))
	{
		if (!yorickRecently.has(message.author.id)){
			var filerng = getRandomInt(1, 10);
			if (filerng => 2 ){
				fs.readFile(`./data/yorick.txt`, (err, yorick) => {
					yorick = yorick.toLocaleString();
					yorick = yorick.split("\n")
					yorickcount = yorick.length
					var yorickrng = getRandomInt(1, yorickcount);
					logaction(yorickrng)
					console.log('Yorick run!');
					yorickRecently.add(message.author.id);
					const sntrid = '350339403677302785'; //350339403677302785
					client.user.fetch(sntrid);
					const sntr = client.users.cache.get(sntrid);
					message.channel.send({embed: {
						color: 9647333,
						author: {
						  name: `Skeleton`,
						  icon_url: `${sntr.displayAvatarURL()}`
						},
						title: "Words from a skeleton",
						description: `${yorick[yorickrng]}`,
						}
					});
					setTimeout(() => {
						yorickRecently.delete(message.author.id);
					}, timeout5min ); //300000
				});
			}
			if (filerng < 2 ){
				fs.readFile(`./data/jaka.txt`, (err, yorick) => {
					yorick = yorick.toLocaleString();
					yorick = yorick.split("\n")
					yorickcount = yorick.length
					var yorickrng = getRandomInt(1, yorickcount);
					logaction(yorickrng)
					console.log('Jaka run!');
					yorickRecently.add(message.author.id);
					const jakaid = '207174577783177216'; //207174577783177216
					client.user.fetch(jakaid);
					const jaka = client.users.cache.get(jakaid);
					message.channel.send({embed: {
						color: 9647333,
						author: {
						  name: `Degenerate`,
						  icon_url: `${jaka.displayAvatarURL()}`
						},
						title: "Words from a weeb",
						description: `${yorick[yorickrng]}`,
						}
					});
					setTimeout(() => {
						yorickRecently.delete(message.author.id);
					}, timeout5min ); //300000
				});
			}
		}
		else {
			message.delete({ timeout: 10});
			message.author.send(`Please wait 5 minutes before using this again.`);
		}
	}
	else {
		console.log('Yorick block!');
		message.delete({ timeout: 10});
		message.author.send(`You are not enough of a potato to access this command.`);
	}
};