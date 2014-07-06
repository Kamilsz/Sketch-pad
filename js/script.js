$(document).ready(function(){

	

	var height = 4;
	var width = 4;

	$('button').click(function (){

	for(var i=1; i<=height*width; i++){
		$('#'+i).remove();
	};
	height = window.prompt("Please enter grid height");
	width = window.prompt("Please enter grid width");
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
	$('.square').hover(function(){
		$(this).addClass('hover');
	});
};