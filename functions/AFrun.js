exports.aprilfools = function (message, usertier, fs, guild, getRandomInt) {
	if (usertier >= 5){
		const guildMember = message.member;
		var userid = message.member.id;
		var name = guildMember.nickname;
		
		if (!fs.existsSync(`./af_data/${userid}.txt`)) {
			if (name != undefined){
				fs.writeFileSync(`./af_data/${userid}.txt`, `${name}`, (err) => {});
				setTimeout(() => {
					fs.readFile(`./data/AF1.txt`, (err, potato1) => {
						fs.readFile(`./data/AF2.txt`, (err, potato2) => {
							fs.readFile(`./data/AF3.txt`, (err, potato3) => {
								potato1 = potato1.toLocaleString();
								potato2 = potato2.toLocaleString();
								potato3 = potato3.toLocaleString();
								potato1 = potato1.split("\n");
								potato2 = potato2.split("\n");
								potato3 = potato3.split("\n");
								potato1count = potato1.length
								potato2count = potato2.length
								potato3count = potato3.length
								var potato1rng = getRandomInt(1, potato1count);
								var potato2rng = getRandomInt(1, potato2count);
								var potato3rng = getRandomInt(1, potato3count);
								var potatoname1 = potato1[potato1rng];
								var potatoname2 = potato2[potato2rng];
								var potatoname3 = potato3[potato3rng];
								potatoname = potatoname1 + ` ${potatoname2}` + ` ${potatoname3}`;
								do{
									var potatoname1 = potato1[potato1rng];
									var potatoname2 = potato2[potato2rng];
									var potatoname3 = potato3[potato3rng];
									potatoname = potatoname1 + ` ${potatoname2}` + ` ${potatoname3}`;
								}
								while (potatoname > 32)
								guildMember.setNickname(`${potatoname}`);
								//guildMember.setNickname(`${name}͔`);
							});
						});
					});
				}, 100 );
			}
			else if (name == undefined){
				var name = guildMember.displayName;
				fs.writeFileSync(`./af_data/${userid}.txt`, `${name}`, (err) => {
					if (err) throw err;
				});
				setTimeout(() => {
					fs.readFile(`./data/AF1.txt`, (err, potato1) => {
						fs.readFile(`./data/AF2.txt`, (err, potato2) => {
							fs.readFile(`./data/AF3.txt`, (err, potato3) => {
								potato1 = potato1.toLocaleString();
								potato2 = potato2.toLocaleString();
								potato3 = potato3.toLocaleString();
								potato1 = potato1.split("\n");
								potato2 = potato2.split("\n");
								potato3 = potato3.split("\n");
								potato1count = potato1.length
								potato2count = potato2.length
								potato3count = potato3.length
								var potato1rng = getRandomInt(1, potato1count);
								var potato2rng = getRandomInt(1, potato2count);
								var potato3rng = getRandomInt(1, potato3count);
								var potatoname1 = potato1[potato1rng];
								var potatoname2 = potato2[potato2rng];
								var potatoname3 = potato3[potato3rng];
								do{
									var potatoname1 = potato1[potato1rng];
									var potatoname2 = potato2[potato2rng];
									var potatoname3 = potato3[potato3rng];
									potatoname = potatoname1 + ` ${potatoname2}` + ` ${potatoname3}`;
								}
								while (potatoname > 32)
								guildMember.setNickname(`${potatoname}`);
								//guildMember.setNickname(`${name}͔`);
							});
						});
					});
				}, 100 );
			}
		}
	}
};