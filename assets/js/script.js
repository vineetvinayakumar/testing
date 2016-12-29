$( document ).ready(function() {
	
	/* Loading Fadeout */
	
	$(".se-pre-con").fadeOut("slow"); 
	
	/* Animation Initialization */
	
    new WOW().init(); 
	
	/* Menubar active link  */
	
	$('.active-menu').bind('click', function() {
        $('.btn-active').removeClass('btn-active')  
        $(this).addClass('btn-active');
    });
    
    $("#owl-demo").owlCarousel({
          autoPlay: 3000, //Set AutoPlay to 3 seconds
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3]
      });
	
    
});

/* Logo Change on scroll */

$(window).scroll(function(){
    if($(document).scrollTop() > 0) {
		
		$('#websiteLogo').attr('src', 'assets/img/smallLogo.png');  
    } else {
		$('#websiteLogo').attr('src', 'assets/img/logo.png');
    }
});

/* Smooth Scroll */

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

