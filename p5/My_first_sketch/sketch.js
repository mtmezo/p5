
var h = 600;
var w = 600;
var xAxis =  500;
var yAxis = 375;

var size = 0;


function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#000000');

	while (size < windowHeight) {
		x = random(windowWidth) ;
		y = random(windowHeight) ; 

		fill ('#FF69EC') ; 
		strokeWeight (2) ; 
		stroke('#FF69EC') ; 
		ellipse(xAxis,yAxis,w,h) ; 
		size = size + 1 ;
	}

}


function draw() {
	 
// makes the mouse 2 differene colors, creating stars
	if (mouseIsPressed) { 
		strokeWeight(1)
		stroke ("#E6404F")
		fill("#E6404F");
  		ellipse(mouseX,mouseY,1,1)

	}
	else {
		strokeWeight(1)
		stroke ("#FEBA47")
		fill("");
  		ellipse(mouseX,mouseY,1,1)
}
}

