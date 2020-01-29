exports.music = function (logaction, command, message, usertier, args, messageChannel, fs, getUserFromMention, talk, client, potatorole, m3u8stream, parseTime, ytdl, Discord, musicplayer) {
	logaction()
	
	/* const Player = new musicplayer.Player(client) // client is a discord.js client object
	const voicechannel = message.member.voiceChannel;
	// play a song from youtube and leave the voice channel when it ends
	Player.play("https://youtube.com/watch?v=s0m3vid1D", voicechannel) // voicechannel is a discord.js VoiceChannel object
	.then(dispatcher => {
	  dispatcher.on('end', r => {
		vc.leave()
	  })
	})
	.catch(err => {
	  console.error(err)
	}) */

	return new Promise((resolve, reject) => {
        if (args.length !== 1) {
            message.channel.send("Play command takes 1 YouTube link.");
            reject("Wrong number of arguments");
            return;
        }
        const voiceChannel = message.member.voiceChannel;
        if(!voiceChannel) {
            message.channel.send("You need to connect to a voice channel first");
            reject("Not connected to voice channel");
            return;
        }
        const perms = voiceChannel.permissionsFor(message.client.user);
        if (!perms.has("CONNECT")) {
            message.channel.send("You need to add the 'connect' permission for this bot");
            reject("NO CONNECT PERMISSION");
            return;
        }
        if (!perms.has("SPEAK")) {
            message.channel.send("You need to add the 'speak' permission for this bot");
            reject("NO SPEAK PERMISSION");
            return;
        }
        const streamOptions = { seek: 0, volume: 1, passes: 2 };
        voiceChannel.join()
            .then(connection => {
                const stream = ytdl(args[0], {filter: 'audioonly'});
				const dispatcher = connection.playStream(stream, streamOptions);
                dispatcher.on("end", reason => {
                    console.log("reason: " + reason);
                    voiceChannel.leave();
                })
                dispatcher.on("error", err => {
                    console.log(err);
                })
            })
        .catch(err => console.log(err));
    });
};