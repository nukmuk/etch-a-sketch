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
			div.style.background = `rgb(${i * 14}, ${i * 15}, ${i * 16})`;
			div.className = "cell";
			div.style.width = width;
			div.style.height = height;
			if (i != 0) {
				div.style.float = "left";
			}
			grid.appendChild(div);
		}
	}
}
