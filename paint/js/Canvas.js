class Canvas {
	constructor(width, height, id) {
		this.id = id;
		let canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		document.querySelector(`#${this.id}`).appendChild(canvas);
		this.context = canvas.getContext('2d');
	}
}