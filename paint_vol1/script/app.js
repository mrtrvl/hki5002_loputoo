counter = 0;

var numbers=[
      {x : 350, y : 225},
    ];

function points() {
	var g = document.getElementById("canvas").getContext("2d");		
		g.clearRect(0, 0, 700, 450);
		g.fillStyle="black";
	for (i = 0; i < numbers.length; i++) {
		g.fillRect(numbers[i].x, numbers[i].y, 5, 5);
		g.fillText(i+1, (numbers[i].x+7), (numbers[i].y+7));
	}
}

function draw() {
	
	var f = document.getElementById("canvas");
	var mxy = f.getContext("2d");
	var canvasplace = document.getElementById("canvas").getBoundingClientRect();
	var isDrawing;
	var point1 = true;


	f.onmousedown = function(e) {
 		var mousex = e.clientX-canvasplace.left;
 		var mousey = e.clientY-canvasplace.top;
  		isDrawing = true;
  		mxy.moveTo(mousex, mousey);
	};
	f.onmousemove = function(e) {
 		var mousex = e.clientX-canvasplace.left;
 		var mousey = e.clientY-canvasplace.top;
 			if (isDrawing) {
			mxy.lineTo(mousex, mousey);
    		mxy.stroke();
 				if ((mousex >= 350 && mousex <= 350+5) &&
 					(mousey>=225 && mousey <= 225+5) &&
 					point1) {
 					console.log("Point1");
 					counter++;
 					point1 = false;
 				}
 					document.getElementById("counter").innerHTML=counter;
 					
 					if (counter >= 1) {
						document.getElementById("answer").innerHTML="Palju õnne! Tabasid punkti!";
					}
 			}
  	};

	f.onmouseup = function() {
  		isDrawing = false;
	};
}
