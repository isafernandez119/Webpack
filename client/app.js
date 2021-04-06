const winnerText = document.getElementById("winner");
const leftoversBtn = document.getElementById("takeout");
const takeoutBtn = document.getElementById("leftovers");

const updateWinner = () => {
	const currWinner = getWinner();
	winnerText.innerText = currWinner;
};

takeoutBtn.addEventListener("click", () => {
	voteTakout();
});

leftoversBtn.addEventListener("click", () => {
	voteLeftovers();
});

