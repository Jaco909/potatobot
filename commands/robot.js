exports.robot = function (logaction, message, args, entrancechannel, robotrole, joinedRecently, member) {
	logaction()
	console.log('robot run!');
	message.delete(10);
	if (message.channel.id === `${entrancechannel}`) {
		console.log(`${message.member.user.tag}`)
		if (!joinedRecently.has(message.member.user.tag)) {
			if(message.member.roles.has(`${robotrole}`)){
				console.log('Robot present!');
			}
			else {
				console.log('Robot add!');
				message.member.addRole(`${robotrole}`);
				message.author.send(`Welcome to Potato's Custom MvM Servers. You now have access to all channels.`);
			}
		}
		else {
			console.log('Robot too soon!');
			message.author.send(`Please wait a full 10 minutes before joining. This is done to help prevent spam/troll/bot accounts.`);
		}
	}
};