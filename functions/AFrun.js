exports.aprilfools = function (message, usertier, fs, guild, getRandomInt) {
	if (usertier >= 4){
		const guildMember = message.member;
		var userid = message.member.id;
		var name = guildMember.nickname;
		
		if (!fs.existsSync(`./af_data/${userid}.txt`)) {
			if (name != undefined){
				fs.writeFileSync(`./af_data/${userid}.txt`, `${name}`, (err) => {
					if (err) throw err;
					setTimeout(() => {
						fs.readFile(`./data/AF.txt`, (err, potatoname) => {
							potatoname = potatoname.toLocaleString();
							potatoname = potatoname.split("\n");
							potatonamecount = potatoname.length
							var potatonamerng = getRandomInt(1, potatonamecount);
							var potatonamerng2 = getRandomInt(3, 10);
							var potatoname = potatoname[potatonamerng];
							if (potatonamerng2 < 6){
								potatoname = potatoname + " Spud" + ` ${name}`;
								guildMember.setNickname(`${potatoname}`);
							}
							else if (potatonamerng2 >= 6){
								potatoname = potatoname + " Potato" + ` ${name}`;
								guildMember.setNickname(`${potatoname}`);
							}
						});
					}, 100 );
				});
			}
			else if (name == undefined){
				var name = guildMember.displayName;
				fs.writeFileSync(`./af_data/${userid}.txt`, `${name}`, (err) => {
					if (err) throw err;
				});
				setTimeout(() => {
					fs.readFile(`./data/AF.txt`, (err, potatoname) => {
						potatoname = potatoname.toLocaleString();
						potatoname = potatoname.split("\n");
						potatonamecount = potatoname.length
						var potatonamerng = getRandomInt(1, potatonamecount);
						var potatonamerng2 = getRandomInt(3, 10);
						var potatoname = potatoname[potatonamerng];
						if (potatonamerng2 < 6){
							potatoname = potatoname + " Spud" + ` ${name}`;
							guildMember.setNickname(`${potatoname}`);
						}
						else if (potatonamerng2 >= 6){
							potatoname = potatoname + " Potato" + ` ${name}`;
							guildMember.setNickname(`${potatoname}`);
						}
					});
				}, 100 );
			}
		}
	}
};