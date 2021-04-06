const winnerText = document.getElementById("winner");
const leftoversBtn = document.getElementById("takeout");
const takeoutBtn = document.getElementById("leftovers");

const updateWinner = () => {
	const currWinner = getWinner();
	winnerText.innerText = currWinner;
};

takeoutBtn.addEventListener("click", () => {
	voteTakeout();
	updateWinner();
});

leftoversBtn.addEventListener("click", () => {
	voteLeftovers();
	updateWinner();
});

