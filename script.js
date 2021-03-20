function addPixel(gridSize) {
	const sketchContainer = document.querySelector(".sketch-container");
	const pixel = document.createElement("div");
	
	pixel.style.border = "0.1em solid white";
	pixel.style.boxSizing = "border-box";
	let size = (1 / gridRoot) * 100;
	size = size + "%";
	pixel.style.height = size;
	pixel.style.width = size;
	sketchContainer.appendChild(pixel);
}

let gridRoot = 20;
let gridSize = gridRoot * gridRoot;
for (i = 0; i < gridSize; i++) {
	addPixel(gridSize);
}