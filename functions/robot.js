exports.robotcheck = function (fs, client, robotrole, message) {
	var date = new Date();
	var militime = date.getTime();
	
	fs.readdir(`./data/robot`, function(err, filenames) {
		if (err) {
		  onError(err);
		  return;
		}
		filenames.forEach(checktime);
		
		function checktime(item){
			filetime = item.slice(0,-4);
			releasetime = +filetime + 600000;
			if ( +releasetime <= militime){
				if (fs.existsSync(`./data/robot/${filetime}.txt`)) {
					fs.readFile(`./data/robot/${filetime}.txt`, (err, userid) => {
						//var guildmember = client.users.fetch(userid);
						var guildmember = message.guild.member(userid);
						//const userid = client.users.cache.get(userids);
						//var guildmember = message.guild.members.user.cache.get(userid);
						//console.log(`${guildmember}`);
						//console.log(`${banmember}`);
						//console.log(`${guildmember.roles.cache}`);
						/* if (!guildmember.roles.some(role => role.name === 'Robot')) {
							console.log(`added robot`);
							guildmember.roles.add(`${robotrole}`);
						}
						else {
							console.log(`wackaroni`);
							fs.unlink(`./data/robot/${filetime}.txt`, (err) => {
								if (err) throw err;
							});
						} */
					});
				}
			}
		}
	});
};