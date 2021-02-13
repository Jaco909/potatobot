exports.autojoin = function (logaction, message, args, entrancechannel, robotrole, joinedRecently, member, autojoinstate) {
	logaction()
	message.delete({ timeout: 10});
	console.log(`${message.member.user.tag}`)
	if (!joinedRecently.has(message.member.user.tag)) {
		if(message.member.roles.cache.has(`${robotrole}`)){
			console.log('Robot error present!');
		}
		else {
			console.log('Robot add!');
			message.member.roles.add(`${robotrole}`);
		}
	}
	else {
		console.log('Robot too soon!');
		message.author.send(`Please wait a full 10 minutes before joining. This is done to help prevent spam/troll/bot accounts. The process should be automatic.`);
	}
};