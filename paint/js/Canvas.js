class Canvas {

	constructor(width, height, id) {
		this.items = [];
		this.id = id;
		let canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		canvas.style.border = "1px solid black";
		document.querySelector(`#${this.id}`).appendChild(canvas);
		this.context = canvas.getContext('2d');
	}

	addItems(object) {
		this.items.push(object);
	}

	show() {
		this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
		this.items.forEach((item) => {
			item.draw(this.context);
		});
	}

}
