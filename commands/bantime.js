exports.bantime = function (guild, user, client, fs, warnchannel) {
	console.log(`${user} has been banned!`);
	var date = new Date();
	var militime = date.getTime();
	
	//find warn #, set time
	if (fs.existsSync(`./warnings/3_${user.id}.txt`)) {
		var week1ban = (militime + 604800000);
		fs.writeFileSync(`./ban_dates/${week1ban}.txt`, `${user.id}`, (err) => {
			if (err) throw err;
		});
	}
	else if (fs.existsSync(`./warnings/4_${user.id}.txt`)) {
		var week2ban = (militime + 1209600000);
		fs.writeFileSync(`./ban_dates/${week2ban}.txt`, `${user.id}`, (err) => {
			if (err) throw err;
		});
	}
	
	//log message
	client.channels.get(`${warnchannel}`).send({embed: {
		color: 16711680,
		title: "Ban Issued",
		description: `Banned User: ${user}`,
		timestamp: new Date(),
	  }
	});
};