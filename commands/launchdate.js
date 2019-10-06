exports.launchdate = function (logaction, message, getRandomInt) {
	//const launchdate = getRandomInt(1, 10);
	logaction()
	console.log('Launchdate run!');
	//console.log(`RNG: ${launchdate}`);
	message.channel.send(`We live yo.`);
};