exports.furtrim = function (message, prefix, getRandomInt) {
	const oworng = getRandomInt(1, 6);
	let talk = (message.content.toLocaleString().slice(prefix.length).split(' ').join(" "));
	if (oworng <= 4){
		let furtalk = (talk.slice(4).toString().replace(/l/gi, "w").replace(/r/gi, "w").replace(/i/gi, "ei").replace(/ww/gi, "w"));
		return message.channel.send(`${furtalk}`);
	}
	else if (oworng >= 5){
		let furtalk = ((talk.slice(4).toString().replace(/l/gi, "w").replace(/r/gi, "w").replace(/i/gi, "ei").replace(/a/gi, "wa").replace(/ww/gi, "w")) + " OwO");
		return message.channel.send(`${furtalk}`);
	}
};