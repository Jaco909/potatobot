exports.changelog = function (logaction, message) {
	logaction()
	console.log('changelog run!');
	message.author.send('https://github.com/Jaco909/potatobot/blob/master/changelog.txt');
};