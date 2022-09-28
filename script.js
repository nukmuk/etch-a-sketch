// createGrid(prompt(), prompt());
createGrid(100, 100);

function createGrid(x, y) {
	const grid = document.querySelector(".palikat");

	const totalWidth = window.innerWidth;
	console.log(totalWidth);

	const cellWidth = totalWidth / x;
	const cellHeight = cellWidth;

	for (let iy = 0; iy < y; iy++) {
		for (let i = 0; i < x; i++) {
			const div = document.createElement("div");
			// div.style.background = `gray`;
			div.className = "cell";
			div.style.width = `${cellWidth}px`;
			div.style.height = `${cellHeight}px`;
			let float = "left";
			if (i == 0 && iy != 0) {
				float = "bottom";
			}
			if (i == 0 && iy == 0) {
				continue;
			}
			div.style.float = float;

			div.addEventListener("mouseover", (e) => {
				// console.log(e.target);
				e.target.className = "highlighted";
			});

			grid.appendChild(div);
		}
	}
}
