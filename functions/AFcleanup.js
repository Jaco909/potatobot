exports.aprilfoolsreset = function (fs, guild, client, logaction) {
	fs.readdir(`./af_data`, function(err, filenames) {
		if (err) {
		  console.log(err);
		  return;
		}
		fs.unlink(`./data/count.txt`, (err) => {});
		fs.writeFileSync(`./data/count.txt`, ``, (err) => {});
		var success = 0;
		var fails = 0;
		filecount = filenames.length
		filenames.forEach(restorename);
		
		function restorename(useridfile){
			userid = useridfile.slice(0,-4);
			member = guild.member(userid);
			if (member != null){
				guild.members.fetch(userid);
				const user = guild.member(userid);
				if (user != null){
					if (fs.existsSync(`./af_data/${userid}.txt`)) {
						fs.readFile(`./af_data/${userid}.txt`, (err, username) => {
							user.setNickname(`${username}`);
							fs.appendFileSync(`./data/count.txt`, `1`, (err) => {
								if (err) throw err;
							});
							/* fs.unlink(`./af_data/${userid}.txt`, (err) => {
								if (err) throw err;
							}); */
						});
					}
					else{
						console.log(`Missing file for user ${userid}`);
					}
				}
				else{
					console.log(`${userid} does not exist in guild`);
				}
			}
			else{
				console.log(`${userid} does not exist in guild`);
			}
		}
		
		setTimeout(() => {
			fs.readFile(`./data/count.txt`, (err, count) => {
				success = count.toLocaleString().length;
				fails = filecount - success
				console.log(`Processed ${filecount} files. ${success} finished. ${fails} failures.`);
				logaction(filecount, success, fails);
			});
		}, 60000 ); //60000
	});
};