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
		this.canvas = new Canvas(700, 400 , 'canvas_div');

		document.querySelector('canvas')
			.addEventListener('mousedown', this.doSomething.bind(this));
		document.querySelector('canvas')
			.addEventListener('mousemove', this.movement.bind(this));
		document.querySelector('canvas')
			.addEventListener('mouseup', this.stop.bind(this));
	}

	doSomething(e) {
		console.log(e);
		let canvasPlace = document.querySelector('canvas').getBoundingClientRect();
		let mouseX = e.clientX - canvasPlace.left;
		let mouseY = e.clientY - canvasPlace.top;
		this.isDrawing = true;
		this.canvas.context.moveTo(mouseX, mouseY);
		}
	// Movement funtion gets called via event
	movement(e) {
		if (this.isDrawing) {
			let canvasPlace = document.querySelector('canvas').getBoundingClientRect();
			let mouseX = e.clientX - canvasPlace.left;
			let mouseY = e.clientY - canvasPlace.top;
			this.canvas.context.lineTo(mouseX, mouseY);
			this.canvas.context.stroke();

			// Check if we go out from canvas - not sure if needed???
			if (mouseX > e.clientX - canvasPlace.left || mouseX < 0) {
				this.isDrawing = false;
			} else if (mouseY > e.clientY - canvasPlace.top || mouseY < 0) {
				this.isDrawing = false;
			}
		}
	}
	
	// Stop drawing
	stop(e) {
		this.isDrawing = false;
	}
		// WTF?
		// doSomething() {
		// this.canvas.onmousemove = function(e) {
}