exports.iam = function (logaction, message, args, botchannel, testersrole, canteencrasherrole, betarole) {
	logaction()
	console.log('iam run!');
	if (message.channel.id === `${botchannel}`) {
		if (args.length && args[0] == 'testers') {
			if(message.member.roles.has(`${testersrole}`)){
				console.log('iam tester remove!');
				message.member.removeRole(`${testersrole}`);
				message.author.send(`You have been removed from Testers.`);
			}
			else {
				console.log('iam tester add!');
				message.member.addRole(`${testersrole}`);
				message.author.send(`You now have the role Testers.`);
			}
		}
		else if(args.length && args[0] == 'madness') {
			if(message.member.roles.has(`${canteencrasherrole}`)){
				console.log('iam madness remove!');
				message.member.removeRole(`${canteencrasherrole}`);
				message.author.send(`You have been removed from Madness.`);
			}
			else {
				console.log('iam madness add!');
				message.member.addRole(`${canteencrasherrole}`);
				message.author.send(`You now have the role Madness.`);
			}
		}
		else {
			message.delete(10);
			console.log('iam invalid!');
			message.author.send(`That is not a valid role. Please use \`!iam help\` for available roles.`);
		}
	}
};