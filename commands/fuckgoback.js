exports.fuckgoback = function (logaction, message) {
	logaction()
	console.log('fuckgoback run!');
	message.author.send(`https://www.youtube.com/watch?v=39BIdOP0D6E`);
};