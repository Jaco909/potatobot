exports.howis = function (logaction, message, args, getRandomInt, howisRecently, botchannel, timeout5min, args, fs) {
	if (!howisRecently.has(message.author.id)){
		var howisrng = 0;
		//var responces = ["Could be better.", "Honestly, I'm supprised they're still alive.", "They're up to their usual bullshit.", "Fine. Not good, but not bad.", "They're... oh... OH... **OH that's not good. STOP IT!**", "Up to things they shouldn't be doing.", "Dead.", "Wasted on shitposts.", "Sitting here instead of doing something with their life.", "Supprisingly chill. A little *too* chill...", "Working too hard again.", "Why don't you figure it out yourself?", "How should I know?", "Let me consult the magic 8 ball...... *Unlikely*.", "Cringing to the content posted here.", "Being an upstanding citizen. Try to be more like them.", "They're wishing TF2 wasn't a dead game.", "They're bipolar. Any response I give you will be different in five seconds."];
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