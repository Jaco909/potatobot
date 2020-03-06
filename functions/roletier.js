exports.roletier = function (rolehighest, usertier, manager, officer, moderator, discordmoderator, giant, potatorole, testersrole, canteencrasherrole, betarole, exstaff) {
	if (rolehighest == manager){
		return usertier = 1;
	}
	else if (rolehighest == officer){
		return usertier = 2;
	}
	else if (rolehighest == moderator){
		return usertier = 3;
	}
	else if (rolehighest == discordmoderator){
		return usertier = 4;
	}
	else if (rolehighest == exstaff){
		return usertier = 5;
	}
	else {
		return usertier = 99
	}
};