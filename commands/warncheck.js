exports.warncheck = function (fs, client, militime, date, warnchannel, guild) {
	
	//warn checks
	fs.readdir(`./temp_dates`, function(err, filenames) {
		if (err) {
		  onError(err);
		  return;
		}
		filenames.forEach(checktime);
		
		function checktime(item){
			filetime = item.slice(0,-4);
			//console.log(filetime);
			releasetime = +filetime + 8035200000;
			//console.log(releasetime);
			if (+releasetime < militime){
				console.log(`Expired warn!`);
				if (fs.existsSync(`./temp_dates/${filetime}.txt`)) {
					console.log(`Date file exists!`)
					fs.readFile(`./temp_dates/${filetime}.txt`, (err, userid) => {
						if (fs.existsSync(`./temp_warnings/1t_${userid}.txt`)) {
							user = ('<@' + `${userid}` + '>');
							fs.unlink(`./temp_warnings/1t_${userid}.txt`, (err) => {
								if (err) throw err;
								console.log(`1t_${userid}.txt was deleted`);
								client.channels.get(`${warnchannel}`).send({embed: {
									color: 3174889,
									title: "1 Temporary Warning Removed",
									description: `User: ${user}`,
									timestamp: new Date(),
								  }
								});
							});
							fs.unlink(`./temp_dates/${filetime}.txt`, (err) => {
								if (err) throw err;
							});
						}
						else if (fs.existsSync(`./temp_warnings/2t_${userid}.txt`)) {
							user = ('<@' + `${userid}` + '>');
							fs.unlink(`./temp_warnings/2t_${userid}.txt`, (err) => {
								if (err) throw err;
								console.log(`2t_${userid}.txt was deleted`);
								client.channels.get(`${warnchannel}`).send({embed: {
									color: 3174889,
									title: "2 Temporary Warnings Removed",
									description: `User: ${user}`,
									timestamp: new Date(),
								  }
								});
							});
							fs.unlink(`./temp_dates/${filetime}.txt`, (err) => {
								if (err) throw err;
							});
						}
						else if (fs.existsSync(`./temp_warnings/3t_${userid}.txt`)) {
							user = ('<@' + `${userid}` + '>');
							fs.unlink(`./temp_warnings/3t_${userid}.txt`, (err) => {
								if (err) throw err;
								console.log(`3t_${userid}.txt was deleted`);
								client.channels.get(`${warnchannel}`).send({embed: {
									color: 3174889,
									title: "3 Temporary Warnings Removed",
									description: `User: ${user}`,
									timestamp: new Date(),
								  }
								});
							});
							fs.unlink(`./temp_dates/${filetime}.txt`, (err) => {
								if (err) throw err;
							});
						}
						else if (fs.existsSync(`./temp_warnings/4t_${userid}.txt`)) {
							user = ('<@' + `${userid}` + '>');
							fs.unlink(`./temp_warnings/4t_${userid}.txt`, (err) => {
								if (err) throw err;
								console.log(`4t_${userid}.txt was deleted`);
								client.channels.get(`${warnchannel}`).send({embed: {
									color: 3174889,
									title: "4 Temporary Warnings Removed",
									description: `User: ${user}`,
									timestamp: new Date(),
								  }
								});
							});
							fs.unlink(`./temp_dates/${filetime}.txt`, (err) => {
								if (err) throw err;
							});
						}
						else if (fs.existsSync(`./temp_warnings/5t_${userid}.txt`)) {
							user = ('<@' + `${userid}` + '>');
							fs.unlink(`./temp_warnings/5t_${userid}.txt`, (err) => {
								if (err) throw err;
								console.log(`5t_${userid}.txt was deleted`);
								client.channels.get(`${warnchannel}`).send({embed: {
									color: 3174889,
									title: "5 Temporary Warnings Removed",
									description: `User: ${user}`,
									timestamp: new Date(),
								  }
								});
							});
							fs.unlink(`./temp_dates/${filetime}.txt`, (err) => {
								if (err) throw err;
							});
						}
						else {
							console.log(`No userfile exists!`)
						}
					});
				}
			}
			else {
				//console.log(`No expired warns`)
			}
		}
	});
	
	//ban check
	fs.readdir(`./ban_dates`, function(err, filenames) {
		if (err) {
		  onError(err);
		  return;
		}
		filenames.forEach(checktime);
		
		function checktime(item){
			filetime = item.slice(0,-4);
			//console.log(filetime);
			releasetime = +filetime;
			//console.log(releasetime);
			if (+releasetime <= militime){
				console.log(`Expired ban!`);
				if (fs.existsSync(`./ban_dates/${filetime}.txt`)) {
					fs.readFile(`./ban_dates/${filetime}.txt`, (err, userid) => {
						console.log(`Date file exists!`)
						//unban
						guild.unban(`${userid}`);
						//delete file
						fs.unlink(`./ban_dates/${filetime}.txt`, (err) => {
							if (err) throw err;
						});
					});
				}
			}
			else {
				//console.log(`No expired bans`)
			}
		}
	});
};