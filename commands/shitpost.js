exports.shitpost = function (logaction, getRandomInt, message, shitRecently, fs) {
	if (shitRecently.has(message.author.id)) {
		console.log('Shitpost banned!');
		message.delete({ timeout: 10});
		message.author.send("Please wait a minute for another shitpost.");
		return;
	}
	else if (!shitRecently.has(message.author.id)){
		console.log('Shitpost give!');
		
		shitRecently.add(message.author.id);
		setTimeout(() => {
			shitRecently.delete(message.author.id);
		}, 60000);
		fs.readFile(`./data/shitposts.txt`, (err, shitpost) => {
			shitpost = shitpost.toLocaleString();
			shitpost = shitpost.split("\n")
			shitpostcount = shitpost.length
			const shitrng = getRandomInt(1, shitpostcount);
			logaction(shitrng)
			message.author.send(shitpost[shitrng]);
		});
	}
};