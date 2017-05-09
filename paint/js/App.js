window.onload = () => {
	new App();
}

class App {
	constructor() {
		document.querySelector('body').
			appendChild(Elements.createHeading('h1', 'Joonistamine'));
		document.querySelector('body').
			appendChild(Elements.createParagraph('p', 'Joonista midagi ilusat palun'));
		document.querySelector('body').
			appendChild(Elements.createDiv('canvas_div'));
		// document.querySelector('body').
		// 		appendChild(Elements.createButton('button', 'Tee ring!'));
		// document.querySelector(`#${'button'}`).addEventListener('click', this.doSomething.bind(this));
		document.addEventListener('mousedown', this.doSomething.bind(this));

		this.canvas = new Canvas(700, 400 , 'canvas_div');
	}

	doSomething() {
		let isDrawing;
		let canvasplace = document.querySelector(`#${'canvas_div'}`).getBoundingClientRect();

		canvas_div.onmousedown = function(e) {
	 		let mouseX = e.clientX - canvasplace.left;
	 		let mouseY = e.clientY - canvasplace.top;
	 		console.log(mouseX);
	  		isDrawing = true;
	  		this.canvas.context.moveTo(mouseX, mouseY);
		};

		this.canvas.onmousemove = function(e) {
	 		let mousex = e.clientX - canvasplace.left;
	 		let mousey = e.clientY - canvasplace.top;
	 			if (isDrawing) {
				this.canvas.context.lineTo(mouseX, mouseY);
	   			this.canvas.context.stroke();
	 			}
	  	};

		this.canvas.onmouseup = function() {
	  		isDrawing = false;
		};

	}
	// doSomething() {
	// 	const brush = new Brush(350, 200, 20, "pink");
	// 	this.canvas.addItems(brush);
	// 	this.canvas.show();
	// }

}