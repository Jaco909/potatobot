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
		else if(args.length && args[0] == 'canteencrasher') {
			if(message.member.roles.has(`${canteencrasherrole}`)){
				console.log('iam canteen remove!');
				message.member.removeRole(`${canteencrasherrole}`);
				message.author.send(`You have been removed from CanteenCrasher.`);
			}
			else {
				console.log('iam canteen add!');
				message.member.addRole(`${canteencrasherrole}`);
				message.author.send(`You now have the role CanteenCrasher.`);
			}
		}
		else if(args.length && args[0] == 'beta') {
			if(message.member.roles.has(`${betarole}`)){
				console.log('iam beta remove!');
				message.member.removeRole(`${betarole}`);
				message.author.send(`You have been removed from Beta Tester.`);
			}
			else {
				console.log('iam beta add!');
				message.member.addRole(`${betarole}`);
				message.author.send(`You now have the role Beta Tester.`);
			}
		}
		else {
			message.delete(10);
			console.log('iam invalid!');
			message.author.send(`That is not a valid role. Please use \`!iam help\` for available roles.`);
		}
	}
};