createGrid(16, 16);

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
	promptGridCreate();
});

function promptGridCreate() {
	const width = prompt();
	if (width > 100) {
		alert("Width has to be between 1-100");
	}
	createGrid(width, width);
}

function createGrid(x, y) {
	const grid = document.querySelector(".palikat");
	grid.style.gridTemplateColumns = `repeat(${x}, 1fr)`;

	let cells = [];

	for (let iy = 0; iy < y; iy++) {
		for (let i = 0; i < x; i++) {
			const cell = document.createElement("div");
			cell.className = "cell";

			// hover
			cell.addEventListener("mouseover", (e) => {
				// console.log(e.target);
				e.target.classList.add("highlighted");
			});

			cells.push(cell);
		}
	}

	grid.replaceChildren(...cells);
}
