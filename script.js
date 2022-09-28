createGrid(16, 16);

function createGrid(x, y) {
	console.log("test");
	const grid = document.querySelector(".palikat");
	console.log(grid);

	const width = "30px";
	const height = width;

	for (let iy = 0; iy < y; iy++) {
		for (let i = 0; i < x; i++) {
			const div = document.createElement("div");
			div.style.background = `rgb(${i * 16}, ${iy * 16}, 0)`;
			div.className = "cell";
			div.style.width = width;
			div.style.height = height;
			let float = "left";
			if (i == 0 && iy != 0) {
				float = "bottom";
			}
			if (i == 0 && iy == 0) {
				div.style.display = "none";
			}
			div.style.float = float;
			grid.appendChild(div);
		}
	}
}
