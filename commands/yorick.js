exports.yorick = function (logaction, message, args, getRandomInt, yorickrng, yorickRecently, botchannel, timeout5min, args, potatorole, usertier, guild, client) {
	if (message.member.roles.has(`${potatorole}`) || (usertier <= 99))
	{
		if (!yorickRecently.has(message.author.id)){
			var responces = ["History truly does work in cycles.", "I am going to stare at a mirror for hours and wonder how do you function in life.", "Fuck it you all get an F.", `Shut up and stop disrupting my class, ${message.member.displayName}.`, "Wanna back up those big words of yours?", "But know this, you all suck eggs.", "Reading your posts if off putting enough.", "I believe in collective punishment so if someone screws up, everyone pays the price.", "You're all getting detention.", "And now we wait for lady capslock to return and confirm your answer.", "That's the worst submission we've ever had, even with that isolation mission which crashed everyone's game when w1 starts.", "It's still not the worst submission we ever had.", "It's probably in the sun itself.", "You could also start hitting the gym and become fucking ripped.", "https://youtu.be/89ZfbX4Rdzw", "You've just decided at some point that it's a bad idea and are now trying to rationalize it to yourself.", "Butterflies cause hurricanes like closing your eyes causes the world to vanish.", "The noise of badpipes shines through you.", "Makes sense since I am a joke.", "I am the radiant morning star, which lights the way for the sons of man.", "I'll be honest, this is a weird time to bring up having aspergers.", "Please never make missions for my maps again.", "Fortnite dancing is only allowed to be posted if you film yourself doing it.", "I'm trying to get money for the CC servers, but hoxton keeps going into jail and we need to break him out like once every three days or so.", "Real men take a picture of this chat and tape them to a wall.", "Is this the old definition of gay?", "I suggest you seek guidance from your nearest crystal ball.", "Lesson learned: don't do anything interro tells you to do.", "There will be no unauthorized emotional bursts.", "My missions don't have poor design you just suck.", "vörljeböle", "Thank you for interrupting me to make such an important post", "Real gamers speak in morse code only.", "The answer's there in front of you and you just ignore it because it's not being spoonfed to you.", "Imagine having your question answered before you even think it.", "Making the mother of all omelettes here, birb can't fret over every hatch.", "I can write some smartass quips and I don't have to explain that I'm being a smartass.", "If a microwave can write missions, what's your excuse?", "Piss at them and kill them via radiation poisoning.", "I'm sorry sir but I must've left it in my other ribcage.", "Take your best shot, flatlander woman.", "Titanium tiddies.", "Then become a wizard and use your arcanum to magic it into existence.", "You don't know what you ask, playtester. because my missions are too *s t r o n g*.", "The one thing stopping you is getting called a cunt.", "You know it's a successful test when something breaks horribly.", "I'll even throw you a name suggestion for shits and giggles. Rothendämmerung.", "Well we all knew mince was a fat fuck.", "Is using your own face as a discord avatar narcissistic?", "We're going to break this mission like a newborn baby.", "Your only mistake is trying to get anywhere with this topic while talking with interro.", "I can speak from personal experience but that doesn't make what I say credible.", "I have found a new way to fuck with god.", "You say that but I've definitely been on judging runs while drunk as hell.", "I think we should gather data about wasting time.", "So instead I'm going to harass you here and leave a snarky comment about ruining your day.", "Not trying to boast but everyone fears me.", "Get a gym membership.", "The above zip has been uploaded to the ancient homosexual.", "I am millennial masterrace.", "Doom and gta are turning everyone into murderous satanists.", "We'd have to delete interrobang too, that would be too much collateral damage.", "Blessed baguetter.", "My avatar scares them away.", "Somehow it's not surprising to me that the pepe avatar weeb has stupid opinions like that.", "I remember showing up to testing/judging while drunk once. It was the most authentic demoman I've ever played.", "Should've read the rules, Nuke. Now you're getting kicked.", "You have begun to dabble in life and already see the futility of your actions", "I will make a note for the next time interro gets a bright idea.", "I will immediately say no to it because *snitter*.", "I can guarantee you that most of yorick is from me.", "Go back to the meme channel you poof.", "I'm just going to finish what's left of my whiskey and watch stupid shit.", "Mann Co hates this!!! Local man unlocks all potato.tf medals using this weird trick...", "@Nuke we actually talked about your quetzal mission earlier but glad to know we can pretend it never happened.", "Europe is weak. Save us glorious americans.", "The best piece of fb Ive ever gotten was that one of my maps looked like a gmod rp map.", "Which woke up first, your ass or the rest of you?", "What kinda business have you guys been doing on radar to produce a **300** mb demo?", "Herp and Nuke acting like weird furries that wanna fuck everyone.", "Don't be nuke, leave some written fb.", "I don't remember the context for half of these quotes.", "I'm doing the badpipes in the void, and nobody can stop me.", "I don't know what to say about becoming a quote dispenser.", "Say marco polo and wait for someone to start whining about how you're not doing it right.", "Collaborating with yourself is the way of the future.", "Are you saying you wouldn't be intimidated by a trash fairy.", " Much like you can't keep them alive when their poor choices catch up to them.", "Then we had that moment on teien where the train was blocked by seelpit's massive bust.", "Send me the bees.", "First we establish that interro has never worn pants, and now we find out that he threatened jaka with his gun.", "The 38% gang rides no more.", "Everything can spin when you can do anything.", "Heavy has ammo problems? Heavy straps a fucking dispenser to his back.", "You played skyrim earlier you fucking weapon.", "owo", "My mama told me not to listen to lunatics.", "I only smoke KFC, thank you very much.", "Having to give my respective prayers to all of them is easily going to take half a day.", "The one thing that has been consistent through-out the campaign is you being an idiot.", `"Oh dear," says God, "I hadn't thought of that," and promptly vanishes in a puff of logic.`, "Everyone has a plan until they see five fucking tanks", "To make youtube better, youtube should ban itself.", "The weebs shall curse you for going against their way, and place a heavy burden of atonement on your shoulders, which you shall bear for all eternity. But they are mistaken if they believe this to be a punishment. No, this is the path you must follow. For even greater power lies at the end of the road you have been set toward.", "With your rejection of weeaboos, a new power awakens within you.", `Alternatively, "my mama told me to not trust people with anime avatars".`, "It was actually a production error, the swastika wasn't supposed to be angled.", "Gods are meant to be defied. The enbodiment of arrogance, demanding the masses to bend the knee yet unwilling to reveal themselves.", `Map making has a whole bunch of steps to it, the first being "what the fuck is Hammer?".`, "And then they fortnite danced in the suicide forest.", "I don't even know what are you trying to say but I'll just pretend it's correct.", "Pepsi had the 6th largest military at one point."];
			const yorickrng = getRandomInt(1, 112);
			const yorickmessage = responces[yorickrng]
			logaction(yorickrng)
			console.log('Yorick run!');
			yorickRecently.add(message.author.id);
			if (args == `hydrogen`){ //I can't be arsed to remove this.
				message.channel.send(`https://cdn.discordapp.com/attachments/587862013779378186/649350879144837152/hydroangery.jpg`);
			}
			else {
				const sntrid = '350339403677302785';
				client.fetchUser(sntrid);
				const sntr = client.users.get(sntrid);
				message.channel.send({embed: {
					color: 9647333,
					author: {
					  name: `Sntr`,
					  icon_url: `${sntr.displayAvatarURL}`
					},
					title: "Wise words from Sntr",
					description: `${yorickmessage}`,
					/* footer: {
					  text: ":yorick:"
					} */
					}
				});
			}
			setTimeout(() => {
				yorickRecently.delete(message.author.id);
			}, timeout5min ); //300000
		}
		else {
			message.delete(10);
			message.author.send(`Please wait 5 minutes before using this again.`);
		}
	}
	else {
		console.log('Yorick block!');
		message.delete(10);
		message.author.send(`You are not enough of a potato to access this command.`);
	}
};