let takeoutScore = 0;
let leftoversScore = 0;

const getWinner = () => {
	if (takeoutScore === leftoversScore) return "It's a tie";
	else {
		return takeoutScore > leftoversScore ? "Order out" : "Eat Leftovers";
	}
};

const voteTakeout = () => {
	takeoutScore++;
};

const voteLeftovers = () => {
	leftoversScore++;
};