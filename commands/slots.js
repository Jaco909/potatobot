exports.slots = function (logaction, getRandomInt, message, fs, args, slotsRecently) {
	const Discord = require('discord.js');
	//const { emoji1, emoji2, emoji3, emoji4, emoji5, emoji6, emoji7, emoji8, emoji9, emoji10 } = require('./serverconfig/slots.json');
	console.log(`Slots run!`);
	var user = message.author.id
	if (fs.existsSync(`./potatodata/${user}.txt`)){
		fs.readFile(`./potatodata/${user}.txt`, (err, potatochips) => {
			if (potatochips > 0) {
				if (slotsRecently.has(message.author.id)){
					console.log('Slots too soon!');
					message.delete({ timeout: 10});
					message.author.send(`You can't gamble that fast. Can't have you becoming addicted now. Come back in 30 minutes.`);
				}
				else {
					slotsRecently.add(message.author.id);
					setTimeout(() => {
						slotsRecently.delete(message.author.id);
					}, 1800000 );
					var slot1 = 0
					var slot2 = 0
					var slot3 = 0
					var slot4 = 0
					var slot5 = 0
					var slot6 = 0
					var slot7 = 0
					var slot8 = 0
					var wheel1 = " "
					var wheel2 = " "
					var wheel3 = " "
					var wheel1num = 0
					var wheel2num = 0
					var wheel3num = 0
					var multiplyer = 1
					var payout = 0
					do{
						var slot1 = getRandomInt(1, 51); //crit
						var slot2 = getRandomInt(1, 21); //minicrit
						var slot3 = getRandomInt(1, 21); //titanium
						var slot4 = getRandomInt(1, 21); //af
						var slot5 = getRandomInt(1, 21); //canteen
						var slot6 = getRandomInt(1, 21); //yorick
						var slot7 = getRandomInt(1, 31); //missingno
						var slot8 = getRandomInt(1, 41); //donk
						if ((slot1 == 25) || (slot2 == 5) || (slot3 == 10) || (slot4 == 10) || (slot5 == 10) || (slot6 == 10) || (slot7 == 20) || (slot8 == 25)){
							if (slot1 == 25) {
								wheel1 = "<:crit:485911334274465812>"
								wheel1num = 1
							}
							else if (slot2 == 5) {
								wheel1 = "<:minicrit:682024035416014950>"
								wheel1num = 2
							}
							else if (slot3 == 10) {
								wheel1 = "<:titaniumthink:480104032128598017>"
								wheel1num = 3
							}
							else if (slot4 == 10) {
								wheel1 = "<:afpotato_think:585552136641708032>"
								wheel1num = 4
							}
							else if (slot5 == 10) {
								wheel1 = "<:crashcanteen:488446908059222049>"
								wheel1num = 5
							}
							else if (slot6 == 10) {
								wheel1 = "<:yorick:523179803201765408>"
								wheel1num = 6
							}
							else if (slot7 == 20) {
								wheel1 = "<:normalmissingicon:485911860407959563>"
								wheel1num = 7
							}
							else if (slot8 == 25) {
								wheel1 = "<:doubledonk:682027405346603120>"
								wheel1num = 8
							}
						}
					}
					while (wheel1num == 0)
						
					do{
						var slot1 = getRandomInt(1, 51); //crit
						var slot2 = getRandomInt(1, 26); //minicrit
						var slot3 = getRandomInt(1, 21); //titanium
						var slot4 = getRandomInt(1, 22); //af
						var slot5 = getRandomInt(1, 23); //canteen
						var slot6 = getRandomInt(1, 24); //yorick
						var slot7 = getRandomInt(1, 31); //missingno
						var slot8 = getRandomInt(1, 41); //donk
						if ((slot1 == 25) || (slot2 == 5) || (slot3 == 10) || (slot4 == 10) || (slot5 == 10) || (slot6 == 10) || (slot7 == 20) || (slot8 == 25)){
							if (slot1 == 25) {
								wheel2 = "<:crit:485911334274465812>"
								wheel2num = 1
							}
							else if (slot2 == 5) {
								wheel2 = "<:minicrit:682024035416014950>"
								wheel2num = 2
							}
							else if (slot3 == 10) {
								wheel2 = "<:titaniumthink:480104032128598017>"
								wheel2num = 3
							}
							else if (slot4 == 10) {
								wheel2 = "<:afpotato_think:585552136641708032>"
								wheel2num = 4
							}
							else if (slot5 == 10) {
								wheel2 = "<:crashcanteen:488446908059222049>"
								wheel2num = 5
							}
							else if (slot6 == 10) {
								wheel2 = "<:yorick:523179803201765408>"
								wheel2num = 6
							}
							else if (slot7 == 20) {
								wheel2 = "<:normalmissingicon:485911860407959563>"
								wheel2num = 7
							}
							else if (slot8 == 25) {
								wheel2 = "<:doubledonk:682027405346603120>"
								wheel2num = 8
							}
						}
					}
					while (wheel2num == 0)
						
					do{
						var slot1 = getRandomInt(1, 51); //crit
						var slot2 = getRandomInt(1, 21); //minicrit
						var slot3 = getRandomInt(1, 25); //titanium
						var slot4 = getRandomInt(1, 24); //af
						var slot5 = getRandomInt(1, 23); //canteen
						var slot6 = getRandomInt(1, 22); //yorick
						var slot7 = getRandomInt(1, 31); //missingno
						var slot8 = getRandomInt(1, 41); //donk
						if ((slot1 == 25) || (slot2 == 5) || (slot3 == 10) || (slot4 == 10) || (slot5 == 10) || (slot6 == 10) || (slot7 == 20) || (slot8 == 25)){
							if (slot1 == 25) {
								wheel3 = "<:crit:485911334274465812>"
								wheel3num = 1
							}
							else if (slot2 == 5) {
								wheel3 = "<:minicrit:682024035416014950>"
								wheel3num = 2
							}
							else if (slot3 == 10) {
								wheel3 = "<:titaniumthink:480104032128598017>"
								wheel3num = 3
							}
							else if (slot4 == 10) {
								wheel3 = "<:afpotato_think:585552136641708032>"
								wheel3num = 4
							}
							else if (slot5 == 10) {
								wheel3 = "<:crashcanteen:488446908059222049>"
								wheel3num = 5
							}
							else if (slot6 == 10) {
								wheel3 = "<:yorick:523179803201765408>"
								wheel3num = 6
							}
							else if (slot7 == 20) {
								wheel3 = "<:normalmissingicon:485911860407959563>"
								wheel3num = 7
							}
							else if (slot8 == 25) {
								wheel3 = "<:doubledonk:682027405346603120>"
								wheel3num = 8
							}
						}
					}
					while (wheel3num == 0)
						
					if ((wheel1num == 1) && (wheel2num == 1) && (wheel3num == 1)){
						payout = 100
					}
					else if (wheel1num == 2){
						if ((wheel1num == 2) && (wheel2num == 2)){
							if ((wheel1num == 2) && (wheel2num == 2) && (wheel3num == 2)){
								payout = 20
							}
							else {
								payout = 10
							}
						}
						else {
							payout = 5
						}
					}
					else if ((wheel1num == 3) && (wheel2num == 3) && (wheel3num == 3)){
						payout = 30
					}
					else if ((wheel1num == 3) && (wheel2num == 3) && (wheel3num == 3)){
						payout = 30
					}
					else if ((wheel1num == 4) && (wheel2num == 4) && (wheel3num == 4)){
						payout = 30
					}
					else if ((wheel1num == 5) && (wheel2num == 5) && (wheel3num == 5)){
						payout = 30
					}
					else if ((wheel1num == 6) && (wheel2num == 6) && (wheel3num == 6)){
						payout = 30
					}
					else if ((wheel1num == 7) && (wheel2num == 7) && (wheel3num == 7)){
						payout = 40
					}
					else if ((wheel1num == 8) && (wheel2num == 8) && (wheel3num == 8)){
						payout = 50
					}
						
					logaction(wheel1num, wheel2num, wheel3num);
					potatochips = ((parseInt(potatochips) + parseInt(payout)) - 1)
					fs.writeFileSync(`./potatodata/${user}.txt`,`${potatochips}`, (err) => {
						if (err) throw err;
					});
					message.channel.send({embed: {
						color: '#fcd030',
						title: "Slots",
						fields: [{
							name: "The wheel spins!",
							value: `${wheel1}${wheel2}${wheel3}`
						},
						{
							name: "Payout",
							value: `${payout}`
						},
						{
							name: "Total Potatochips",
							value: `${potatochips}`
						}],
					}});
				}
			}
			else {
				message.reply(`You do not have any potatoes to bet.`);
			}
		});
	}
	else {
		console.log('Error: No chips');
		message.reply(`You do not have any potatoes to bet.`);
	}
};