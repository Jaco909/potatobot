exports.servers = function (logaction, message, args) {
	logaction()
	console.log('Servers run!');
	if ((args.length && args[0] == 'usa') || (args.length && args[0] == 'america') || (args.length && args[0] == 'us') || (args.length && args[0] == 'murica') || (args.length && args[0] == 'guns'))
	{
		console.log('USA give!');
		message.channel.send(`https://potato.tf/servers/USA`);
	}
	else if ((args.length && args[0] == 'eu') || (args.length && args[0] == 'europe'))
	{
		console.log('EU give!');
		message.channel.send(`https://potato.tf/servers/EU`);
	}
	/* else if(args.length && args[0] == 'help')
	{
		console.log('servers help!');
		message.delete(10);
		message.author.send(`**Usage:** \`!server [region]\`\n\**Channels:** *#botato_cellar*, *#looking_for_players*.\n\**Description:** Retrives information about current Potato servers. You can also add \`USA\` for USA servers and \`EU\` for Europe servers.`);
	} */
	else
	{
		console.log('Servers generic!');
		message.channel.send(`https://potato.tf/servers`);
	}
};