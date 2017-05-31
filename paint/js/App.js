window.onload = () => {
	new App();
	tool = new Tools();

	color.onchange = function(){
		tool.radius = color.value * 5;
		console.log(color.value);
	}
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