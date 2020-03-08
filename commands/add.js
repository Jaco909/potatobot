exports.add = function (logaction, fs, args, talk, usertier, message) {
	logaction()
	if (usertier <= 5)
	{
		talk.shift()
		talk.shift().toString();
		if (args[0] == `activity`){
			if (args[1] == undefined){
				message.author.send(`https://github.com/Jaco909/potatobot/blob/master/data/activities.txt`);
			}
			else{
				fs.appendFile(`./data/activities.txt`, `\n${talk.join(" ")}`, (err) => {
					if (err) throw err;
					console.log('Activity append complete!');
					message.reply(`File appended.`);
				});
			}
		}
		else if (args[0] == `shitpost`){
			if (args[1] == undefined){
				message.author.send(`https://github.com/Jaco909/potatobot/blob/master/data/shitposts.txt`);
			}
			else{
				fs.appendFile(`./data/shitposts.txt`, `\n${talk.join(" ")}`, (err) => {
					if (err) throw err;
					console.log('Shitposts append complete!');
					message.reply(`File appended.`);
				});
			}
		}
		else if (args[0] == `potatofail`){
			if (args[1] == undefined){
				message.author.send(`https://github.com/Jaco909/potatobot/blob/master/data/potatoresponce.txt`);
			}
			else{
				fs.appendFile(`./data/potatoresponce.txt`, `\n${talk.join(" ")}`, (err) => {
					if (err) throw err;
					console.log('Potatofail append complete!');
					message.reply(`File appended.`);
				});
			}
		}
		else if (args[0] == `howis`){
			if (args[1] == undefined){
				message.author.send(`https://github.com/Jaco909/potatobot/blob/master/data/howis.txt`);
			}
			else{
				fs.appendFile(`./data/howis.txt`, `\n${talk.join(" ")}`, (err) => {
					if (err) throw err;
					console.log('Howis append complete!');
					message.reply(`File appended.`);
				});
			}
		}
		else if (args[0] == `yorick`){
			if (args[1] == undefined){
				message.author.send(`https://github.com/Jaco909/potatobot/blob/master/data/yorick.txt`);
			}
			fs.appendFile(`./data/yorick.txt`, `\n${talk.join(" ")}`, (err) => {
				if (err) throw err;
				console.log('Yorick append complete!');
				message.reply(`File appended.`);
			});
		}
	}
	else {
		console.log('Addpotato block!');
		message.delete({ timeout: 10})
		message.author.send(`You do not have access to this command.`);
	}
};