exports.shitpost = function (logaction, getRandomInt, message, shitRecently) {
	
	const shitrng = getRandomInt(1, 160);
	logaction(shitrng)
	try {
		if (shitRecently.has(message.author.id)) {
			console.log('Shitpost banned!');
			message.delete(10);
			message.author.send("Please wait a minute for another shitpost.");
			return;
		}
		else if (!shitRecently.has(message.author.id)){
			console.log('Shitpost give!');
			shitRecently.add(message.author.id);
			setTimeout(() => {
				shitRecently.delete(message.author.id);
			}, 60000);
			if(shitrng == 1){
				message.author.send(`Happy Spooktober. https://youtu.be/RPyLhKIFzms`)};
			if(shitrng == 2){
				message.author.send(`Someone stop this madman. https://youtu.be/Y5NBxNn_SwY`)};
			if(shitrng == 3){
				message.author.send(`And they were the best 5 notes. https://youtu.be/LVyOWbrxjHM`)};
			if(shitrng == 4){
				message.author.send(`Hanging moss + Blue Moutain Flower. https://youtu.be/uJ9GaYGJEWE`)};
			if(shitrng == 5){
				message.author.send(`Is mayonnaise an infinity stone?﻿ https://youtu.be/bleoywz0oeg`)};
			if(shitrng == 6){
				message.author.send(`Anne are you ok? https://youtu.be/6-7NDP8V-6A`)};
			if(shitrng == 7){
				message.author.send(`The best remix yet. https://youtu.be/120HFjKPuJ4`)};
			if(shitrng == 8){
				message.author.send(`Break out your credit card. https://youtu.be/SGi4j-bdcLk`)};
			if(shitrng == 9){
				message.author.send(`I hope mine\'s a football. https://youtu.be/M1uVi41I1oc`)};
			if(shitrng == 10){
				message.author.send(`Pizza Time. https://youtu.be/ckTkZnJkZUw`)};
			if(shitrng == 11){
				message.author.send(`Bongo cat best meme. https://youtu.be/U1fHWN4OkHM`)};
			if(shitrng == 12){
				message.author.send(`\"Fixed going to hell while in a bumpercart\" https://youtu.be/4nxsCZ2SEcQ`)};
			if(shitrng == 13){
				message.author.send(`SPAAAAAAAAAAAAAAAAAAAAAAACE!!!!! https://youtu.be/Z1roP52Py7s`)};
			if(shitrng == 14){
				message.author.send(`Interrobang? https://youtu.be/2vOa8EkLdJY`)}; //DM furry
			if(shitrng == 15){
				message.author.send(`Almost. https://youtu.be/beDN-q3UcbY`)};
			if(shitrng == 16){
				message.author.send(`Dam you Phil Swift. https://youtu.be/XsNaL-pNAW0`)};
			if(shitrng == 17){
				message.author.send(`And you too. https://youtu.be/xF0cGt5-69k`)};
			if(shitrng == 18){
				message.author.send(`MAH SOAP! https://youtu.be/KvdfDveEQh4`)};
			if(shitrng == 19){
				message.author.send(`BITCH! https://youtu.be/As0YXoa6qw4`)};
			if(shitrng == 20){
				message.author.send(`Source: Every anime ever. https://youtu.be/kSVkprXlc6k`)};
			if(shitrng == 21){
				message.author.send(`Missing here: all the griefers and modders. https://youtu.be/t0PAEehqLOw`)};
			if(shitrng == 22){
				message.author.send(`Time for a little CQC. https://youtu.be/JoRYWinS_u8`)}; //sfw brazzers MGSV
			if(shitrng == 23){
				message.author.send(`He has a nice yard too. https://youtu.be/N0gb9v4LI4o`)};
			if(shitrng == 24){
				message.author.send(`Nyoom. https://youtu.be/X5S0OjTq9kY`)};
			if(shitrng == 25){
				message.author.send(`I\'ve just been in this place before! https://youtu.be/bGLjXZT5rhw`)};
			if(shitrng == 26){
				message.author.send(`Next up on The Office: https://youtu.be/MI_igHMjGlQ`)};
			if(shitrng == 27){
				message.author.send(`He has some sick moves. https://youtu.be/-6NK0co5Nho`)};
			if(shitrng == 28){
				message.author.send(`Poor dog. https://youtu.be/jVk3kePdYRA`)};
			if(shitrng == 29){
				message.author.send(`Typical German response. https://youtu.be/3t3XiieGA5E`)};
			if(shitrng == 30){
				message.author.send(`A classic. https://youtu.be/VqB1uoDTdKM`)};
			if(shitrng == 31){
				message.author.send(`GABENGABENGABENGABENGABEN https://youtu.be/aYgXSGNpLSA`)};
			if(shitrng == 32){
				message.author.send(`Thicc. https://youtu.be/ybi90Qz_FSY`)};
			if(shitrng == 33){
				message.author.send(`Poor interro. https://youtu.be/Tp76cHN2FDU`)}; //gassed furries
			if(shitrng == 34){
				message.author.send(`Spawn tank. Set speed 200. https://youtu.be/NG-_CJzD1Lc`)};
			if(shitrng == 35){
				message.author.send(`Where\'s the dancing groot? https://youtu.be/71a0Nx_qWYw`)};
			if(shitrng == 36){
				message.author.send(`This is pure shitpost. https://youtu.be/AI4rexHukPU?t=11s`)};
			if(shitrng == 37){
				message.author.send(`Photoshop is amazing. ﻿https://youtu.be/Tui2FAQO7z4`)};
			if(shitrng == 38){
				message.author.send(`HOTLINE MIAMI 3: WRONG DOOR﻿ https://youtu.be/0mt0EFau6xg`)};
			if(shitrng == 39){
				message.author.send(`Trumpet Boy Meme is underrated.﻿ https://youtu.be/9SFxtqc3v08`)};
			if(shitrng == 40){
				message.author.send(`Stay away from my waifu. https://youtu.be/2kqEfuVUwOE`)};
			if(shitrng == 41){
				message.author.send(`What a magical lady. https://youtu.be/jsPhMdgb51c`)};
			if(shitrng == 42){
				message.author.send(`BITCH! https://youtu.be/dHHJGEeCLSo`)};
			if(shitrng == 43){
				message.author.send(`It was a strange episode. https://youtu.be/mK2fNG26xFg`)};
			if(shitrng == 44){
				message.author.send(`Tim Curry is a national treasure. https://youtu.be/g1Sq1Nr58hM`)};
			if(shitrng == 45){
				message.author.send(`AKA Interro pings everyone. https://youtu.be/D1VqrwEyL5k`)};
			if(shitrng == 46){
				message.author.send(`So that\'s what Nuke looks like. https://youtu.be/CzhyCm_S-Pw`)};
			if(shitrng == 47){
				message.author.send(`The love child of two stale memes. https://youtu.be/tUOrwWge62A`)};
			if(shitrng == 48){
				message.author.send(`Howdy diddly. https://youtu.be/hnewjEEUs1c`)};
			if(shitrng == 49){
				message.author.send(`A zebra being eaten would also be acceptable. https://youtu.be/8eXj97stbG8`)};
			if(shitrng == 50){
				message.author.send(`Fashion comes at a price.﻿ https://youtu.be/HPjJCVylFBo`)};
			if(shitrng == 51){
				message.author.send(`A classic. https://youtu.be/uE-1RPDqJAY`)};
			if(shitrng == 52){
				message.author.send(`Ho ho ho ho ho ho ho ho no. https://youtu.be/aRsOBFhNjVM`)};
			if(shitrng == 53){
				message.author.send(`Begone you unworthy peasent. https://youtu.be/w0qVciN4lTs`)};
			if(shitrng == 54){
				message.author.send(`DO THA MARIO! https://youtu.be/PGfhtLrwiKo`)};
			if(shitrng == 55){
				message.author.send(`A classic potato post from the potato bot. https://youtu.be/qrQVFZx7XX4`)};
			if(shitrng == 56){
				message.author.send(`Uhh... Ramen.﻿ https://youtu.be/T_PuZBdT2iM`)};
			if(shitrng == 57){
				message.author.send(`How do you even describe the man, the myth, the Nicolas Cage. https://youtu.be/yaYxqDEP7L8`)};
			if(shitrng == 58){
				message.author.send(`I\'d watch it. https://youtu.be/I1XQduS6IfA`)};
			if(shitrng == 59){
				message.author.send(`A classic shitpost. https://youtu.be/pbe5fOdp9Hk`)};
			if(shitrng == 60){
				message.author.send(`WAHHHHHOOOOOOOWAHOOOOOOOOOOOOOOOOOOOOOOOOOO! https://youtu.be/aaSRYecKaqc`)};
			if(shitrng == 61){
				message.author.send(`Banana Pudding was a hard year for all of us.﻿ https://youtu.be/znKz_J6Mg2E`)};
			if(shitrng == 62){
				message.author.send(`owuzdis. https://youtu.be/voJmOYyI-T0`)};
			if(shitrng == 63){
				message.author.send(`Anyway, that is how i lost my medical license﻿. https://youtu.be/dj4bmq5IzDo`)};
			if(shitrng == 64){
				message.author.send(`One sexy boi. https://youtu.be/q4JFu3C6VXU`)};
			if(shitrng == 65){
				message.author.send(`Meanwhile, in Half Life 1... https://youtu.be/pZCN2T1XDt8`)};
			if(shitrng == 66){
				message.author.send(`Pluto doesn't mess around. https://youtu.be/AXxBhOc7jEA`)};
			if(shitrng == 67){
				message.author.send(`You\'re Welcome. https://youtu.be/vA3OqkSX4QA`)};
			if(shitrng == 68){
				message.author.send(`After all, we\'re all just air conditioners. https://youtu.be/kjS6bQ5OQ-o`)};
			if(shitrng == 69){
				message.author.send(`POLITICAL JOKES, AMIRITE? https://youtu.be/LRpyzafneYo`)};
			if(shitrng == 70){
				message.author.send(`We have to go back Kate! WE HAVE TO GO BACK!! https://youtu.be/wAu_fYHZKLs`)};
			if(shitrng == 71){
				message.author.send(`Dang ol tell you whut mang. https://youtu.be/M-mQ3JLt8SQ`)};
			if(shitrng == 72){
				message.author.send(`Who could've CENA thing like that coming?﻿ https://youtu.be/3E--xFjR1dM`)};
			if(shitrng == 73){
				message.author.send(`I'm fed up with this- squirrel!﻿ https://youtu.be/XXg29KpIlwM`)};
			if(shitrng == 74){
				message.author.send(`2016 was a strange year. https://youtu.be/6C5_VbK6VCo`)};
			if(shitrng == 75){
				message.author.send(`Doomguy for Smashbros.﻿ https://youtu.be/rwvgSf8jqFA`)};
			if(shitrng == 76){
				message.author.send(`What is gay frogs? https://youtu.be/lVQza7Luqj0?t=9s`)};
			if(shitrng == 77){
				message.author.send(`Eat your steamed hams, Apollo.﻿ https://youtu.be/n-QtsAf9xyU`)};
			if(shitrng == 78){
				message.author.send(`This video actually casues mental and physical pain. https://youtu.be/3q7oJuyy5Ac`)};
			if(shitrng == 79){
				message.author.send(`This video causes mental and physical pain. https://youtu.be/Q9wDLSrLeUE`)};
			if(shitrng == 80){
				message.author.send(`AAAAAAAAAHHH! AAAAAAAAAAHHHHHHH!!! AAAAAAAAAAAAAAHAHAH!!!!! https://youtu.be/nAjh3fJuI6k`)};
			if(shitrng == 81){
				message.author.send(`The buns of the patriots. https://youtu.be/V8kp3b5h2DY`)};
			if(shitrng == 82){
				message.author.send(`THIS MAN NEEDS TO BE STOPPED! https://youtu.be/-V2PdCT9TSk`)};
			if(shitrng == 83){
				message.author.send(`As a weeb, I can confirm this is accurate. https://youtu.be/frKyaFTeC7c`)};
			if(shitrng == 84){
				message.author.send(`NOT THE BEES!﻿ https://youtu.be/PYtXuBN1Hvc`)};
			if(shitrng == 85){
				message.author.send(`Too soon﻿. https://youtu.be/ej0TwOZ0hjw`)};
			if(shitrng == 86){
				message.author.send(`A preview of the upcomming Lion King remake: https://youtu.be/UmPmpUTr22c`)};
			if(shitrng == 87){
				message.author.send(`It's worse than you think. https://youtu.be/AP1d1mOCLsI`)};
			if(shitrng == 88){
				message.author.send(`This is why I cry each time I boot up the game.﻿ https://youtu.be/5nGdHeaPXw8`)};
			if(shitrng == 89){
				message.author.send(`Titanium teeth﻿. https://youtu.be/W5STjplRAX8`)}; //coconut pussy
			if(shitrng == 90){
				message.author.send(`Pokemans are still cool, right? https://youtu.be/jcH_CX7n0NI`)};
			if(shitrng == 91){
				message.author.send(`The inner Aku-nations of my mind are an egg-nigma.﻿ https://youtu.be/1jXxnJgeTd8`)};
			if(shitrng == 92){
				message.author.send(`You’re a Jedi harry﻿! https://youtu.be/o-ZM7iVP6Ko`)};
			if(shitrng == 93){
				message.author.send(`I\'m sorry. This is just bad. https://youtu.be/HZyAI-RdRKc`)};
			if(shitrng == 94){
				message.author.send(`That music theory degree is really paying off I see. https://youtu.be/9XM6P6mygPw`)};
			if(shitrng == 95){
				message.channel.send(`Oh boy.`);
				message.author.send(`I'm so sorry. Nobody should have to watch this. https://youtu.be/NgWn7zbgxZ4?t=12s`)}; //pickle supprise
			if(shitrng == 96){
				message.author.send(`When the Ghostbusters are too expensive﻿. https://youtu.be/3ufm_PPEulM`)};
			if(shitrng == 97){
				message.author.send(`That\'s me every morning. https://youtu.be/tpb_5mYp_0o`)};
			if(shitrng == 98){
				message.author.send(`If Dr Sues owned Marvel﻿. https://youtu.be/OOUGnVVEDAA`)};
			if(shitrng == 99){
				message.channel.send(`Oh no.`);
				message.author.send(`I should probably remove this one. TRIGGER WARNING! https://youtu.be/GYXZcd6imzA`)}; //6 flags car crash
			if(shitrng == 100){
				message.author.send(`NANOMACHINES SON! https://youtu.be/1vtNZqzbXkk`)};
			if(shitrng == 101){
				message.author.send(`Give this man a saxxy! https://youtu.be/DAAEGiyHFwI`)};
			if(shitrng == 102){
				message.author.send(`Potato, play Canteen Crasher. https://youtu.be/9ps7XTZxRjg`)};
			if(shitrng == 103){
				message.author.send(`And patch day... and the patch 2 day... https://youtu.be/Rb4iB-_Ew6I`)};
			if(shitrng == 104){
				message.author.send(`When the judges played Skye. https://youtu.be/tqaWtxmhcvY`)};
			if(shitrng == 105){
				message.author.send(`I went to Australia recently. It\'s a very strange place. https://youtu.be/v6yg4ImnYwA`)};
			if(shitrng == 106){
				message.author.send(`One of my favorite meals is boiled cheeseburgers. https://youtu.be/xw-jSymE76o`)};
			if(shitrng == 107){
				message.author.send(`Fuck science. https://youtu.be/LJDgVlv55Uw`)};
			if(shitrng == 108){
				message.author.send(`\'cause I like life at Paddy\'s pub. https://youtu.be/1gmWMk24OfI`)};
			if(shitrng == 109){
				message.author.send(`Is this, too easy for you? https://youtu.be/2kr7KDCsIws`)};
			if(shitrng == 110){
				message.author.send(`These are still funny, right? Right? https://youtu.be/6kIsEzEmI9w`)};
			if(shitrng == 111){
				message.author.send(`Kliner, you dirty bastard. https://youtu.be/gyYIjn0V1Uc?t=8s`)};
			if(shitrng == 112){
				message.author.send(`TRUCKS! https://youtu.be/26nNM5DsUTo`)};
			if(shitrng == 113){
				message.author.send(`Big oof. https://youtu.be/XwgrwcPaSzA`)};
			if(shitrng == 114){
				message.author.send(`Hoi ti toi ti toiiii! https://youtu.be/TKWGFLbhgec`)};
			if(shitrng == 115){
				message.author.send(`No, it\'s the gun. https://youtu.be/c6b9DdbO_gE`)};
			if(shitrng == 116){
				message.author.send(`Wut? INTERNET! https://youtu.be/rkGUrjALL1s`)};
			if(shitrng == 117){
				message.author.send(`Shia surprise! https://youtu.be/o0u4M6vppCI`)};
			if(shitrng == 118){
				message.author.send(`I\'M AT SOUP! https://youtu.be/nVDRnDyZWDo`)};
			if(shitrng == 119){
				message.author.send(`That haircut is pretty bad. https://youtu.be/9uqSaoVG7B4`)};
			if(shitrng == 120){
				message.author.send(`BONUS DUCKS! https://youtu.be/MzC2zkAHmPg`)};
			if(shitrng == 121){
				message.author.send(`I feel inspired now. https://youtu.be/eQq5Dol40vY`)};
			if(shitrng == 122){
				message.author.send(`I wanna go to space. https://youtu.be/k-UmqZdmbmE`)};
			if(shitrng == 123){
				message.author.send(`Stay away from his sentry. https://youtu.be/HjGrHBpfqCo`)};
			if(shitrng == 124){
				message.author.send(`Next week we look at Payday 2. https://youtu.be/jtxK6fKpJpo`)};
			if(shitrng == 125){
				message.author.send(`God damn meat eaters. https://youtu.be/p0VUY-5qeIA`)};
			if(shitrng == 126){
				message.author.send(`Don\'t tell interro. https://youtu.be/4xLxozJhCdA`)};
			if(shitrng == 127){
				message.author.send(`Who want\'s to play with my wii? https://youtu.be/O3MVf6H49wA`)};
			if(shitrng == 128){
				message.author.send(`Let\'s nerf Mercy again. https://youtu.be/RMDItOwN_SU`)};
			if(shitrng == 129){
				message.author.send(`Super PSTW Action RPG was the *shit*. https://youtu.be/4Z2Z23SAFVA`)};
			if(shitrng == 130){
				message.author.send(`Fuck I\'m hungry now. https://youtu.be/aYAGB11YrSs`)};
			if(shitrng == 131){
				message.author.send(`Well that smarts. https://youtu.be/r0TGzOFwxhs`)};
			if(shitrng == 132){
				message.author.send(`I am required by law to include Running in the 90\'s. For maximum effect, please play this song when a fast tank spawns. https://youtu.be/XCiDuy4mrWU`)};
			if(shitrng == 133){
				message.author.send(`I am required by law to include Running in the 90\'s. For maximum effect, please play this song when a sentry tank spawns. https://youtu.be/NG-_CJzD1Lc`)};
			if(shitrng == 134){
				message.author.send(`I am required by law to include Running in the 90\'s. For maximum effect, please play this song when a shield tank spawns. https://youtu.be/prYrizLYFEw`)};
			if(shitrng == 135){
				message.author.send(`I am required by law to include Running in the 90\'s. For maximum effect, please play this song when a tank train spawns. https://youtu.be/yt6B7X1FDNU`)};
			if(shitrng == 136){
				message.author.send(`I am required by law to include Running in the 90\'s. For maximum effect, please play this song when a normal tank spawns. https://youtu.be/MGHbdE4oMGM`)};
			if(shitrng == 137){
				message.author.send(`I am required by law to include Running in the 90\'s. For maximum effect, please play this song when the Omega Tank spawns. https://youtu.be/V0v7gtER3ro`)};
			if(shitrng == 138){
				message.author.send(`I had a professor once who was into black midi. He was an odd person. https://youtu.be/p_c6uQHlhZ0`)};
			if(shitrng == 139){
				message.author.send(`Dat \'aint Kiefer Sutherland. https://youtu.be/44ZNMhWdr5U`)};
			if(shitrng == 140){
				message.author.send(`Dam, the later movies got dark. https://youtu.be/aa9JH_iUSzg`)};
			if(shitrng == 141){
				message.author.send(`Guys I\'m scared. https://youtu.be/m6EYCtkQtEI`)};
			if(shitrng == 142){
				message.author.send(`I\'m offended. https://youtu.be/k-Fgwt4Yd-o`)};
			if(shitrng == 143){
				message.author.send(`Half-Life 3 when?. https://youtu.be/XfgN-EzthJM`)};
			if(shitrng == 144){
				message.author.send(`Gota unlock that secret level. https://youtu.be/PxfyZ5E8lCY`)};
			if(shitrng == 145){
				message.author.send(`Have a free movie. Just don\'t tell the cops. https://youtu.be/tAA_yWX8ycQ`)};
			if(shitrng == 146){
				message.author.send(`I could do it better. https://youtu.be/YSWKtuaV2fY`)};
			if(shitrng == 147){
				message.author.send(`OwO. https://youtu.be/rrD3jp34BFg`)};
			if(shitrng == 148){
				message.author.send(`Please lower your volume for the epicness about to befall you. https://youtu.be/m7yN9UaUCcQ`)};
			if(shitrng == 149){
				message.author.send(`Please Mr. Howard, not again. https://youtu.be/bxg085yEUzo`)};
			if(shitrng == 150){
				message.author.send(`Neahhayana. Harng! Neh! https://youtu.be/gEJKQI_ht1I`)};
			if(shitrng == 151){
				message.author.send(`God damn he did it! https://youtu.be/isFViygaIYQ`)};
			if(shitrng == 152){
				message.author.send(`It's never enough! https://youtu.be/jgEEkd-MF8k`)};
			if(shitrng == 153){
				message.author.send(`Poor guy. He just wanted to fix the universe. https://youtu.be/_axmm3oqSYE`)};
			if(shitrng == 154){
				message.author.send(`He just went to the market for some milk. He\'ll be back. https://youtu.be/PWxRDOTctD4`)};
			if(shitrng == 155){
				message.author.send(`Here, have something draged up from meme hell. https://youtu.be/e0grOu_z9-U`)};
			if(shitrng == 156){
				message.author.send(`WHAT! https://youtu.be/CuZRl8DEbh8`)};
			if(shitrng == 157){
				message.author.send(`Half-Life 3 leaked footage. https://youtu.be/G1wJfrzzZ1g`)};
			if(shitrng == 158){
				message.author.send(`Ozzie mate! https://youtu.be/AttvYYAmHJk`)};
			if(shitrng == 159){
				message.author.send(`Let\'s see a spoonfull of sugar solve this. https://youtu.be/mHOchoMgZ3c`)};
			if(shitrng == 160){
				message.author.send(`This bot is partially powered by badonkers. https://youtu.be/y-0rq582Ww8`)};
		}
	}
	catch (err){
		client.channels.get(`${botchannel}`).send(`You have DMs dissabled <@${message.member.id}>. Most bot functions will not work for you.`);
	}
};