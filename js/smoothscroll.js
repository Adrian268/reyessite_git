
var scrollY = 0;
var distance = 300;
var speed = 5;

 function autoScrollTo(el) 
  {


	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop;
	var bodyHeight = document.body.offsetHeight;
	var yPos = currentY + window.innerHeight;
	var animator = setTimeout('autoScrollTo(\''+el+'\')',speed);
	if (yPos > bodyHeight)
	{

		clearTimeout(animator);
	}else{
		if (currentY < targetY-distance)
		{
			scrollY = currentY+distance;
			window.scroll(0, scrollY+distance);
		}else{clearTimeout(animator)}
	}
}	
function resetScroller(el){
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop;
	var animator = setTimeout('resetScroller(\''+el+'\')',speed);
	if(currentY > targetY+distance){
		scrollY = currentY-distance;
		window.scroll(0,scrollY);
		}else {clearTimeout(animator);}
 }
  
  

function yScrollHandler(){
		var win = document.getElementById("back-to-top-container");
		if((window.pageYOffset + window.innerHeight) >= 2500/*document.body.offsetHeight*/)
		{
			win.style.transition = "bottom 1s ease-in-out 0s";
			win.style.bottom = "40px";
		}else{
			win.style.transition = "bottom 1s ease-in-out 0s";
			win.style.bottom = "-80px";
			}
	}
	window.onscroll = yScrollHandler;
