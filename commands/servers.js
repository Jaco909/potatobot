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
	else if ((args.length && args[0] == 'eu') || (args.length && args[0] == 'europe'))
	{
		console.log('Servers EU!');
		message.channel.send(`https://potato.tf/servers/EU/all`);
	}
	else
	{
		console.log('Servers generic!');
		message.channel.send(`https://potato.tf/servers`);
	}
};