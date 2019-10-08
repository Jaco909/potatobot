exports.servers = function (logaction, message, args) {
	logaction()
	if ((args.length && args[0] == 'phl') || (args.length && args[0] == 'philly') || (args.length && args[0] == 'hydrogen') || (args.length && args[0] == 'hydro') || (args.length && args[0] == 'philadelphia') || (args.length && args[0] == 'trees') || ((args.length && args[0] == 'east') && (args.length && args[1] == 'coast'))) {
		console.log('Servers PHL!');
		message.channel.send(`https://potato.tf/servers/PHL/all`);
	}
	else if ((args.length && args[0] == 'tx') || (args.length && args[0] == 'texas') || (args.length && args[0] == 'guns') || (args.length && args[0] == 'wall'))
	{
		console.log('Servers TX!');
		message.channel.send(`https://potato.tf/servers/TX/all`);
	}
	else if ((args.length && args[0] == 'mia') || (args.length && args[0] == 'miami') || (args.length && args[0] == 'florida'))
	{
		console.log('Servers MIA!');
		message.channel.send(`https://potato.tf/servers/MIA/all`);
	}
	else if ((args.length && args[0] == 'jp') || (args.length && args[0] == 'japan') || (args.length && args[0] == 'asia') || (args.length && args[0] == 'weeb') || (args.length && args[0] == 'weebs') || (args.length && args[0] == 'anime'))
	{
		console.log('Servers JP!');
		message.channel.send(`https://potato.tf/servers/JP/all`);
	}
	else if ((args.length && args[0] == 'eu') || (args.length && args[0] == 'europe'))
	{
		console.log('Servers EU!');
		message.channel.send(`https://potato.tf/servers/EU/all`);
	}
	else if ((args.length && args[0] == 'au') || (args.length && args[0] == 'australia') || (args.length && args[0] == 'bushland') || (args.length && args[0] == 'hell') || ((args.length && args[0] == 'down') && (args.length && args[1] == 'under'))) {
		console.log('Servers AU!');
		message.channel.send(`https://potato.tf/servers/AU/all`);
	}
	else if ((args.length && args[0] == 'sgp') || (args.length && args[0] == 'singapore')) {
		console.log('Servers SGP!');
		message.channel.send(`https://potato.tf/servers/SGP/all`);
	}
	else
	{
		console.log('Servers generic!');
		message.channel.send(`https://potato.tf/servers`);
	}
};