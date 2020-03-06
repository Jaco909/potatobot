exports.shutup = function (message) {
	message.channel.stopTyping(true);
};