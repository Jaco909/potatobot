exports.iam = function (logaction, message, args, botchannel, testersrole, canteencrasherrole, betarole) {
	logaction()
	if (message.channel.id === `${botchannel}`) {
		if (args.length && args[0] == 'testers') {
			if(message.member.roles.cache.has(`${testersrole}`)){
				console.log('iam tester remove!');
				message.member.roles.remove(`${testersrole}`);
				message.author.send(`You have been removed from Testers.`);
			}
			else {
				console.log('iam tester add!');
				message.member.roles.add(`${testersrole}`);
				message.author.send(`You now have the role Testers.`);
			}
		}
		else if(args.length && args[0] == 'madness') {
			if(message.member.roles.cache.has(`${canteencrasherrole}`)){
				console.log('iam madness remove!');
				message.member.roles.remove(`${canteencrasherrole}`);
				message.author.send(`You have been removed from Madness.`);
			}
			else {
				console.log('iam madness add!');
				message.member.roles.add(`${canteencrasherrole}`);
				message.author.send(`You now have the role Madness.`);
			}
		}
		else if(args.length && args[0] == 'gay') {
			message.author.send(`You sir, you galaxy brain motherfucker, have created the best joke the world has ever been graced with. The human and potato race bows before your ability to make jokes that are the absolute pinicle of humor. Please, have mercy on us. We are but court jesters compaired to your might.`);
			console.log('iam gay!');
		}
		else {
			message.delete({ timeout: 10})
			console.log('iam invalid!');
			message.author.send(`That is not a valid role. Please use \`!help iam\` for available roles.`);
		}
	}
};