exports.roletier = function (fs) {
	fs.readFile(`./data/commandtiers.txt`, (err, commandtiersfile) => {
		console.log(typeof commandtiersfile)
		console.log(commandtiersfile)
	});
};