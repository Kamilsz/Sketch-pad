$(document).ready(function(){

	var height = 20;
	var width = 20;

	$('button').click(function (){

	for(var i=1; i<=height*width; i++){
		$('#'+i).remove();
	};
	height = window.prompt("Please enter grid height");
	width = window.prompt("Please enter grid width");
	if (width>30){
		width=30;
	}
	createGrid(height,width);
});
	createGrid(height,width);
	
	
});

 	
function createGrid(height,width){

	for(var i=1; i<=height; i++){
		$('table').append('<tr id="'+i+'"></tr>')
		for(var j=1; j<=width; j++){
			$('#'+i).append('<div class="square"></div>');

		};
	};
		var r = Math.floor((Math.random() * 255));
		var g = Math.floor((Math.random() * 255));
		var b = Math.floor((Math.random() * 255));

		var stepR = Math.floor(r/10);
		var stepG = Math.floor(g/10);
		var stepB = Math.floor(b/10);

		var origR=r;
		var origG=g;
		var origB=b;


	$('.square').hover(function(){
		
		if (r===0 && g===0 && b===0){
			change	= true;

		}else if (r>=origR && g>=origG && b>=origB){
			change = false;
		}
		if (!change){
			r = Math.floor(r-0.1*r);
			g = Math.floor(g-0.1*g);
			b = Math.floor(b-0.1*b);
		} else {
			r = Math.floor(r+stepR);
			g = Math.floor(g+stepG);
			b = Math.floor(b+stepB);
			
		}
		$(this).css("background-color", "rgb("+r+","+g+","+b+")");
		
	});
};

var change=false;
