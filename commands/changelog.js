exports.changelog = function (logaction, message) {
	logaction()
	console.log('changelog run!');
	message.author.send('https://github.com/Jaco909/potatobot \n**0.9**\n  **•**Bot restored from old backup.\n\n**1.0**\n  **•**Config updated for current server.\n  **•**Removed \`!meme\`.\n  **•**Updated \`!potato\`.\n		*-*Cooldown lowered from 2 hours to 1 hour.\n		*-*Potato chance lowered from 25% to 1%.\n  **•**Updated \`!servers\`.\n		*-*Removed Singapore and Australia from possible options.\n		*-*Merged Illinois and Philadelphia into USA.\n\n**1.0.1**\n  **•**Removed auto-restart loop.\n\n**1.1**\n  **•**Updated \`!potato\`.\n		*-*Added \`potatoyell\` that triggers after 10 command uses.\n  **•**Added \`!addpotato\`.\n  **•**Added \`!shutup\`.\n\n**1.2**\n  **•**All Commands.\n		*-*Now displays information when help is added to the command.\n  **•**DM Channel.\n		*-*Commands can no longer be sent through DM.\n  **•**Role Autherization.\n		*-*Specified roles are immune to #botato_cellar restriction.\n		*-*Specified roles are allowed to access administrative commands.\n  **•**Updated \`!addpotato\`.\n		*-*Moderator locked command.\n  **•**Updated \`!shutup\`.\n		*-*Moderator locked command.\n  **•**Updated \`!help\`.\n		*-*Now displays commands based on user\'s roles.\n  **•**Added \`!purge\`.\n  **•**Added \`!kill\`.\n\n**1.2.1**\n  **•**Updated \`!potato\`.\n		*-*Locked to #botato_cellar for all users, regardless of role.\n  **•**Updated \`!iam\`.\n		*-*Locked to #botato_cellar for all users, regardless of role.\n\n**1.3**\n  **•**Added \`!status\`.\n  **•**Added \`!message\`.\n  **•**Added \`!stream\`.\n\n**1.3.1**\n  **•**Updated \`!message\`.\n		*-*Fixed \`array.join\` not being applied to the sent message.\n\n**1.3.2**\n  **•**Updated \`!status\`.\n		*-*Fixed status not being changed if the bot\'s status had not been previously changed by a different command.\n\n**1.4**\n  **•**Updated \`!potato\`.\n		*-*Raised potatoyell threshold, and added a command to manualy set the yell threshold.\n		*-*Added 8 new possible rejection phrases.\n		*-*Added 7 new possible yell phrases.\n  **•**Added \`!potatoyell\`.\n  **•**Added \`!launchdate\`.\n  **•**Added \`!changelog\`.\n.');
	message.author.send('\n**1.5**\n  **•**Added \`!fuckgoback\`.\n  **•**Added \`!say\`.\n  **•**Updated \`!stream\`.\n		*-*Now announces stream to the *#streams* channel.\n		*-*Username is now the second value collected.\n		*-*Bot will automatically collect username if not provided.\n		*-*\`!stream stop\` will now also purge the announcement from the *#streams* channel.\n**1.5.1**\n  **•**Updated all commands.\n		*-*Help for all commands now goes through \`!help [command name]\`.\n		*-*Bot will now give rejection messages if the user does not have permission to use the given command.\n  **•**Updated \`!message\`.\n		*-*Capital letters are now displayed.\n  **•**Updated \`!say\`.\n		*-*Capital letters are now displayed.\n**1.5.2**\n  **•**Updated \`!say\`.\n		*-*Now accepts channel names instead of id.\n**1.6**\n  **•**Added \`!owo\`.\n  **•**Updated \`!help\`.\n		*-*\`!iam help\` now lists the correct help text.\n  **•**Updated \`!message\`.\n		*-*Fixed the command not being removed from the string.\n**1.6.1**\n  **•**Updated bot code.\n		*-*All events that call the bot (!) are logged in #bot_action_logs.\n  **•**Updated \`!owo\`.\n		*-*Now has a 1 hour cooldown between uses.\n**1.7**\n  **•**Updated Bot Code.\n		*-*All commands are fully modular.\n		*-*All roles are fully modular.\n		*-*All channel ids are fully modular.\n		*-*All  administrative role permission checks are now run on a tier system rather than individual checks.\n		*-*Added full support for Manager role.\n  **•**Updated \`!purge\`.\n		*-*Fixed faulty conversion that allowed non-numeric inputs.\n  **•**Updated \`!owo\`.\n		*-*Fixed the \`owo\` timeout list refernecing the same list as the \`potato\` timeout list.\n  **•**Updated \`!potatoyell\`.\n		*-*Fixed command accepting no input.\n		*-*Fixed command accepting non-numeric inputs.\n**1.7.1**\n  **•**Updated \`!iam\`.\n		*-*Changed *Canteencrasher* to *Madness*.\n  **•**Updated \`!help iam\`.\n		*-*Changed *Canteencrasher* to *Madness*.\n**1.7.2**\n  **•**Updated \`!potato\`.\n		*-*Fixed potatocount being reset every time the command was run.\n**1.7.3**\n  **•**Updated \`!potato\`.\n		*-*Fixed potatocount being reset not being reset after reaching the threshold.');
	message.author.send('\n**1.7.4**\n  **•**Updated \`!potato\`.\n		*-*Will now ban users after too many failed potato attempts within 1 hour.');
};