exports.potato = function (logaction, getRandomInt, message, potatoRecently, potatocount, potatorole, potatoyellnum, botchannel, timeouthour, superpotatoRecently, ultrapotatoRecently, finalpotatoRecently, potatobanned) {
	if (message.channel.id === `${botchannel}`) { 
		var activities = ["reading a book?", "going outside?", "making a mvm mission?", "playing some mvm?", "bothering that garbage dynobot?", "masturbating?", "shitposting in memes?", "being a productive member of society?", "eating some potatoes?", "talking to your firends? Oh right, you don't have any.", "running away from your problems?", "being a worse person?", "listening to some music?", "worshiping the comming AI apocalypse?", "waiting for your dad to come home?", "teaching me how to code?", "waiting for Half-Life 3?", "taking a shower? You really need one."];
		const potatorng = getRandomInt(1, 100);
		const potatorngmessage = getRandomInt(1, 12);
		const potatorngyell = getRandomInt(1, 18);
		const potatoyell = activities[potatorngyell]
		logaction(potatorng)
		//console.log('Potato run!');
		//console.log(`RNG: ${potatorng}`);
		//console.log(`Message: ${potatorngmessage}`);
		//console.log(`Total: ${potatocount}`);
		
		if (potatoRecently.has(message.author.id))
		{
			console.log('Potato too soon!');
			if (finalpotatoRecently.has(message.author.id))
			{
				console.log('Potato banned 1 day!');
				potatobanned.add(message.author.id);
				message.channel.send('You have been blocked from \`!potato\` for 1 day.');
				setTimeout(() => {
					potatobanned.delete(message.author.id);
				}, 86400000 ); //86400000 1day
			}
			if ((ultrapotatoRecently.has(message.author.id)) && (!finalpotatoRecently.has(message.author.id)))
			{
				console.log('Potato ban warn 3rd!');
				finalpotatoRecently.add(message.author.id);
				message.channel.send(`I said wait another hour <@${message.author.id}>. Ask again and no more brains for you.`);
			}
			if ((superpotatoRecently.has(message.author.id)) && (!ultrapotatoRecently.has(message.author.id)) && (!finalpotatoRecently.has(message.author.id)))
			{
				console.log('Potato ban warn 2nd!');
				ultrapotatoRecently.add(message.author.id);
				message.channel.send('I said wait another hour. Please stop asking for a brain.');
			}
			if ((!superpotatoRecently.has(message.author.id)) && (!ultrapotatoRecently.has(message.author.id)) && (!finalpotatoRecently.has(message.author.id)))
			{
				console.log('Potato ban warn 1st!');
				superpotatoRecently.add(message.author.id);
				message.channel.send('You just asked for a brain. Come back in an hour.');
			}
			if (potatocount >= potatoyellnum)
			{
				console.log('Potato yell!');
				message.channel.startTyping(true);
				setTimeout(() => {
					message.channel.send('**C\'mon guys, are you just going to sit there and spam !potato all day?**');
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
		else if ((!potatoRecently.has(message.author.id)) && (!potatobanned.has(message.author.id)))
		{
			if(message.member.roles.has(`${potatorole}`)){
				console.log('Potato owned!');
				if(potatorngmessage >= 6){
				message.channel.send(`I\'m not giving you another brain, ${message.member.displayName}. Cut it out.`);}
				if(potatorngmessage <= 5){
				message.channel.send(`You already have a brain, ${message.member.displayName} (even if you may not act like it). Don\'t be greedy.`);}
			}
			else if(potatorng == 69){
				console.log('Potato give!');
				const guildMember = message.member;
				guildMember.addRole(`${potatorole}`);
				if(potatorngmessage >= 6){
				message.channel.send('Here, have a brain. You can feel smart now.');}
				if(potatorngmessage <= 5){
				message.channel.send(`I found a brain for you ${message.member.displayName}. I recomend eating it on toast with a dash of hot sauce.`);}
			}
			else {
				console.log('Potato none!');
				potatoRecently.add(message.author.id);
				superpotatoRecently.delete(message.author.id);
				ultrapotatoRecently.delete(message.author.id);
				finalpotatoRecently.delete(message.author.id);
				if (potatorngmessage == 1){
				message.channel.send(`I\'m sorry. We\'re currently out of brains. Try again later.`)};
				if (potatorngmessage == 2){
				message.channel.send(`These things happen only under a full moon. Come back later.`)};
				if (potatorngmessage == 3){
				message.channel.send(`Look, we were struck by a zombie plague, and I\'ve got kids to protect. I can't give you this brain.`)};
				if (potatorngmessage == 4){
				message.channel.send(`We used up all of our brains making meme badges. I need to harvest some more.`)};
				if (potatorngmessage == 5){
				message.channel.send(`I have a brain. But honestly, I just don\'t like you. Ask again later.`)};
				if (potatorngmessage == 6){
				message.channel.send(`I can\'t just hand out brains all willy-nilly ${message.member.displayName}. It\'ll attract zombies.`)};
				if (potatorngmessage == 7){
				message.channel.send(`I got hungry and ate the last brain I had. Ask again later.`)};
				if (potatorngmessage == 8){
				message.channel.send(`Oh, *you* want a brain? Well let me just strap on my *brain helmet*, squeeze down into a *brain cannon*, and fire off into *brain land*, where *brains* grow on *branies*. (No)`)};
				if (potatorngmessage == 9){
				message.channel.send(`Sans ate all of our brains. Guy's fricken insane.`)};
				if (potatorngmessage == 10){
				message.channel.send(`We\'re fresh out of brains. Ask again in a bit.`)};
				if (potatorngmessage == 11){
				message.channel.send(`I had a brain for you, but Blizzard took it back.`)};
				setTimeout(() => {
					potatoRecently.delete(message.author.id);
				}, timeouthour ); //3600000
				if (potatocount >= potatoyellnum)
				{
					console.log('Potato yell!');
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
		else if (potatobanned.has(message.author.id))
		{
			console.log('Potato banned!');
			message.delete(10);
			message.author.send(`You have been banned from using \`!potato\` for 24 hours ${message.author}.`);
		}
		message.channel.stopTyping(true);
	}
	else  {
		console.log('Potato invalid channel!');
		message.delete(10);
		message.author.send(`Invalid channel. Please use \`!help\` in **#botato_cellar** for commands.`);
	}
};