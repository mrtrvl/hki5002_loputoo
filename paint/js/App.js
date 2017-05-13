window.onload = () => {
	new App();
}

class App {
	constructor() {
		this.isDrawing = false;
		document.querySelector('body').
			appendChild(Elements.createHeading('h1', 'Joonistamine'));
		document.querySelector('body').
			appendChild(Elements.createParagraph('p', 'Joonista midagi ilusat palun'));
		document.querySelector('body').
			appendChild(Elements.createDiv('canvas_div'));
		this.canvas = new Canvas(800, 500 , 'canvas_div');

		document.querySelector('canvas')
			.addEventListener('mousedown', this.mouseDown.bind(this));
		document.querySelector('canvas')
			.addEventListener('mousemove', this.mouseMove.bind(this));
		document.querySelector('canvas')
			.addEventListener('mouseup', this.mouseUp.bind(this));
	}

	mouseDown(e) {
		console.log(e);
		let canvasPlace = document.querySelector('canvas').getBoundingClientRect();
		let mouseX = e.clientX - canvasPlace.left;
		let mouseY = e.clientY - canvasPlace.top;
		this.isDrawing = true;
		this.canvas.context.moveTo(mouseX, mouseY);
		}

	mouseMove(e) {
		if (this.isDrawing) {
			let canvasPlace = document.querySelector('canvas').getBoundingClientRect();
			let mouseX = e.clientX - canvasPlace.left;
			let mouseY = e.clientY - canvasPlace.top;
			this.canvas.context.lineTo(mouseX, mouseY);
			this.canvas.context.lineJoin = "round"
			this.canvas.context.lineCap = "round";
			this.canvas.context.lineWidth = 10;
			let gradient = this.canvas.context.createLinearGradient(0,0,0,170);
			gradient.addColorStop(0, "pink");
			gradient.addColorStop(1, "purple");
			this.canvas.context.strokeStyle = gradient;
			this.canvas.context.stroke();
		}
	}
	
	mouseUp(e) {
		this.isDrawing = false;
	}
}