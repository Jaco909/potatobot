exports.iam = function (logaction, message, args, botchannel, testersrole, canteencrasherrole, betarole, joinedRecently, robotrole, miscmvm) {
	logaction()
	//if (message.channel.id === `${botchannel}`) {
		if (args.length && args[0] == 'testers') {
			if(message.member.roles.cache.has(`${testersrole}`)){
				console.log('iam tester remove!');
				message.member.roles.remove(`${testersrole}`);
				message.author.send(`You have been removed from Tester notifications.`);
			}
			else {
				console.log('iam tester add!');
				message.member.roles.add(`${testersrole}`);
				message.author.send(`You now have the role Testers.`);
			}
		}
		/* else if((args.length && args[0] == 'digital') || (args.length && args[0] == 'Digital')) {
			if(message.member.roles.cache.has(`${canteencrasherrole}`)){
				console.log('iam titanium remove!');
				message.member.roles.remove(`${canteencrasherrole}`);
				message.author.send(`You have been removed from Digital Directive notifications.`);
			}
			else {
				console.log('iam titanium add!');
				message.member.roles.add(`${canteencrasherrole}`);
				message.author.send(`You will now recieve Digital Directive notifications.`);
			}
		} */
		else if((args.length && args[0] == 'digital') || (args.length && args[0] == 'Digital')) {
			if(message.member.roles.cache.has(`${canteencrasherrole}`)){
				console.log('iam titanium remove!');
				message.member.roles.remove(`${canteencrasherrole}`);
				message.author.send(`You have been removed from Digital Directive notifications.`);
			}
			else {
				console.log('iam titanium add!');
				message.member.roles.add(`${canteencrasherrole}`);
				message.author.send(`You will now recieve Digital Directive notifications.`);
			}
		}
		else if((args.length && args[0] == 'Misc') || (args.length && args[0] == 'misc')) {
			if(message.member.roles.cache.has(`${miscmvm}`)){
				console.log('iam misc remove!');
				message.member.roles.remove(`${miscmvm}`);
				message.author.send(`You have been removed from Miscellaneous MvM notifications.`);
			}
			else {
				console.log('iam misc add!');
				message.member.roles.add(`${miscmvm}`);
				message.author.send(`You now have the role for Miscellaneous MvM notifications.`);
			}
		}
		else if(args.length && args[0] == 'gay') {
			message.author.send(`You sir, you galaxy brain motherfucker, have created the best joke the world has ever been graced with. The human and potato race bows before your ability to make jokes that are the absolute pinicle of humor. Please, have mercy on us. We are but court jesters compaired to your might.`);
			console.log('iam gay!');
		}
		else if((args.length && args[0] == 'robots') || (args.length && args[0] == 'Robots') || (args.length && args[0] == 'robot') || (args.length && args[0] == 'Robot')) {
			if (!joinedRecently.has(message.member.user.tag)) {
				if(message.member.roles.cache.has(`${robotrole}`)){
					message.member.roles.remove(`${robotrole}`);
				}
				else {
					message.member.roles.add(`${robotrole}`);
				}
			}
			else {
				console.log('Robot too soon!');
				message.author.send(`Please wait a full 10 minutes before joining. This is done to help prevent spam/troll/bot accounts. The process should be automatic.`);
			}
		}
		else {
			message.delete({ timeout: 10})
			console.log('iam invalid!');
			message.author.send(`That is not a valid role. Valid roles include: \n\`!iam digital\` to assign the role @DigitalDirective.\n\`!iam Testers\` to assign the role @Testers.\n\`!iam misc\` to assign the role @MiscMvM.`);
		}
	//}
};