$("ul.menulevel1").addClass("nav navbar-nav");

$("ul.menulevel2").addClass("dropdown-menu"); 
$("ul.menulevel3").addClass("dropdown-menu"); 
$("ul.menulevel4").addClass("dropdown-menu"); 
$("ul.menulevel5").addClass("dropdown-menu"); 
$("ul.menulevel6").addClass("dropdown-menu"); 
$("ul.menulevel7").addClass("dropdown-menu"); 
$("ul.menulevel8").addClass("dropdown-menu"); 
$("ul.menulevel9").addClass("dropdown-menu"); 

$("li.sdoc").css("color", "blue").css("background-color", "white").css("text-align", "left").css("margin-left", "20px").css("max-width", "300px");

 	  
 (function() {
   			$('<i id="to-top"></i>').appendTo($('body'));

			$(window).scroll(function() {
				if($(this).scrollTop() != 0) {
					$('#to-top').fadeIn();	
				} else {
					$('#to-top').fadeOut();
				}
			});
			
			$('#to-top').click(function() {
				$('body,html').animate({scrollTop:0},100);
			});	

	})();					  
   
$("span[data-toggle=popover]").popover()
   




