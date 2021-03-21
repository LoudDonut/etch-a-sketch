function addPixel(gridSize, gridRoot) {
	const sketchContainer = document.querySelector(".sketch-container");
	const pixel = document.createElement("div");
	
	pixel.style.border = "1px solid black";
	pixel.style.boxSizing = "border-box";
	let size = (1 / gridRoot) * 100; //Calculate evenly divided space
	size = size + "%";
	pixel.style.height = size;
	pixel.style.width = size;
	pixel.style.borderRadius = "0%"; //Put on 50% for circle edition
	sketchContainer.appendChild(pixel);
}

function generateGrid(gridRoot) {
	let gridSize = gridRoot * gridRoot; //Total ammount of pixels (Area)
	for (i = 0; i < gridSize; i++) {
		addPixel(gridSize, gridRoot);
	}
}

function colorPixels(pixelLocation) {
	let pixel = document.querySelector(pixelLocation);
	let randomHex = Math.floor(Math.random() * 1000000);
	console.log(pixel);
}

function randomColor() {
	let color = "#";
	for (let i = 0; i < 6; i++) {
		const random = Math.random();
		const bit = (random * 16) | 0;
		color += (bit).toString(16);
	}
	return color;
}

function colorPixels() {
	const allPixels = document.querySelectorAll(".sketch-container > div");
	
	allPixels.forEach((pixel) => {
		pixel.addEventListener("mouseover", (e) => {
			let randomHex = randomColor();
			e.target.style.backgroundColor = randomHex;
		});
	});
}

function etchASketch (size) {
	generateGrid(size);
	colorPixels();
}

//WHEN PAGE LOADS
etchASketch(16);

//BUTTON FUNCTIONS
function deletePixels() {
	const sketchContainer = document.querySelector(".sketch-container");
	const allPixels = document.querySelectorAll(".sketch-container > div");
	
	allPixels.forEach((pixel) => {
		sketchContainer.removeChild(pixel);
	});
}

function newGrid() {
	const button = document.querySelector("button");
	button.addEventListener("click", (e) => {
		let randomHex = randomColor();
		e.target.style.borderColor = randomHex;
		let newSize = prompt("Enter new grid size (Max 64 x 64)");
		if (newSize < 1 || newSize > 64) {
			alert("Set to max 64 x 64");
			deletePixels();
			etchASketch(64);
		}
		else{
			deletePixels();
			etchASketch(newSize);
		}
	});
}


newGrid();


