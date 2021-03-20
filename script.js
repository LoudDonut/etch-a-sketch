function addPixel(gridSize) {
	const sketchContainer = document.querySelector(".sketch-container");
	const pixel = document.createElement("div");
	
	pixel.style.border = "0.1em solid white";
	pixel.style.boxSizing = "border-box";
	let size = (1 / gridSize) * 200;
	size = size + "%";
	pixel.style.height = size;
	pixel.style.width = size;
	sketchContainer.appendChild(pixel);
}

let gridSize = 2 * 2
for (i = 0; i < gridSize; i++) {
	addPixel(gridSize);
}