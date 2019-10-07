exports.robot = function (logaction, message, args, entrancechannel, robotrole) {
	logaction()
	console.log('robot run!');
	message.delete(10);
	if (message.channel.id === `${entrancechannel}`) {
		if(message.member.roles.has(`${robotrole}`)){
			console.log('Robot present!');
		}
		else {
			console.log('Robot add!');
			message.member.addRole(`${robotrole}`);
			message.author.send(`Welcome to Potato's Custom MvM Servers. You now have access to all channels.`);
		}
	}
};