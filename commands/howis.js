exports.howis = function (logaction, message, args, getRandomInt, howisrng, howisRecently, botchannel, timeout5min) {
	if (message.channel.id === `${botchannel}`) {
		if (!howisRecently.has(message.author.id)){
			var responces = ["Could be better.", "Honestly, I'm supprised they're still alive.", "They're up to their usual bullshit.", "Fine. Not good, but not bad.", "They're... oh... OH... **OH that's not good. STOP IT!**", "Up to things they shouldn't be doing.", "Dead.", "Wasted on shitposts.", "Sitting here instead of doing something with their life.", "Supprisingly chill. A little *too* chill...", "Working too hard again.", "Why don't you figure it out yourself?", "How should I know?", "Let me consult the magic 8 ball...... *Unlikely*.", "Cringing to the content posted here.", "Being an upstanding citizen. Try to be more like them.", "They're wishing TF2 wasn't a dead game.", "They're bipolar. Any response I give you will be different in five seconds."];
			const howisrng = getRandomInt(1, 18);
			const howismessage = responces[howisrng]
			logaction(howisrng)
			console.log('Howis run!');
			howisRecently.add(message.author.id);
			message.channel.send(`${howismessage}`);
			setTimeout(() => {
				howisRecently.delete(message.author.id);
			}, timeout5min ); //300000
		}
		else {
			message.delete(10);
			message.author.send(`Please wait 5 minutes before using this again.`);
		}
	}
	else  {
		console.log('Howis invalid channel!');
		message.delete(10);
		message.author.send(`Invalid channel. Please use \`!help\` in **#botato_cellar** for commands.`);
	}
};