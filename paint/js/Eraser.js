class Eraser extends Tools {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.context = undefined;
	}

	draw(context) {
		this.context = context;
		this.context.fillStyle = white;
		this.context.fillRect(this.x, this.y, this.width, this.height);
	}
}