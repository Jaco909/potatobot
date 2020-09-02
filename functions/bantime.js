exports.bantime = function (guild, user, client, fs, warnchannel) {
	
	var date = new Date();
	var militime = date.getTime();
	user = user.toLocaleString().slice(2, -1);
	console.log(`${user} has been banned!`);

	if (user.startsWith('!')) {
		user = user.slice(1);
	}
	
	//banreact filter
	const filter = (reaction, user) => {
		return ['🚮'].includes(reaction.emoji.name);
	};
	
	//presets
	var warnnumber = 6;
	var tempwarnnumber = 6;
	var foundwarn = -1;
	var tempfoundwarn = -1;
	var newwarnnumber = 0;
	
	//find current warn amount if any
	do{
		warnnumber = (warnnumber - 1)
		if (fs.existsSync(`./warnings/${warnnumber}_${user}.txt`)){
			foundwarn = warnnumber
		}
	}
	while (warnnumber >= 1)
	
	//if warns are found, set the var warnnumber
	if (foundwarn != -1) {
		warnnumber = foundwarn
	}
	
	//find current temp warn amount if any
	do{
		tempwarnnumber = (tempwarnnumber - 1)
		if (fs.existsSync(`./temp_warnings/${tempwarnnumber}t_${user}.txt`)){
			tempfoundwarn = tempwarnnumber
		}
	}
	while (tempwarnnumber >= 1)
	
	//if warns are found, set the var warnnumber
	if (tempfoundwarn != -1) {
		tempwarnnumber = tempfoundwarn
	}
	var totalwarns = (warnnumber + tempwarnnumber);
	console.log(`Total Warns: ${totalwarns}`);
	
	//find warn #, set time
	if (totalwarns == 3) {
		var week1ban = (militime + 604800000);
		fs.writeFileSync(`./ban_dates/${week1ban}.txt`, `${user}`, (err) => {
			if (err) throw err;
		});
		if (fs.existsSync(`./data/userdata/idnames/${user}.txt`)) {
			fs.readFile(`./data/userdata/idnames/${user}.txt`, (err, username) => {
				username = username.toLocaleString();
				guild.channels.cache.get(`${warnchannel}`).send({embed: {
					color: 16711680,
					title: "Ban Issued",
					description: `Issued from ${totalwarns} warns`,
					fields: [{
						name: "Logged Username",
						value: `${username}`
					  },
					  {
						name: "Userid",
						value: `${user}`
					  },
					  {
						name: "Duration",
						value: `1 Week`
					  },
					  {
						name: "Notice",
						value: `To make this ban permanent, react with 🚮 within 10 minutes.`
					  }
					],
					timestamp: new Date(),
				}}).then(sentMessage => {
					sentMessage.react('🗑️')
					sentMessage.awaitReactions(filter, { max: 1, time: 600000, errors: ['time'] })
					.then(collected => {
						const reaction = collected.first();

						if (reaction.emoji.name === '🚮') {
							fs.unlink(`./ban_dates/${week1ban}.txt`, (err) => {
								if (err) throw err;
							});
							guild.channels.cache.get(`${warnchannel}`).send({embed: {
								color: 16711680,
								title: "User has been purged from unban list.",
								timestamp: new Date(),
							}});
						}
					});
				});
			});
		}
	}
	else if (totalwarns == 4) {
		var week2ban = (militime + 1209600000);
		fs.writeFileSync(`./ban_dates/${week2ban}.txt`, `${user}`, (err) => {
			if (err) throw err;
		});
		if (fs.existsSync(`./data/userdata/idnames/${user}.txt`)) {
			fs.readFile(`./data/userdata/idnames/${user}.txt`, (err, username) => {
				username = username.toLocaleString();
				guild.channels.cache.get(`${warnchannel}`).send({embed: {
					color: 16711680,
					title: "Ban Issued",
					description: `Issued from ${totalwarns} warns`,
					fields: [{
						name: "Logged Username",
						value: `${username}`
					  },
					  {
						name: "Userid",
						value: `${user}`
					  },
					  {
						name: "Duration",
						value: `2 Weeks`
					  },
					  {
						name: "Notice",
						value: `To make this ban permanent, react with 🚮 within 10 minutes.`
					  }
					],
					timestamp: new Date(),
				}}).then(sentMessage => {
					sentMessage.react('🗑️')
					sentMessage.awaitReactions(filter, { max: 1, time: 600000, errors: ['time'] })
					.then(collected => {
						const reaction = collected.first();

						if (reaction.emoji.name === '🚮') {
							fs.unlink(`./ban_dates/${week2ban}.txt`, (err) => {
								if (err) throw err;
							});
							guild.channels.cache.get(`${warnchannel}`).send({embed: {
								color: 16711680,
								title: "User has been purged from unban list.",
								timestamp: new Date(),
							}});
						}
					});
				});
			});
		}
	}
	else if (totalwarns == 5) {
		if (fs.existsSync(`./data/userdata/idnames/${user}.txt`)) {
			fs.readFile(`./data/userdata/idnames/${user}.txt`, (err, username) => {
				username = username.toLocaleString();
				guild.channels.cache.get(`${warnchannel}`).send({embed: {
					color: 16711680,
					title: "Ban Issued",
					description: `Issued from ${totalwarns} warns`,
					fields: [{
						name: "Logged Username",
						value: `${username}`
					  },
					  {
						name: "Userid",
						value: `${user}`
					  },
					  {
						name: "Duration",
						value: `Permenant`
					  },
					],
					timestamp: new Date(),
				}});
			});
		}
	}
	else {
		if (fs.existsSync(`./data/userdata/idnames/${user}.txt`)) {
			fs.readFile(`./data/userdata/idnames/${user}.txt`, (err, username) => {
				username = username.toLocaleString();
				guild.channels.cache.get(`${warnchannel}`).send({embed: {
					color: 16711680,
					title: "Ban Issued",
					description: `Issued by admin`,
					fields: [{
						name: "Logged Username",
						value: `${username}`
					  },
					  {
						name: "Userid",
						value: `${user}`
					  },
					  {
						name: "Duration",
						value: `Permenant`
					  },
					],
					timestamp: new Date(),
				}});
			});
		}
		else if (!fs.existsSync(`./data/userdata/idnames/${user}.txt`)) {
			guild.channels.cache.get(`${warnchannel}`).send({embed: {
				color: 16711680,
				title: "Ban Issued",
				description: `Issued by admin`,
				fields: [{
					name: "Logged Username",
					value: `N/A`
				  },
				  {
					name: "Userid",
					value: `${user}`
				  },
				  {
					name: "Duration",
					value: `Permenant`
				  },
				],
				timestamp: new Date(),
			}});
		}
	}
};