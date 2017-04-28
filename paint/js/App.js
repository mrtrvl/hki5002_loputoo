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
		const theCanvas = new Canvas(700, 400 , 'canvas_div');
	}
}