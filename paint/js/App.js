window.onload = () => {
	new App();
	new Tools();
}

class App {
	constructor() {
		document.querySelector('body').
			appendChild(Elements.createHeading('h1', 'Joonistamine'));
		document.querySelector('body').
			appendChild(Elements.createParagraph('p', 'Joonista midagi ilusat palun'));
		document.querySelector('body').
			appendChild(Elements.createButton('brush', 'Pintsel'));
		document.querySelector('body').
			appendChild(Elements.createButton('pen', 'Pliiats'));
		document.querySelector('body').
			appendChild(Elements.createButton('eraser', 'Kustukumm'));
		document.querySelector('body').
			appendChild(Elements.createSelect('color'));
	}
}