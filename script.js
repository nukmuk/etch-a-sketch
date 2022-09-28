// createGrid(prompt(), prompt());
createGrid(100, 100);

function createGrid(x, y) {
	const grid = document.querySelector(".palikat");
	grid.style.gridTemplateColumns = `repeat(${x}, 1fr)`;

	const totalWidth = window.innerWidth;
	console.log(totalWidth);

	const cellWidth = totalWidth / x;
	const cellHeight = cellWidth;

	for (let iy = 0; iy < y; iy++) {
		for (let i = 0; i < x; i++) {
			const cell = document.createElement("div");
			cell.className = "cell";
			// cell.style.minWidth = `${cellWidth}px`;
			// cell.style.minHeight = `${cellHeight}px`;
			if (i == 0) {
				// cell.style.gridColumnStart =
			}

			cell.addEventListener("mouseover", (e) => {
				// console.log(e.target);
				e.target.classList.add("highlighted");
			});

			grid.appendChild(cell);
		}
	}
}
