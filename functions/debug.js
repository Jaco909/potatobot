exports.debug = function (fs, args) {
	fs.readFile(`./data/commandtiers.txt`, (err, commandtiersfile) => {
		if (err) throw err;
		var commandcount = 0
		commandtiersfile = commandtiersfile.toLocaleString();
		commandtiersfile = commandtiersfile.split(`\n`)
		commandcount = commandtiersfile.length
		console.log(commandtiersfile[0])
		console.log(args[0])
		commandtiersfile.forEach(command => {
			console.log(command)
			if (`${args[0]}` == `${command}`){
				argnum = commandtiersfile.findIndex(command);
				console.log(commandtiersfile[argnum])
				console.log(`wack`);
			}
		});
	});
};