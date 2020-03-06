exports.messageChannel = function (mention, talk, guild) {
	if (!mention) return;
	
	if (mention.startsWith('<#') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);
		var channelid = mention
		talk.shift();
		talk.shift().toString();
		return guild.channels.cache.get(`${channelid}`).send(talk.join(" "));
	}
};