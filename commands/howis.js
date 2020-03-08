exports.howis = function (logaction, message, args, getRandomInt, howisRecently, botchannel, timeout5min, args, fs) {
	if (!howisRecently.has(message.author.id)){
		var howisrng = 0;
		fs.readFile(`./data/howis.txt`, (err, howis) => {
			howis = howis.toLocaleString();
			howis = howis.split("\n")
			howiscount = howis.length
			const howisrng = getRandomInt(1, howiscount);
			const howismessage = howis[howisrng]
			logaction(howisrng)
			console.log('Howis run!');
			howisRecently.add(message.author.id);
			if (args == `hydrogen`){
				message.channel.send(`https://cdn.discordapp.com/attachments/587862013779378186/649350879144837152/hydroangery.jpg`);
			}
			else {
				message.channel.send(`${howismessage}`);
			}
			setTimeout(() => {
				howisRecently.delete(message.author.id);
			}, timeout5min ); //300000
		});
	}
	else {
		message.delete({ timeout: 10})
		message.author.send(`Please wait 5 minutes before using this again.`);
	}
};