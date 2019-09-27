exports.potato = function (logaction, getRandomInt, message, potatoRecently, potatocount, potatorole, potatoyellnum, botchannel) {
	if (message.channel.id === `${botchannel}`) { 
		var activities = ["reading a book?", "going outside?", "making a mvm mission?", "playing some mvm?", "bothering that garbage dynobot?", "masturbating?", "shitposting in memes?", "being a productive member of society?", "eating some potatoes?", "talking to your firends? Oh right, you don't have any.", "running away from your problems?", "being a worse person?", "listening to some music?", "worshiping the comming AI apocalypse?", "waiting for your dad to come home?", "teaching me how to code?", "waiting for Half-Life 3?", "taking a shower? You really need one."];
		const potatorng = getRandomInt(1, 100);
		const potatorngmessage = getRandomInt(1, 11);
		const potatorngyell = getRandomInt(1, 18);
		const potatoyell = activities[potatorngyell]
		logaction(potatorng)
		console.log('Potato run!');
		console.log(`RNG: ${potatorng}`);
		console.log(`Message: ${potatorngmessage}`);
		console.log(`Total: ${potatocount}`);
		
		if (potatoRecently.has(message.author.id))
		{
			console.log('Potato banned!');
			message.channel.send('You just asked for a potato. Come back later.');
			if (potatocount >= potatoyellnum)
			{
				console.log('Potato yell!');
				console.log(`Message: ${potatorngyell}`);
				message.channel.startTyping(true);
				setTimeout(() => {
					message.channel.send('**C\'mon guys, are just going to sit there and spam !potato all day?**');
				}, 4000);
				setTimeout(() => {
					message.channel.send('**Aren\'t there more productive things you could be doing?**');
				}, 5000);
				setTimeout(() => {
					message.channel.send(`**Why not try ${potatoyell}**`);
					potatocount = 0
				}, 6000);
			}
		}
		else if (!potatoRecently.has(message.author.id))
		{
			if(message.member.roles.has(`${potatorole}`)){
				console.log('potato owned!');
				if(potatorngmessage >= 6){
				message.channel.send(`I\'m not giving you another potato, ${message.member.displayName}. Cut it out.`);}
				if(potatorngmessage <= 5){
				message.channel.send(`You already have a potato, ${message.member.displayName}. Don\'t be greedy.`);}
			}
			else if(potatorng == 69){
				console.log('potato give!');
				const guildMember = message.member;
				guildMember.addRole(`${potatorole}`);
				if(potatorngmessage >= 6){
				message.channel.send('Here, have a potato. Potatoes solve everything.');}
				if(potatorngmessage <= 5){
				message.channel.send(`I found a potato for you ${message.member.displayName}. Boil it, mash it, stick it in a stew; do whatever you want with it.`);}
			}
			else {
				console.log('potato none!');
				potatoRecently.add(message.author.id);
				if (potatorngmessage == 1){
				message.channel.send(`I\'m sorry. We\'re currently out of potatoes. Try again later.`)};
				if (potatorngmessage == 2){
				message.channel.send(`These things, they take time. Come back later.`)};
				if (potatorngmessage == 3){
				message.channel.send(`Look, we were struck by a potato famine, and I\'ve got kids to feed. I can't give you this potato.`)};
				if (potatorngmessage == 4){
				message.channel.send(`We used up all of our potatoes making meme badges. I need to grow some more.`)};
				if (potatorngmessage == 5){
				message.channel.send(`I have a potato. But honestly, I just don\'t like you. Ask again later.`)};
				if (potatorngmessage == 6){
				message.channel.send(`I can\'t just hand out potatoes all willy-nilly ${message.member.displayName}. It\'ll crash the potato economy.`)};
				if (potatorngmessage == 7){
				message.channel.send(`I got hungry and ate the last potato I had. And no, it wasn\'t cannibalism. I\'m a sweet potato.`)};
				if (potatorngmessage == 8){
				message.channel.send(`Oh, *you* want a potato. Well let me just strap on my *potato helmet*, squeeze down into a *potato cannon*, and fire off into *potato land*, where *potatoes* grow on *potatoies*. (No)`)};
				if (potatorngmessage == 9){
				message.channel.send(`Sans ate all the potatoes. I need to go out and buy some more.`)};
				if (potatorngmessage == 10){
				message.channel.send(`We\'re fresh out of potatoes. Ask again in a bit.`)};
				setTimeout(() => {
					potatoRecently.delete(message.author.id);
				}, 3600000 ); //3600000
				if (potatocount >= potatoyellnum)
				{
					console.log('potato yell!');
					message.channel.startTyping(true);
					setTimeout(() => {
						message.channel.send('**C\'mon guys, are just going to sit there and spam !potato all day?**');
					}, 2000);
					setTimeout(() => {
						message.channel.send('**Aren\'t there more productive things you could be doing?**');
					}, 3000);
					setTimeout(() => {
						message.channel.send(`**Why not try ${potatoyell}**`);
						potatocount = 0
					}, 4000);
				}
			}
		}
		message.channel.stopTyping(true);
	}
	else  {
		console.log('invalid channel!');
		message.delete(10);
		message.author.send(`Invalid channel. Please use \`!help\` in **#botato_cellar** for commands.`);
	}
};