class Pen extends Tools {
	constructor(x, y, radius, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.context = undefined;
	}

	draw(context) {
		this.context = context;
		this.context.beginPath();
		this.context.fillStyle = this.color;
		this.context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		this.context.fill();
	}
}