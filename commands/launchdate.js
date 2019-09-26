exports.launchdate = function (logaction, message, getRandomInt) {
	const launchdate = getRandomInt(1, 10);
	logaction(launchdate)
	console.log('Launchdate run!');
	console.log(`RNG: ${launchdate}`);
	if (launchdate == 1){
		message.channel.send(`MM will launch in this current month.`)};
	if (launchdate == 2){
		message.channel.send(`MM will launch in 982,000,000,000 shakes.`)};
	if (launchdate == 3){
		message.channel.send(`MM will launch in 0.4 TF2 updates.`)};
	if (launchdate == 4){
		message.channel.send(`MM will launch in 8262 moments.`)};
	if (launchdate == 5){
		message.channel.send(`MM will launch in 0.159 dog years.`)};
	if (launchdate == 6){
		message.channel.send(`MM will launch in 376.72 microcenturies.`)};
	if (launchdate == 7){
		message.channel.send(`MM will launch in 2,720,000 New York Seconds.`)};
	if (launchdate == 8){
		message.channel.send(`MM will launch in 930 ghurries.`)};
	if (launchdate == 9){
		message.channel.send(`MM will launch in \`date range not found\`.`)};
	if (launchdate == 10){
		message.channel.send(`MM will launch in a jiffy. Well, technically 390,000 jiffies.`)};
};